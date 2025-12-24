import { Country } from './types';

export const mockCountries: Country[] = [
  // ==========================================
  // 亚洲 Asia (已生成)
  // ==========================================
  
  // --- 东亚 East Asia ---
  {
    id: 'CN',
    name: '中国',
    continent: 'Asia',
    coordinates: { lat: 35.8617, lng: 104.1954 },
    visaPolicy: { policy: '原籍国', conditionalFree: '无' },
    tags: ['culture', 'scenery', 'outdoor'],
    avgDailyCost: 500,
    bestMonths: [4, 5, 9, 10],
    safetyLevel: 'high',
    highlights: ['长城', '故宫', '兵马俑', '桂林山水', '张家界'],
    advisory: {
      customs: '尊重长辈，餐桌礼仪讲究，移动支付极度普及。',
      safetyTips: '非常安全，但需注意热门景区的拥挤。'
    },
    festivals: [{ name: '春节', month: '1月或2月' }, { name: '中秋节', month: '9月或10月' }]
  },
  {
    id: 'JP',
    name: '日本',
    continent: 'Asia',
    coordinates: { lat: 36.2048, lng: 138.2529 },
    visaPolicy: { policy: '需要签证', conditionalFree: '游轮入境可能免签' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 1200,
    bestMonths: [3, 4, 10, 11],
    safetyLevel: 'high',
    highlights: ['富士山', '京都清水寺', '东京塔', '奈良公园', '北海道'],
    advisory: {
      customs: '保持安静，垃圾分类严格，温泉需裸浴。',
      safetyTips: '极度安全，注意自然灾害预警。'
    },
    festivals: [{ name: '樱花祭', month: '3月-4月' }, { name: '祗园祭', month: '7月' }]
  },
  {
    id: 'KR',
    name: '韩国',
    continent: 'Asia',
    coordinates: { lat: 35.9078, lng: 127.7669 },
    visaPolicy: { policy: '需要签证', conditionalFree: '济州岛免签' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 1000,
    bestMonths: [4, 5, 9, 10],
    safetyLevel: 'high',
    highlights: ['景福宫', '南山塔', '济州岛', '釜山海云台'],
    advisory: {
      customs: '长幼有序，进屋脱鞋，餐桌礼仪严格。',
      safetyTips: '非常安全，夜生活丰富。'
    },
    festivals: [{ name: '镇海军港祭 (樱花)', month: '4月' }]
  },
  {
    id: 'MN',
    name: '蒙古',
    continent: 'Asia',
    coordinates: { lat: 46.8625, lng: 103.8467 },
    visaPolicy: { policy: '需要签证', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 600,
    bestMonths: [6, 7, 8],
    safetyLevel: 'medium',
    highlights: ['乌兰巴托', '戈壁沙漠', '特勒吉国家公园'],
    advisory: {
      customs: '做客蒙古包需遵循主人引导，忌讳踩门槛。',
      safetyTips: '地广人稀，自驾需防迷路，夜间防范醉酒者。'
    },
    festivals: [{ name: '那达慕大会', month: '7月' }]
  },

  // --- 东南亚 Southeast Asia ---
  {
    id: 'TH',
    name: '泰国',
    continent: 'Asia',
    coordinates: { lat: 15.8700, lng: 100.9925 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['scenery', 'outdoor', 'culture'],
    avgDailyCost: 600,
    bestMonths: [11, 12, 1, 2],
    safetyLevel: 'medium',
    highlights: ['大皇宫', '普吉岛', '清迈古城', '苏梅岛'],
    advisory: {
      customs: '尊重皇室，进入寺庙需脱鞋且穿着端庄。',
      safetyTips: '注意交通安全（摩托车事故多），防范旅游骗局。'
    },
    festivals: [{ name: '泼水节', month: '4月' }, { name: '水灯节', month: '11月' }]
  },
  {
    id: 'SG',
    name: '新加坡',
    continent: 'Asia',
    coordinates: { lat: 1.3521, lng: 103.8198 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 1500,
    bestMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    safetyLevel: 'high',
    highlights: ['滨海湾花园', '圣淘沙', '鱼尾狮公园', '樟宜机场'],
    advisory: {
      customs: '严禁吃口香糖，公共交通禁止饮食，排队文化。',
      safetyTips: '法律严苛，非常安全。'
    },
    festivals: [{ name: 'F1大奖赛', month: '9月' }]
  },
  {
    id: 'MY',
    name: '马来西亚',
    continent: 'Asia',
    coordinates: { lat: 4.2105, lng: 101.9758 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['culture', 'scenery', 'outdoor'],
    avgDailyCost: 500,
    bestMonths: [3, 4, 5, 6, 9, 10],
    safetyLevel: 'high',
    highlights: ['双子塔', '仙本那', '槟城', '兰卡威'],
    advisory: {
      customs: '穆斯林国家，右手进食，进屋脱鞋。',
      safetyTips: '城市治安良好，注意飞车抢夺。'
    },
    festivals: [{ name: '开斋节', month: '变化' }]
  },
  {
    id: 'VN',
    name: '越南',
    continent: 'Asia',
    coordinates: { lat: 14.0583, lng: 108.2772 },
    visaPolicy: { policy: '电子签', conditionalFree: '富国岛免签' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 400,
    bestMonths: [2, 3, 4],
    safetyLevel: 'medium',
    highlights: ['下龙湾', '岘港', '会安古镇', '胡志明市'],
    advisory: {
      customs: '喝咖啡是生活方式，过马路需果断。',
      safetyTips: '注意飞车党，出租车尽量使用Grab。'
    },
    festivals: [{ name: '春节', month: '1月或2月' }]
  },
  {
    id: 'ID',
    name: '印度尼西亚',
    continent: 'Asia',
    coordinates: { lat: -0.7893, lng: 113.9213 },
    visaPolicy: { policy: '落地签', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 500,
    bestMonths: [5, 6, 7, 8, 9],
    safetyLevel: 'medium',
    highlights: ['巴厘岛', '婆罗浮屠', '科莫多岛', '林贾尼火山'],
    advisory: {
      customs: '左手不洁，忌摸头，尊重伊斯兰教习俗。',
      safetyTips: '注意自然灾害，巴厘岛交通拥堵。'
    },
    festivals: [{ name: '安宁日', month: '3月' }]
  },
  {
    id: 'PH',
    name: '菲律宾',
    continent: 'Asia',
    coordinates: { lat: 12.8797, lng: 121.7740 },
    visaPolicy: { policy: '需要签证', conditionalFree: '持美/日/澳/加/申根签免签7天' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 600,
    bestMonths: [12, 1, 2, 3, 4],
    safetyLevel: 'medium',
    highlights: ['长滩岛', '巴拉望', '宿务', '薄荷岛'],
    advisory: {
      customs: '热爱音乐和节日，英语普及率高。',
      safetyTips: '马尼拉部分区域需注意治安，台风季避免出海。'
    },
    festivals: [{ name: '圣婴节', month: '1月' }]
  },
  {
    id: 'KH',
    name: '柬埔寨',
    continent: 'Asia',
    coordinates: { lat: 12.5657, lng: 104.9910 },
    visaPolicy: { policy: '电子签/落地签', conditionalFree: '无' },
    tags: ['culture'],
    avgDailyCost: 400,
    bestMonths: [11, 12, 1, 2],
    safetyLevel: 'medium',
    highlights: ['吴哥窟', '金边皇宫', '西哈努克港'],
    advisory: {
      customs: '头是神圣部位不可触摸，女性不可触碰僧侣。',
      safetyTips: '飞车抢夺时有发生，注意保管财物。'
    },
    festivals: [{ name: '送水节', month: '11月' }]
  },
  {
    id: 'LA',
    name: '老挝',
    continent: 'Asia',
    coordinates: { lat: 19.8563, lng: 102.4955 },
    visaPolicy: { policy: '落地签/电子签', conditionalFree: '无' },
    tags: ['culture', 'outdoor'],
    avgDailyCost: 350,
    bestMonths: [11, 12, 1, 2],
    safetyLevel: 'medium',
    highlights: ['琅勃拉邦', '万象', '万荣'],
    advisory: {
      customs: '生活节奏慢，布施仪式需保持安静。',
      safetyTips: '未开发区域可能存在未爆弹，切勿离开主路。'
    },
    festivals: [{ name: '泼水节', month: '4月' }]
  },
  {
    id: 'MM',
    name: '缅甸',
    continent: 'Asia',
    coordinates: { lat: 21.9162, lng: 95.9560 },
    visaPolicy: { policy: '电子签', conditionalFree: '无' },
    tags: ['culture'],
    avgDailyCost: 400,
    bestMonths: [11, 12, 1, 2],
    safetyLevel: 'low',
    highlights: ['蒲甘佛塔', '仰光大金塔', '茵莱湖'],
    advisory: {
      customs: '下身忌穿短裤（需穿笼基），进寺庙赤脚。',
      safetyTips: '局势不稳定，出行前请务必确认最新安全警告。'
    },
    festivals: [{ name: '点灯节', month: '10月' }]
  },
  {
    id: 'BN',
    name: '文莱',
    continent: 'Asia',
    coordinates: { lat: 4.5353, lng: 114.7277 },
    visaPolicy: { policy: '落地签', conditionalFree: '无' },
    tags: ['culture'],
    avgDailyCost: 800,
    bestMonths: [1, 2, 3, 4],
    safetyLevel: 'high',
    highlights: ['奥马尔·阿里·赛义夫丁苏丹清真寺', '水上村落'],
    advisory: {
      customs: '严格的伊斯兰教法，禁酒，周五祈祷时间店铺关闭。',
      safetyTips: '非常安全。'
    },
    festivals: [{ name: '苏丹生日', month: '7月' }]
  },

  // --- 南亚 South Asia ---
  {
    id: 'IN',
    name: '印度',
    continent: 'Asia',
    coordinates: { lat: 20.5937, lng: 78.9629 },
    visaPolicy: { policy: '电子签', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 400,
    bestMonths: [10, 11, 12, 1, 2, 3],
    safetyLevel: 'medium',
    highlights: ['泰姬陵', '瓦拉纳西', '斋浦尔', '果阿'],
    advisory: {
      customs: '摇头可能表示同意，由于宗教原因饮食差异大。',
      safetyTips: '注意饮食卫生（喝瓶装水），女性建议结伴出行。'
    },
    festivals: [{ name: '洒红节', month: '3月' }, { name: '排灯节', month: '10月或11月' }]
  },
  {
    id: 'NP',
    name: '尼泊尔',
    continent: 'Asia',
    coordinates: { lat: 28.3949, lng: 84.1240 },
    visaPolicy: { policy: '落地签 (免签证费)', conditionalFree: '无' },
    tags: ['outdoor', 'culture'],
    avgDailyCost: 350,
    bestMonths: [3, 4, 10, 11],
    safetyLevel: 'medium',
    highlights: ['加德满都', '博卡拉', '珠峰大本营 (EBC)'],
    advisory: {
      customs: 'Namaste是通用问候，尊重神牛。',
      safetyTips: '徒步需办理许可证，注意高原反应。'
    },
    festivals: [{ name: '洒红节', month: '3月' }]
  },
  {
    id: 'LK',
    name: '斯里兰卡',
    continent: 'Asia',
    coordinates: { lat: 7.8731, lng: 80.7718 },
    visaPolicy: { policy: '电子签/落地签', conditionalFree: '无' },
    tags: ['scenery', 'culture'],
    avgDailyCost: 500,
    bestMonths: [12, 1, 2, 3],
    safetyLevel: 'medium',
    highlights: ['狮子岩', '高山茶园火车', '米瑞莎观鲸'],
    advisory: {
      customs: '不要背对佛像拍照，点头Yes摇头No（独特晃头动作）。',
      safetyTips: '部分海域风浪大，乘车注意晕车。'
    },
    festivals: [{ name: '佛牙节', month: '7月或8月' }]
  },
  {
    id: 'MV',
    name: '马尔代夫',
    continent: 'Asia',
    coordinates: { lat: 3.2028, lng: 73.2207 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 3000,
    bestMonths: [11, 12, 1, 2, 3, 4],
    safetyLevel: 'high',
    highlights: ['水上屋', '深潜', '拖尾沙滩'],
    advisory: {
      customs: '严禁携带猪肉和酒入境，居民岛遵守伊斯兰习俗。',
      safetyTips: '注意水上活动安全，防晒。'
    },
    festivals: [{ name: '独立日', month: '7月' }]
  },
  {
    id: 'PK',
    name: '巴基斯坦',
    continent: 'Asia',
    coordinates: { lat: 30.3753, lng: 69.3451 },
    visaPolicy: { policy: '电子签', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 300,
    bestMonths: [5, 6, 7, 8, 9, 10],
    safetyLevel: 'low',
    highlights: ['罕萨河谷', '伊斯兰堡', 'K2大本营'],
    advisory: {
      customs: '对中国游客极度友好（巴铁），穿着需保守。',
      safetyTips: '部分边境地区不稳定，建议参团或请向导。'
    },
    festivals: [{ name: '开斋节', month: '变化' }]
  },

  // --- 中亚 Central Asia ---
  {
    id: 'KZ',
    name: '哈萨克斯坦',
    continent: 'Asia',
    coordinates: { lat: 48.0196, lng: 66.9237 },
    visaPolicy: { policy: '免签 (14天)', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 600,
    bestMonths: [5, 6, 7, 8, 9],
    safetyLevel: 'medium',
    highlights: ['阿拉木图', '恰伦峡谷', '阿斯塔纳'],
    advisory: {
      customs: '主要信奉伊斯兰教但世俗化，好客。',
      safetyTips: '冬季极寒，出租车需议价。'
    },
    festivals: [{ name: '纳吾肉孜节', month: '3月' }]
  },
  {
    id: 'UZ',
    name: '乌兹别克斯坦',
    continent: 'Asia',
    coordinates: { lat: 41.3775, lng: 64.5853 },
    visaPolicy: { policy: '免签 (10天)', conditionalFree: '无' },
    tags: ['culture'],
    avgDailyCost: 500,
    bestMonths: [4, 5, 9, 10],
    safetyLevel: 'medium',
    highlights: ['撒马尔罕', '布哈拉', '希瓦古城'],
    advisory: {
      customs: '丝绸之路核心，尊重当地长者。',
      safetyTips: '治安良好，夏季炎热干燥。'
    },
    festivals: [{ name: '丝绸香料节', month: '5月' }]
  },
  {
    id: 'KG',
    name: '吉尔吉斯斯坦',
    continent: 'Asia',
    coordinates: { lat: 41.2044, lng: 74.7661 },
    visaPolicy: { policy: '电子签/落地签', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 400,
    bestMonths: [6, 7, 8, 9],
    safetyLevel: 'medium',
    highlights: ['伊塞克湖', '比什凯克', '天山山脉'],
    advisory: {
      customs: '游牧文化，骑马是主要活动。',
      safetyTips: '山区天气多变，边境地区需通行证。'
    },
    festivals: [{ name: '世界游牧运动会', month: '9月(非每年)' }]
  },

  // --- 西亚 West Asia ---
  {
    id: 'AE',
    name: '阿联酋',
    continent: 'Asia',
    coordinates: { lat: 23.4241, lng: 53.8478 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 2000,
    bestMonths: [11, 12, 1, 2, 3],
    safetyLevel: 'high',
    highlights: ['迪拜哈利法塔', '谢赫扎耶德大清真寺', '法拉利世界'],
    advisory: {
      customs: '严禁公共场合饮酒，情侣行为需克制。',
      safetyTips: '极度安全，夏季酷热勿在户外久留。'
    },
    festivals: [{ name: '迪拜购物节', month: '1月' }]
  },
  {
    id: 'SA',
    name: '沙特阿拉伯',
    continent: 'Asia',
    coordinates: { lat: 23.8859, lng: 45.0792 },
    visaPolicy: { policy: '电子签/落地签', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 1500,
    bestMonths: [11, 12, 1, 2],
    safetyLevel: 'medium',
    highlights: ['埃尔奥拉 (AlUla)', '利雅得', '吉达古城'],
    advisory: {
      customs: '极为保守的伊斯兰国家，禁酒，每日祷告时店铺关闭。',
      safetyTips: '治安良好，但需严格遵守当地法律。'
    },
    festivals: [{ name: '利雅得狂欢季', month: '10月-3月' }]
  },
  {
    id: 'QA',
    name: '卡塔尔',
    continent: 'Asia',
    coordinates: { lat: 25.3548, lng: 51.1839 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['culture'],
    avgDailyCost: 1800,
    bestMonths: [11, 12, 1, 2, 3],
    safetyLevel: 'high',
    highlights: ['多哈伊斯兰艺术博物馆', '瓦吉夫集市'],
    advisory: {
      customs: '着装保守，禁酒（除指定酒店），周五上午休息。',
      safetyTips: '非常安全。'
    },
    festivals: [{ name: '卡塔尔国际美食节', month: '3月' }]
  },
  {
    id: 'IR',
    name: '伊朗',
    continent: 'Asia',
    coordinates: { lat: 32.4279, lng: 53.6880 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 500,
    bestMonths: [4, 5, 9, 10],
    safetyLevel: 'medium',
    highlights: ['波斯波利斯', '伊斯法罕广场', '粉红清真寺'],
    advisory: {
      customs: '女性必须戴头巾，竖大拇指是侮辱手势。',
      safetyTips: '社会治安良好，但需注意国际形势和制裁导致无法刷卡。'
    },
    festivals: [{ name: '诺鲁兹节 (波斯新年)', month: '3月' }]
  },
  {
    id: 'JO',
    name: '约旦',
    continent: 'Asia',
    coordinates: { lat: 30.5852, lng: 36.2384 },
    visaPolicy: { policy: '落地签', conditionalFree: '无' },
    tags: ['scenery', 'culture'],
    avgDailyCost: 1000,
    bestMonths: [3, 4, 5, 9, 10, 11],
    safetyLevel: 'medium',
    highlights: ['佩特拉古城', '瓦迪拉姆 (月亮谷)', '死海'],
    advisory: {
      customs: '贝都因文化，即使是帐篷也要经允许进入。',
      safetyTips: '周边地区局势复杂，但约旦本土相对稳定安全。'
    },
    festivals: [{ name: '杰拉什文化艺术节', month: '7月' }]
  },
  {
    id: 'GE',
    name: '格鲁吉亚',
    continent: 'Asia',
    coordinates: { lat: 42.3154, lng: 43.3569 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['scenery', 'culture'],
    avgDailyCost: 600,
    bestMonths: [5, 6, 9, 10],
    safetyLevel: 'high',
    highlights: ['第比利斯', '卡兹别克山', '红酒产区'],
    advisory: {
      customs: '红酒发源地，干杯文化盛行。',
      safetyTips: '非常安全，适合徒步和自驾。'
    },
    festivals: [{ name: '第比利斯城市节', month: '10月' }]
  },
  {
    id: 'AM',
    name: '亚美尼亚',
    continent: 'Asia',
    coordinates: { lat: 40.0691, lng: 45.0382 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['culture'],
    avgDailyCost: 500,
    bestMonths: [5, 6, 9, 10],
    safetyLevel: 'medium',
    highlights: ['埃里温', '塞凡湖', '修道院群'],
    advisory: {
      customs: '世界上第一个基督教国家，宗教氛围浓厚。',
      safetyTips: '与邻国阿塞拜疆边境关闭，请勿前往边境冲突区。'
    },
    festivals: [{ name: '水节', month: '7月' }]
  },
  {
    id: 'AZ',
    name: '阿塞拜疆',
    continent: 'Asia',
    coordinates: { lat: 40.1431, lng: 47.5769 },
    visaPolicy: { policy: '落地签/电子签', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 600,
    bestMonths: [4, 5, 6, 9, 10],
    safetyLevel: 'medium',
    highlights: ['巴库火焰塔', '泥火山', '舍基'],
    advisory: {
      customs: '茶文化盛行，喜欢用方糖佐茶。',
      safetyTips: '如有亚美尼亚入境章可能导致入境询问，注意边境安全。'
    },
    festivals: [{ name: '纳吾肉孜节', month: '3月' }]
  },
  {
    id: 'OM',
    name: '阿曼',
    continent: 'Asia',
    coordinates: { lat: 21.4735, lng: 55.9754 },
    visaPolicy: { policy: '免签 (14天)', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 1500,
    bestMonths: [10, 11, 12, 1, 2, 3],
    safetyLevel: 'high',
    highlights: ['马斯喀特', '瓦希巴沙漠', '尼兹瓦古堡'],
    advisory: {
      customs: '非常传统的阿拉伯国家，民风淳朴。',
      safetyTips: '自驾需注意骆驼穿行，极度安全。'
    },
    festivals: [{ name: '马斯喀特节', month: '1月-2月' }]
  },
  {
    id: 'TR',
    name: '土耳其',
    continent: 'Europe', // 跨洲，常被归类为欧洲旅游
    coordinates: { lat: 38.9637, lng: 35.2433 },
    visaPolicy: { policy: '电子签', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 800,
    bestMonths: [4, 5, 9, 10],
    safetyLevel: 'medium',
    highlights: ['伊斯坦布尔', '卡帕多奇亚热气球', '棉花堡', '以弗所'],
    advisory: {
      customs: '主要信奉伊斯兰教，注意着装，蓝色眼睛是护身符。',
      safetyTips: '城市注意防骗（擦鞋、高价酒托），东南部边境需谨慎。'
    },
    festivals: [{ name: '郁金香节', month: '4月' }]
  },

  // ==========================================
  // 欧洲 Europe (已生成)
  // ==========================================

  // --- 西欧 Western Europe ---
  {
    id: 'FR',
    name: '法国',
    continent: 'Europe',
    coordinates: { lat: 46.2276, lng: 2.2137 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 1800,
    bestMonths: [4, 5, 6, 9, 10],
    safetyLevel: 'medium',
    highlights: ['埃菲尔铁塔', '卢浮宫', '普罗旺斯', '蔚蓝海岸', '圣米歇尔山'],
    advisory: {
      customs: '进店主动问好 (Bonjour)，用餐时间较长，重视礼仪。',
      safetyTips: '巴黎等大城市需防范小偷，尤其在地铁和景点，注意罢工信息。'
    },
    festivals: [{ name: '国庆阅兵', month: '7月' }, { name: '戛纳电影节', month: '5月' }]
  },
  {
    id: 'NL',
    name: '荷兰',
    continent: 'Europe',
    coordinates: { lat: 52.1326, lng: 5.2913 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 1600,
    bestMonths: [4, 5, 6, 7, 8],
    safetyLevel: 'high',
    highlights: ['阿姆斯特丹运河', '库肯霍夫郁金香公园', '羊角村', '风车村'],
    advisory: {
      customs: '直接坦率，自行车优先权极高。',
      safetyTips: '阿姆斯特丹红灯区严禁拍照，注意自行车流。'
    },
    festivals: [{ name: '国王节', month: '4月' }]
  },
  {
    id: 'BE',
    name: '比利时',
    continent: 'Europe',
    coordinates: { lat: 50.5039, lng: 4.4699 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture'],
    avgDailyCost: 1500,
    bestMonths: [4, 5, 6, 9],
    safetyLevel: 'medium',
    highlights: ['布鲁塞尔大广场', '布鲁日', '根特'],
    advisory: {
      customs: '啤酒和巧克力是国宝，语言分为法语区和荷语区。',
      safetyTips: '布鲁塞尔部分车站周边治安较差，夜间需小心。'
    },
    festivals: [{ name: '明日世界电子音乐节', month: '7月' }]
  },
  {
    id: 'LU',
    name: '卢森堡',
    continent: 'Europe',
    coordinates: { lat: 49.8153, lng: 6.1296 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 1800,
    bestMonths: [5, 6, 7, 8, 9],
    safetyLevel: 'high',
    highlights: ['卢森堡古堡', '阿道夫大桥'],
    advisory: {
      customs: '全国公共交通免费。',
      safetyTips: '极度安全。'
    },
    festivals: [{ name: '国庆节', month: '6月' }]
  },
  {
    id: 'GB',
    name: '英国',
    continent: 'Europe',
    coordinates: { lat: 55.3781, lng: -3.4360 },
    visaPolicy: { policy: '需要签证', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 1800,
    bestMonths: [5, 6, 7, 8, 9],
    safetyLevel: 'high',
    highlights: ['大本钟', '大英博物馆', '爱丁堡城堡', '湖区', '巨石阵'],
    advisory: {
      customs: '排队意识强，各种场合习惯说Sorry，酒吧文化盛行。',
      safetyTips: '伦敦部分区域夜间注意安全，注意左侧通行。'
    },
    festivals: [{ name: '爱丁堡艺术节', month: '8月' }, { name: '温布尔登网球赛', month: '6月-7月' }]
  },
  {
    id: 'IE',
    name: '爱尔兰',
    continent: 'Europe',
    coordinates: { lat: 53.1424, lng: -7.6921 },
    visaPolicy: { policy: '需要签证 (BIVS可与英国互通)', conditionalFree: '无' },
    tags: ['scenery', 'culture'],
    avgDailyCost: 1600,
    bestMonths: [5, 6, 7, 8, 9],
    safetyLevel: 'high',
    highlights: ['莫赫悬崖', '都柏林三一学院', '凯利环路'],
    advisory: {
      customs: '热爱音乐和健谈，Céad Míle Fáilte (十万次欢迎)。',
      safetyTips: '乡村道路狭窄，自驾需小心。'
    },
    festivals: [{ name: '圣帕特里克节', month: '3月' }]
  },

  // --- 中欧 Central Europe ---
  {
    id: 'DE',
    name: '德国',
    continent: 'Europe',
    coordinates: { lat: 51.1657, lng: 10.4515 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 1500,
    bestMonths: [5, 6, 7, 8, 9, 10],
    safetyLevel: 'high',
    highlights: ['新天鹅堡', '柏林墙', '科隆大教堂', '慕尼黑'],
    advisory: {
      customs: '严谨守时，周日商店关闭，高速公路部分路段不限速。',
      safetyTips: '非常安全，注意大城市火车站周边流浪汉。'
    },
    festivals: [{ name: '慕尼黑啤酒节', month: '9月-10月' }]
  },
  {
    id: 'CH',
    name: '瑞士',
    continent: 'Europe',
    coordinates: { lat: 46.8182, lng: 8.2275 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 2500,
    bestMonths: [1, 2, 6, 7, 8, 12],
    safetyLevel: 'high',
    highlights: ['少女峰', '马特洪峰', '卢塞恩湖', '苏黎世'],
    advisory: {
      customs: '极度守时，安静，物价极高。',
      safetyTips: '极其安全，户外运动需购买保险。'
    },
    festivals: [{ name: '巴塞尔狂欢节', month: '2月或3月' }]
  },
  {
    id: 'AT',
    name: '奥地利',
    continent: 'Europe',
    coordinates: { lat: 47.5162, lng: 14.5501 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 1600,
    bestMonths: [5, 6, 7, 8, 9, 12],
    safetyLevel: 'high',
    highlights: ['维也纳美泉宫', '哈尔施塔特', '萨尔茨堡'],
    advisory: {
      customs: '咖啡馆文化，喜欢古典音乐。',
      safetyTips: '非常安全。'
    },
    festivals: [{ name: '萨尔茨堡音乐节', month: '7月-8月' }]
  },
  {
    id: 'PL',
    name: '波兰',
    continent: 'Europe',
    coordinates: { lat: 51.9194, lng: 19.1451 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture'],
    avgDailyCost: 700,
    bestMonths: [5, 6, 7, 8, 9],
    safetyLevel: 'high',
    highlights: ['克拉科夫古城', '奥斯威辛集中营', '华沙'],
    advisory: {
      customs: '宗教氛围浓厚，尊重历史。',
      safetyTips: '非常安全，性价比高。'
    },
    festivals: [{ name: '肖邦钢琴比赛', month: '10月(每5年)' }]
  },
  {
    id: 'CZ',
    name: '捷克',
    continent: 'Europe',
    coordinates: { lat: 49.8175, lng: 15.4730 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 900,
    bestMonths: [4, 5, 6, 9, 10],
    safetyLevel: 'high',
    highlights: ['布拉格查理大桥', 'CK小镇', '人骨教堂'],
    advisory: {
      customs: '啤酒比水便宜，木偶戏著名。',
      safetyTips: '布拉格游客区注意防扒窃和换汇陷阱。'
    },
    festivals: [{ name: '布拉格之春音乐节', month: '5月' }]
  },
  {
    id: 'HU',
    name: '匈牙利',
    continent: 'Europe',
    coordinates: { lat: 47.1625, lng: 19.5033 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 800,
    bestMonths: [4, 5, 6, 9, 10],
    safetyLevel: 'high',
    highlights: ['布达佩斯国会大厦', '塞切尼温泉', '渔人堡'],
    advisory: {
      customs: '温泉文化，敬酒时啤酒杯不碰杯（历史原因）。',
      safetyTips: '出租车建议使用Bolt，避免路边扬招。'
    },
    festivals: [{ name: '岛节 (Sziget)', month: '8月' }]
  },
  {
    id: 'SK',
    name: '斯洛伐克',
    continent: 'Europe',
    coordinates: { lat: 48.6690, lng: 19.6990 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['scenery', 'culture'],
    avgDailyCost: 800,
    bestMonths: [5, 6, 7, 8, 9],
    safetyLevel: 'high',
    highlights: ['布拉迪斯拉发', '塔特拉山'],
    advisory: {
      customs: '热爱自然和徒步。',
      safetyTips: '非常安全。'
    },
    festivals: [{ name: '加冕庆典', month: '6月' }]
  },

  // --- 北欧 Northern Europe ---
  {
    id: 'SE',
    name: '瑞典',
    continent: 'Europe',
    coordinates: { lat: 60.1282, lng: 18.6435 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['scenery', 'culture'],
    avgDailyCost: 1800,
    bestMonths: [6, 7, 8, 12, 1, 2],
    safetyLevel: 'high',
    highlights: ['斯德哥尔摩老城', '基律纳冰酒店', '瓦萨沉船博物馆'],
    advisory: {
      customs: 'Fika (咖啡小憩) 文化，排队严格。',
      safetyTips: '非常安全，冬季注意防滑和极夜心理调节。'
    },
    festivals: [{ name: '仲夏节', month: '6月' }]
  },
  {
    id: 'NO',
    name: '挪威',
    continent: 'Europe',
    coordinates: { lat: 60.4720, lng: 8.4689 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 2200,
    bestMonths: [6, 7, 8, 1, 2],
    safetyLevel: 'high',
    highlights: ['四大峡湾', '布道石', '罗弗敦群岛', '奥斯陆'],
    advisory: {
      customs: '热爱户外，物价极高。',
      safetyTips: '野外徒步需做足准备，天气多变。'
    },
    festivals: [{ name: '国庆日', month: '5月17日' }]
  },
  {
    id: 'DK',
    name: '丹麦',
    continent: 'Europe',
    coordinates: { lat: 56.2639, lng: 9.5018 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 1800,
    bestMonths: [5, 6, 7, 8],
    safetyLevel: 'high',
    highlights: ['哥本哈根新港', '小美人鱼像', '乐高乐园'],
    advisory: {
      customs: 'Hygge (惬意) 生活哲学，自行车王国。',
      safetyTips: '非常安全。'
    },
    festivals: [{ name: '罗斯基勒音乐节', month: '6月-7月' }]
  },
  {
    id: 'FI',
    name: '芬兰',
    continent: 'Europe',
    coordinates: { lat: 61.9241, lng: 25.7482 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 1800,
    bestMonths: [6, 7, 8, 12, 1, 2],
    safetyLevel: 'high',
    highlights: ['圣诞老人村', '赫尔辛基大教堂', '拉普兰极光'],
    advisory: {
      customs: '桑拿是社交场所，沉默是金。',
      safetyTips: '非常安全，冬季极寒。'
    },
    festivals: [{ name: '仲夏节', month: '6月' }]
  },
  {
    id: 'IS',
    name: '冰岛',
    continent: 'Europe',
    coordinates: { lat: 64.9631, lng: -19.0208 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 2200,
    bestMonths: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3],
    safetyLevel: 'high',
    highlights: ['蓝湖', '黄金圈', '黑沙滩', '极光', '钻石沙滩'],
    advisory: {
      customs: '进屋脱鞋，洗澡前必须淋浴净身（温泉）。',
      safetyTips: '天气极其多变，自驾务必查看路况，风速极大。'
    },
    festivals: [{ name: '冰岛电波音乐节', month: '11月' }]
  },

  // --- 南欧 Southern Europe ---
  {
    id: 'IT',
    name: '意大利',
    continent: 'Europe',
    coordinates: { lat: 41.8719, lng: 12.5674 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 1600,
    bestMonths: [4, 5, 6, 9, 10],
    safetyLevel: 'medium',
    highlights: ['罗马斗兽场', '威尼斯水城', '佛罗伦萨', '阿玛尔菲海岸', '比萨斜塔'],
    advisory: {
      customs: '穿着得体进入教堂，站着喝咖啡更便宜，晚餐时间晚。',
      safetyTips: '热门景点注意防盗，吉普赛人搭讪需警惕。'
    },
    festivals: [{ name: '威尼斯狂欢节', month: '2月' }, { name: '威尼斯电影节', month: '8月-9月' }]
  },
  {
    id: 'ES',
    name: '西班牙',
    continent: 'Europe',
    coordinates: { lat: 40.4637, lng: -3.7492 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 1400,
    bestMonths: [4, 5, 6, 9, 10],
    safetyLevel: 'medium',
    highlights: ['巴塞罗那圣家堂', '马德里皇宫', '阿尔罕布拉宫', '塞维利亚'],
    advisory: {
      customs: '午休时间长，晚餐极晚 (21:00后)，热情奔放。',
      safetyTips: '巴塞罗那等地扒手猖獗，注意保管财物。'
    },
    festivals: [{ name: '奔牛节', month: '7月' }, { name: '番茄节', month: '8月' }]
  },
  {
    id: 'PT',
    name: '葡萄牙',
    continent: 'Europe',
    coordinates: { lat: 39.3999, lng: -8.2245 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 1000,
    bestMonths: [4, 5, 6, 9, 10],
    safetyLevel: 'high',
    highlights: ['里斯本电车', '辛特拉佩纳宫', '波尔图酒窖', '阿尔加维海滩'],
    advisory: {
      customs: '法朵 (Fado) 音乐，蛋挞发源地。',
      safetyTips: '非常安全，路面多碎石坡路，穿舒适鞋子。'
    },
    festivals: [{ name: '圣安东尼节', month: '6月' }]
  },
  {
    id: 'GR',
    name: '希腊',
    continent: 'Europe',
    coordinates: { lat: 39.0742, lng: 21.8243 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['scenery', 'culture'],
    avgDailyCost: 1200,
    bestMonths: [5, 6, 9, 10],
    safetyLevel: 'medium',
    highlights: ['雅典卫城', '圣托里尼', '扎金索斯', '克里特岛'],
    advisory: {
      customs: '生活节奏慢，点头可能表示“不”（向上仰头）。',
      safetyTips: '雅典部分区域治安一般，旺季海岛住宿紧张。'
    },
    festivals: [{ name: '雅典埃皮达鲁斯节', month: '6月-8月' }]
  },
  {
    id: 'MT',
    name: '马耳他',
    continent: 'Europe',
    coordinates: { lat: 35.9375, lng: 14.3754 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['scenery', 'culture'],
    avgDailyCost: 1200,
    bestMonths: [4, 5, 6, 9, 10],
    safetyLevel: 'high',
    highlights: ['瓦莱塔', '蓝窗 (遗址)', '大力水手村'],
    advisory: {
      customs: '骑士团文化，英语通用。',
      safetyTips: '非常安全。'
    },
    festivals: [{ name: '国际烟花节', month: '4月' }]
  },
  {
    id: 'CY',
    name: '塞浦路斯',
    continent: 'Europe',
    coordinates: { lat: 35.1264, lng: 33.4299 },
    visaPolicy: { policy: '需要签证', conditionalFree: '持多次申根签免签' },
    tags: ['scenery'],
    avgDailyCost: 1100,
    bestMonths: [5, 6, 9, 10],
    safetyLevel: 'high',
    highlights: ['帕福斯古城', '爱神岩'],
    advisory: {
      customs: '分为希腊族和土耳其族区域。',
      safetyTips: '注意南北塞分界线规定。'
    },
    festivals: [{ name: '利马索尔狂欢节', month: '2月或3月' }]
  },

  // --- 东欧与巴尔干 Eastern Europe & Balkans ---
  {
    id: 'RU',
    name: '俄罗斯',
    continent: 'Europe',
    coordinates: { lat: 61.5240, lng: 105.3188 },
    visaPolicy: { policy: '电子签/团签免签', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 800,
    bestMonths: [6, 7, 8, 1, 2],
    safetyLevel: 'medium',
    highlights: ['红场', '冬宫', '贝加尔湖 (亚洲部分)', '夏宫'],
    advisory: {
      customs: '进教堂女性戴头巾，送花忌送偶数。',
      safetyTips: '注意最新的地缘政治风险和支付方式（国际卡无法使用）。'
    },
    festivals: [{ name: '红帆节', month: '6月' }]
  },
  {
    id: 'HR',
    name: '克罗地亚',
    continent: 'Europe',
    coordinates: { lat: 45.1000, lng: 15.2000 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['scenery', 'culture'],
    avgDailyCost: 1000,
    bestMonths: [5, 6, 9, 10],
    safetyLevel: 'high',
    highlights: ['杜布罗夫尼克 (君临城)', '十六湖国家公园', '斯普利特'],
    advisory: {
      customs: '领带发源地，咖啡文化。',
      safetyTips: '非常安全，夏季海滨拥挤。'
    },
    festivals: [{ name: '杜布罗夫尼克夏季艺术节', month: '7月-8月' }]
  },
  {
    id: 'RS',
    name: '塞尔维亚',
    continent: 'Europe',
    coordinates: { lat: 44.0165, lng: 21.0059 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['culture'],
    avgDailyCost: 600,
    bestMonths: [5, 6, 9, 10],
    safetyLevel: 'high',
    highlights: ['贝尔格莱德要塞', '圣萨瓦大教堂', '诺维萨德'],
    advisory: {
      customs: '对中国游客非常友好，夜生活丰富。',
      safetyTips: '非常安全，出租车注意计价器。'
    },
    festivals: [{ name: 'Exit音乐节', month: '7月' }]
  },
  {
    id: 'BA',
    name: '波黑',
    continent: 'Europe',
    coordinates: { lat: 43.9159, lng: 17.6791 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 500,
    bestMonths: [5, 6, 9, 10],
    safetyLevel: 'medium',
    highlights: ['萨拉热窝', '莫斯塔尔古桥'],
    advisory: {
      customs: '东西方文化交汇，咖啡加糖煮。',
      safetyTips: '切勿进入未标记的野外区域（地雷残留风险）。'
    },
    festivals: [{ name: '萨拉热窝电影节', month: '8月' }]
  },
  {
    id: 'ME',
    name: '黑山',
    continent: 'Europe',
    coordinates: { lat: 42.7087, lng: 19.3744 },
    visaPolicy: { policy: '需要签证', conditionalFree: '持美/申根/英签免签' },
    tags: ['scenery'],
    avgDailyCost: 700,
    bestMonths: [5, 6, 9, 10],
    safetyLevel: 'high',
    highlights: ['科托尔湾', '布德瓦'],
    advisory: {
      customs: '生活节奏悠闲。',
      safetyTips: '山路崎岖，自驾需谨慎。'
    },
    festivals: [{ name: '含羞草节', month: '2月' }]
  },
  {
    id: 'AL',
    name: '阿尔巴尼亚',
    continent: 'Europe',
    coordinates: { lat: 41.1533, lng: 20.1683 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['scenery'],
    avgDailyCost: 500,
    bestMonths: [5, 6, 9, 10],
    safetyLevel: 'medium',
    highlights: ['地拉那', '卡萨米尔海滩', '培拉特千窗之城'],
    advisory: {
      customs: '摇头表示是，点头表示否（传统习俗，现已混淆）。',
      safetyTips: '相对安全，基础设施建设中。'
    },
    festivals: [{ name: '地拉那色彩节', month: '3月' }]
  },
  {
    id: 'RO',
    name: '罗马尼亚',
    continent: 'Europe',
    coordinates: { lat: 45.9432, lng: 24.9668 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 600,
    bestMonths: [5, 6, 9, 10],
    safetyLevel: 'medium',
    highlights: ['布兰城堡 (吸血鬼城堡)', '布加勒斯特议会宫'],
    advisory: {
      customs: '民间传说丰富。',
      safetyTips: '注意流浪狗和出租车宰客。'
    },
    festivals: [{ name: '中世纪艺术节', month: '7月' }]
  },
  {
    id: 'BG',
    name: '保加利亚',
    continent: 'Europe',
    coordinates: { lat: 42.7339, lng: 25.4858 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 500,
    bestMonths: [5, 6, 9, 10],
    safetyLevel: 'medium',
    highlights: ['里拉修道院', '索菲亚亚历山大·涅夫斯基大教堂'],
    advisory: {
      customs: '玫瑰之国，酸奶发源地，点头不算摇头算 (传统)。',
      safetyTips: '治安总体尚可，注意小偷。'
    },
    festivals: [{ name: '玫瑰节', month: '6月' }]
  },
  {
    id: 'SI',
    name: '斯洛文尼亚',
    continent: 'Europe',
    coordinates: { lat: 46.1512, lng: 14.9955 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 1000,
    bestMonths: [5, 6, 9, 10],
    safetyLevel: 'high',
    highlights: ['布莱德湖', '卢布尔雅那'],
    advisory: {
      customs: '绿色国家，重视环保。',
      safetyTips: '非常安全。'
    },
    festivals: [{ name: '卢布尔雅那夏日节', month: '7月-8月' }]
  },
  {
    id: 'EE',
    name: '爱沙尼亚',
    continent: 'Europe',
    coordinates: { lat: 58.5953, lng: 25.0136 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture'],
    avgDailyCost: 900,
    bestMonths: [6, 7, 8],
    safetyLevel: 'high',
    highlights: ['塔林老城'],
    advisory: {
      customs: '数字化程度极高，Skype发源地。',
      safetyTips: '非常安全。'
    },
    festivals: [{ name: '歌舞庆典', month: '7月(每5年)' }]
  },
  {
    id: 'LV',
    name: '拉脱维亚',
    continent: 'Europe',
    coordinates: { lat: 56.8796, lng: 24.6032 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture'],
    avgDailyCost: 800,
    bestMonths: [6, 7, 8],
    safetyLevel: 'high',
    highlights: ['里加老城', '尤尔马拉海滩'],
    advisory: {
      customs: '花卉文化，送花送单数。',
      safetyTips: '非常安全。'
    },
    festivals: [{ name: '仲夏节 (Ligo)', month: '6月' }]
  },
  {
    id: 'LT',
    name: '立陶宛',
    continent: 'Europe',
    coordinates: { lat: 55.1694, lng: 23.8813 },
    visaPolicy: { policy: '申根签证', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 700,
    bestMonths: [6, 7, 8],
    safetyLevel: 'high',
    highlights: ['维尔纽斯老城', '十字架山', '特拉凯城堡'],
    advisory: {
      customs: '篮球是第二宗教。',
      safetyTips: '非常安全。'
    },
    festivals: [{ name: '歌舞庆典', month: '7月(每4年)' }]
  },
  {
    id: 'BY',
    name: '白俄罗斯',
    continent: 'Europe',
    coordinates: { lat: 53.7098, lng: 27.9534 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['culture'],
    avgDailyCost: 500,
    bestMonths: [6, 7, 8],
    safetyLevel: 'medium',
    highlights: ['明斯克', '米尔城堡'],
    advisory: {
      customs: '东欧传统，苏联风情保留较多。',
      safetyTips: '政治局势特殊，需关注出入境口岸开放情况（陆路边境可能关闭）。'
    },
    festivals: [{ name: '斯拉夫巴扎艺术节', month: '7月' }]
  },

  // ==========================================
  // 非洲 Africa (已生成)
  // ==========================================

  // --- 北非 North Africa ---
  {
    id: 'EG',
    name: '埃及',
    continent: 'Africa',
    coordinates: { lat: 26.8206, lng: 30.8025 },
    visaPolicy: { policy: '落地签', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 600,
    bestMonths: [10, 11, 12, 1, 2, 3],
    safetyLevel: 'medium',
    highlights: ['金字塔', '卢克索神庙', '红海潜水', '阿斯旺大坝'],
    advisory: {
      customs: '禁酒禁猪肉，女性着装保守。',
      safetyTips: '景区商贩纠缠较多，注意价格陷阱。'
    },
    festivals: [{ name: '阿布辛贝太阳节', month: '2月和10月' }]
  },
  {
    id: 'MA',
    name: '摩洛哥',
    continent: 'Africa',
    coordinates: { lat: 31.7917, lng: -7.0926 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 700,
    bestMonths: [3, 4, 5, 9, 10, 11],
    safetyLevel: 'medium',
    highlights: ['撒哈拉沙漠', '舍夫沙万蓝城', '马拉喀什', '非斯古城'],
    advisory: {
      customs: '拍照需征得同意，禁止拍摄警察和政府建筑，左手不洁。',
      safetyTips: '老城区 (Medina) 道路复杂易迷路，防范带路党。'
    },
    festivals: [{ name: '玫瑰节', month: '5月' }]
  },
  {
    id: 'TN',
    name: '突尼斯',
    continent: 'Africa',
    coordinates: { lat: 33.8869, lng: 9.5375 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 600,
    bestMonths: [4, 5, 6, 9, 10],
    safetyLevel: 'medium',
    highlights: ['蓝白小镇 (Sidi Bou Said)', '迦太基遗址', '撒哈拉沙漠'],
    advisory: {
      customs: '穆斯林国家，但也生产葡萄酒，相对开放。',
      safetyTips: '边境地区需避免前往，旅游区注意财物。'
    },
    festivals: [{ name: '迦太基国际艺术节', month: '7月-8月' }]
  },

  // --- 东非 East Africa ---
  {
    id: 'KE',
    name: '肯尼亚',
    continent: 'Africa',
    coordinates: { lat: -0.0236, lng: 37.9062 },
    visaPolicy: { policy: '电子签', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 1500,
    bestMonths: [7, 8, 9, 1, 2],
    safetyLevel: 'medium',
    highlights: ['马赛马拉', '安博塞利', '纳库鲁湖', '蒙巴萨海滩'],
    advisory: {
      customs: 'Hakuna Matata是没问题。',
      safetyTips: 'Safari需听从向导，夜间勿在城市随意步行。'
    },
    festivals: [{ name: '动物大迁徙', month: '7月-9月' }]
  },
  {
    id: 'TZ',
    name: '坦桑尼亚',
    continent: 'Africa',
    coordinates: { lat: -6.3690, lng: 34.8888 },
    visaPolicy: { policy: '落地签', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 1400,
    bestMonths: [6, 7, 8, 9, 10],
    safetyLevel: 'medium',
    highlights: ['塞伦盖蒂', '乞力马扎罗山', '桑给巴尔岛', '恩戈罗恩戈罗'],
    advisory: {
      customs: '主要信奉伊斯兰教和基督教，尊重当地信仰。',
      safetyTips: '野外Safari注意安全，防蚊虫叮咬。'
    },
    festivals: [{ name: '桑给巴尔国际电影节', month: '7月' }]
  },
  {
    id: 'ET',
    name: '埃塞俄比亚',
    continent: 'Africa',
    coordinates: { lat: 9.1450, lng: 40.4897 },
    visaPolicy: { policy: '电子签/落地签', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 500,
    bestMonths: [10, 11, 12, 1, 2, 3],
    safetyLevel: 'medium',
    highlights: ['拉利贝拉岩石教堂', '达纳吉尔凹地 (火山)', '瑟门山'],
    advisory: {
      customs: '拥有独特的历法和时间计算方式，咖啡发源地。',
      safetyTips: '部分地区存在种族冲突，出行前务必查询安全形势。'
    },
    festivals: [{ name: '十字架节 (Meskel)', month: '9月' }]
  },
   {
    id: 'RW',
    name: '卢旺达',
    continent: 'Africa',
    coordinates: { lat: -1.9403, lng: 29.8739 },
    visaPolicy: { policy: '落地签 (30天)', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 1500,
    bestMonths: [6, 7, 8, 9, 12, 1],
    safetyLevel: 'high',
    highlights: ['火山国家公园 (大猩猩追踪)', '基加利大屠杀纪念馆'],
    advisory: {
      customs: '严禁使用塑料袋，每月最后一个周六是全民清洁日。',
      safetyTips: '非常安全，治安在非洲名列前茅。'
    },
    festivals: [{ name: '大猩猩命名仪式', month: '9月' }]
  },
  {
    id: 'UG',
    name: '乌干达',
    continent: 'Africa',
    coordinates: { lat: 1.3733, lng: 32.2903 },
    visaPolicy: { policy: '电子签/落地签', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 1000,
    bestMonths: [6, 7, 8, 12, 1, 2],
    safetyLevel: 'medium',
    highlights: ['布恩迪难以穿越的森林', '尼罗河源头'],
    advisory: {
      customs: '非洲明珠，人民热情。',
      safetyTips: '注意交通安全，避免夜间长途行车。'
    },
    festivals: [{ name: '尼罗河节', month: '8月' }]
  },

  // --- 印度洋岛国 Indian Ocean Islands ---
  {
    id: 'MU',
    name: '毛里求斯',
    continent: 'Africa',
    coordinates: { lat: -20.3484, lng: 57.5522 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 1800,
    bestMonths: [5, 6, 7, 8, 9, 10, 11, 12],
    safetyLevel: 'high',
    highlights: ['七色土', '鹿岛', '莫纳山'],
    advisory: {
      customs: '多元文化融合，度度鸟的故乡。',
      safetyTips: '非常安全，适合蜜月。'
    },
    festivals: [{ name: '排灯节', month: '10月或11月' }]
  },
  {
    id: 'SC',
    name: '塞舌尔',
    continent: 'Africa',
    coordinates: { lat: -4.6796, lng: 55.4920 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 2500,
    bestMonths: [4, 5, 10, 11],
    safetyLevel: 'high',
    highlights: ['拉迪格岛', '普拉兰岛', '海椰子'],
    advisory: {
      customs: '环保意识极强，禁止捡拾贝壳带出境。',
      safetyTips: '非常安全。'
    },
    festivals: [{ name: '克里奥尔节', month: '10月' }]
  },
  {
    id: 'MG',
    name: '马达加斯加',
    continent: 'Africa',
    coordinates: { lat: -18.7669, lng: 46.8691 },
    visaPolicy: { policy: '落地签', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 600,
    bestMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    safetyLevel: 'medium',
    highlights: ['猴面包树大道', '昂达西贝 (狐猴)', '贝马拉哈石林'],
    advisory: {
      customs: '禁忌 (Fady) 很多，手指不要指人。',
      safetyTips: '基础设施较差，路况颠簸，夜间避免出行。'
    },
    festivals: [{ name: '鲸鱼节', month: '7月' }]
  },

  // --- 南部非洲 Southern Africa ---
  {
    id: 'ZA',
    name: '南非',
    continent: 'Africa',
    coordinates: { lat: -30.5595, lng: 22.9375 },
    visaPolicy: { policy: '需要签证', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 1200,
    bestMonths: [5, 6, 7, 8, 9, 10], // 观鲸和Safari
    safetyLevel: 'medium',
    highlights: ['桌山', '克鲁格国家公园', '好望角', '花园大道'],
    advisory: {
      customs: '多元文化，称为彩虹之国，给小费是惯例。',
      safetyTips: '约翰内斯堡等大城市治安较差，必须自驾或包车，避免夜间步行，锁好车门。'
    },
    festivals: [{ name: '开普敦爵士音乐节', month: '3月' }]
  },
  {
    id: 'NA',
    name: '纳米比亚',
    continent: 'Africa',
    coordinates: { lat: -22.9576, lng: 18.4904 },
    visaPolicy: { policy: '需要签证', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 1500,
    bestMonths: [6, 7, 8, 9, 10],
    safetyLevel: 'high',
    highlights: ['苏丝斯黎红沙漠', '埃托沙国家公园', '骷髅海岸'],
    advisory: {
      customs: '地广人稀，德式风情保留。',
      safetyTips: '自驾主要为砂石路，注意车速，防止侧翻。'
    },
    festivals: [{ name: '慕尼黑啤酒节 (温得和克)', month: '10月' }]
  },
  {
    id: 'BW',
    name: '博茨瓦纳',
    continent: 'Africa',
    coordinates: { lat: -22.3285, lng: 24.6849 },
    visaPolicy: { policy: '落地签', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 2000,
    bestMonths: [5, 6, 7, 8, 9, 10],
    safetyLevel: 'high',
    highlights: ['奥卡万戈三角洲', '乔贝国家公园'],
    advisory: {
      customs: '高端低密度旅游政策，保护野生动物。',
      safetyTips: '非常安全，也是非洲最昂贵的Safari目的地之一。'
    },
    festivals: [{ name: '马埃恩文化节', month: '8月' }]
  },
  {
    id: 'ZW',
    name: '津巴布韦',
    continent: 'Africa',
    coordinates: { lat: -19.0154, lng: 29.1549 },
    visaPolicy: { policy: '落地签', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 1000,
    bestMonths: [5, 6, 7, 8, 9, 10],
    safetyLevel: 'medium',
    highlights: ['维多利亚瀑布', '马托博山', '万基国家公园'],
    advisory: {
      customs: '注重礼貌，握手礼常见。',
      safetyTips: '经济状况波动，携带足量美元现金。'
    },
    festivals: [{ name: '哈拉雷国际艺术节', month: '4月-5月' }]
  },
  {
    id: 'ZM',
    name: '赞比亚',
    continent: 'Africa',
    coordinates: { lat: -13.1339, lng: 27.8493 },
    visaPolicy: { policy: '电子签/落地签', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 1000,
    bestMonths: [6, 7, 8, 9, 10],
    safetyLevel: 'medium',
    highlights: ['维多利亚瀑布 (魔鬼池)', '南卢安瓜国家公园'],
    advisory: {
      customs: '爱好和平，对游客友好。',
      safetyTips: '疟疾区需防蚊，注意河马鳄鱼。'
    },
    festivals: [{ name: '库翁博卡庆典', month: '3月或4月' }]
  },

  // --- 西非 West Africa ---
  {
    id: 'GH',
    name: '加纳',
    continent: 'Africa',
    coordinates: { lat: 7.9465, lng: -1.0232 },
    visaPolicy: { policy: '落地签 (需预审) / 电子签', conditionalFree: '无' },
    tags: ['culture'],
    avgDailyCost: 600,
    bestMonths: [11, 12, 1, 2, 3],
    safetyLevel: 'medium',
    highlights: ['海岸角城堡', '卡库姆国家公园'],
    advisory: {
      customs: '黄金海岸历史，阿坎族文化。',
      safetyTips: '治安相对西非其他国家较好，注意交通安全。'
    },
    festivals: [{ name: '奥古节', month: '9月' }]
  },
  {
    id: 'SN',
    name: '塞内加尔',
    continent: 'Africa',
    coordinates: { lat: 14.4974, lng: -14.4524 },
    visaPolicy: { policy: '落地签/免签政策变动频繁', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 700,
    bestMonths: [11, 12, 1, 2, 3, 4, 5],
    safetyLevel: 'medium',
    highlights: ['玫瑰湖', '戈雷岛', '达喀尔'],
    advisory: {
      customs: '好客 (Teranga) 文化。',
      safetyTips: '达喀尔市区注意扒窃，边境地区慎入。'
    },
    festivals: [{ name: '达喀尔双年展', month: '5月-6月(双数年)' }]
  },
    {
    id: 'CV',
    name: '佛得角',
    continent: 'Africa',
    coordinates: { lat: 16.0021, lng: -24.0132 },
    visaPolicy: { policy: '落地签', conditionalFree: '无' },
    tags: ['scenery', 'culture'],
    avgDailyCost: 800,
    bestMonths: [10, 11, 12, 1, 2, 3, 4, 5, 6],
    safetyLevel: 'high',
    highlights: ['萨尔岛海滩', '福戈火山'],
    advisory: {
      customs: '克里奥尔文化，音乐之乡 (Morna)。',
      safetyTips: '政治稳定，非常安全。'
    },
    festivals: [{ name: '狂欢节', month: '2月' }]
  },

  // ==========================================
  // 美洲 Americas (已生成)
  // ==========================================

  // --- 北美 North America ---
  {
    id: 'US',
    name: '美国',
    continent: 'North America',
    coordinates: { lat: 37.0902, lng: -95.7129 },
    visaPolicy: { policy: '需要签证', conditionalFree: '无' },
    tags: ['culture', 'outdoor', 'scenery'],
    avgDailyCost: 2000,
    bestMonths: [5, 6, 7, 8, 9, 10],
    safetyLevel: 'medium',
    highlights: ['大峡谷', '黄石公园', '纽约时代广场', '好莱坞', '优胜美地'],
    advisory: {
      customs: '小费文化重要 (15%-20%)。',
      safetyTips: '注意枪支管控问题，夜间避开危险街区。'
    },
    festivals: [{ name: '独立日', month: '7月' }]
  },
  {
    id: 'CA',
    name: '加拿大',
    continent: 'North America',
    coordinates: { lat: 56.1304, lng: -106.3468 },
    visaPolicy: { policy: '需要签证', conditionalFree: '持有美签可申请简化' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 1500,
    bestMonths: [5, 6, 7, 8, 9, 10],
    safetyLevel: 'high',
    highlights: ['班夫国家公园', '尼亚加拉瀑布', 'CN塔', '魁北克古城'],
    advisory: {
      customs: '友好礼貌，喜欢排队。',
      safetyTips: '野外注意防熊，冬季注意防寒。'
    },
    festivals: [{ name: '卡尔加里牛仔节', month: '7月' }]
  },
  {
    id: 'MX',
    name: '墨西哥',
    continent: 'North America',
    coordinates: { lat: 23.6345, lng: -102.5528 },
    visaPolicy: { policy: '需要签证', conditionalFree: '持美/加/英/申根/日签免签' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 800,
    bestMonths: [11, 12, 1, 2, 3, 4],
    safetyLevel: 'medium',
    highlights: ['奇琴伊察 (玛雅金字塔)', '坎昆海滩', '墨西哥城', '瓦哈卡'],
    advisory: {
      customs: '亡灵节文化，塔科 (Taco) 是主食。',
      safetyTips: '避免前往北部边境危险城市，夜间勿乘坐无牌出租车。'
    },
    festivals: [{ name: '亡灵节', month: '11月' }]
  },

  // --- 中美洲 Central America ---
  {
    id: 'GT',
    name: '危地马拉',
    continent: 'North America',
    coordinates: { lat: 15.7835, lng: -90.2308 },
    visaPolicy: { policy: '需要签证', conditionalFree: '持美/加/申根签免签' },
    tags: ['culture', 'outdoor'],
    avgDailyCost: 500,
    bestMonths: [11, 12, 1, 2, 3, 4],
    safetyLevel: 'medium',
    highlights: ['蒂卡尔 (Tikal) 玛雅遗址', '阿蒂特兰湖', '安提瓜古城'],
    advisory: {
      customs: '玛雅文化保留最完整的国家之一。',
      safetyTips: '首都危地马拉城部分区域治安较差。'
    },
    festivals: [{ name: '圣周 (Semana Santa)', month: '3月或4月' }]
  },
  {
    id: 'BZ',
    name: '伯利兹',
    continent: 'North America',
    coordinates: { lat: 17.1899, lng: -88.4976 },
    visaPolicy: { policy: '需要签证', conditionalFree: '持美/加/申根签免签' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 1000,
    bestMonths: [11, 12, 1, 2, 3, 4],
    safetyLevel: 'medium',
    highlights: ['大蓝洞 (Great Blue Hole)', '龙涎香岛'],
    advisory: {
      customs: '英语为官方语言，加勒比风情。',
      safetyTips: '伯利兹城治安一般，海岛相对安全。'
    },
    festivals: [{ name: '龙虾节', month: '6月' }]
  },
  {
    id: 'CR',
    name: '哥斯达黎加',
    continent: 'North America',
    coordinates: { lat: 9.7489, lng: -83.7534 },
    visaPolicy: { policy: '需要签证', conditionalFree: '持美/加/申根签免签' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 1000,
    bestMonths: [12, 1, 2, 3, 4],
    safetyLevel: 'high',
    highlights: ['阿雷纳尔火山', '蒙特维多云雾林', '曼努埃尔·安东尼奥'],
    advisory: {
      customs: 'Pura Vida (纯净生活) 是口头禅。',
      safetyTips: '非常安全，生态旅游天堂。'
    },
    festivals: [{ name: '圣荷西嘉年华', month: '12月' }]
  },
  {
    id: 'PA',
    name: '巴拿马',
    continent: 'North America',
    coordinates: { lat: 8.5380, lng: -80.7821 },
    visaPolicy: { policy: '需要签证', conditionalFree: '持美/加/英/澳/申根签免签' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 900,
    bestMonths: [12, 1, 2, 3, 4],
    safetyLevel: 'high',
    highlights: ['巴拿马运河', '圣布拉斯群岛', '巴拿马城老城'],
    advisory: {
      customs: '美洲十字路口，购物天堂。',
      safetyTips: '治安良好，注意防晒。'
    },
    festivals: [{ name: '狂欢节', month: '2月' }]
  },
  {
    id: 'SV',
    name: '萨尔瓦多',
    continent: 'North America',
    coordinates: { lat: 13.7942, lng: -88.8965 },
    visaPolicy: { policy: '需要签证', conditionalFree: '持美/加/申根签免签' },
    tags: ['outdoor'],
    avgDailyCost: 600,
    bestMonths: [11, 12, 1, 2, 3, 4],
    safetyLevel: 'medium',
    highlights: ['冲浪城 (Surf City)', '圣安娜火山'],
    advisory: {
      customs: '咖啡品质极高，普普萨 (Pupusa) 是国菜。',
      safetyTips: '治安近年来大幅改善，但仍需保持警惕。'
    },
    festivals: [{ name: '圣萨尔瓦多节', month: '8月' }]
  },

  // --- 加勒比海 Caribbean ---
  {
    id: 'CU',
    name: '古巴',
    continent: 'North America',
    coordinates: { lat: 21.5218, lng: -77.7812 },
    visaPolicy: { policy: '免签', conditionalFree: '需购买旅游卡' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 800,
    bestMonths: [11, 12, 1, 2, 3, 4],
    safetyLevel: 'high',
    highlights: ['哈瓦那老城', '巴拉德罗海滩', '特立尼达'],
    advisory: {
      customs: '雪茄和朗姆酒，老爷车遍地，网络不便。',
      safetyTips: '极度安全，但需防范街头兜售雪茄的骗局。'
    },
    festivals: [{ name: '哈瓦那雪茄节', month: '2月' }]
  },
  {
    id: 'JM',
    name: '牙买加',
    continent: 'North America',
    coordinates: { lat: 18.1096, lng: -77.2975 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['scenery', 'culture'],
    avgDailyCost: 1200,
    bestMonths: [11, 12, 1, 2, 3, 4],
    safetyLevel: 'medium',
    highlights: ['蒙特哥贝', '邓斯河瀑布', '鲍勃·马利博物馆'],
    advisory: {
      customs: '雷鬼音乐发源地，"Yeah Mon"。',
      safetyTips: '部分区域治安不佳，建议住在度假村区域。'
    },
    festivals: [{ name: '雷鬼夏日节', month: '7月' }]
  },
  {
    id: 'BS',
    name: '巴哈马',
    continent: 'North America',
    coordinates: { lat: 25.0343, lng: -77.3963 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 2000,
    bestMonths: [12, 1, 2, 3, 4],
    safetyLevel: 'high',
    highlights: ['猪岛 (Pig Beach)', '亚特兰蒂斯', '粉红沙滩'],
    advisory: {
      customs: '度假天堂，物价昂贵。',
      safetyTips: '非常安全，注意水上活动安全。'
    },
    festivals: [{ name: '詹卡努狂欢节', month: '12月和1月' }]
  },
  {
    id: 'DO',
    name: '多米尼加共和国',
    continent: 'North America',
    coordinates: { lat: 18.7357, lng: -70.1627 },
    visaPolicy: { policy: '需要签证', conditionalFree: '持美/加/申根签免签' },
    tags: ['scenery'],
    avgDailyCost: 800,
    bestMonths: [12, 1, 2, 3, 4],
    safetyLevel: 'medium',
    highlights: ['蓬塔卡纳 (Punta Cana)', '圣多明各殖民区'],
    advisory: {
      customs: '麦伦格舞 (Merengue) 发源地。',
      safetyTips: '度假村内非常安全，外出需注意。'
    },
    festivals: [{ name: '狂欢节', month: '2月' }]
  },
  {
    id: 'BB',
    name: '巴巴多斯',
    continent: 'North America',
    coordinates: { lat: 13.1939, lng: -59.5432 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['scenery'],
    avgDailyCost: 1500,
    bestMonths: [12, 1, 2, 3, 4],
    safetyLevel: 'high',
    highlights: ['哈里森岩洞', '巴希巴海滩'],
    advisory: {
      customs: '朗姆酒发源地，英式板球流行。',
      safetyTips: '非常安全。'
    },
    festivals: [{ name: '丰收节 (Crop Over)', month: '7月-8月' }]
  },
  {
    id: 'GD',
    name: '格林纳达',
    continent: 'North America',
    coordinates: { lat: 12.1165, lng: -61.6790 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 1200,
    bestMonths: [12, 1, 2, 3, 4],
    safetyLevel: 'high',
    highlights: ['水下雕塑公园', '大安斯海滩'],
    advisory: {
      customs: '香料之岛 (肉豆蔻)。',
      safetyTips: '非常安全。'
    },
    festivals: [{ name: '香料嘉年华', month: '8月' }]
  },
  {
    id: 'DM',
    name: '多米尼克',
    continent: 'North America',
    coordinates: { lat: 15.4150, lng: -61.3710 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 1000,
    bestMonths: [12, 1, 2, 3, 4],
    safetyLevel: 'high',
    highlights: ['沸腾湖', '翡翠池'],
    advisory: {
      customs: '自然岛，适合徒步。',
      safetyTips: '非常安全。'
    },
    festivals: [{ name: '克里奥尔音乐节', month: '10月' }]
  },
  {
    id: 'AG',
    name: '安提瓜和巴布达',
    continent: 'North America',
    coordinates: { lat: 17.0608, lng: -61.7964 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['scenery'],
    avgDailyCost: 1800,
    bestMonths: [12, 1, 2, 3, 4],
    safetyLevel: 'high',
    highlights: ['365个海滩', '雪莉高地'],
    advisory: {
      customs: '帆船运动盛行。',
      safetyTips: '非常安全。'
    },
    festivals: [{ name: '帆船周', month: '4月' }]
  },

  // ==========================================
  // 大洋洲 Oceania (已生成)
  // ==========================================
  {
    id: 'AU',
    name: '澳大利亚',
    continent: 'Oceania',
    coordinates: { lat: -25.2744, lng: 133.7751 },
    visaPolicy: { policy: '需要签证', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 1800,
    bestMonths: [9, 10, 11, 12, 1, 2, 3, 4],
    safetyLevel: 'high',
    highlights: ['大堡礁', '悉尼歌剧院', '大洋路', '乌鲁鲁巨石'],
    advisory: {
      customs: '热爱户外烧烤 (BBQ)，保护野生动物。',
      safetyTips: '海边注意离岸流，野外防范毒虫蛇。'
    },
    festivals: [{ name: '悉尼灯光节', month: '5月-6月' }]
  },
  {
    id: 'NZ',
    name: '新西兰',
    continent: 'Oceania',
    coordinates: { lat: -40.9006, lng: 174.8860 },
    visaPolicy: { policy: '需要签证', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 1700,
    bestMonths: [11, 12, 1, 2, 3],
    safetyLevel: 'high',
    highlights: ['皇后镇', '霍比特人村', '米尔福德峡湾', '罗托鲁瓦地热'],
    advisory: {
      customs: '重视环保，入关严查食品。',
      safetyTips: '自驾注意右舵左行，山路崎岖。'
    },
    festivals: [{ name: '毛利新年', month: '6月或7月' }]
  },
  {
    id: 'FJ',
    name: '斐济',
    continent: 'Oceania',
    coordinates: { lat: -17.7134, lng: 178.0650 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 1500,
    bestMonths: [5, 6, 7, 8, 9, 10],
    safetyLevel: 'high',
    highlights: ['马马努卡群岛', 'Cloud 9', '珊瑚海岸'],
    advisory: {
      customs: 'Bula是你好，进入村庄需经允许，忌摸头。',
      safetyTips: '非常安全，被誉为世界上最快乐的国家之一。'
    },
    festivals: [{ name: '红花节', month: '8月' }]
  },
  {
    id: 'PG',
    name: '巴布亚新几内亚',
    continent: 'Oceania',
    coordinates: { lat: -6.314993, lng: 143.95555 },
    visaPolicy: { policy: '电子签/落地签', conditionalFree: '无' },
    tags: ['outdoor', 'culture'],
    avgDailyCost: 1200,
    bestMonths: [5, 6, 7, 8, 9, 10],
    safetyLevel: 'low',
    highlights: ['科科达小径', '哈根山', '塞皮克河'],
    advisory: {
      customs: '部落文化丰富，大约有800多种语言。',
      safetyTips: '莫尔兹比港治安较差，避免夜间出行，建议参团。'
    },
    festivals: [{ name: '哈根山文化节', month: '8月' }]
  },
  {
    id: 'VU',
    name: '瓦努阿图',
    continent: 'Oceania',
    coordinates: { lat: -15.3767, lng: 166.9592 },
    visaPolicy: { policy: '落地签', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 1000,
    bestMonths: [5, 6, 7, 8, 9, 10],
    safetyLevel: 'high',
    highlights: ['亚苏尔火山 (活火山)', '水下邮局'],
    advisory: {
      customs: '美拉尼西亚文化，蹦极发源地。',
      safetyTips: '非常安全，注意火山活动预警。'
    },
    festivals: [{ name: '陆地跳水节', month: '4月-6月' }]
  },
  {
    id: 'WS',
    name: '萨摩亚',
    continent: 'Oceania',
    coordinates: { lat: -13.7590, lng: -172.1046 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 800,
    bestMonths: [5, 6, 7, 8, 9, 10],
    safetyLevel: 'high',
    highlights: ['To Sua Ocean Trench (天然泳池)', '阿皮亚'],
    advisory: {
      customs: '周日是礼拜日，非常安静，避免在此期间大声喧哗。',
      safetyTips: '非常安全，民风淳朴。'
    },
    festivals: [{ name: '特伊拉节', month: '9月' }]
  },
  {
    id: 'TO',
    name: '汤加',
    continent: 'Oceania',
    coordinates: { lat: -21.1784, lng: -175.1982 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 900,
    bestMonths: [7, 8, 9, 10], // 观鲸季节
    safetyLevel: 'high',
    highlights: ['瓦瓦乌群岛 (与鲸共舞)', '喷水孔'],
    advisory: {
      customs: '以胖为美，周日法律规定禁止工作和娱乐。',
      safetyTips: '非常安全，是世界上最早迎接日出的国家之一。'
    },
    festivals: [{ name: '海利拉节', month: '7月' }]
  },
  {
    id: 'PF',
    name: '法属波利尼西亚 (大溪地)',
    continent: 'Oceania',
    coordinates: { lat: -17.6797, lng: -149.4068 },
    visaPolicy: { policy: '需要签证', conditionalFree: '通过认证旅行社可免签' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 3000,
    bestMonths: [5, 6, 7, 8, 9, 10],
    safetyLevel: 'high',
    highlights: ['波拉波拉岛', '莫雷阿岛', '黑珍珠博物馆'],
    advisory: {
      customs: '虽然是法国领地，但波利尼西亚文化浓厚。',
      safetyTips: '物价极高，顶级蜜月目的地。'
    },
    festivals: [{ name: '黑瓦节', month: '7月' }]
  },
  {
    id: 'CK',
    name: '库克群岛',
    continent: 'Oceania',
    coordinates: { lat: -21.2367, lng: -159.7777 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 1200,
    bestMonths: [5, 6, 7, 8, 9, 10],
    safetyLevel: 'high',
    highlights: ['艾图塔基泻湖', '拉罗汤加'],
    advisory: {
      customs: '与新西兰关系密切，通用新西兰元。',
      safetyTips: '非常安全，悠闲的岛屿生活。'
    },
    festivals: [{ name: '宪法日', month: '8月' }]
  },
  {
    id: 'PW',
    name: '帕劳',
    continent: 'Oceania',
    coordinates: { lat: 7.5149, lng: 134.5825 },
    visaPolicy: { policy: '落地签 (免费)', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 1500,
    bestMonths: [11, 12, 1, 2, 3, 4],
    safetyLevel: 'high',
    highlights: ['水母湖', '大断层', '牛奶湖'],
    advisory: {
      customs: '极其重视海洋环保，入关需签署帕劳誓词，禁用有害防晒霜。',
      safetyTips: '上帝的水族箱，潜水胜地。'
    },
    festivals: [{ name: '独立日', month: '10月' }]
  },
  {
    id: 'SB',
    name: '所罗门群岛',
    continent: 'Oceania',
    coordinates: { lat: -9.6457, lng: 160.1562 },
    visaPolicy: { policy: '落地签', conditionalFree: '无' },
    tags: ['outdoor'],
    avgDailyCost: 1000,
    bestMonths: [5, 6, 7, 8, 9, 10],
    safetyLevel: 'medium',
    highlights: ['二战沉船潜水', '马罗沃泻湖'],
    advisory: {
      customs: '美拉尼西亚传统。',
      safetyTips: '基础设施较落后，注意防疟疾。'
    },
    festivals: [{ name: '独立日', month: '7月' }]
  },

  // ==========================================
  // 南美洲 South America (全面覆盖)
  // ==========================================
  {
    id: 'BR',
    name: '巴西',
    continent: 'South America',
    coordinates: { lat: -14.2350, lng: -51.9253 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['culture', 'outdoor'],
    avgDailyCost: 1000,
    bestMonths: [9, 10, 11, 12, 3],
    safetyLevel: 'medium',
    highlights: ['里约热内卢基督像', '伊瓜苏瀑布', '亚马逊雨林'],
    advisory: {
      customs: '热情奔放，打招呼习惯拥抱或贴面。',
      safetyTips: '大城市贫民窟需避开，财不外露。'
    },
    festivals: [{ name: '里约狂欢节', month: '2月或3月' }]
  },
  {
    id: 'AR',
    name: '阿根廷',
    continent: 'South America',
    coordinates: { lat: -38.4161, lng: -63.6167 },
    visaPolicy: { policy: '电子签 (需持美签/申根)', conditionalFree: '无' },
    tags: ['scenery', 'culture'],
    avgDailyCost: 800,
    bestMonths: [10, 11, 12, 1, 2, 3],
    safetyLevel: 'medium',
    highlights: ['莫雷诺冰川', '布宜诺斯艾利斯', '火地岛'],
    advisory: {
      customs: '晚餐时间极晚 (21:00以后)。',
      safetyTips: '换汇注意防伪。'
    },
    festivals: [{ name: '探戈节', month: '8月' }]
  },
  {
    id: 'PE',
    name: '秘鲁',
    continent: 'South America',
    coordinates: { lat: -9.189967, lng: -75.015152 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 700,
    bestMonths: [5, 6, 7, 8, 9],
    safetyLevel: 'medium',
    highlights: ['马丘比丘', '库斯科古城', '的的喀喀湖', '彩虹山'],
    advisory: {
      customs: '印加文明中心，高海拔地区需喝古柯茶。',
      safetyTips: '注意高原反应，不要在夜间乘坐无牌出租车。'
    },
    festivals: [{ name: '太阳祭 (Inti Raymi)', month: '6月' }]
  },
  {
    id: 'CL',
    name: '智利',
    continent: 'South America',
    coordinates: { lat: -35.6751, lng: -71.5430 },
    visaPolicy: { policy: '免签', conditionalFree: '需持美/加签免签，或商务签' }, // 注意：智利对华免签政策有条件，这里按常见条件填写
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 1100,
    bestMonths: [11, 12, 1, 2, 3],
    safetyLevel: 'high',
    highlights: ['百内国家公园', '复活节岛', '阿塔卡马沙漠'],
    advisory: {
      customs: '世界上最狭长的国家，红酒品质极佳。',
      safetyTips: '非常安全，也是南美治安最好的国家之一，注意地震。'
    },
    festivals: [{ name: '比尼亚德尔马国际音乐节', month: '2月' }]
  },
  {
    id: 'CO',
    name: '哥伦比亚',
    continent: 'South America',
    coordinates: { lat: 4.5709, lng: -74.2973 },
    visaPolicy: { policy: '免签 (需持美/申根签)', conditionalFree: '无' },
    tags: ['culture', 'scenery'],
    avgDailyCost: 600,
    bestMonths: [12, 1, 2, 3, 7, 8],
    safetyLevel: 'medium',
    highlights: ['卡塔赫纳', '麦德林', '咖啡三角区', '泰罗纳国家公园'],
    advisory: {
      customs: '咖啡文化浓厚，人们热情好客。',
      safetyTips: '治安已大幅改善，但仍需避开特定危险区域和夜间独行。'
    },
    festivals: [{ name: '黑白狂欢节', month: '1月' }, { name: '鲜花节', month: '8月' }]
  },
  {
    id: 'BO',
    name: '玻利维亚',
    continent: 'South America',
    coordinates: { lat: -16.2902, lng: -63.5887 },
    visaPolicy: { policy: '落地签', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 500,
    bestMonths: [5, 6, 7, 8, 9, 10], // 旱季适合去天空之镜找倒影需雨季(1-2月)
    safetyLevel: 'medium',
    highlights: ['乌尤尼盐沼 (天空之镜)', '拉巴斯', '的的喀喀湖'],
    advisory: {
      customs: '平均海拔极高，被称为南美西藏。',
      safetyTips: '务必注意严重的高原反应，基础设施较落后。'
    },
    festivals: [{ name: '奥鲁罗狂欢节', month: '2月' }]
  },
  {
    id: 'EC',
    name: '厄瓜多尔',
    continent: 'South America',
    coordinates: { lat: -1.8312, lng: -78.1834 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['outdoor', 'scenery'],
    avgDailyCost: 800,
    bestMonths: [6, 7, 8, 9, 12, 1],
    safetyLevel: 'medium',
    highlights: ['加拉帕戈斯群岛', '基多老城', '亚马逊雨林'],
    advisory: {
      customs: '赤道之国，生物多样性极其丰富。',
      safetyTips: '基多和瓜亚基尔部分区域治安一般，注意财物。'
    },
    festivals: [{ name: '鲜花水果节', month: '2月' }]
  },
  {
    id: 'UY',
    name: '乌拉圭',
    continent: 'South America',
    coordinates: { lat: -32.5228, lng: -55.7658 },
    visaPolicy: { policy: '免签', conditionalFree: '无' },
    tags: ['scenery'],
    avgDailyCost: 1200,
    bestMonths: [12, 1, 2, 3],
    safetyLevel: 'high',
    highlights: ['埃斯特角城 (Punta del Este)', '蒙得维的亚', '科洛尼亚'],
    advisory: {
      customs: '马黛茶不离手，生活节奏慢，也是肉食者天堂。',
      safetyTips: '南美最安全的国家之一。'
    },
    festivals: [{ name: '狂欢节 (世界上最长)', month: '1月-3月' }]
  },
  {
    id: 'VE',
    name: '委内瑞拉',
    continent: 'South America',
    coordinates: { lat: 6.4238, lng: -66.5897 },
    visaPolicy: { policy: '需要签证', conditionalFree: '无' },
    tags: ['scenery', 'outdoor'],
    avgDailyCost: 600,
    bestMonths: [11, 12, 1, 2, 3, 4],
    safetyLevel: 'low',
    highlights: ['安赫尔瀑布 (天使瀑布)', '洛斯罗克斯群岛'],
    advisory: {
      customs: '盛产美女（世界小姐）。',
      safetyTips: '政治经济极不稳定，治安状况差，建议谨慎前往或参团。'
    },
    festivals: [{ name: '圣塞巴斯蒂安节', month: '1月' }]
  },
  {
    id: 'PY',
    name: '巴拉圭',
    continent: 'South America',
    coordinates: { lat: -23.4425, lng: -58.4438 },
    visaPolicy: { policy: '落地签', conditionalFree: '无' },
    tags: ['culture'],
    avgDailyCost: 500,
    bestMonths: [5, 6, 7, 8, 9],
    safetyLevel: 'medium',
    highlights: ['伊泰普大坝', '亚松森', '特立尼达耶稣会遗址'],
    advisory: {
      customs: '瓜拉尼语与西班牙语并存，特雷雷 (冷马黛茶)。',
      safetyTips: '非热门旅游国，治安尚可，注意边境走私活动。'
    },
    festivals: [{ name: '圣布拉斯节', month: '2月' }]
  },
  {
    id: 'GY',
    name: '圭亚那',
    continent: 'South America',
    coordinates: { lat: 4.8604, lng: -58.9302 },
    visaPolicy: { policy: '落地签', conditionalFree: '无' },
    tags: ['outdoor'],
    avgDailyCost: 900,
    bestMonths: [8, 9, 10, 11, 2, 3],
    safetyLevel: 'medium',
    highlights: ['凯厄图尔瀑布 (Kaieteur Falls)', '乔治敦'],
    advisory: {
      customs: '南美唯一的英语国家，印度文化影响深。',
      safetyTips: '乔治敦夜间治安较差。'
    },
    festivals: [{ name: '共和国日', month: '2月' }]
  },
  {
    id: 'SR',
    name: '苏里南',
    continent: 'South America',
    coordinates: { lat: 3.9193, lng: -56.0278 },
    visaPolicy: { policy: '免签/落地卡', conditionalFree: '无' },
    tags: ['culture', 'outdoor'],
    avgDailyCost: 800,
    bestMonths: [8, 9, 10, 11, 2, 3],
    safetyLevel: 'medium',
    highlights: ['帕拉马里博老城', '布朗斯贝尔格自然公园'],
    advisory: {
      customs: '荷兰语国家，多民族融合。',
      safetyTips: '相对安全，注意热带疾病。'
    },
    festivals: [{ name: '阿瓦里多漫步', month: '4月' }]
  }
];
