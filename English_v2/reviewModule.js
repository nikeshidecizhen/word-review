(function () {
    const REVIEW_KEY = 'word_review_data_v1';
    const REVIEW_COUNT_PER_SESSION = 10;
  
    function getReviewData() {
      const data = localStorage.getItem(REVIEW_KEY);
      return data ? JSON.parse(data) : { history: {} };
    }
  
    function saveReviewData(data) {
      localStorage.setItem(REVIEW_KEY, JSON.stringify(data));
    }
  
    function calculateProficiency(word) {
      const data = getReviewData();
      const hist = data.history[word] || { correct: 0, total: 0 };
      if (hist.total === 0) return 0;
      return Math.round((hist.correct / hist.total) * 10);
    }
  
    function shuffle(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
  
    function getReviewWords(allWords) {
      const shuffled = shuffle(allWords);
      return shuffled.slice(0, REVIEW_COUNT_PER_SESSION);
    }
  
    function recordAnswer(word, isCorrect) {
      const data = getReviewData();
      if (!data.history[word]) {
        data.history[word] = { correct: 0, total: 0 };
      }
      data.history[word].total += 1;
      if (isCorrect) {
        data.history[word].correct += 1;
      }
      saveReviewData(data);
    }
  
    function speakText(text, lang = 'en-US') {
      if (!('speechSynthesis' in window)) return;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 1.0;
      speechSynthesis.speak(utterance);
    }
  
    function renderReviewModal(allWords) {
      const modalId = 'review-modal';
      if (document.getElementById(modalId)) {
        document.getElementById(modalId).remove();
      }
  
      const wordsToReview = getReviewWords(allWords);
      if (wordsToReview.length === 0) {
        alert('⚠️ 单词列表为空！');
        return;
      }
  
      const modal = document.createElement('div');
      modal.id = modalId;
      modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
      modal.innerHTML = `
        <div class="bg-white rounded-xl w-full max-w-2xl shadow-2xl overflow-hidden">
          <div class="bg-blue-600 text-white p-4 flex justify之间 items-center">
            <h2 class="text-xl font-bold">📚 单词复习（${wordsToReview.length} 个）</h2>
            <button id="close-review" class="text-white hover:text-gray-200 text-2xl">&times;</button>
          </div>
          <div id="review-content" class="p-6">
            <!-- 动态内容 -->
          </div>
        </div>
      `;
      document.body.appendChild(modal);
  
      let currentIndex = 0;
      showWord(wordsToReview[currentIndex]);
  
      function showWord(item) {
        const trans = item.translation;
        console.log('[DEBUG] 显示中文:', trans);
  
        const proficiency = calculateProficiency(item.word);
        let meaningRevealed = false;
  
        const contentEl = document.getElementById('review-content');
        contentEl.innerHTML = `
          <div class="text-center mb-6">
            <div id="word-clickable" class="text-3xl font-bold text-blue-600 mb-2 cursor-pointer hover:underline">
              ${item.word}
            </div>
            <div id="ipa-section" class="text-sm text-gray-500 min-h-[1.5rem] mb-2"></div>
            <div id="meaning-section" class="min-h-[3rem] mb-4 text-left"></div>
            <div class="mt-2 inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              熟练度：${proficiency}/10
            </div>
          </div>
  
          <div class="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <button id="btn-show-meaning" class="px-5 py-2.5 bg-yellow-100 hover:bg-yellow-200 text-gray-800 rounded-lg font-medium">
              🔍 Display？
            </button>
            <button id="btn-known" class="px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium">
              ✅ Yes！
            </button>
            <button id="btn-next" class="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium">
              ⏭️ Next...
            </button>
          </div>
  
          <div class="text-center mt-6 text-sm text-gray-500">
            进度：${currentIndex + 1} / ${wordsToReview.length}
          </div>
        `;
  
        // 点击 Display：只显示中文释义，不自动跳下一题；
        // 只在第一次点击时记录一次“不会”，避免重复计入错误。
        const btnShowMeaning = document.getElementById('btn-show-meaning');
        btnShowMeaning.onclick = () => {
          if (!meaningRevealed) {
            const trans = item.translation || '（无中文释义）';
            let html = `<div class="text-lg font-semibold text-gray-800">${trans}</div>`;
            if (item.pinyin) {
              html += `<div class="text-sm text-gray-600 mt-1">拼音：${item.pinyin}</div>`;
            }
            if (item.extension) {
              html += `<div class="text-sm text-gray-700 mt-2">📌 ${item.extension}</div>`;
            }
            document.getElementById('meaning-section').innerHTML = html;
            meaningRevealed = true;
            console.log('[DEBUG] 中文已显示:', trans);
            // 第一次点击 Display 显示中文释义时，记录一次不会
            recordAnswer(item.word, false);
          }
          // 不在这里自动切换到下一个单词，避免刚显示中文就被下一题覆盖
        };
  
        const wordClickable = document.getElementById('word-clickable');
        const ipaSection = document.getElementById('ipa-section');
        const meaningSection = document.getElementById('meaning-section');
  
        wordClickable.onclick = () => {
          speakText(item.word, 'en-US');
          if (item.ipa && !ipaSection.textContent.trim()) {
            ipaSection.textContent = item.ipa;
          }
        };
  
        document.getElementById('btn-known').onclick = () => {
          recordAnswer(item.word, true);
          next();
        };
  
        document.getElementById('btn-next').onclick = () => {
          next();
        };
      }
  
      function next() {
        currentIndex++;
        if (currentIndex < wordsToReview.length) {
          showWord(wordsToReview[currentIndex]);
        } else {
          modal.innerHTML = `
            <div class="bg-blue-600 text-white p-4">
              <h2 class="text-xl font-bold">✅ 本轮复习完成！</h2>
            </div>
            <div class="p-6 text-center">
              <p class="text-lg text-gray-700 mb-6">共复习 ${REVIEW_COUNT_PER_SESSION} 个单词。</p>
              <div class="space-x-4">
                <button id="btn-restart" class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  🔄 再来一轮
                </button>
                <button id="close-review-done" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                  关闭
                </button>
              </div>
            </div>
          `;
          document.getElementById('btn-restart').onclick = () => {
            modal.remove();
            renderReviewModal(allWords);
          };
          document.getElementById('close-review-done').onclick = () => modal.remove();
        }
      }
  
      document.getElementById('close-review').onclick = () => modal.remove();
    }
  
    window.WordReview = {
      start: (allWords) => renderReviewModal(allWords),
      getProficiency: calculateProficiency
    };
  })();
