const ISEDA_WORDS = [
    {
      "word": "approximate computing",
      "ipa": "/əˈprɒksɪmət kəmˈpjuːtɪŋ/",
      "translation": "近似计算",
      "pinyin": "jìn sì jì suàn",
      "example1": "Approximate computing trades off accuracy for improved power efficiency in hardware design.",
      "example1Translation": "近似计算通过牺牲精度来提升硬件设计中的能效。",
      "extension": "新兴计算范式，适用于误差容忍型应用如卷积神经网络",
      "category": "ISEDA'24"
    },
    {
      "word": "approximate logic synthesis",
      "ipa": "/əˈprɒksɪmət ˈlɒdʒɪk ˈsɪnθəsɪs/",
      "translation": "近似逻辑综合",
      "ipa": "/əˈprɒksɪmət ˈlɒdʒɪk ˈsɪnθəsɪs/",
      "example1": "Approximate logic synthesis synthesizes approximate circuits from exact descriptions.",
      "example1Translation": "近似逻辑综合从精确描述中合成近似电路。",
      "extension": "硬件设计技术，拓展电路设计空间以优化性能",
      "category": "ISEDA'24"
    },
    {
      "word": "approximate multiplier",
      "ipa": "/əˈprɒksɪmət ˈmʌltɪplaɪə(r)/",
      "translation": "近似乘法器",
      "pinyin": "jìn sì chéng fǎ qì",
      "example1": "The 8-bit approximate multiplier achieves 56.17% PDP reduction with minimal accuracy loss.",
      "example1Translation": "这款8位近似乘法器实现56.17%功率延迟积降低，且精度损失极小。",
      "extension": "用于混合量化卷积神经网络的算术电路，平衡精度与能效",
      "category": "ISEDA'24"
    },
    {
      "word": "convolutional neural network",
      "ipa": "/ˌkɒnvəˈluːʃənl ˈnjʊərəl ˈnetwɜːk/",
      "translation": "卷积神经网络",
      "pinyin": "juǎn jī shén jīng wǎng luò",
      "example1": "Convolutional neural networks are widely used in image classification tasks.",
      "example1Translation": "卷积神经网络广泛应用于图像分类任务。",
      "extension": "具有误差容忍能力的深度学习模型，适用于近似计算优化",
      "category": "ISEDA'24"
    },
    {
      "word": "mixed-quantization",
      "ipa": "/mɪkst ˌkwɒntɪˈzeɪʃn/",
      "translation": "混合量化",
      "pinyin": "hùn hé liàng huà",
      "example1": "Mixed-quantization uses high-precision for sensitive CNN layers and low-precision for others.",
      "example1Translation": "混合量化对敏感卷积神经网络层用高精度，其他层用低精度。",
      "extension": "根据层敏感度分配量化精度，降低硬件开销",
      "category": "ISEDA'24"
    },
    {
      "word": "Boolean matrix factorization",
      "ipa": "/ˈbuːliən ˈmeɪtrɪks ˌfæktəraɪˈzeɪʃn/",
      "translation": "布尔矩阵分解",
      "pinyin": "bù ěr jǔ zhèn fēn jiě",
      "example1": "Boolean matrix factorization decomposes input matrices into compressor and decompressor matrices.",
      "example1Translation": "布尔矩阵分解将输入矩阵分解为压缩矩阵和解压缩矩阵。",
      "extension": "功能简化方法，用于近似逻辑综合以最小化重构误差",
      "category": "ISEDA'24"
    },
    {
      "word": "Cartesian Genetic Programming",
      "ipa": "/kɑːˈtiːziən dʒəˈnetɪk ˈprəʊɡræmɪŋ/",
      "translation": "笛卡尔遗传编程",
      "pinyin": "dí kǎ ěr yí chuán biān chéng",
      "example1": "Cartesian Genetic Programming designs circuits with fewer nodes efficiently.",
      "example1Translation": "笛卡尔遗传编程高效设计节点较少的电路。",
      "extension": "进化算法，用于生成近似加法器等数字电路",
      "category": "ISEDA'24"
    },
    {
      "word": "power delay product",
      "ipa": "/ˈpaʊə dɪˈleɪ ˈprɒdʌkt/",
      "translation": "功率延迟积",
      "pinyin": "gōng lǜ yán chí jī",
      "example1": "Power delay product is a key metric for evaluating circuit energy efficiency.",
      "example1Translation": "功率延迟积是评估电路能效的关键指标。",
      "extension": "衡量电路功耗与延迟的综合指标，数值越小能效越高",
      "category": "ISEDA'24"
    },
    {
      "word": "Hessian trace",
      "ipa": "/ˈhesiən treɪs/",
      "translation": "海森矩阵迹",
      "pinyin": "hǎi sēn jǔ zhèn jì",
      "example1": "Hessian trace evaluates the error sensitivity of each CNN layer.",
      "example1Translation": "海森矩阵迹评估各卷积神经网络层的误差敏感度。",
      "extension": "表征神经网络层容错能力，指导混合量化设计",
      "category": "ISEDA'24"
    },
    {
      "word": "error compensation",
      "ipa": "/ˈerə ˌkɒmpenˈseɪʃn/",
      "translation": "误差补偿",
      "pinyin": "wù chā bǔ cháng",
      "example1": "Error compensation minimizes accuracy loss in approximate computing systems.",
      "example1Translation": "误差补偿最大限度减少近似计算系统的精度损失。",
      "extension": "通过优化误差分布提升近似电路精度的技术",
      "category": "ISEDA'24"
    },
    {
      "word": "hardware overhead",
      "ipa": "/ˈhɑːdweə ˈəʊvəhed/",
      "translation": "硬件开销",
      "pinyin": "yìng jiàn kāi xiāo",
      "example1": "Quantization reduces hardware overhead of CNN accelerators effectively.",
      "example1Translation": "量化有效降低卷积神经网络加速器的硬件开销。",
      "extension": "包括电路面积、功耗等资源消耗，是硬件设计的优化目标",
      "category": "ISEDA'24"
    },
    {
      "word": "design space exploration",
      "ipa": "/dɪˈzaɪn speɪs ˌekspləˈreɪʃn/",
      "translation": "设计空间探索",
      "pinyin": "shè jì kōng jiān tàn suǒ",
      "example1": "Efficient design space exploration finds optimal approximate circuit solutions.",
      "example1Translation": "高效的设计空间探索找到最优近似电路方案。",
      "extension": "寻找多目标优化最优解的过程，影响电路性能与精度平衡",
      "category": "ISEDA'24"
    },
    {
      "word": "approximate adder",
      "ipa": "/əˈprɒksɪmət ˈædə(r)/",
      "translation": "近似加法器",
      "pinyin": "jìn sì jiā fǎ qì",
      "example1": "CGP-based ALS generates approximate adders for multiplier accumulation.",
      "example1Translation": "基于笛卡尔遗传编程的近似逻辑综合生成乘法器累加用近似加法器。",
      "extension": "高阶乘法器的组成部分，与近似乘法器协同优化",
      "category": "ISEDA'24"
    },
    {
      "word": "layer sensitivity",
      "ipa": "/ˈleɪə ˌsensəˈtɪvəti/",
      "translation": "层敏感度",
      "pinyin": "céng mǐn gǎn dù",
      "example1": "Layer sensitivity determines quantization precision for each CNN layer.",
      "example1Translation": "层敏感度决定各卷积神经网络层的量化精度。",
      "extension": "衡量层对误差的敏感程度，混合量化的核心依据",
      "category": "ISEDA'24"
    },
    {
      "word": "energy efficiency",
      "ipa": "/ˈenədʒi ɪˈfɪʃnsi/",
      "translation": "能效",
      "pinyin": "néng xiào",
      "example1": "The proposed multiplier achieves high energy efficiency with PDP reduction.",
      "example1Translation": "所提乘法器通过降低功率延迟积实现高能效。",
      "extension": "单位能量完成计算任务的能力，硬件设计的核心目标",
      "category": "ISEDA'24"
    },
    {
      "word": "accuracy loss",
      "ipa": "/ˈækjərəsi lɒs/",
      "translation": "精度损失",
      "pinyin": "jīng dù sǔn shī",
      "example1": "The approximate multiplier causes only 1.33% accuracy loss in VGG16.",
      "example1Translation": "该近似乘法器在VGG16中仅造成1.33%的精度损失。",
      "extension": "近似计算带来的模型性能下降，需控制在可接受范围",
      "category": "ISEDA'24"
    },
    {
      "word": "functional simplification",
      "ipa": "/ˈfʌŋkʃənl ˌsɪmplɪfɪˈkeɪʃn/",
      "translation": "功能简化",
      "pinyin": "gōng néng jiǎn huà",
      "example1": "Functional simplification transforms Boolean functions to improve circuit performance.",
      "example1Translation": "功能简化转换布尔函数以提升电路性能。",
      "extension": "近似电路设计方向，与电压过缩放并列",
      "category": "ISEDA'24"
    },
    {
      "word": "quantization precision",
      "ipa": "/ˌkwɒntɪˈzeɪʃn prɪˈsɪʒn/",
      "translation": "量化精度",
      "pinyin": "liàng huà jīng dù",
      "example1": "Mixed-quantization assigns different quantization precision based on layer sensitivity.",
      "example1Translation": "混合量化根据层敏感度分配不同量化精度。",
      "extension": "以比特数表示，平衡模型精度与硬件开销",
      "category": "ISEDA'24"
    },
    {
      "word": "hybrid ALS flow",
      "ipa": "/ˈhaɪbrɪd ˌeɪ ˈel ˈes fləʊ/",
      "translation": "混合近似逻辑综合流程",
      "pinyin": "hùn hé jìn sì luó jí zōng hé liú chéng",
      "example1": "Hybrid ALS Flow combines BMF and CGP-based ALS for circuit design.",
      "example1Translation": "混合近似逻辑综合流程结合布尔矩阵分解与笛卡尔遗传编程近似逻辑综合设计电路。",
      "extension": "论文核心创新点，融合不同近似逻辑综合技术优势",
      "category": "ISEDA'24"
    },
    {
      "word": "CNN accelerator",
      "ipa": "/ˌsiː en ˈen əkˈseləreɪtə/",
      "translation": "卷积神经网络加速器",
      "pinyin": "juǎn jī shén jīng wǎng luò jiā sù qì",
      "example1": "Approximate circuits improve the efficiency of CNN accelerators.",
      "example1Translation": "近似电路提升卷积神经网络加速器的效率。",
      "extension": "专门加速卷积神经网络计算的硬件设备",
      "category": "ISEDA'24"
    },
    {
      "word": "model compression",
      "ipa": "/ˈmɒdl kəmˈpreʃn/",
      "translation": "模型压缩",
      "pinyin": "mó xíng yā suō",
      "example1": "Mixed-quantization is an effective technique for CNN model compression.",
      "example1Translation": "混合量化是卷积神经网络模型压缩的有效技术。",
      "extension": "减少模型存储与计算开销，便于边缘设备部署",
      "category": "ISEDA'24"
    },
    {
      "word": "edge device",
      "ipa": "/edʒ dɪˈvaɪs/",
      "translation": "边缘设备",
      "example1": "Approximate computing enables CNN deployment on edge devices.",
      "example1Translation": "近似计算使卷积神经网络可部署在边缘设备上。",
      "extension": "资源受限的终端设备，如手机、传感器",
      "category": "ISEDA'24"
    },
    {
      "word": "error distribution",
      "ipa": "/ˈerə ˌdɪstrɪˈbjuːʃn/",
      "translation": "误差分布",
      "pinyin": "wù chā fēn bù",
      "example1": "Symmetrical error distribution enables effective error compensation.",
      "example1Translation": "对称误差分布实现有效的误差补偿。",
      "extension": "影响近似电路精度的关键因素，对称分布可降低精度损失",
      "category": "ISEDA'24"
    },
    {
      "word": "evolutionary approach",
      "ipa": "/ˌiːvəˈluːʃənri əˈprəʊtʃ/",
      "translation": "进化算法",
      "pinyin": "jìn huà suàn fǎ",
      "example1": "Cartesian Genetic Programming is an evolutionary approach for circuit design.",
      "example1Translation": "笛卡尔遗传编程是电路设计的进化算法。",
      "extension": "通过模拟生物进化寻找最优电路设计方案",
      "category": "ISEDA'24"
    },
    {
      "word": "process technology",
      "ipa": "/ˈprəʊses tekˈnɒlədʒi/",
      "translation": "工艺技术",
      "pinyin": "gōng yì jì shù",
      "example1": "The multiplier is evaluated under 28nm process technology.",
      "example1Translation": "该乘法器在28纳米工艺技术下评估。",
      "extension": "芯片制造工艺，如28nm、15nm，影响电路性能",
      "category": "ISEDA'24"
    },
    {
      "word": "arithmetic circuit",
      "ipa": "/əˈrɪθmətɪk ˈsɜːkɪt/",
      "translation": "算术电路",
      "pinyin": "suàn shù diàn lù",
      "example1": "Approximate arithmetic circuits are key components of CNN hardware.",
      "example1Translation": "近似算术电路是卷积神经网络硬件的核心组件。",
      "extension": "执行算术运算的电路，如乘法器、加法器",
      "category": "ISEDA'24"
    },
    {
      "word": "timing error",
      "ipa": "/ˈtaɪmɪŋ ˈerə/",
      "translation": "时序误差",
      "pinyin": "shí xù wù chā",
      "example1": "Voltage overscaling may cause timing errors in digital circuits.",
      "example1Translation": "电压过缩放可能导致数字电路产生时序误差。",
      "extension": "电路信号传输超时导致的误差，影响稳定性",
      "category": "ISEDA'24"
    },
    {
      "word": "network accuracy",
      "ipa": "/ˈnetwɜːk ˈækjərəsi/",
      "translation": "网络精度",
      "pinyin": "wǎng luò jīng dù",
      "example1": "The method maintains high network accuracy while reducing overhead.",
      "example1Translation": "该方法在降低开销的同时保持高网络精度。",
      "extension": "神经网络完成任务的正确程度，核心性能指标",
      "category": "ISEDA'24"
    },
    {
      "word": "optimization goal",
      "ipa": "/ˌɒptɪmaɪˈzeɪʃn ɡəʊl/",
      "translation": "优化目标",
      "pinyin": "yōu huà mù biāo",
      "example1": "The main optimization goal is to reduce PDP with controlled accuracy loss.",
      "example1Translation": "主要优化目标是控制精度损失的同时降低功率延迟积。",
      "extension": "硬件设计需实现的目标，如低功耗、低延迟",
      "category": "ISEDA'24"
    },
    {
      "word": "evaluation metric",
      "ipa": "/ɪˌvæljuˈeɪʃn ˈmetrɪk/",
      "translation": "评估指标",
      "pinyin": "píng gū zhǐ biāo",
      "example1": "Mean relative error and PDP are key evaluation metrics for circuits.",
      "example1Translation": "平均相对误差与功率延迟积是电路的关键评估指标。",
      "extension": "衡量电路性能的参数，如精度、功耗、延迟",
      "category": "ISEDA'24"
    }
  ];

  (function () {
    if (typeof WORDS !== 'undefined' && Array.isArray(WORDS)) {
      WORDS.push(...ISEDA_WORDS);
    } else {
      window.WORDS = ISEDA_WORDS.slice();
    }
  })();