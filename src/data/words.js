export const Words = [
  // ===== PREFIX FAMILY: un- (6 words) =====
  { id: "undo", word: "undo", phonetic: "/ʌnˈduː/", meaning: "撤销；解开", part: "verb", example: "Press Ctrl+Z to undo your last action.", morphemes: [{ type: "prefix", text: "un-", meaning: "相反动作" }, { type: "root", text: "do", meaning: "做" }], x: 80, y: 100 },
  { id: "unfold", word: "unfold", phonetic: "/ʌnˈfoʊld/", meaning: "打开；展开", part: "verb", example: "She unfolded the map to see the route.", morphemes: [{ type: "prefix", text: "un-", meaning: "相反动作" }, { type: "root", text: "fold", meaning: "折叠" }], x: 120, y: 150 },
  { id: "unhappy", word: "unhappy", phonetic: "/ʌnˈhæpi/", meaning: "不快乐的；不满的", part: "adjective", example: "He was unhappy with the results.", morphemes: [{ type: "prefix", text: "un-", meaning: "相反动作" }, { type: "root", text: "happy", meaning: "快乐的" }], x: 160, y: 100 },
  { id: "unlock", word: "unlock", phonetic: "/ʌnˈlɑːk/", meaning: "打开锁；解锁", part: "verb", example: "Use your key to unlock the door.", morphemes: [{ type: "prefix", text: "un-", meaning: "相反动作" }, { type: "root", text: "lock", meaning: "锁" }], x: 200, y: 150 },
  { id: "unpack", word: "unpack", phonetic: "/ʌnˈpæk/", meaning: "打开；拆包", part: "verb", example: "After traveling, she unpacked her suitcase.", morphemes: [{ type: "prefix", text: "un-", meaning: "相反动作" }, { type: "root", text: "pack", meaning: "打包" }], x: 240, y: 100 },
  { id: "unusual", word: "unusual", phonetic: "/ʌnˈjuːʒuəl/", meaning: "不寻常的；异常的", part: "adjective", example: "It's unusual to see snow in May.", morphemes: [{ type: "prefix", text: "un-", meaning: "相反动作" }, { type: "root", text: "usual", meaning: "通常的" }], x: 280, y: 150 },

  // ===== PREFIX FAMILY: re- (5 words) =====
  { id: "rebuild", word: "rebuild", phonetic: "/ˌriːˈbɪld/", meaning: "重建；改造", part: "verb", example: "They plan to rebuild the damaged bridge.", morphemes: [{ type: "prefix", text: "re-", meaning: "再次；重新" }, { type: "root", text: "build", meaning: "建造" }], x: 80, y: 250 },
  { id: "recall", word: "recall", phonetic: "/rɪˈkɔːl/", meaning: "回想；召回", part: "verb", example: "I cannot recall where I put my keys.", morphemes: [{ type: "prefix", text: "re-", meaning: "再次；重新" }, { type: "root", text: "call", meaning: "叫；称呼" }], x: 120, y: 300 },
  { id: "redo", word: "redo", phonetic: "/ˌriːˈduː/", meaning: "重做；再做一遍", part: "verb", example: "I made a mistake, so I need to redo this task.", morphemes: [{ type: "prefix", text: "re-", meaning: "再次；重新" }, { type: "root", text: "do", meaning: "做" }], x: 160, y: 250 },
  { id: "rewrite", word: "rewrite", phonetic: "/ˌriːˈraɪt/", meaning: "重写；改写", part: "verb", example: "The author will rewrite the final chapter.", morphemes: [{ type: "prefix", text: "re-", meaning: "再次；重新" }, { type: "root", text: "write", meaning: "写" }], x: 200, y: 300 },
  { id: "review", word: "review", phonetic: "/rɪˈvjuː/", meaning: "评论；查看；复习", part: "verb", example: "Let's review the material before the exam.", morphemes: [{ type: "prefix", text: "re-", meaning: "再次；重新" }, { type: "root", text: "view", meaning: "看；景色" }], x: 240, y: 250 },

  // ===== PREFIX FAMILY: pre- (3 words) =====
  { id: "preview", word: "preview", phonetic: "/ˈpriːvjuː/", meaning: "预览；提前查看", part: "verb", example: "You can preview the movie before buying tickets.", morphemes: [{ type: "prefix", text: "pre-", meaning: "之前；提前" }, { type: "root", text: "view", meaning: "看；景色" }], x: 300, y: 250 },
  { id: "predict", word: "predict", phonetic: "/prɪˈdɪkt/", meaning: "预测；预言", part: "verb", example: "Weather experts predict rain tomorrow.", morphemes: [{ type: "prefix", text: "pre-", meaning: "之前；提前" }, { type: "root", text: "dict", meaning: "说；讲" }], x: 340, y: 300 },
  { id: "prepare", word: "prepare", phonetic: "/prɪˈper/", meaning: "准备；预备", part: "verb", example: "We need to prepare for the presentation.", morphemes: [{ type: "prefix", text: "pre-", meaning: "之前；提前" }, { type: "root", text: "pare", meaning: "准备" }], x: 380, y: 250 },

  // ===== PREFIX FAMILY: dis- (3 words) =====
  { id: "disappear", word: "disappear", phonetic: "/ˌdɪsəˈpɪr/", meaning: "消失；不见了", part: "verb", example: "The sun disappeared behind the clouds.", morphemes: [{ type: "prefix", text: "dis-", meaning: "否定；分开" }, { type: "root", text: "appear", meaning: "出现" }], x: 420, y: 250 },
  { id: "discover", word: "discover", phonetic: "/dɪsˈkʌvər/", meaning: "发现；探索", part: "verb", example: "Christopher Columbus discovered America in 1492.", morphemes: [{ type: "prefix", text: "dis-", meaning: "否定；分开" }, { type: "root", text: "cover", meaning: "覆盖" }], x: 460, y: 300 },
  { id: "disagree", word: "disagree", phonetic: "/ˌdɪsəˈɡriː/", meaning: "不同意；意见不合", part: "verb", example: "My brother and I often disagree about politics.", morphemes: [{ type: "prefix", text: "dis-", meaning: "否定；分开" }, { type: "root", text: "agree", meaning: "同意" }], x: 500, y: 250 },

  // ===== PREFIX FAMILY: mis- (2 words) =====
  { id: "misunderstand", word: "misunderstand", phonetic: "/ˌmɪsʌndərˈstænd/", meaning: "误解；理解错了", part: "verb", example: "I misunderstood what you meant.", morphemes: [{ type: "prefix", text: "mis-", meaning: "错误地" }, { type: "root", text: "understand", meaning: "理解" }], x: 80, y: 400 },
  { id: "mislead", word: "mislead", phonetic: "/mɪsˈled/", meaning: "误导；带错了方向", part: "verb", example: "False advertisements can mislead consumers.", morphemes: [{ type: "prefix", text: "mis-", meaning: "错误地" }, { type: "root", text: "lead", meaning: "带领" }], x: 120, y: 450 },

  // ===== PREFIX FAMILY: over- (2 words) =====
  { id: "overcome", word: "overcome", phonetic: "/ˌoʊvərˈkʌm/", meaning: "克服；战胜", part: "verb", example: "She overcame her fear of heights.", morphemes: [{ type: "prefix", text: "over-", meaning: "超过；过度" }, { type: "root", text: "come", meaning: "来" }], x: 160, y: 400 },
  { id: "overlook", word: "overlook", phonetic: "/ˌoʊvərˈlʊk/", meaning: "忽视；俯视", part: "verb", example: "Don't overlook the small details.", morphemes: [{ type: "prefix", text: "over-", meaning: "超过；过度" }, { type: "root", text: "look", meaning: "看" }], x: 200, y: 450 },

  // ===== PREFIX FAMILY: inter- (2 words) =====
  { id: "interact", word: "interact", phonetic: "/ˌɪntərˈækt/", meaning: "互动；交互作用", part: "verb", example: "Students interact with each other in class.", morphemes: [{ type: "prefix", text: "inter-", meaning: "相互；之间" }, { type: "root", text: "act", meaning: "行动" }], x: 240, y: 400 },
  { id: "international", word: "international", phonetic: "/ˌɪntərˈnæʃənəl/", meaning: "国际的；国际间的", part: "adjective", example: "The Olympic Games is an international event.", morphemes: [{ type: "prefix", text: "inter-", meaning: "相互；之间" }, { type: "root", text: "nation", meaning: "国家" }], x: 280, y: 450 },

  // ===== PREFIX FAMILY: trans- (2 words) =====
  { id: "transport", word: "transport", phonetic: "/ˈtrænspɔːrt/", meaning: "运输；运送", part: "verb", example: "Trucks transport goods across the country.", morphemes: [{ type: "prefix", text: "trans-", meaning: "穿过；转变" }, { type: "root", text: "port", meaning: "港口；携带" }], x: 320, y: 400 },
  { id: "transform", word: "transform", phonetic: "/trænsˈfɔːrm/", meaning: "改变；转换；变形", part: "verb", example: "Caterpillars transform into butterflies.", morphemes: [{ type: "prefix", text: "trans-", meaning: "穿过；转变" }, { type: "root", text: "form", meaning: "形状" }], x: 360, y: 450 },

  // ===== PREFIX FAMILY: auto- (2 words) =====
  { id: "automatic", word: "automatic", phonetic: "/ˌɔːtəˈmætɪk/", meaning: "自动的；自动化的", part: "adjective", example: "My car has an automatic transmission.", morphemes: [{ type: "prefix", text: "auto-", meaning: "自动；自己" }, { type: "root", text: "matic", meaning: "机器的" }], x: 80, y: 550 },
  { id: "autograph", word: "autograph", phonetic: "/ˈɔːtəɡræf/", meaning: "亲笔签名；手稿", part: "noun", example: "The celebrity signed her autograph for the fan.", morphemes: [{ type: "prefix", text: "auto-", meaning: "自动；自己" }, { type: "root", text: "graph", meaning: "写；画" }], x: 120, y: 600 },

  // ===== PREFIX FAMILY: bi- (2 words) =====
  { id: "bicycle", word: "bicycle", phonetic: "/ˈbaɪsɪkəl/", meaning: "自行车；两轮车", part: "noun", example: "I ride my bicycle to school every day.", morphemes: [{ type: "prefix", text: "bi-", meaning: "两个" }, { type: "root", text: "cycle", meaning: "圆周；循环" }], x: 160, y: 550 },
  { id: "bilingual", word: "bilingual", phonetic: "/baɪˈlɪŋɡwəl/", meaning: "双语的；两种语言的", part: "adjective", example: "She is bilingual, speaking English and Mandarin.", morphemes: [{ type: "prefix", text: "bi-", meaning: "两个" }, { type: "root", text: "lingual", meaning: "语言的" }], x: 200, y: 600 },

  // ===== PREFIX FAMILY: co- (2 words) =====
  { id: "cooperate", word: "cooperate", phonetic: "/koʊˈɑːpəreɪt/", meaning: "合作；配合", part: "verb", example: "We need to cooperate to finish the project.", morphemes: [{ type: "prefix", text: "co-", meaning: "一起；共同" }, { type: "root", text: "operate", meaning: "运作" }], x: 240, y: 550 },
  { id: "coworker", word: "coworker", phonetic: "/ˈkoʊˌwɜːrkər/", meaning: "同事；共事者", part: "noun", example: "My coworker helped me finish the report.", morphemes: [{ type: "prefix", text: "co-", meaning: "一起；共同" }, { type: "root", text: "worker", meaning: "工人；做功的人" }], x: 280, y: 600 },

  // ===== PREFIX FAMILY: de- (2 words) =====
  { id: "decode", word: "decode", phonetic: "/ˌdiːˈkoʊd/", meaning: "解码；破译", part: "verb", example: "Spies try to decode secret messages.", morphemes: [{ type: "prefix", text: "de-", meaning: "相反动作；移除" }, { type: "root", text: "code", meaning: "密码；代码" }], x: 320, y: 550 },
  { id: "defrost", word: "defrost", phonetic: "/ˌdiːˈfrɔːst/", meaning: "解冻；除霜", part: "verb", example: "I need to defrost the chicken for dinner.", morphemes: [{ type: "prefix", text: "de-", meaning: "相反动作；移除" }, { type: "root", text: "frost", meaning: "霜；冰冻" }], x: 360, y: 600 },

  // ===== PREFIX FAMILY: ex- (3 words) =====
  { id: "exchange", word: "exchange", phonetic: "/ɪksˈtʃeɪndʒ/", meaning: "交换；交易", part: "verb", example: "Can I exchange this shirt for a larger size?", morphemes: [{ type: "prefix", text: "ex-", meaning: "外出；向外" }, { type: "root", text: "change", meaning: "改变；交换" }], x: 400, y: 550 },
  { id: "export", word: "export", phonetic: "/ˈekspɔːrt/", meaning: "出口；出口商品", part: "verb", example: "Japan exports cars to many countries.", morphemes: [{ type: "prefix", text: "ex-", meaning: "外出；向外" }, { type: "root", text: "port", meaning: "港口；携带" }], x: 440, y: 600 },
  { id: "exclude", word: "exclude", phonetic: "/ɪkˈskluːd/", meaning: "排除；不包括", part: "verb", example: "The price excludes tax and delivery.", morphemes: [{ type: "prefix", text: "ex-", meaning: "外出；向外" }, { type: "root", text: "clude", meaning: "关闭；排除" }], x: 480, y: 550 },

  // ===== PREFIX FAMILY: im-/in-/il-/ir- (5 words) =====
  { id: "impossible", word: "impossible", phonetic: "/ɪmˈpɑːsəbəl/", meaning: "不可能的；不可能发生的", part: "adjective", example: "It's impossible to travel faster than light.", morphemes: [{ type: "prefix", text: "im-", meaning: "不" }, { type: "root", text: "possible", meaning: "可能的" }], x: 80, y: 700 },
  { id: "invisible", word: "invisible", phonetic: "/ɪnˈvɪzəbəl/", meaning: "看不见的；隐形的", part: "adjective", example: "Air is invisible, but we can feel it.", morphemes: [{ type: "prefix", text: "in-", meaning: "不" }, { type: "root", text: "visible", meaning: "看得见的" }], x: 120, y: 750 },
  { id: "illegal", word: "illegal", phonetic: "/ɪˈliːɡəl/", meaning: "违法的；非法的", part: "adjective", example: "It's illegal to steal.", morphemes: [{ type: "prefix", text: "il-", meaning: "不" }, { type: "root", text: "legal", meaning: "合法的" }], x: 160, y: 700 },
  { id: "irregular", word: "irregular", phonetic: "/ɪˈreɡjələr/", meaning: "不规则的；不规则的", part: "adjective", example: "The coastline is very irregular.", morphemes: [{ type: "prefix", text: "ir-", meaning: "不" }, { type: "root", text: "regular", meaning: "规则的；有规律的" }], x: 200, y: 750 },
  { id: "inactive", word: "inactive", phonetic: "/ɪnˈæktɪv/", meaning: "不活跃的；不活动的", part: "adjective", example: "The volcano has been inactive for years.", morphemes: [{ type: "prefix", text: "in-", meaning: "不" }, { type: "root", text: "active", meaning: "活跃的；主动的" }], x: 240, y: 700 },

  // ===== PREFIX FAMILY: micro- (2 words) =====
  { id: "microscope", word: "microscope", phonetic: "/ˈmaɪkrəskoʊp/", meaning: "显微镜", part: "noun", example: "Under the microscope, we can see tiny cells.", morphemes: [{ type: "prefix", text: "micro-", meaning: "微小的" }, { type: "root", text: "scope", meaning: "看；观察仪器" }], x: 280, y: 700 },
  { id: "microwave", word: "microwave", phonetic: "/ˈmaɪkroʊweɪv/", meaning: "微波；微波炉", part: "noun", example: "I'll heat the food in the microwave.", morphemes: [{ type: "prefix", text: "micro-", meaning: "微小的" }, { type: "root", text: "wave", meaning: "波浪；波动" }], x: 320, y: 750 },

  // ===== PREFIX FAMILY: multi- (2 words) =====
  { id: "multimedia", word: "multimedia", phonetic: "/ˌmʌltiˈmediə/", meaning: "多媒体；多种媒体", part: "adjective", example: "The presentation uses multimedia elements.", morphemes: [{ type: "prefix", text: "multi-", meaning: "多个；许多" }, { type: "root", text: "media", meaning: "媒体" }], x: 360, y: 700 },
  { id: "multiply", word: "multiply", phonetic: "/ˈmʌltɪplaɪ/", meaning: "乘以；增加；繁殖", part: "verb", example: "If you multiply 5 by 3, you get 15.", morphemes: [{ type: "prefix", text: "multi-", meaning: "多个；许多" }, { type: "root", text: "ply", meaning: "多层；重叠" }], x: 400, y: 750 },

  // ===== PREFIX FAMILY: non- (2 words) =====
  { id: "nonsense", word: "nonsense", phonetic: "/ˈnɑːnsens/", meaning: "胡言乱语；废话", part: "noun", example: "Stop talking nonsense!", morphemes: [{ type: "prefix", text: "non-", meaning: "不是；非" }, { type: "root", text: "sense", meaning: "意义；感觉" }], x: 440, y: 700 },
  { id: "nonfiction", word: "nonfiction", phonetic: "/nɑːnˈfɪkʃən/", meaning: "非虚构类作品；纪实文学", part: "adjective", example: "Biographies are nonfiction books.", morphemes: [{ type: "prefix", text: "non-", meaning: "不是；非" }, { type: "root", text: "fiction", meaning: "虚构作品；小说" }], x: 480, y: 750 },

  // ===== PREFIX FAMILY: out- (2 words) =====
  { id: "outdoor", word: "outdoor", phonetic: "/ˈaʊtdɔːr/", meaning: "户外的；室外的", part: "adjective", example: "We enjoy outdoor activities like hiking.", morphemes: [{ type: "prefix", text: "out-", meaning: "外部；超过" }, { type: "root", text: "door", meaning: "门" }], x: 520, y: 700 },
  { id: "outlook", word: "outlook", phonetic: "/ˈaʊtlʊk/", meaning: "前景；观点；展望", part: "noun", example: "The economic outlook looks promising.", morphemes: [{ type: "prefix", text: "out-", meaning: "外部；超过" }, { type: "root", text: "look", meaning: "看；景色" }], x: 560, y: 750 },

  // ===== PREFIX FAMILY: post- (2 words) =====
  { id: "postpone", word: "postpone", phonetic: "/poʊstˈpoʊn/", meaning: "延期；推迟", part: "verb", example: "Let's postpone the meeting until next week.", morphemes: [{ type: "prefix", text: "post-", meaning: "之后；后来" }, { type: "root", text: "pone", meaning: "放置" }], x: 600, y: 700 },
  { id: "postwar", word: "postwar", phonetic: "/ˈpoʊstˌwɔːr/", meaning: "战后的；战争后的", part: "adjective", example: "Postwar reconstruction was difficult.", morphemes: [{ type: "prefix", text: "post-", meaning: "之后；后来" }, { type: "root", text: "war", meaning: "战争" }], x: 640, y: 750 },

  // ===== PREFIX FAMILY: pro- (2 words) =====
  { id: "promote", word: "promote", phonetic: "/prəˈmoʊt/", meaning: "提升；推广；宣传", part: "verb", example: "The company wants to promote their new product.", morphemes: [{ type: "prefix", text: "pro-", meaning: "向前；支持" }, { type: "root", text: "mote", meaning: "移动；推动" }], x: 680, y: 700 },
  { id: "progress", word: "progress", phonetic: "/ˈprɑːɡres/", meaning: "进步；进展；前进", part: "noun", example: "The students are making good progress in math.", morphemes: [{ type: "prefix", text: "pro-", meaning: "向前；支持" }, { type: "root", text: "ress", meaning: "走；进行" }], x: 720, y: 750 },

  // ===== PREFIX FAMILY: semi- (2 words) =====
  { id: "semicircle", word: "semicircle", phonetic: "/ˈsemiˌsɜːrkəl/", meaning: "半圆；半圆形", part: "noun", example: "A semicircle is half of a circle.", morphemes: [{ type: "prefix", text: "semi-", meaning: "半" }, { type: "root", text: "circle", meaning: "圆形" }], x: 760, y: 700 },
  { id: "semifinal", word: "semifinal", phonetic: "/ˌsemiˈfaɪnəl/", meaning: "半决赛；半决赛的", part: "noun", example: "Our team advanced to the semifinal.", morphemes: [{ type: "prefix", text: "semi-", meaning: "半" }, { type: "root", text: "final", meaning: "最后的；决赛的" }], x: 800, y: 750 },

  // ===== PREFIX FAMILY: sub- (2 words) =====
  { id: "submarine", word: "submarine", phonetic: "/ˌsʌbməˈriːn/", meaning: "潜水艇；潜艇", part: "noun", example: "Military submarines can dive very deep.", morphemes: [{ type: "prefix", text: "sub-", meaning: "下面；下方" }, { type: "root", text: "marine", meaning: "海洋的；海生的" }], x: 840, y: 700 },
  { id: "subtitle", word: "subtitle", phonetic: "/ˈsʌbtaɪtəl/", meaning: "字幕；副标题", part: "noun", example: "The movie has English subtitles.", morphemes: [{ type: "prefix", text: "sub-", meaning: "下面；下方" }, { type: "root", text: "title", meaning: "标题；头衔" }], x: 880, y: 750 },

  // ===== PREFIX FAMILY: super- (2 words) =====
  { id: "supermarket", word: "supermarket", phonetic: "/ˈsuːpərˌmɑːrkət/", meaning: "超市；超级市场", part: "noun", example: "I shop at the supermarket every week.", morphemes: [{ type: "prefix", text: "super-", meaning: "超过；超级" }, { type: "root", text: "market", meaning: "市场" }], x: 920, y: 700 },
  { id: "superstar", word: "superstar", phonetic: "/ˈsuːpərˌstɑːr/", meaning: "超级明星；大明星", part: "noun", example: "The movie star is a superstar.", morphemes: [{ type: "prefix", text: "super-", meaning: "超过；超级" }, { type: "root", text: "star", meaning: "明星；星星" }], x: 960, y: 750 },

  // ===== PREFIX FAMILY: tele- (2 words) =====
  { id: "telephone", word: "telephone", phonetic: "/ˈteləˌfoʊn/", meaning: "电话；打电话", part: "noun", example: "I called her on the telephone.", morphemes: [{ type: "prefix", text: "tele-", meaning: "远距离；远方" }, { type: "root", text: "phone", meaning: "声音；电话音" }], x: 1000, y: 700 },
  { id: "television", word: "television", phonetic: "/ˈteləˌvɪʒən/", meaning: "电视；电视机", part: "noun", example: "I watch television in the evening.", morphemes: [{ type: "prefix", text: "tele-", meaning: "远距离；远方" }, { type: "root", text: "vision", meaning: "视觉；看见" }], x: 1040, y: 750 },

  // ===== SUFFIX FAMILY: -able (3 words) =====
  { id: "comfortable", word: "comfortable", phonetic: "/ˈkʌmfərtəbəl/", meaning: "舒服的；舒适的", part: "adjective", example: "This chair is very comfortable.", morphemes: [{ type: "root", text: "comfort", meaning: "舒服；安慰" }, { type: "suffix", text: "-able", meaning: "能够；可以" }], x: 600, y: 100 },
  { id: "possible", word: "possible", phonetic: "/ˈpɑːsəbəl/", meaning: "可能的；可以实现的", part: "adjective", example: "It's possible to learn a new language.", morphemes: [{ type: "root", text: "poss", meaning: "拥有；可能" }, { type: "suffix", text: "-able", meaning: "能够；可以" }], x: 650, y: 150 },
  { id: "valuable", word: "valuable", phonetic: "/ˈvæljuəbəl/", meaning: "有价值的；宝贵的", part: "adjective", example: "Her advice is very valuable.", morphemes: [{ type: "root", text: "value", meaning: "价值" }, { type: "suffix", text: "-able", meaning: "能够；可以" }], x: 700, y: 100 },

  // ===== SUFFIX FAMILY: -er/-or (4 words) =====
  { id: "teacher", word: "teacher", phonetic: "/ˈtɪtʃər/", meaning: "教师；老师", part: "noun", example: "My teacher explained the lesson clearly.", morphemes: [{ type: "root", text: "teach", meaning: "教；教授" }, { type: "suffix", text: "-er", meaning: "人；做某事的人" }], x: 750, y: 200 },
  { id: "actor", word: "actor", phonetic: "/ˈæktər/", meaning: "演员；男演员", part: "noun", example: "The actor performed brilliantly.", morphemes: [{ type: "root", text: "act", meaning: "行动；表演" }, { type: "suffix", text: "-or", meaning: "人；做某事的人" }], x: 800, y: 250 },
  { id: "driver", word: "driver", phonetic: "/ˈdraɪvər/", meaning: "驾驶员；司机", part: "noun", example: "The taxi driver was very friendly.", morphemes: [{ type: "root", text: "drive", meaning: "驾驶；推动" }, { type: "suffix", text: "-er", meaning: "人；做某事的人" }], x: 850, y: 200 },
  { id: "sailor", word: "sailor", phonetic: "/ˈseɪlər/", meaning: "水手；海员", part: "noun", example: "The sailor worked on the ship.", morphemes: [{ type: "root", text: "sail", meaning: "航海；帆" }, { type: "suffix", text: "-or", meaning: "人；做某事的人" }], x: 900, y: 250 },

  // ===== SUFFIX FAMILY: -ful (2 words) =====
  { id: "careful", word: "careful", phonetic: "/ˈkerfl/", meaning: "小心的；谨慎的", part: "adjective", example: "Be careful when crossing the street.", morphemes: [{ type: "root", text: "care", meaning: "关心；照顾" }, { type: "suffix", text: "-ful", meaning: "充满；有很多" }], x: 600, y: 300 },
  { id: "helpful", word: "helpful", phonetic: "/ˈhelpfl/", meaning: "有帮助的；有用的", part: "adjective", example: "Your suggestions are helpful.", morphemes: [{ type: "root", text: "help", meaning: "帮助" }, { type: "suffix", text: "-ful", meaning: "充满；有很多" }], x: 650, y: 350 },

  // ===== SUFFIX FAMILY: -ion/-tion (4 words) =====
  { id: "action", word: "action", phonetic: "/ˈækʃən/", meaning: "行动；活动；动作", part: "noun", example: "We need to take action now.", morphemes: [{ type: "root", text: "act", meaning: "行动" }, { type: "suffix", text: "-ion", meaning: "名词后缀" }], x: 700, y: 300 },
  { id: "education", word: "education", phonetic: "/ˌedʒuˈkeɪʃən/", meaning: "教育；学历", part: "noun", example: "Education is important for success.", morphemes: [{ type: "root", text: "edu", meaning: "教" }, { type: "suffix", text: "-tion", meaning: "名词后缀" }], x: 750, y: 350 },
  { id: "information", word: "information", phonetic: "/ˌɪnfərˈmeɪʃən/", meaning: "信息；情报", part: "noun", example: "I need more information about this.", morphemes: [{ type: "root", text: "inform", meaning: "告知；通知" }, { type: "suffix", text: "-tion", meaning: "名词后缀" }], x: 800, y: 300 },
  { id: "nation", word: "nation", phonetic: "/ˈneɪʃən/", meaning: "国家；民族；国民", part: "noun", example: "Many nations joined the organization.", morphemes: [{ type: "root", text: "nat", meaning: "出生；国家" }, { type: "suffix", text: "-ion", meaning: "名词后缀" }], x: 850, y: 350 },

  // ===== SUFFIX FAMILY: -ive (2 words) =====
  { id: "active", word: "active", phonetic: "/ˈæktɪv/", meaning: "活跃的；主动的；积极的", part: "adjective", example: "She is an active member of the club.", morphemes: [{ type: "root", text: "act", meaning: "行动；表演" }, { type: "suffix", text: "-ive", meaning: "形容词后缀" }], x: 600, y: 450 },
  { id: "creative", word: "creative", phonetic: "/kriˈeɪtɪv/", meaning: "有创意的；创意性的", part: "adjective", example: "He has a creative mind.", morphemes: [{ type: "root", text: "create", meaning: "创作；创建" }, { type: "suffix", text: "-ive", meaning: "形容词后缀" }], x: 650, y: 500 },

  // ===== SUFFIX FAMILY: -less (2 words) =====
  { id: "homeless", word: "homeless", phonetic: "/ˈhoʊmlɪs/", meaning: "无家可归的；流浪的", part: "adjective", example: "Many homeless people need shelter.", morphemes: [{ type: "root", text: "home", meaning: "家；家园" }, { type: "suffix", text: "-less", meaning: "没有；无" }], x: 700, y: 450 },
  { id: "useless", word: "useless", phonetic: "/ˈjuːsləs/", meaning: "无用的；没有用的", part: "adjective", example: "This broken phone is useless.", morphemes: [{ type: "root", text: "use", meaning: "使用" }, { type: "suffix", text: "-less", meaning: "没有；无" }], x: 750, y: 500 },

  // ===== SUFFIX FAMILY: -ly (2 words) =====
  { id: "quickly", word: "quickly", phonetic: "/ˈkwɪkli/", meaning: "快速地；迅速地", part: "adverb", example: "Please finish this task quickly.", morphemes: [{ type: "root", text: "quick", meaning: "快速的" }, { type: "suffix", text: "-ly", meaning: "副词后缀" }], x: 800, y: 450 },
  { id: "friendly", word: "friendly", phonetic: "/ˈfrendli/", meaning: "友好的；亲切的", part: "adjective", example: "She has a friendly personality.", morphemes: [{ type: "root", text: "friend", meaning: "朋友" }, { type: "suffix", text: "-ly", meaning: "形容词后缀" }], x: 850, y: 500 },

  // ===== SUFFIX FAMILY: -ment (2 words) =====
  { id: "development", word: "development", phonetic: "/dɪˈveləpmənt/", meaning: "发展；发育；进展", part: "noun", example: "The company is in development mode.", morphemes: [{ type: "root", text: "develop", meaning: "发展；展开" }, { type: "suffix", text: "-ment", meaning: "名词后缀" }], x: 600, y: 550 },
  { id: "movement", word: "movement", phonetic: "/ˈmuːvmənt/", meaning: "运动；移动；行动", part: "noun", example: "There is a social movement happening now.", morphemes: [{ type: "root", text: "move", meaning: "移动；动作" }, { type: "suffix", text: "-ment", meaning: "名词后缀" }], x: 650, y: 600 },

  // ===== SUFFIX FAMILY: -ness (2 words) =====
  { id: "happiness", word: "happiness", phonetic: "/ˈhæpinəs/", meaning: "幸福；快乐", part: "noun", example: "Money cannot buy happiness.", morphemes: [{ type: "root", text: "happy", meaning: "快乐的；幸福的" }, { type: "suffix", text: "-ness", meaning: "名词后缀；抽象名词" }], x: 700, y: 550 },
  { id: "kindness", word: "kindness", phonetic: "/ˈkaɪndnəs/", meaning: "仁慈；善良", part: "noun", example: "She showed kindness to the stranger.", morphemes: [{ type: "root", text: "kind", meaning: "和蔼的；善良的" }, { type: "suffix", text: "-ness", meaning: "名词后缀；抽象名词" }], x: 750, y: 600 },

  // ===== SUFFIX FAMILY: -ous (2 words) =====
  { id: "dangerous", word: "dangerous", phonetic: "/ˈdeɪndʒərəs/", meaning: "危险的；不安全的", part: "adjective", example: "Driving fast is dangerous.", morphemes: [{ type: "root", text: "danger", meaning: "危险" }, { type: "suffix", text: "-ous", meaning: "形容词后缀" }], x: 800, y: 550 },
  { id: "famous", word: "famous", phonetic: "/ˈfeɪməs/", meaning: "著名的；有名的；闻名的", part: "adjective", example: "She is a famous singer.", morphemes: [{ type: "root", text: "fame", meaning: "名声；名气" }, { type: "suffix", text: "-ous", meaning: "形容词后缀" }], x: 850, y: 600 },

  // ===== SUFFIX FAMILY: -ing (1 word) =====
  { id: "dancing", word: "dancing", phonetic: "/ˈdænsɪŋ/", meaning: "跳舞；舞蹈", part: "noun/verb", example: "Dancing is good exercise.", morphemes: [{ type: "root", text: "dance", meaning: "跳舞" }, { type: "suffix", text: "-ing", meaning: "动名词后缀；现在分词" }], x: 600, y: 650 },

  // ===== SUFFIX FAMILY: -y (1 word) =====
  { id: "sunny", word: "sunny", phonetic: "/ˈsʌni/", meaning: "晴朗的；阳光充足的", part: "adjective", example: "It's a sunny day today.", morphemes: [{ type: "root", text: "sun", meaning: "太阳；阳光" }, { type: "suffix", text: "-y", meaning: "形容词后缀" }], x: 650, y: 700 },

  // ===== ROOT FAMILY: aud (2 words) =====
  { id: "audio", word: "audio", phonetic: "/ˈɔːdioʊ/", meaning: "音频；音声；音频的", part: "adjective", example: "The audio quality is excellent.", morphemes: [{ type: "root", text: "aud", meaning: "听；声音" }], x: 400, y: 200 },
  { id: "audience", word: "audience", phonetic: "/ˈɔːdiəns/", meaning: "观众；听众；听众", part: "noun", example: "The audience applauded the performance.", morphemes: [{ type: "root", text: "aud", meaning: "听；声音" }, { type: "root", text: "ence", meaning: "一族；群体" }], x: 450, y: 250 },

  // ===== ROOT FAMILY: bene (2 words) =====
  { id: "benefit", word: "benefit", phonetic: "/ˈbenɪfɪt/", meaning: "好处；益处；福利", part: "noun/verb", example: "Exercise has many health benefits.", morphemes: [{ type: "root", text: "bene", meaning: "好的；善" }], x: 400, y: 350 },
  { id: "beneficial", word: "beneficial", phonetic: "/ˌbenɪˈfɪʃəl/", meaning: "有利的；有益的；有好处的", part: "adjective", example: "Eating vegetables is beneficial for health.", morphemes: [{ type: "root", text: "bene", meaning: "好的；善" }, { type: "suffix", text: "-icial", meaning: "形容词后缀" }], x: 450, y: 400 },

  // ===== ROOT FAMILY: bio (2 words) =====
  { id: "biology", word: "biology", phonetic: "/baɪˈɑːlədʒi/", meaning: "生物学；生物科学", part: "noun", example: "I study biology in school.", morphemes: [{ type: "root", text: "bio", meaning: "生命；生物" }, { type: "root", text: "logy", meaning: "学；科学" }], x: 400, y: 500 },
  { id: "biography", word: "biography", phonetic: "/baɪˈɑːɡrəfi/", meaning: "传记；生平记录", part: "noun", example: "I read a biography of Albert Einstein.", morphemes: [{ type: "root", text: "bio", meaning: "生命；生物" }, { type: "root", text: "graph", meaning: "写；记录" }], x: 450, y: 550 },

  // ===== ROOT FAMILY: cap (2 words) =====
  { id: "capable", word: "capable", phonetic: "/ˈkeɪpəbəl/", meaning: "能够的；有能力的；胜任的", part: "adjective", example: "He is capable of doing this job.", morphemes: [{ type: "root", text: "cap", meaning: "接受；容纳；能力" }, { type: "suffix", text: "-able", meaning: "能够；可以" }], x: 400, y: 100 },
  { id: "capture", word: "capture", phonetic: "/ˈkæptʃər/", meaning: "捕捉；抓住；拍摄", part: "verb", example: "I captured a beautiful photo.", morphemes: [{ type: "root", text: "cap", meaning: "接受；容纳；抓住" }], x: 450, y: 150 },

  // ===== ROOT FAMILY: cred (2 words) =====
  { id: "credit", word: "credit", phonetic: "/ˈkredɪt/", meaning: "信用；信任；学分；称赞", part: "noun/verb", example: "She deserves credit for this work.", morphemes: [{ type: "root", text: "cred", meaning: "相信；信任" }], x: 500, y: 200 },
  { id: "incredible", word: "incredible", phonetic: "/ɪnˈkredəbəl/", meaning: "难以置信的；极好的；非凡的", part: "adjective", example: "That's an incredible achievement!", morphemes: [{ type: "prefix", text: "in-", meaning: "不；无" }, { type: "root", text: "cred", meaning: "相信；信任" }, { type: "suffix", text: "-ible", meaning: "能够；可以" }], x: 550, y: 250 },

  // ===== ROOT FAMILY: dict (2 words) =====
  { id: "dictionary", word: "dictionary", phonetic: "/ˈdɪkʃəneri/", meaning: "字典；词典", part: "noun", example: "I looked up the word in the dictionary.", morphemes: [{ type: "root", text: "dict", meaning: "说；讲；词" }, { type: "suffix", text: "-ary", meaning: "名词后缀" }], x: 500, y: 350 },

  // ===== ROOT FAMILY: duct (2 words) =====
  { id: "conduct", word: "conduct", phonetic: "/ˈkɑːndʌkt/", meaning: "行为；表现；传导；指挥", part: "noun/verb", example: "Her conduct was exemplary.", morphemes: [{ type: "root", text: "duct", meaning: "引导；带领；传导" }], x: 500, y: 450 },
  { id: "produce", word: "produce", phonetic: "/prəˈduːs/", meaning: "生产；产生；制作；出示", part: "verb", example: "This factory produces cars.", morphemes: [{ type: "prefix", text: "pro-", meaning: "向前；向外" }, { type: "root", text: "duce", meaning: "引导；带领" }], x: 550, y: 500 },

  // ===== ROOT FAMILY: fac (2 words) =====
  { id: "factory", word: "factory", phonetic: "/ˈfæktəri/", meaning: "工厂；制造厂", part: "noun", example: "She works in an automobile factory.", morphemes: [{ type: "root", text: "fac", meaning: "做；制作；工厂" }], x: 500, y: 600 },
  { id: "factor", word: "factor", phonetic: "/ˈfæktər/", meaning: "因素；要素；代理人", part: "noun", example: "Price is an important factor in buying decisions.", morphemes: [{ type: "root", text: "fac", meaning: "做；制作" }], x: 550, y: 650 },

  // ===== ROOT FAMILY: graph (3 words - some already counted) =====
  { id: "photograph", word: "photograph", phonetic: "/ˈfoʊtəɡræf/", meaning: "照片；照相；拍照", part: "noun/verb", example: "I took a photograph of the sunset.", morphemes: [{ type: "root", text: "photo", meaning: "光；照" }, { type: "root", text: "graph", meaning: "写；画；记录" }], x: 600, y: 200 },

  // ===== ROOT FAMILY: ject (2 words) =====
  { id: "project", word: "project", phonetic: "/ˈprɑːdʒekt/", meaning: "项目；工程；计划；投射", part: "noun/verb", example: "I'm working on a big project.", morphemes: [{ type: "prefix", text: "pro-", meaning: "向前；外出" }, { type: "root", text: "ject", meaning: "投掷；抛出；抛弃" }], x: 500, y: 750 },
  { id: "reject", word: "reject", phonetic: "/rɪˈdʒekt/", meaning: "拒绝；排斥；不同意", part: "verb", example: "She rejected the job offer.", morphemes: [{ type: "prefix", text: "re-", meaning: "回；再次；反复" }, { type: "root", text: "ject", meaning: "投掷；抛出；抛弃" }], x: 550, y: 800 },

  // ===== ROOT FAMILY: log (2 words) =====
  { id: "dialogue", word: "dialogue", phonetic: "/ˈdaɪəˌlɔːɡ/", meaning: "对话；对白；有交流的讨论", part: "noun", example: "The dialogue in the movie is witty.", morphemes: [{ type: "prefix", text: "dia-", meaning: "之间；穿过" }, { type: "root", text: "logue", meaning: "说；讲话" }], x: 600, y: 800 },

  // ===== ROOT FAMILY: man (2 words) =====
  { id: "manual", word: "manual", phonetic: "/ˈmænjuəl/", meaning: "手工的；手动的；手册", part: "adjective/noun", example: "This is a manual task.", morphemes: [{ type: "root", text: "man", meaning: "手；做；使用" }], x: 700, y: 600 },
  { id: "manage", word: "manage", phonetic: "/ˈmænɪdʒ/", meaning: "管理；经营；设法；应对", part: "verb", example: "She manages a large team.", morphemes: [{ type: "root", text: "man", meaning: "手；做；使用" }], x: 750, y: 650 },

  // ===== ROOT FAMILY: miss/mit (3 words) =====
  { id: "mission", word: "mission", phonetic: "/ˈmɪʃən/", meaning: "使命；任务；特派团", part: "noun", example: "The astronauts completed their mission.", morphemes: [{ type: "root", text: "miss", meaning: "派遣；发送" }, { type: "suffix", text: "-ion", meaning: "名词后缀" }], x: 800, y: 600 },
  { id: "admit", word: "admit", phonetic: "/ədˈmɪt/", meaning: "承认；允许进入；录取", part: "verb", example: "He admitted his mistake.", morphemes: [{ type: "prefix", text: "ad-", meaning: "向；指向" }, { type: "root", text: "mit", meaning: "发送；放松；让" }], x: 700, y: 750 },
  { id: "permit", word: "permit", phonetic: "/pərˈmɪt/", meaning: "允许；许可；许可证", part: "verb/noun", example: "Do you have a parking permit?", morphemes: [{ type: "prefix", text: "per-", meaning: "完全地；始终" }, { type: "root", text: "mit", meaning: "发送；放松；让" }], x: 750, y: 800 },

  // ===== ROOT FAMILY: path (2 words) =====
  { id: "sympathy", word: "sympathy", phonetic: "/ˈsɪmpəθi/", meaning: "同情；同感；同病相怜", part: "noun", example: "I have sympathy for her situation.", morphemes: [{ type: "prefix", text: "sym-", meaning: "一起；相同" }, { type: "root", text: "path", meaning: "感受；感觉；苦难" }], x: 800, y: 700 },
  { id: "patient", word: "patient", phonetic: "/ˈpeɪʃənt/", meaning: "患者；有耐心的", part: "noun/adjective", example: "The patient is recovering well.", morphemes: [{ type: "root", text: "path", meaning: "感受；感觉；苦难" }, { type: "suffix", text: "-ent", meaning: "名词后缀；形容词后缀" }], x: 850, y: 750 },

  // ===== ROOT FAMILY: phon (2 words) =====
  { id: "symphony", word: "symphony", phonetic: "/ˈsɪmfəni/", meaning: "交响乐；交响曲", part: "noun", example: "We attended a symphony last night.", morphemes: [{ type: "prefix", text: "sym-", meaning: "一起；相同" }, { type: "root", text: "phon", meaning: "声音；音" }], x: 900, y: 700 },

  // ===== ROOT FAMILY: photo (2 words) =====
  { id: "photosynthesis", word: "photosynthesis", phonetic: "/ˌfoʊtoʊˈsɪnθəsɪs/", meaning: "光合作用", part: "noun", example: "Plants use photosynthesis to make energy.", morphemes: [{ type: "root", text: "photo", meaning: "光；照" }, { type: "root", text: "synthesis", meaning: "合成；综合" }], x: 950, y: 750 },

  // ===== ROOT FAMILY: pos (2 words) =====
  { id: "position", word: "position", phonetic: "/pəˈzɪʃən/", meaning: "位置；职位；地位", part: "noun/verb", example: "What is your current position?", morphemes: [{ type: "root", text: "pos", meaning: "放置；放在" }, { type: "suffix", text: "-ition", meaning: "名词后缀" }], x: 400, y: 650 },
  { id: "compose", word: "compose", phonetic: "/kəmˈpoʊz/", meaning: "组成；作曲；平复", part: "verb", example: "The author composed a new poem.", morphemes: [{ type: "prefix", text: "com-", meaning: "一起；共同" }, { type: "root", text: "pose", meaning: "放置；地位" }], x: 450, y: 700 },

  // ===== ROOT FAMILY: rupt (2 words) =====
  { id: "interrupt", word: "interrupt", phonetic: "/ˌɪntəˈrʌpt/", meaning: "打断；中断；打扰", part: "verb", example: "Please don't interrupt me.", morphemes: [{ type: "prefix", text: "inter-", meaning: "相互；之间" }, { type: "root", text: "rupt", meaning: "破裂；中断" }], x: 550, y: 750 },
  { id: "bankrupt", word: "bankrupt", phonetic: "/ˈbæŋkrʌpt/", meaning: "破产的；破产者", part: "adjective/noun", example: "The company went bankrupt.", morphemes: [{ type: "root", text: "bank", meaning: "银行；河岸" }, { type: "root", text: "rupt", meaning: "破裂；中断" }], x: 600, y: 800 },

  // ===== ROOT FAMILY: scope (2 words) =====
  { id: "telescope", word: "telescope", phonetic: "/ˈteləskoʊp/", meaning: "望远镜；可伸缩的", part: "noun", example: "We looked at the stars through a telescope.", morphemes: [{ type: "prefix", text: "tele-", meaning: "远距离；远方" }, { type: "root", text: "scope", meaning: "看；观察仪器" }], x: 900, y: 800 },

  // ===== ROOT FAMILY: scrib (2 words) =====
  { id: "describe", word: "describe", phonetic: "/dɪˈskraɪb/", meaning: "描述；描写", part: "verb", example: "Can you describe what you saw?", morphemes: [{ type: "prefix", text: "de-", meaning: "向下；离开" }, { type: "root", text: "scrib", meaning: "写；记录" }], x: 500, y: 900 },
  { id: "subscribe", word: "subscribe", phonetic: "/səbˈskraɪb/", meaning: "订阅；订阅者；赞同", part: "verb", example: "I subscribe to that magazine.", morphemes: [{ type: "prefix", text: "sub-", meaning: "下面；下方" }, { type: "root", text: "scrib", meaning: "写；记录" }], x: 550, y: 950 },

  // ===== ROOT FAMILY: struct (2 words) =====
  { id: "structure", word: "structure", phonetic: "/ˈstrʌktʃər/", meaning: "结构；组织；建筑物", part: "noun", example: "The structure of this building is unique.", morphemes: [{ type: "root", text: "struct", meaning: "构造；建造；组织" }], x: 600, y: 900 },
  { id: "construct", word: "construct", phonetic: "/kənˈstrʌkt/", meaning: "构造；建造；建立；构筑", part: "verb", example: "They will construct a new bridge.", morphemes: [{ type: "prefix", text: "con-", meaning: "一起；共同" }, { type: "root", text: "struct", meaning: "构造；建造；组织" }], x: 650, y: 950 },

  // ===== ROOT FAMILY: tract (2 words) =====
  { id: "tractor", word: "tractor", phonetic: "/ˈtræktər/", meaning: "拖拉机；牵引车", part: "noun", example: "Farmers use tractors to plow fields.", morphemes: [{ type: "root", text: "tract", meaning: "拉；牵拉；吸引" }], x: 700, y: 900 },
  { id: "attract", word: "attract", phonetic: "/əˈtrækt/", meaning: "吸引；吸附；有魅力", part: "verb", example: "The colorful display attracts customers.", morphemes: [{ type: "prefix", text: "at-", meaning: "向；指向" }, { type: "root", text: "tract", meaning: "拉；牵拉；吸引" }], x: 750, y: 950 },

  // ===== ROOT FAMILY: vac (2 words) =====
  { id: "vacation", word: "vacation", phonetic: "/vəˈkeɪʃən/", meaning: "假期；休假；空出", part: "noun", example: "I'm taking a vacation next month.", morphemes: [{ type: "root", text: "vac", meaning: "空的；空出" }, { type: "suffix", text: "-tion", meaning: "名词后缀" }], x: 800, y: 900 },
  { id: "vacuum", word: "vacuum", phonetic: "/ˈvækjuəm/", meaning: "真空；真空吸尘器；空虚", part: "noun", example: "I used the vacuum to clean the carpet.", morphemes: [{ type: "root", text: "vac", meaning: "空的；空出" }], x: 850, y: 950 },

  // ===== ROOT FAMILY: vid/vis (3 words - some already counted) =====
  { id: "video", word: "video", phonetic: "/ˈvɪdioʊ/", meaning: "视频；录像；视频的", part: "noun/adjective", example: "I watched a video online.", morphemes: [{ type: "root", text: "vid", meaning: "看；视" }], x: 900, y: 900 },
  { id: "visible", word: "visible", phonetic: "/ˈvɪzəbəl/", meaning: "看得见的；明显的；可见的", part: "adjective", example: "The stars are visible at night.", morphemes: [{ type: "root", text: "vis", meaning: "看；视" }, { type: "suffix", text: "-ible", meaning: "能够；可以" }], x: 950, y: 950 },

  // ===== ROOT FAMILY: volv (2 words) =====
  { id: "involve", word: "involve", phonetic: "/ɪnˈvɑːlv/", meaning: "涉及；包括；使参与", part: "verb", example: "This project involves teamwork.", morphemes: [{ type: "prefix", text: "in-", meaning: "内；内部" }, { type: "root", text: "volv", meaning: "转动；旋转；卷入" }], x: 400, y: 850 },
  { id: "evolve", word: "evolve", phonetic: "/ɪˈvɑːlv/", meaning: "演变；进化；发展", part: "verb", example: "Species evolve over time.", morphemes: [{ type: "prefix", text: "e-", meaning: "向外；外出" }, { type: "root", text: "volv", meaning: "转动；旋转；卷入" }], x: 450, y: 900 },

  // ===== BASE WORDS (no clear affix, ~10 words) =====
  { id: "apple", word: "apple", phonetic: "/ˈæpəl/", meaning: "苹果；苹果树", part: "noun", example: "An apple a day keeps the doctor away.", morphemes: [{ type: "base", text: "apple", meaning: "苹果" }], x: 200, y: 700 },
  { id: "bright", word: "bright", phonetic: "/braɪt/", meaning: "明亮的；聪慧的；活泼的", part: "adjective", example: "The bright sun warmed us.", morphemes: [{ type: "base", text: "bright", meaning: "明亮的；聪慧的" }], x: 300, y: 750 },
  { id: "cloud", word: "cloud", phonetic: "/klaʊd/", meaning: "云；乌云；阴影", part: "noun", example: "A cloud passed over the sun.", morphemes: [{ type: "base", text: "cloud", meaning: "云；乌云" }], x: 350, y: 700 },
  { id: "dance", word: "dance", phonetic: "/dæns/", meaning: "跳舞；舞蹈；舞伴", part: "verb/noun", example: "Let's dance to this music.", morphemes: [{ type: "base", text: "dance", meaning: "跳舞；舞蹈" }], x: 250, y: 850 },
  { id: "gentle", word: "gentle", phonetic: "/ˈdʒentəl/", meaning: "温和的；温柔的；高尚的", part: "adjective", example: "She has a gentle touch.", morphemes: [{ type: "base", text: "gentle", meaning: "温和的；温柔的" }], x: 350, y: 850 },
  { id: "island", word: "island", phonetic: "/ˈaɪlənd/", meaning: "岛；岛屿", part: "noun", example: "We vacationed on a tropical island.", morphemes: [{ type: "base", text: "island", meaning: "岛；岛屿" }], x: 450, y: 850 },
  { id: "journey", word: "journey", phonetic: "/ˈdʒɜːrni/", meaning: "旅行；旅程；一段路程", part: "noun/verb", example: "The journey took two weeks.", morphemes: [{ type: "base", text: "journey", meaning: "旅行；旅程" }], x: 550, y: 850 },
  { id: "mirror", word: "mirror", phonetic: "/ˈmɪrər/", meaning: "镜子；反射；映照", part: "noun/verb", example: "I looked at myself in the mirror.", morphemes: [{ type: "base", text: "mirror", meaning: "镜子；反射" }], x: 250, y: 950 },
  { id: "nature", word: "nature", phonetic: "/ˈneɪtʃər/", meaning: "自然；本质；人性；性质", part: "noun", example: "The beauty of nature is inspiring.", morphemes: [{ type: "base", text: "nature", meaning: "自然；本质；性质" }], x: 350, y: 950 },
  { id: "ocean", word: "ocean", phonetic: "/ˈoʊʃən/", meaning: "大洋；海洋", part: "noun", example: "The Pacific Ocean is huge.", morphemes: [{ type: "base", text: "ocean", meaning: "大洋；海洋" }], x: 300, y: 1000 },
  { id: "river", word: "river", phonetic: "/ˈrɪvər/", meaning: "河流；河；河道", part: "noun", example: "The Amazon River is the largest river.", morphemes: [{ type: "base", text: "river", meaning: "河流；河" }], x: 400, y: 1000 },
  { id: "smile", word: "smile", phonetic: "/smaɪl/", meaning: "微笑；笑容；面露喜色", part: "verb/noun", example: "She smiled at me warmly.", morphemes: [{ type: "base", text: "smile", meaning: "微笑；笑容" }], x: 500, y: 1000 },
  { id: "travel", word: "travel", phonetic: "/ˈtrævəl/", meaning: "旅行；旅游；旅客", part: "verb/noun", example: "I love to travel around the world.", morphemes: [{ type: "base", text: "travel", meaning: "旅行；旅游" }], x: 600, y: 1000 },
  { id: "water", word: "water", phonetic: "/ˈwɔːtər/", meaning: "水；水分；浇水", part: "noun/verb", example: "I need a glass of water.", morphemes: [{ type: "base", text: "water", meaning: "水；水体" }], x: 700, y: 1000 },
];
