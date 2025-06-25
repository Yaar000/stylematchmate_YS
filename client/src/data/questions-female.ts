export interface QuestionOption {
  ko: string;
  en: string;
  ja: string;
  zh: string;
  weights: Record<string, number>; // brand weights for this option
}

export interface Question {
  id: number;
  ko: string;
  en: string;
  ja: string;
  zh: string;
  options: QuestionOption[];
}

export const femaleQuestions: Question[] = [
  {
    id: 1,
    ko: "어떤 스타일의 옷을 선호하시나요?",
    en: "What style of clothing do you prefer?",
    ja: "どのようなスタイルの服を好みますか？",
    zh: "您喜欢什么风格的服装？",
    options: [
      {
        ko: "클래식하고 우아한",
        en: "Classic and elegant",
        ja: "クラシックでエレガント",
        zh: "经典优雅",
        weights: { "CHANEL": 5, "DIOR": 5, "HERMÈS": 4, "BURBERRY": 4, "RALPH_LAUREN": 3 }
      },
      {
        ko: "트렌디하고 페미닌",
        en: "Trendy and feminine",
        ja: "トレンディでフェミニン",
        zh: "时尚女性化",
        weights: { "ZARA": 5, "MANGO": 5, "HM": 4, "COS": 3, "ARKET": 3 }
      },
      {
        ko: "캐주얼하고 편안한",
        en: "Casual and comfortable",
        ja: "カジュアルで快適",
        zh: "休闲舒适",
        weights: { "UNIQLO": 5, "GAP": 4, "MUJI": 4, "LEVI": 3, "NIKE": 3 }
      },
      {
        ko: "독창적이고 아방가르드",
        en: "Unique and avant-garde",
        ja: "独創的でアバンギャルド",
        zh: "独特前卫",
        weights: { "COMME_DES_GARCONS": 5, "ACNE_STUDIOS": 4, "MM6_MAISON_MARGIELA": 4, "GANNI": 3 }
      }
    ]
  },
  {
    id: 2,
    ko: "드레스나 스커트를 얼마나 자주 입나요?",
    en: "How often do you wear dresses or skirts?",
    ja: "ドレスやスカートをどのくらい頻繁に着ますか？",
    zh: "您多久穿一次连衣裙或裙子？",
    options: [
      {
        ko: "매우 자주 (주 5회 이상)",
        en: "Very frequently (5+ times per week)",
        ja: "非常に頻繁に（週5回以上）",
        zh: "非常频繁（每周5次以上）",
        weights: { "DIOR": 5, "CHANEL": 5, "MANGO": 4, "ZARA": 3, "HM": 3 }
      },
      {
        ko: "가끔 (특별한 날)",
        en: "Occasionally (special occasions)",
        ja: "時々（特別な日）",
        zh: "偶尔（特殊场合）",
        weights: { "ZARA": 4, "HM": 3, "MANGO": 3, "COS": 3, "ARKET": 2 }
      },
      {
        ko: "거의 안 입음",
        en: "Rarely wear",
        ja: "ほとんど着ない",
        zh: "很少穿",
        weights: { "UNIQLO": 5, "LEVI": 4, "GAP": 4, "MUJI": 3, "COS": 3 }
      },
      {
        ko: "전혀 안 입음 (바지 위주)",
        en: "Never (prefer pants)",
        ja: "全く着ない（パンツ中心）",
        zh: "从不穿（偏爱裤装）",
        weights: { "ACNE_STUDIOS": 5, "COS": 4, "UNIQLO": 3, "ARKET": 3, "MUJI": 3 }
      }
    ]
  },
  {
    id: 3,
    ko: "선호하는 신발 스타일은?",
    en: "What's your preferred shoe style?",
    ja: "好みの靴のスタイルは？",
    zh: "您偏好的鞋子风格？",
    options: [
      {
        ko: "하이힐/펌프스",
        en: "High heels/Pumps",
        ja: "ハイヒール/パンプス",
        zh: "高跟鞋",
        weights: { "CHANEL": 5, "DIOR": 5, "GUCCI": 4, "PRADA": 4, "HERMÈS": 3 }
      },
      {
        ko: "플랫 슈즈/발레리나",
        en: "Flats/Ballet shoes",
        ja: "フラットシューズ/バレエシューズ",
        zh: "平底鞋/芭蕾舞鞋",
        weights: { "CHANEL": 4, "COS": 4, "ARKET": 3, "UNIQLO": 3, "MUJI": 3 }
      },
      {
        ko: "스니커즈",
        en: "Sneakers",
        ja: "スニーカー",
        zh: "运动鞋",
        weights: { "NIKE": 5, "ADIDAS": 5, "CONVERSE": 4, "VANS": 4, "NEW_BALANCE": 3 }
      },
      {
        ko: "부츠",
        en: "Boots",
        ja: "ブーツ",
        zh: "靴子",
        weights: { "GANNI": 4, "ACNE_STUDIOS": 4, "ISABEL_MARANT": 3, "DR_MARTENS": 3, "TOTEME": 3 }
      }
    ]
  },
  {
    id: 4,
    ko: "어떤 색상을 주로 입나요?",
    en: "What colors do you mainly wear?",
    ja: "主にどのような色を着ますか？",
    zh: "您主要穿什么颜色？",
    options: [
      {
        ko: "블랙, 화이트, 그레이",
        en: "Black, white, gray",
        ja: "ブラック、ホワイト、グレー",
        zh: "黑白灰",
        weights: { "COS": 5, "ACNE_STUDIOS": 4, "THE_ROW": 4, "TOTEME": 4, "LEMAIRE": 3 }
      },
      {
        ko: "베이지, 크림, 브라운",
        en: "Beige, cream, brown",
        ja: "ベージュ、クリーム、ブラウン",
        zh: "米色、奶油色、棕色",
        weights: { "TOTEME": 5, "THE_ROW": 4, "KHAITE": 4, "LEMAIRE": 3, "BOTTEGA_VENETA": 3 }
      },
      {
        ko: "파스텔 톤",
        en: "Pastel tones",
        ja: "パステルトーン",
        zh: "粉彩色调",
        weights: { "GANNI": 5, "OTHER_STORIES": 4, "ARKET": 3, "MONKI": 3, "WEEKDAY": 3 }
      },
      {
        ko: "밝고 화려한 색상",
        en: "Bright and vibrant colors",
        ja: "明るく鮮やかな色",
        zh: "明亮鲜艳的颜色",
        weights: { "VERSACE": 4, "MOSCHINO": 4, "KENZO": 3, "GANNI": 3, "JACQUEMUS": 3 }
      }
    ]
  },
  {
    id: 5,
    ko: "주로 어떤 장소에서 입는 옷을 찾으시나요?",
    en: "Where do you mainly wear your clothes?",
    ja: "主にどこで着る服をお探しですか？",
    zh: "您主要在什么场合穿这些衣服？",
    options: [
      {
        ko: "직장/비즈니스 미팅",
        en: "Work/Business meetings",
        ja: "職場/ビジネスミーティング",
        zh: "工作/商务会议",
        weights: { "THE_ROW": 5, "KHAITE": 4, "COS": 4, "TOTEME": 4, "LEMAIRE": 3 }
      },
      {
        ko: "일상생활/쇼핑",
        en: "Daily life/Shopping",
        ja: "日常生活/ショッピング",
        zh: "日常生活/购物",
        weights: { "UNIQLO": 5, "ZARA": 4, "GAP": 3, "MANGO": 3, "HM": 3 }
      },
      {
        ko: "데이트/소셜 모임",
        en: "Dates/Social gatherings",
        ja: "デート/ソーシャル集まり",
        zh: "约会/社交聚会",
        weights: { "GANNI": 5, "JACQUEMUS": 4, "ZARA": 3, "MANGO": 3, "OTHER_STORIES": 3 }
      },
      {
        ko: "특별한 행사/파티",
        en: "Special events/Parties",
        ja: "特別なイベント/パーティー",
        zh: "特殊活动/派对",
        weights: { "DIOR": 5, "CHANEL": 4, "SAINT_LAURENT": 4, "VERSACE": 3, "BOTTEGA_VENETA": 3 }
      }
    ]
  },
  {
    id: 6,
    ko: "어떤 핏을 선호하시나요?",
    en: "What fit do you prefer?",
    ja: "どのようなフィットを好みますか？",
    zh: "您喜欢什么版型？",
    options: [
      {
        ko: "몸에 딱 맞는 타이트핏",
        en: "Body-hugging tight fit",
        ja: "体にぴったりのタイトフィット",
        zh: "贴身紧身版型",
        weights: { "ZARA": 4, "HM": 3, "MANGO": 3, "VERSACE": 3, "SAINT_LAURENT": 3 }
      },
      {
        ko: "적당히 여유있는 핏",
        en: "Moderately relaxed fit",
        ja: "適度にゆとりのあるフィット",
        zh: "适度宽松版型",
        weights: { "UNIQLO": 5, "COS": 4, "ARKET": 4, "GANNI": 3, "MUJI": 3 }
      },
      {
        ko: "오버사이즈",
        en: "Oversized",
        ja: "オーバーサイズ",
        zh: "宽松版型",
        weights: { "ACNE_STUDIOS": 5, "TOTEME": 4, "THE_ROW": 4, "LEMAIRE": 4, "GANNI": 3 }
      },
      {
        ko: "테일러드/구조적인 핏",
        en: "Tailored/Structured fit",
        ja: "テーラード/構造的なフィット",
        zh: "剪裁/结构性版型",
        weights: { "THE_ROW": 5, "KHAITE": 4, "DIOR": 4, "CHANEL": 4, "BOTTEGA_VENETA": 3 }
      }
    ]
  },
  {
    id: 7,
    ko: "선호하는 상의 스타일은?",
    en: "What's your preferred top style?",
    ja: "好みのトップススタイルは？",
    zh: "您偏好的上衣风格？",
    options: [
      {
        ko: "블라우스/셔츠",
        en: "Blouses/Shirts",
        ja: "ブラウス/シャツ",
        zh: "衬衫/上衣",
        weights: { "THE_ROW": 5, "COS": 4, "TOTEME": 4, "LEMAIRE": 4, "KHAITE": 3 }
      },
      {
        ko: "티셔츠/탱크톱",
        en: "T-shirts/Tank tops",
        ja: "Tシャツ/タンクトップ",
        zh: "T恤/背心",
        weights: { "UNIQLO": 5, "GAP": 4, "MUJI": 3, "EVERLANE": 3, "JAMES_PERSE": 3 }
      },
      {
        ko: "니트/스웨터",
        en: "Knitwear/Sweaters",
        ja: "ニット/セーター",
        zh: "针织衫/毛衣",
        weights: { "ACNE_STUDIOS": 5, "GANNI": 4, "TOTEME": 4, "COS": 3, "ARKET": 3 }
      },
      {
        ko: "크롭탑/보디수트",
        en: "Crop tops/Bodysuits",
        ja: "クロップトップ/ボディスーツ",
        zh: "短款上衣/连体衣",
        weights: { "ZARA": 4, "HM": 3, "MANGO": 3, "GANNI": 3, "WEEKDAY": 3 }
      }
    ]
  },
  {
    id: 8,
    ko: "아웃터를 선택할 때 중요한 것은?",
    en: "What's important when choosing outerwear?",
    ja: "アウターを選ぶ際に重要なことは？",
    zh: "选择外套时重要的是？",
    options: [
      {
        ko: "우아함과 스타일",
        en: "Elegance and style",
        ja: "エレガンスとスタイル",
        zh: "优雅和风格",
        weights: { "CHANEL": 5, "DIOR": 4, "THE_ROW": 4, "KHAITE": 4, "BOTTEGA_VENETA": 3 }
      },
      {
        ko: "실용성과 편안함",
        en: "Practicality and comfort",
        ja: "実用性と快適さ",
        zh: "实用性和舒适性",
        weights: { "UNIQLO": 5, "PATAGONIA": 4, "THE_NORTH_FACE": 3, "MUJI": 3, "GAP": 3 }
      },
      {
        ko: "트렌디함",
        en: "Trendiness",
        ja: "トレンディさ",
        zh: "时尚感",
        weights: { "GANNI": 5, "JACQUEMUS": 4, "ZARA": 4, "MANGO": 3, "HM": 3 }
      },
      {
        ko: "독특함과 개성",
        en: "Uniqueness and personality",
        ja: "ユニークさと個性",
        zh: "独特性和个性",
        weights: { "ACNE_STUDIOS": 5, "COMME_DES_GARCONS": 4, "MM6_MAISON_MARGIELA": 4, "GANNI": 3 }
      }
    ]
  },
  {
    id: 9,
    ko: "가방을 선택할 때 가장 중요한 요소는?",
    en: "What's most important when choosing bags?",
    ja: "バッグを選ぶ際に最も重要な要素は？",
    zh: "选择包包时最重要的因素是？",
    options: [
      {
        ko: "브랜드 가치와 투자성",
        en: "Brand value and investment potential",
        ja: "ブランド価値と投資性",
        zh: "品牌价值和投资潜力",
        weights: { "HERMÈS": 5, "CHANEL": 5, "LOUIS_VUITTON": 4, "DIOR": 4, "BOTTEGA_VENETA": 4 }
      },
      {
        ko: "실용성과 수납력",
        en: "Practicality and storage capacity",
        ja: "実用性と収納力",
        zh: "实用性和储物能力",
        weights: { "LONGCHAMP": 5, "COACH": 4, "MICHAEL_KORS": 3, "KATE_SPADE": 3, "TORY_BURCH": 3 }
      },
      {
        ko: "디자인과 스타일",
        en: "Design and style",
        ja: "デザインとスタイル",
        zh: "设计和风格",
        weights: { "JACQUEMUS": 5, "STAUD": 4, "CULT_GAIA": 3, "GANNI": 3, "WANDLER": 3 }
      },
      {
        ko: "가격 대비 만족도",
        en: "Value for money",
        ja: "価格に対する満足度",
        zh: "性价比",
        weights: { "ZARA": 4, "HM": 3, "MANGO": 3, "COS": 3, "ARKET": 3 }
      }
    ]
  },
  {
    id: 10,
    ko: "액세서리에 대한 관심도는?",
    en: "How interested are you in accessories?",
    ja: "アクセサリーへの関心度は？",
    zh: "您对配饰的兴趣程度？",
    options: [
      {
        ko: "매우 높음 - 주얼리, 시계 등 다양하게",
        en: "Very high - jewelry, watches, etc.",
        ja: "非常に高い - ジュエリー、時計など様々",
        zh: "非常高 - 珠宝、手表等各种",
        weights: { "TIFFANY": 5, "CARTIER": 5, "VAN_CLEEF_ARPELS": 4, "BULGARI": 4, "CHANEL": 3 }
      },
      {
        ko: "보통 - 기본적인 액세서리만",
        en: "Moderate - basic accessories only",
        ja: "普通 - 基本的なアクセサリーのみ",
        zh: "一般 - 只有基本配饰",
        weights: { "PANDORA": 4, "SWAROVSKI": 3, "FOSSIL": 3, "DANIEL_WELLINGTON": 3, "MICHAEL_KORS": 3 }
      },
      {
        ko: "낮음 - 가끔 착용",
        en: "Low - occasionally wear",
        ja: "低い - 時々着用",
        zh: "较低 - 偶尔佩戴",
        weights: { "UNIQLO": 3, "MUJI": 3, "COS": 3, "GAP": 2, "ARKET": 2 }
      },
      {
        ko: "거의 없음 - 미니멀 추구",
        en: "Very low - pursue minimalism",
        ja: "ほとんどない - ミニマル追求",
        zh: "很少 - 追求极简",
        weights: { "THE_ROW": 4, "LEMAIRE": 3, "COS": 3, "TOTEME": 3, "ACNE_STUDIOS": 2 }
      }
    ]
  },
  {
    id: 11,
    ko: "메이크업과 패션의 관계는?",
    en: "What's the relationship between makeup and fashion for you?",
    ja: "メイクとファッションの関係は？",
    zh: "化妆和时尚的关系是？",
    options: [
      {
        ko: "메이크업에 맞춰 옷을 선택",
        en: "Choose clothes to match makeup",
        ja: "メイクに合わせて服を選ぶ",
        zh: "根据妆容选择服装",
        weights: { "DIOR": 4, "CHANEL": 4, "SAINT_LAURENT": 3, "VERSACE": 3, "DOLCE_GABBANA": 3 }
      },
      {
        ko: "옷에 맞춰 메이크업 조절",
        en: "Adjust makeup to match clothes",
        ja: "服に合わせてメイクを調整",
        zh: "根据服装调整妆容",
        weights: { "THE_ROW": 4, "KHAITE": 3, "TOTEME": 3, "COS": 3, "LEMAIRE": 3 }
      },
      {
        ko: "둘 다 중요하게 생각",
        en: "Both are equally important",
        ja: "両方とも重要視",
        zh: "两者都很重要",
        weights: { "GANNI": 4, "JACQUEMUS": 3, "ZARA": 3, "MANGO": 3, "ACNE_STUDIOS": 3 }
      },
      {
        ko: "자연스러운 것을 선호",
        en: "Prefer natural look",
        ja: "自然なものを好む",
        zh: "偏爱自然风格",
        weights: { "MUJI": 5, "ARKET": 4, "EVERLANE": 3, "EILEEN_FISHER": 3, "COS": 3 }
      }
    ]
  },
  {
    id: 12,
    ko: "쇼핑할 때 중요하게 생각하는 것은?",
    en: "What's most important when shopping?",
    ja: "ショッピングで重要視することは？",
    zh: "购物时最重要的是？",
    options: [
      {
        ko: "품질과 소재",
        en: "Quality and materials",
        ja: "品質と素材",
        zh: "质量和材料",
        weights: { "THE_ROW": 5, "HERMÈS": 4, "LORO_PIANA": 4, "BRUNELLO_CUCINELLI": 3, "TOTEME": 3 }
      },
      {
        ko: "트렌드와 스타일",
        en: "Trends and style",
        ja: "トレンドとスタイル",
        zh: "潮流和风格",
        weights: { "GANNI": 5, "JACQUEMUS": 4, "ZARA": 4, "MANGO": 3, "HM": 3 }
      },
      {
        ko: "가격 대비 만족도",
        en: "Value for money",
        ja: "価格に対する満足度",
        zh: "性价比",
        weights: { "UNIQLO": 5, "COS": 4, "ARKET": 3, "GAP": 3, "MUJI": 3 }
      },
      {
        ko: "브랜드 이미지",
        en: "Brand image",
        ja: "ブランドイメージ",
        zh: "品牌形象",
        weights: { "CHANEL": 5, "DIOR": 4, "LOUIS_VUITTON": 4, "GUCCI": 4, "PRADA": 3 }
      }
    ]
  },
  {
    id: 13,
    ko: "옷 구매 시 예산 범위는?",
    en: "What's your budget range when buying clothes?",
    ja: "服を購入する際の予算範囲は？",
    zh: "购买服装时的预算范围？",
    options: [
      {
        ko: "10만원 이하",
        en: "Under $100",
        ja: "100ドル未満",
        zh: "100美元以下",
        weights: { "UNIQLO": 5, "HM": 4, "GAP": 4, "MUJI": 4, "ZARA": 3 }
      },
      {
        ko: "10-50만원",
        en: "$100-500",
        ja: "100-500ドル",
        zh: "100-500美元",
        weights: { "ZARA": 4, "COS": 4, "GANNI": 4, "MANGO": 3, "ARKET": 3 }
      },
      {
        ko: "50-200만원",
        en: "$500-2000",
        ja: "500-2000ドル",
        zh: "500-2000美元",
        weights: { "ACNE_STUDIOS": 5, "GANNI": 4, "KHAITE": 4, "TOTEME": 4, "JACQUEMUS": 3 }
      },
      {
        ko: "200만원 이상",
        en: "Over $2000",
        ja: "2000ドル以上",
        zh: "2000美元以上",
        weights: { "CHANEL": 5, "DIOR": 5, "HERMÈS": 5, "THE_ROW": 4, "BOTTEGA_VENETA": 4 }
      }
    ]
  },
  {
    id: 14,
    ko: "어떤 패턴을 선호하시나요?",
    en: "What patterns do you prefer?",
    ja: "どのようなパターンを好みますか？",
    zh: "您偏好什么图案？",
    options: [
      {
        ko: "무지/솔리드",
        en: "Solid colors",
        ja: "無地/ソリッド",
        zh: "纯色",
        weights: { "THE_ROW": 5, "TOTEME": 4, "LEMAIRE": 4, "COS": 4, "KHAITE": 3 }
      },
      {
        ko: "플로럴/꽃무늬",
        en: "Floral patterns",
        ja: "フローラル/花柄",
        zh: "花卉图案",
        weights: { "GANNI": 5, "ZIMMERMANN": 4, "REFORMATION": 3, "FAITHFULL_THE_BRAND": 3, "REALISATION_PAR": 3 }
      },
      {
        ko: "스트라이프/도트",
        en: "Stripes/Dots",
        ja: "ストライプ/ドット",
        zh: "条纹/圆点",
        weights: { "SAINT_JAMES": 4, "COS": 3, "ARKET": 3, "GANNI": 3, "MONKI": 3 }
      },
      {
        ko: "체크/기하학적 패턴",
        en: "Check/Geometric patterns",
        ja: "チェック/幾何学的パターン",
        zh: "格纹/几何图案",
        weights: { "BURBERRY": 5, "ACNE_STUDIOS": 3, "GANNI": 3, "JACQUEMUS": 3, "COMME_DES_GARCONS": 3 }
      }
    ]
  },
  {
    id: 15,
    ko: "어떤 소재를 선호하시나요?",
    en: "What materials do you prefer?",
    ja: "どのような素材を好みますか？",
    zh: "您喜欢什么材质？",
    options: [
      {
        ko: "실크/새틴",
        en: "Silk/Satin",
        ja: "シルク/サテン",
        zh: "丝绸/缎面",
        weights: { "HERMÈS": 5, "CHANEL": 4, "DIOR": 4, "THE_ROW": 4, "KHAITE": 3 }
      },
      {
        ko: "코튼/린넨",
        en: "Cotton/Linen",
        ja: "コットン/リネン",
        zh: "棉质/亚麻",
        weights: { "COS": 5, "ARKET": 4, "MUJI": 4, "EVERLANE": 3, "EILEEN_FISHER": 3 }
      },
      {
        ko: "니트/울",
        en: "Knit/Wool",
        ja: "ニット/ウール",
        zh: "针织/羊毛",
        weights: { "ACNE_STUDIOS": 5, "GANNI": 4, "TOTEME": 4, "COS": 3, "LEMAIRE": 3 }
      },
      {
        ko: "합성 소재/기능성 원단",
        en: "Synthetic/Performance fabrics",
        ja: "合成素材/機能性生地",
        zh: "合成材料/功能性面料",
        weights: { "LULULEMON": 5, "NIKE": 3, "ADIDAS": 3, "UNIQLO": 3, "PATAGONIA": 3 }
      }
    ]
  },
  {
    id: 16,
    ko: "라이프스타일에 맞는 옷은?",
    en: "What clothes suit your lifestyle?",
    ja: "ライフスタイルに合う服は？",
    zh: "什么服装适合您的生活方式？",
    options: [
      {
        ko: "직장인 - 세미 포멀",
        en: "Professional - Semi-formal",
        ja: "会社員 - セミフォーマル",
        zh: "职场 - 半正式",
        weights: { "THE_ROW": 5, "KHAITE": 4, "COS": 4, "TOTEME": 4, "LEMAIRE": 3 }
      },
      {
        ko: "학생 - 캐주얼",
        en: "Student - Casual",
        ja: "学生 - カジュアル",
        zh: "学生 - 休闲",
        weights: { "UNIQLO": 5, "ZARA": 4, "HM": 4, "GAP": 3, "MONKI": 3 }
      },
      {
        ko: "육아맘 - 편안함 우선",
        en: "Mother - Comfort first",
        ja: "育児ママ - 快適さ優先",
        zh: "妈妈 - 舒适优先",
        weights: { "LULULEMON": 5, "UNIQLO": 4, "GAP": 4, "MUJI": 3, "ARKET": 3 }
      },
      {
        ko: "프리랜서 - 개성 표현",
        en: "Freelancer - Personal expression",
        ja: "フリーランサー - 個性表現",
        zh: "自由职业者 - 个性表达",
        weights: { "GANNI": 5, "ACNE_STUDIOS": 4, "JACQUEMUS": 4, "COMME_DES_GARCONS": 3, "MM6_MAISON_MARGIELA": 3 }
      }
    ]
  },
  {
    id: 17,
    ko: "계절별 쇼핑 패턴은?",
    en: "What's your seasonal shopping pattern?",
    ja: "季節別ショッピングパターンは？",
    zh: "您的季节性购物模式？",
    options: [
      {
        ko: "봄/여름 위주 - 드레스, 블라우스",
        en: "Mainly spring/summer - dresses, blouses",
        ja: "主に春/夏 - ドレス、ブラウス",
        zh: "主要春夏 - 连衣裙、衬衫",
        weights: { "GANNI": 4, "JACQUEMUS": 4, "ZARA": 3, "MANGO": 3, "REFORMATION": 3 }
      },
      {
        ko: "가을/겨울 위주 - 코트, 니트",
        en: "Mainly fall/winter - coats, knitwear",
        ja: "主に秋/冬 - コート、ニット",
        zh: "主要秋冬 - 大衣、针织衫",
        weights: { "ACNE_STUDIOS": 5, "THE_ROW": 4, "TOTEME": 4, "LEMAIRE": 4, "MAX_MARA": 3 }
      },
      {
        ko: "사계절 균등하게",
        en: "All seasons equally",
        ja: "四季均等に",
        zh: "四季均等",
        weights: { "UNIQLO": 4, "COS": 4, "MUJI": 3, "ARKET": 3, "GAP": 3 }
      },
      {
        ko: "특별한 패턴 없음",
        en: "No specific pattern",
        ja: "特別なパターンなし",
        zh: "没有特定模式",
        weights: { "COS": 3, "MUJI": 3, "LEMAIRE": 3, "THE_ROW": 2, "TOTEME": 2 }
      }
    ]
  },
  {
    id: 18,
    ko: "패션 정보는 주로 어디서 얻나요?",
    en: "Where do you mainly get fashion information?",
    ja: "ファッション情報は主にどこで得ますか？",
    zh: "您主要从哪里获取时尚信息？",
    options: [
      {
        ko: "인스타그램/틱톡",
        en: "Instagram/TikTok",
        ja: "Instagram/TikTok",
        zh: "Instagram/TikTok",
        weights: { "GANNI": 4, "JACQUEMUS": 4, "STAUD": 3, "CULT_GAIA": 3, "REFORMATION": 3 }
      },
      {
        ko: "패션 매거진",
        en: "Fashion magazines",
        ja: "ファッション雑誌",
        zh: "时尚杂志",
        weights: { "CHANEL": 4, "DIOR": 4, "THE_ROW": 3, "KHAITE": 3, "BOTTEGA_VENETA": 3 }
      },
      {
        ko: "셀럽/인플루언서",
        en: "Celebrities/Influencers",
        ja: "セレブ/インフルエンサー",
        zh: "名人/网红",
        weights: { "GANNI": 4, "JACQUEMUS": 3, "BOTTEGA_VENETA": 3, "SAINT_LAURENT": 3, "ACNE_STUDIOS": 3 }
      },
      {
        ko: "특별히 없음",
        en: "No particular source",
        ja: "特にない",
        zh: "没有特别来源",
        weights: { "UNIQLO": 4, "MUJI": 3, "COS": 3, "GAP": 2, "ARKET": 2 }
      }
    ]
  },
  {
    id: 19,
    ko: "브랜드 선택 시 가장 중요한 요소는?",
    en: "What's most important when choosing brands?",
    ja: "ブランド選択時に最も重要な要素は？",
    zh: "选择品牌时最重要的因素是？",
    options: [
      {
        ko: "지속가능성/윤리적 가치",
        en: "Sustainability/Ethical values",
        ja: "持続可能性/倫理的価値",
        zh: "可持续性/道德价值",
        weights: { "STELLA_MCCARTNEY": 5, "EILEEN_FISHER": 4, "EVERLANE": 4, "VEJA": 3, "ARKET": 3 }
      },
      {
        ko: "디자인의 독창성",
        en: "Design originality",
        ja: "デザインの独創性",
        zh: "设计原创性",
        weights: { "COMME_DES_GARCONS": 5, "JACQUEMUS": 4, "GANNI": 4, "ACNE_STUDIOS": 4, "MM6_MAISON_MARGIELA": 3 }
      },
      {
        ko: "브랜드 헤리티지",
        en: "Brand heritage",
        ja: "ブランドヘリテージ",
        zh: "品牌传承",
        weights: { "CHANEL": 5, "HERMÈS": 5, "DIOR": 4, "BURBERRY": 4, "PRADA": 3 }
      },
      {
        ko: "실용성과 편의성",
        en: "Practicality and convenience",
        ja: "実用性と利便性",
        zh: "实用性和便利性",
        weights: { "UNIQLO": 5, "LULULEMON": 4, "COS": 3, "MUJI": 3, "GAP": 3 }
      }
    ]
  },
  {
    id: 20,
    ko: "가장 중요하게 생각하는 패션의 역할은?",
    en: "What role of fashion is most important to you?",
    ja: "ファッションの役割で最も重要視するものは？",
    zh: "您认为时尚最重要的作用是？",
    options: [
      {
        ko: "자신감과 기분 전환",
        en: "Confidence and mood enhancement",
        ja: "自信と気分転換",
        zh: "自信和情绪提升",
        weights: { "GANNI": 5, "JACQUEMUS": 4, "DIOR": 4, "CHANEL": 3, "ZARA": 3 }
      },
      {
        ko: "개성과 정체성 표현",
        en: "Personal identity expression",
        ja: "個性とアイデンティティ表現",
        zh: "个性和身份表达",
        weights: { "ACNE_STUDIOS": 5, "COMME_DES_GARCONS": 4, "GANNI": 4, "MM6_MAISON_MARGIELA": 3, "JACQUEMUS": 3 }
      },
      {
        ko: "사회적 지위 표현",
        en: "Social status expression",
        ja: "社会的地位の表現",
        zh: "社会地位表达",
        weights: { "HERMÈS": 5, "CHANEL": 5, "LOUIS_VUITTON": 4, "DIOR": 4, "BOTTEGA_VENETA": 3 }
      },
      {
        ko: "편안함과 실용성",
        en: "Comfort and practicality",
        ja: "快適さと実用性",
        zh: "舒适和实用性",
        weights: { "LULULEMON": 5, "UNIQLO": 4, "MUJI": 4, "COS": 3, "EVERLANE": 3 }
      }
    ]
  }
];