const ITEMS = [
  {
    "word": "wireless earbuds",
    "ipa": "/ˈwaɪər.ləs ˈɪəbʌdz/",
    "pos": "phrase n.",
    "translation": "无线耳机",
    "pinyin": "wú xiàn ěr jī",
    "example1": "Wireless earbuds are widely used for listening to music and making calls on mobile devices.",
    "example1Translation": "无线耳机被广泛用于在移动设备上听音乐和打电话。",
    "extension": "采用蓝牙技术实现无线连接的便携式音频设备，通常配备充电盒，支持降噪、触控操作等功能，是消费电子领域的常见产品",
    "category": "electronics"
  },
  {
    "word": "wine glass",
    "ipa": "/ˈwaɪn ɡlɑːs/",
    "pos": "phrase n.",
    "translation": "高脚杯",
    "pinyin": "gāo jiǎo bēi",
    "example1": "A wine glass is typically used to serve wine, with its long stem designed to avoid warming the drink with hand heat.",
    "example1Translation": "高脚杯通常用于盛放葡萄酒，其长杯柄的设计可避免手部热量加热饮品。",
    "extension": "以玻璃为主要材质的饮具，通常带有细长杯柄与较大杯身，常见于餐饮场景，也可用于盛放其他饮品，兼具实用性与装饰性",
    "category": "daily"
  },
  {
    "word": "cashew nut",
    "ipa": "/ˈkæʃuː nʌt/",
    "pos": "phrase n.",
    "translation": "腰果",
    "pinyin": "yāo guǒ",
    "example1": "Cashew nuts are a popular snack, often eaten roasted or added to dishes for extra texture and nutrition.",
    "example1Translation": "腰果是一种受欢迎的零食，常被烤制食用，或添加到菜肴中增加口感与营养。",
    "extension": "源自腰果树上的坚果，富含蛋白质、健康脂肪等营养成分，是常见的休闲零食，也可用于烹饪、烘焙等场景，通常会经过去皮、烤制等加工处理",
    "category": "food"
  },
  {
    "word": "mini camera keychain",
    "ipa": "/ˈmɪni ˈkæmərə ˈkiːtʃeɪn/",
    "pos": "phrase n.",
    "translation": "迷你相机钥匙扣",
    "pinyin": "mí nǐ xiàng jī yào shi kòu",
    "example1": "The mini camera keychain is a decorative accessory shaped like a small camera, often used to attach to keys or bags.",
    "example1Translation": "迷你相机钥匙扣是一种形似小型相机的装饰性配件，常被用来挂在钥匙或包上。",
    "extension": "以微型相机为造型的钥匙扣类饰品，兼具装饰性与实用性，通常采用塑料等材质制作，是常见的日常小物件，可用于装饰个人物品或作为小礼品",
    "category": "daily"
  },
  {
    "word": "anime character pillow",
    "ipa": "/ˈænɪmeɪ ˈkærəktə ˈpɪləʊ/",
    "pos": "phrase n.",
    "translation": "动漫角色抱枕",
    "pinyin": "dòng màn jué sè bào zhèn",
    "example1": "Anime character pillows are popular among fans, often featuring images of favorite anime characters and used for decoration or comfort.",
    "example1Translation": "动漫角色抱枕在粉丝中很受欢迎，通常印有喜爱的动漫角色形象，用于装饰或提供舒适感。",
    "extension": "以动漫、游戏角色为图案的抱枕类用品，多采用柔软面料制作，兼具装饰性与实用性，是ACG文化衍生的周边产品，常见于卧室、客厅等场景",
    "category": "daily"
  },
  {
    "word": "reed diffuser",
    "ipa": "/riːd dɪˈfjuːzə(r)/",
    "pos": "phrase n.",
    "translation": "藤条香薰",
    "pinyin": "téng tiáo xiāng xūn",
    "example1": "A reed diffuser uses porous reeds to absorb and release scented oil, commonly used to freshen the air in rooms.",
    "example1Translation": "藤条香薰利用多孔藤条吸收并散发香薰精油，通常用于清新室内空气。",
    "extension": "一种无火香薰产品，由香薰瓶、香薰精油和藤条组成，通过藤条的吸附与挥发作用散发香气，无需明火，安全便捷，常用于家居、办公场所的香氛营造",
    "category": "daily"
  },
  {
    "word": "smartwatch",
    "ipa": "/ˈsmɑːtwɒtʃ/",
    "pos": "n.",
    "translation": "智能手表",
    "pinyin": "zhì néng shǒu biǎo",
    "example1": "A smartwatch can display time, track fitness data, and receive notifications from mobile devices.",
    "example1Translation": "智能手表可显示时间、追踪健康数据，还能接收移动设备的通知。",
    "extension": "集成了智能功能的穿戴设备，通常具备计时、健康监测、信息提醒等功能，部分支持独立通信或应用扩展，是消费电子领域的常见产品，广泛用于日常生活与健康管理场景",
    "category": "electronics"
  },
  {
    "word": "vacuum insulated mug",
    "ipa": "/ˈvækjuːm ˈɪnsjuleɪtɪd mʌɡ/",
    "pos": "phrase n.",
    "translation": "真空保温杯",
    "pinyin": "zhēn kōng bǎo wēn bēi",
    "example1": "A vacuum insulated mug keeps beverages hot or cold for hours by using a double-layered structure with a vacuum seal.",
    "example1Translation": "真空保温杯通过双层结构与真空密封设计，可使饮品长时间保持热或冷的状态。",
    "extension": "以不锈钢等材质为主的保温容器，利用真空层隔绝热量传递，具备良好的保温保冷性能，常用于日常饮水、外出携带饮品，是常见的生活用品",
    "category": "daily"
  },
  {
    "word": "electric shaver head",
    "ipa": "/ɪˈlektrɪk ˈʃeɪvə hed/",
    "pos": "phrase n.",
    "translation": "电动剃须刀刀头",
    "pinyin": "diàn dòng tì xū dāo dāo tóu",
    "example1": "The electric shaver head is a replaceable component that contains the cutting blades, usually cleaned or replaced regularly for optimal performance.",
    "example1Translation": "电动剃须刀刀头是包含刀片的可替换部件，通常需定期清洁或更换以保证最佳使用效果。",
    "extension": "电动剃须刀的核心工作部件，多采用金属网罩与旋转/往复式刀片组合结构，用于贴合面部并切割胡须，是电动剃须产品的易损耗配件，需定期维护或更换",
    "category": "electronics"
  },
  {
    "word": "double-door refrigerator",
    "ipa": "/ˈdʌbl dɔː ˈrɪfrɪdʒəreɪtə(r)/",
    "pos": "phrase n.",
    "translation": "双门冰箱",
    "pinyin": "shuāng mén bīng xiāng",
    "example1": "A double-door refrigerator has separate compartments for refrigeration and freezing, widely used in households to store food and keep it fresh.",
    "example1Translation": "双门冰箱设有冷藏与冷冻两个独立隔间，广泛用于家庭中储存食物并保持其新鲜度。",
    "extension": "常见的家用制冷电器，采用上下双门结构分别实现冷藏（保鲜）与冷冻（低温存储）功能，通过压缩机与制冷系统维持内部低温环境，是现代家庭必备的家电产品之一",
    "category": "electronics"
  }
];

(function () {
  if (typeof WORDS !== 'undefined' && Array.isArray(WORDS)) {
    WORDS.push(...ITEMS);
  } else {
    window.WORDS = ITEMS.slice();
  }
})();
