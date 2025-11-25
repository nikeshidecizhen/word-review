(function () {
  // 版本号 v2：新的熟练度统计
  const REVIEW_KEY = 'word_review_data_v2';
  const REVIEW_COUNT_PER_SESSION = 10;

  // 熟练度阈值（可以自行修改）
  const PROFICIENCY_THRESHOLD = 10;

  function getReviewData() {
    const data = localStorage.getItem(REVIEW_KEY);
    return data ? JSON.parse(data) : { history: {} };
  }

  function saveReviewData(data) {
    localStorage.setItem(REVIEW_KEY, JSON.stringify(data));
  }

  /**
   * 熟练度计算：
   *  score：认识次数（0 ~ PROFICIENCY_THRESHOLD）
   *  proficiency：0~10，四舍五入
   */
  function calculateProficiency(word) {
    const data = getReviewData();
    const hist = data.history[word] || { score: 0 };

    let score = typeof hist.score === 'number' ? hist.score : 0;
    if (score < 0) score = 0;

    const ratio = score / PROFICIENCY_THRESHOLD;
    let proficiency = Math.round(ratio * 10);
    if (proficiency < 0) proficiency = 0;
    if (proficiency > 10) proficiency = 10;
    return proficiency;
  }

  /**
   * 把熟练度 0~10 渲染成 5 颗星（0.5 星一个刻度）
   * 例：3 → 1 满星 + 1 半星 + 3 空星
   */
  function renderProficiencyStars(proficiency) {
    const totalStars = 5;
    const starValue = proficiency / 2; // 0~5，步长0.5
    const fullStars = Math.floor(starValue);
    const hasHalf = (starValue - fullStars) >= 0.5;
    const emptyStars = totalStars - fullStars - (hasHalf ? 1 : 0);

    let html = '<div class="flex items-center gap-1">';

    // 满星
    for (let i = 0; i < fullStars; i++) {
      html += '<i class="fas fa-star text-yellow-400"></i>';
    }
    // 半星
    if (hasHalf) {
      html += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
    }
    // 空星
    for (let i = 0; i < emptyStars; i++) {
      html += '<i class="far fa-star text-yellow-300"></i>';
    }

    // 数字标注
    html += `<span class="ml-1 text-xs text-gray-500">${proficiency}/10</span>`;
    html += '</div>';
    return html;
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

  /**
   * 认识次数更新：
   *   delta = +1  → Yes
   *   delta = -1  → Next
   */
  function recordAnswer(word, delta) {
    const data = getReviewData();
    if (!data.history[word]) {
      data.history[word] = { score: 0 };
    }

    let score = typeof data.history[word].score === 'number'
      ? data.history[word].score
      : 0;

    score += delta;
    if (score < 0) score = 0;
    if (score > PROFICIENCY_THRESHOLD) score = PROFICIENCY_THRESHOLD;

    data.history[word].score = score;
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
        <div class="bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-4 flex justify-between items-center">
          <h2 class="text-xl font-bold flex items-center gap-2">
            <span class="text-2xl">📚</span> 单词复习（${wordsToReview.length} 个）
          </h2>
          <button id="close-review" class="text-white hover:text-gray-200 text-2xl leading-none">&times;</button>
        </div>
        <div id="review-content" class="p-6">
          <!-- 动态内容 -->
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    let currentIndex = 0;

    // 本轮统计：用于结束页面展示
    let sessionKnownCount = 0;  // Yes 次数
    let sessionNextCount = 0;   // Next 次数

    showWord(wordsToReview[currentIndex]);

    function showWord(item) {
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
          <div class="mt-2 inline-flex items-center justify-center bg-yellow-50 px-3 py-1 rounded-full text-sm">
            ${renderProficiencyStars(proficiency)}
          </div>
        </div>

        <div class="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mt-6">
          <button id="btn-prev" class="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium">
            ⬅ Previous
          </button>
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

      // Previous 按钮：回到上一条
      const btnPrev = document.getElementById('btn-prev');
      if (currentIndex === 0) {
        btnPrev.classList.add('opacity-50', 'cursor-not-allowed');
      } else {
        btnPrev.classList.remove('opacity-50', 'cursor-not-allowed');
      }
      btnPrev.onclick = () => {
        if (currentIndex === 0) return;
        currentIndex--;
        showWord(wordsToReview[currentIndex]);
      };

      // Display：第一次显示，再次点击隐藏（遮盖）
      const btnShowMeaning = document.getElementById('btn-show-meaning');
      btnShowMeaning.onclick = () => {
        const meaningSection = document.getElementById('meaning-section');
        if (!meaningRevealed) {
          const trans = item.translation || '（无中文释义）';
          let html = `<div class="text-lg font-semibold text-gray-800">${trans}</div>`;
          if (item.pinyin) {
            html += `<div class="text-sm text-gray-600 mt-1">拼音：${item.pinyin}</div>`;
          }
          if (item.extension) {
            html += `<div class="text-sm text-gray-700 mt-2">📌 ${item.extension}</div>`;
          }
          meaningSection.innerHTML = html;
          meaningRevealed = true;
        } else {
          meaningSection.innerHTML = '';
          meaningRevealed = false;
        }
      };

      const wordClickable = document.getElementById('word-clickable');
      const ipaSection = document.getElementById('ipa-section');

      wordClickable.onclick = () => {
        speakText(item.word, 'en-US');
        if (item.ipa && !ipaSection.textContent.trim()) {
          ipaSection.textContent = item.ipa;
        }
      };

      // ✅ Yes：认识次数 +1
      document.getElementById('btn-known').onclick = () => {
        recordAnswer(item.word, +1);
        sessionKnownCount++;
        next();
      };

      // ⏭️ Next：认识次数 -1
      document.getElementById('btn-next').onclick = () => {
        recordAnswer(item.word, -1);
        sessionNextCount++;
        next();
      };
    }

    function next() {
      currentIndex++;
      if (currentIndex < wordsToReview.length) {
        showWord(wordsToReview[currentIndex]);
      } else {
        // 计算本轮平均熟练度
        let totalProficiency = 0;
        for (const w of wordsToReview) {
          totalProficiency += calculateProficiency(w.word);
        }
        const avgProficiency =
          wordsToReview.length > 0
            ? Math.round(totalProficiency / wordsToReview.length)
            : 0;

        // 美化后的结束页面
        modal.innerHTML = `
          <div class="bg-white rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden">
            <div class="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-5 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-2xl">
                  ✅
                </div>
                <div>
                  <h2 class="text-xl font-bold">本轮复习完成</h2>
                  <p class="text-xs text-emerald-100 mt-1">坚持打卡，词汇会一点点变熟</p>
                </div>
              </div>
              <button id="close-review-done-top" class="text-white/80 hover:text-white text-2xl leading-none">&times;</button>
            </div>

            <div class="p-6 space-y-5">
              <div class="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col gap-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">本轮单词数</span>
                  <span class="text-lg font-semibold text-gray-800">${wordsToReview.length}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">认识（Yes）次数</span>
                  <span class="text-lg font-semibold text-green-600">${sessionKnownCount}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">跳过 / 不熟（Next）次数</span>
                  <span class="text-lg font-semibold text-amber-600">${sessionNextCount}</span>
                </div>
                <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-1"></div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">平均熟练度</span>
                  <div class="flex items-center gap-2">
                    <span class="text-xl font-bold text-blue-600">${avgProficiency}</span>
                    <span class="text-sm text-gray-500">/ 10</span>
                  </div>
                </div>
              </div>

              <div class="text-center text-sm text-gray-500">
                建议优先复习熟练度较低的单词，可以在主页通过筛选或搜索快速定位。
              </div>

              <div class="flex flex-col sm:flex-row gap-3 justify-center mt-2">
                <button id="btn-restart" class="px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 shadow-sm">
                  🔄 再来一轮
                </button>
                <button id="btn-back-list" class="px-6 py-2.5 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 border border-gray-200">
                  📖 返回单词列表
                </button>
              </div>
            </div>
          </div>
        `;

        const closeTop = document.getElementById('close-review-done-top');
        if (closeTop) closeTop.onclick = () => modal.remove();

        document.getElementById('btn-restart').onclick = () => {
          modal.remove();
          renderReviewModal(allWords);
        };

        document.getElementById('btn-back-list').onclick = () => {
          modal.remove();
        };
      }
    }

    const closeBtn = document.getElementById('close-review');
    if (closeBtn) {
      closeBtn.onclick = () => modal.remove();
    }
  }

  window.WordReview = {
    start: (allWords) => renderReviewModal(allWords),
    getProficiency: calculateProficiency
  };
})();
