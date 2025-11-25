1. 使用豆包拍照识别物体，让豆包按照words.js中的单词格式生成；
2. 将生成后的words.js替换掉原本的words.js；
3. 运行index.html，打开浏览器，点击拍照按钮，即可看到单词列表。
4. 本项目属于zy使用qwen+gpt+doubao开发并用于学习，严禁倒卖；
5. 欢迎大家提出新的建议；

**补充新词汇表使用方法：**
**1.补充新的单词js文件**
建立文件名为iseda.js，内容如下：
const ISEDA_WORDS = [
    {
      "word": "evaluation metric",
      "ipa": "/ɪˌvæljuˈeɪʃn ˈmetrɪk/",
      "pos": "phrase n.",
      "translation": "评估指标",
      "pinyin": "píng gū zhǐ biāo",
      "example1": "Mean relative error and PDP are key evaluation metrics for circuits.",
      "example1Translation": "平均相对误差与功率延迟积是电路的关键评估指标。",
      "extension": "衡量电路性能的参数，如精度、功耗、延迟",
      "category": "ISEDA'24"
    },
    //......继续补充相同类别单词
  ];

  (function () {
    if (typeof WORDS !== 'undefined' && Array.isArray(WORDS)) {
      WORDS.push(...ISEDA_WORDS);
    } else {
      window.WORDS = ISEDA_WORDS.slice(); //ISEDA_WORDS加入到WORDS中
    }
  })();
**补充新的单词js文件模版结尾**

**2.在index.html中引入js文件：**
**
<script src="iseda.js"></script>
**


