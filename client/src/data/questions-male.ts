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

export const maleQuestions: Question[] = [
  {
    id: 1,
    ko: "어떤 스타일의 옷을 선호하시나요?",
    en: "What style of clothing do you prefer?",
    ja: "どのようなスタイルの服を好みますか？",
    zh: "您喜欢什么风格的服装？",
    options: [
      {
        ko: "클래식하고 정통적인",
        en: "Classic and traditional",
        ja: "クラシックで伝統的な",
        zh: "经典传统",
        weights: { "RALPH_LAUREN": 5, "BURBERRY": 5, "BROOKS_BROTHERS": 4, "TOMMY_HILFIGER": 3, "ARMANI": 4 }
      },
      {
        ko: "트렌디하고 현대적인",
        en: "Trendy and modern",
        ja: "トレンディでモダンな",
        zh: "时尚现代",
        weights: { "ZARA": 5, "HM": 4, "TOPSHOP": 3, "MANGO": 3, "COS": 4 }
      },
      {
        ko: "캐주얼하고 편안한",
        en: "Casual and comfortable",
        ja: "カジュアルで快適な",
        zh: "休闲舒适",
        weights: { "UNIQLO": 5, "GAP": 4, "MUJI": 4, "AMERICAN_APPAREL": 3, "LEVI": 4 }
      },
      {
        ko: "독창적이고 개성있는",
        en: "Unique and distinctive",
        ja: "独創的で個性的な",
        zh: "独特个性",
        weights: { "ACNE_STUDIOS": 5, "COMME_DES_GARCONS": 4, "STONE_ISLAND": 4, "OFF_WHITE": 3 }
      }
    ]
  },
  {
    id: 2,
    ko: "정장을 입어야 하는 빈도는?",
    en: "How often do you need to wear formal attire?",
    ja: "フォーマルな服装を着る頻度は？",
    zh: "您需要穿正装的频率？",
    options: [
      {
        ko: "거의 매일 (회사원)",
        en: "Almost daily (office worker)",
        ja: "ほぼ毎日（会社員）",
        zh: "几乎每天（上班族）",
        weights: { "HUGO_BOSS": 5, "ARMANI": 5, "CALVIN_KLEIN": 4, "BROOKS_BROTHERS": 4, "RALPH_LAUREN": 3 }
      },
      {
        ko: "가끔 (특별한 행사)",
        en: "Occasionally (special events)",
        ja: "時々（特別な行事）",
        zh: "偶尔（特殊场合）",
        weights: { "ZARA": 4, "HM": 3, "UNIQLO": 3, "COS": 3, "MANGO": 2 }
      },
      {
        ko: "거의 없음 (캐주얼 위주)",
        en: "Rarely (mostly casual)",
        ja: "ほとんどない（カジュアル中心）",
        zh: "很少（主要休闲）",
        weights: { "UNIQLO": 4, "GAP": 4, "LEVI": 4, "NIKE": 3, "ADIDAS": 3 }
      },
      {
        ko: "전혀 없음 (자유로운 직업)",
        en: "Never (freelance/creative work)",
        ja: "全くない（自由な職業）",
        zh: "从不（自由职业）",
        weights: { "STUSSY": 4, "SUPREME": 3, "FEAR_OF_GOD": 3, "STONE_ISLAND": 3, "ACNE_STUDIOS": 4 }
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
        ko: "운동화/스니커즈",
        en: "Sneakers/Athletic shoes",
        ja: "スニーカー/アスレチックシューズ",
        zh: "运动鞋/球鞋",
        weights: { "NIKE": 5, "ADIDAS": 5, "CONVERSE": 4, "VANS": 4, "NEW_BALANCE": 4, "GOLDEN_GOOSE": 3 }
      },
      {
        ko: "정장화/드레스 슈즈",
        en: "Dress shoes/Formal shoes",
        ja: "ドレスシューズ/フォーマルシューズ",
        zh: "正装鞋/礼服鞋",
        weights: { "CHURCH": 5, "ALLEN_EDMONDS": 4, "JOHNSTON_MURPHY": 3, "COLE_HAAN": 3, "CLARKS": 3 }
      },
      {
        ko: "부츠",
        en: "Boots",
        ja: "ブーツ",
        zh: "靴子",
        weights: { "DR_MARTENS": 5, "TIMBERLAND": 4, "RED_WING": 4, "FRYE": 3, "STONE_ISLAND": 3 }
      },
      {
        ko: "로퍼/슬립온",
        en: "Loafers/Slip-ons",
        ja: "ローファー/スリッポン",
        zh: "乐福鞋/一脚蹬",
        weights: { "GUCCI": 4, "PRADA": 4, "TOD": 4, "COMMON_PROJECTS": 3, "BOTTEGA_VENETA": 3 }
      }
    ]
  },
  {
    id: 4,
    ko: "주로 어떤 색상의 옷을 입나요?",
    en: "What colors do you mainly wear?",
    ja: "主にどのような色の服を着ますか？",
    zh: "您主要穿什么颜色的服装？",
    options: [
      {
        ko: "블랙, 화이트, 그레이",
        en: "Black, white, gray",
        ja: "ブラック、ホワイト、グレー",
        zh: "黑白灰",
        weights: { "COS": 5, "MUJI": 4, "ACNE_STUDIOS": 4, "COMMON_PROJECTS": 3, "LEMAIRE": 3 }
      },
      {
        ko: "네이비, 브라운, 베이지",
        en: "Navy, brown, beige",
        ja: "ネイビー、ブラウン、ベージュ",
        zh: "海军蓝、棕色、米色",
        weights: { "RALPH_LAUREN": 5, "BURBERRY": 4, "BROOKS_BROTHERS": 4, "TOMMY_HILFIGER": 3, "J_CREW": 3 }
      },
      {
        ko: "밝은 색상 (블루, 레드 등)",
        en: "Bright colors (blue, red, etc.)",
        ja: "明るい色（ブルー、レッドなど）",
        zh: "明亮色彩（蓝色、红色等）",
        weights: { "TOMMY_HILFIGER": 4, "POLO_RALPH_LAUREN": 4, "LACOSTE": 3, "NIKE": 3, "ADIDAS": 3 }
      },
      {
        ko: "어두운 색상 (올블랙 등)",
        en: "Dark colors (all black, etc.)",
        ja: "暗い色（オールブラックなど）",
        zh: "深色（全黑等）",
        weights: { "RICK_OWENS": 5, "YOHJI_YAMAMOTO": 4, "COMME_DES_GARCONS": 4, "STONE_ISLAND": 3 }
      }
    ]
  },
  {
    id: 5,
    ko: "운동/스포츠 활동을 자주 하시나요?",
    en: "Do you frequently engage in sports/exercise?",
    ja: "スポーツ/運動を頻繁にしますか？",
    zh: "您经常运动/做体育活动吗？",
    options: [
      {
        ko: "매우 자주 (주 5회 이상)",
        en: "Very frequently (5+ times per week)",
        ja: "非常に頻繁に（週5回以上）",
        zh: "非常频繁（每周5次以上）",
        weights: { "LULULEMON": 5, "NIKE": 5, "ADIDAS": 5, "UNDER_ARMOUR": 4, "PATAGONIA": 3 }
      },
      {
        ko: "가끔 (주 2-3회)",
        en: "Sometimes (2-3 times per week)",
        ja: "時々（週2-3回）",
        zh: "有时（每周2-3次）",
        weights: { "NIKE": 4, "ADIDAS": 4, "UNIQLO": 3, "GAP": 3, "LEVI": 2 }
      },
      {
        ko: "거의 안함",
        en: "Rarely",
        ja: "ほとんどしない",
        zh: "很少",
        weights: { "UNIQLO": 4, "ZARA": 3, "HM": 3, "COS": 3, "MUJI": 4 }
      },
      {
        ko: "전혀 안함",
        en: "Never",
        ja: "全くしない",
        zh: "从不",
        weights: { "ACNE_STUDIOS": 3, "LEMAIRE": 3, "APC": 3, "BOTTEGA_VENETA": 2, "SAINT_LAURENT": 2 }
      }
    ]
  },
  {
    id: 6,
    ko: "쇼핑할 때 중요하게 생각하는 것은?",
    en: "What's most important when shopping?",
    ja: "ショッピングで重要視することは？",
    zh: "购物时最重要的是？",
    options: [
      {
        ko: "가성비",
        en: "Value for money",
        ja: "コストパフォーマンス",
        zh: "性价比",
        weights: { "UNIQLO": 5, "HM": 4, "ZARA": 3, "GAP": 3, "MUJI": 4 }
      },
      {
        ko: "브랜드 가치",
        en: "Brand value",
        ja: "ブランド価値",
        zh: "品牌价值",
        weights: { "GUCCI": 5, "PRADA": 5, "BURBERRY": 4, "RALPH_LAUREN": 4, "ARMANI": 4 }
      },
      {
        ko: "품질과 내구성",
        en: "Quality and durability",
        ja: "品質と耐久性",
        zh: "质量和耐用性",
        weights: { "PATAGONIA": 5, "LEVI": 4, "STONE_ISLAND": 4, "ARC_TERYX": 3, "COMMON_PROJECTS": 3 }
      },
      {
        ko: "독특한 디자인",
        en: "Unique design",
        ja: "ユニークなデザイン",
        zh: "独特设计",
        weights: { "COMME_DES_GARCONS": 5, "ACNE_STUDIOS": 4, "RICK_OWENS": 4, "ISSEY_MIYAKE": 3 }
      }
    ]
  },
  {
    id: 7,
    ko: "어떤 핏을 선호하시나요?",
    en: "What fit do you prefer?",
    ja: "どのようなフィットを好みますか？",
    zh: "您喜欢什么版型？",
    options: [
      {
        ko: "슬림핏",
        en: "Slim fit",
        ja: "スリムフィット",
        zh: "修身版型",
        weights: { "ZARA": 5, "HM": 4, "TOPSHOP": 3, "COS": 3, "SAINT_LAURENT": 4 }
      },
      {
        ko: "레귤러핏",
        en: "Regular fit",
        ja: "レギュラーフィット",
        zh: "常规版型",
        weights: { "UNIQLO": 5, "GAP": 4, "RALPH_LAUREN": 4, "TOMMY_HILFIGER": 3, "LEVI": 4 }
      },
      {
        ko: "오버사이즈",
        en: "Oversized",
        ja: "オーバーサイズ",
        zh: "宽松版型",
        weights: { "FEAR_OF_GOD": 5, "ESSENTIALS": 4, "BALENCIAGA": 4, "ACNE_STUDIOS": 3, "STUSSY": 3 }
      },
      {
        ko: "테일러드핏",
        en: "Tailored fit",
        ja: "テーラードフィット",
        zh: "定制版型",
        weights: { "HUGO_BOSS": 5, "ARMANI": 5, "PRADA": 4, "BOTTEGA_VENETA": 4, "SAINT_LAURENT": 3 }
      }
    ]
  },
  {
    id: 8,
    ko: "어떤 아우터를 자주 입나요?",
    en: "What outerwear do you frequently wear?",
    ja: "どのようなアウターをよく着ますか？",
    zh: "您经常穿什么外套？",
    options: [
      {
        ko: "후드티/스웨트셔츠",
        en: "Hoodies/Sweatshirts",
        ja: "フーディー/スウェットシャツ",
        zh: "连帽衫/运动衫",
        weights: { "FEAR_OF_GOD": 5, "ESSENTIALS": 5, "STUSSY": 4, "SUPREME": 4, "NIKE": 3 }
      },
      {
        ko: "재킷/블레이저",
        en: "Jackets/Blazers",
        ja: "ジャケット/ブレザー",
        zh: "夹克/西装外套",
        weights: { "HUGO_BOSS": 5, "ARMANI": 4, "ZARA": 4, "COS": 3, "RALPH_LAUREN": 4 }
      },
      {
        ko: "코트",
        en: "Coats",
        ja: "コート",
        zh: "大衣",
        weights: { "BURBERRY": 5, "ACNE_STUDIOS": 4, "LEMAIRE": 4, "APC": 3, "COS": 3 }
      },
      {
        ko: "패딩/다운 재킷",
        en: "Puffer/Down jackets",
        ja: "パファー/ダウンジャケット",
        zh: "羽绒服/棉服",
        weights: { "MONCLER": 5, "CANADA_GOOSE": 4, "THE_NORTH_FACE": 4, "STONE_ISLAND": 4, "PATAGONIA": 3 }
      }
    ]
  },
  {
    id: 9,
    ko: "어떤 소재를 선호하시나요?",
    en: "What materials do you prefer?",
    ja: "どのような素材を好みますか？",
    zh: "您喜欢什么材质？",
    options: [
      {
        ko: "코튼/면",
        en: "Cotton",
        ja: "コットン/綿",
        zh: "棉质",
        weights: { "UNIQLO": 5, "MUJI": 4, "GAP": 4, "LEVI": 4, "APC": 3 }
      },
      {
        ko: "울/캐시미어",
        en: "Wool/Cashmere",
        ja: "ウール/カシミア",
        zh: "羊毛/羊绒",
        weights: { "HERMÈS": 5, "LORO_PIANA": 4, "BRUNELLO_CUCINELLI": 4, "BURBERRY": 4, "RALPH_LAUREN": 3 }
      },
      {
        ko: "기능성 소재",
        en: "Technical materials",
        ja: "テクニカル素材",
        zh: "功能面料",
        weights: { "STONE_ISLAND": 5, "ARC_TERYX": 4, "PATAGONIA": 4, "NIKE": 3, "ADIDAS": 3 }
      },
      {
        ko: "리넨",
        en: "Linen",
        ja: "リネン",
        zh: "亚麻",
        weights: { "COS": 4, "ARKET": 4, "LEMAIRE": 3, "APC": 3, "MUJI": 3 }
      }
    ]
  },
  {
    id: 10,
    ko: "패션에 대한 관심도는?",
    en: "How interested are you in fashion?",
    ja: "ファッションへの関心度は？",
    zh: "您对时尚的兴趣程度？",
    options: [
      {
        ko: "매우 높음 - 최신 트렌드 추적",
        en: "Very high - follow latest trends",
        ja: "非常に高い - 最新トレンドをフォロー",
        zh: "非常高 - 追随最新趋势",
        weights: { "BALENCIAGA": 5, "OFF_WHITE": 4, "FEAR_OF_GOD": 4, "JACQUEMUS": 3, "STONE_ISLAND": 3 }
      },
      {
        ko: "높음 - 브랜드와 품질 중시",
        en: "High - value brands and quality",
        ja: "高い - ブランドと品質を重視",
        zh: "较高 - 重视品牌和质量",
        weights: { "ACNE_STUDIOS": 5, "COS": 4, "LEMAIRE": 4, "APC": 3, "COMMON_PROJECTS": 3 }
      },
      {
        ko: "보통 - 기본적인 스타일 유지",
        en: "Moderate - maintain basic style",
        ja: "普通 - ベーシックなスタイルを維持",
        zh: "一般 - 保持基本风格",
        weights: { "UNIQLO": 5, "ZARA": 4, "GAP": 3, "HM": 3, "MUJI": 4 }
      },
      {
        ko: "낮음 - 편안함만 추구",
        en: "Low - only seek comfort",
        ja: "低い - 快適さのみ追求",
        zh: "较低 - 只追求舒适",
        weights: { "UNIQLO": 4, "GAP": 4, "HANES": 3, "FRUIT_OF_THE_LOOM": 3, "MUJI": 3 }
      }
    ]
  },
  {
    id: 11,
    ko: "주로 어떤 활동을 하시나요?",
    en: "What activities do you mainly do?",
    ja: "主にどのような活動をしますか？",
    zh: "您主要从事什么活动？",
    options: [
      {
        ko: "사무직/회사 업무",
        en: "Office work/Corporate job",
        ja: "事務職/会社業務",
        zh: "办公室工作/公司业务",
        weights: { "HUGO_BOSS": 5, "ARMANI": 4, "CALVIN_KLEIN": 4, "UNIQLO": 3, "ZARA": 3 }
      },
      {
        ko: "창작/디자인 업무",
        en: "Creative/Design work",
        ja: "クリエイティブ/デザイン業務",
        zh: "创意/设计工作",
        weights: { "ACNE_STUDIOS": 5, "COMME_DES_GARCONS": 4, "ISSEY_MIYAKE": 4, "GANNI": 3, "COS": 3 }
      },
      {
        ko: "학생",
        en: "Student",
        ja: "学生",
        zh: "学生",
        weights: { "UNIQLO": 5, "HM": 4, "ZARA": 4, "NIKE": 3, "ADIDAS": 3 }
      },
      {
        ko: "아웃도어/여행",
        en: "Outdoor/Travel",
        ja: "アウトドア/旅行",
        zh: "户外/旅行",
        weights: { "PATAGONIA": 5, "THE_NORTH_FACE": 4, "ARC_TERYX": 4, "STONE_ISLAND": 3, "MUJI": 3 }
      }
    ]
  },
  {
    id: 12,
    ko: "액세서리를 어느 정도 착용하시나요?",
    en: "How much do you wear accessories?",
    ja: "アクセサリーをどの程度着用しますか？",
    zh: "您佩戴配饰的程度？",
    options: [
      {
        ko: "많이 착용 (시계, 목걸이, 반지 등)",
        en: "Frequently (watch, necklace, rings, etc.)",
        ja: "頻繁に着用（時計、ネックレス、指輪など）",
        zh: "经常佩戴（手表、项链、戒指等）",
        weights: { "GUCCI": 5, "HERMÈS": 4, "CARTIER": 4, "TIFFANY": 3, "ROLEX": 5 }
      },
      {
        ko: "시계 정도만",
        en: "Just a watch",
        ja: "時計程度のみ",
        zh: "只戴手表",
        weights: { "ROLEX": 4, "OMEGA": 3, "SEIKO": 3, "CASIO": 2, "APPLE": 3 }
      },
      {
        ko: "가끔 착용",
        en: "Occasionally",
        ja: "時々着用",
        zh: "偶尔佩戴",
        weights: { "UNIQLO": 3, "COS": 3, "MUJI": 3, "GAP": 2, "ZARA": 2 }
      },
      {
        ko: "거의 착용하지 않음",
        en: "Rarely wear any",
        ja: "ほとんど着用しない",
        zh: "很少佩戴",
        weights: { "MUJI": 4, "COS": 3, "LEMAIRE": 3, "APC": 3, "ACNE_STUDIOS": 2 }
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
        ko: "10-30만원",
        en: "$100-300",
        ja: "100-300ドル",
        zh: "100-300美元",
        weights: { "ZARA": 4, "COS": 4, "ACNE_STUDIOS": 3, "NIKE": 3, "ADIDAS": 3 }
      },
      {
        ko: "30-100만원",
        en: "$300-1000",
        ja: "300-1000ドル",
        zh: "300-1000美元",
        weights: { "ACNE_STUDIOS": 5, "STONE_ISLAND": 4, "APC": 4, "LEMAIRE": 4, "COMMON_PROJECTS": 3 }
      },
      {
        ko: "100만원 이상",
        en: "Over $1000",
        ja: "1000ドル以上",
        zh: "1000美元以上",
        weights: { "GUCCI": 5, "PRADA": 5, "HERMÈS": 5, "BOTTEGA_VENETA": 4, "SAINT_LAURENT": 4 }
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
        weights: { "MUJI": 5, "COS": 4, "LEMAIRE": 4, "APC": 4, "ACNE_STUDIOS": 3 }
      },
      {
        ko: "스트라이프",
        en: "Stripes",
        ja: "ストライプ",
        zh: "条纹",
        weights: { "SAINT_JAMES": 5, "BRETON": 4, "J_CREW": 3, "RALPH_LAUREN": 3, "TOMMY_HILFIGER": 3 }
      },
      {
        ko: "체크/격자",
        en: "Check/Plaid",
        ja: "チェック/格子",
        zh: "格纹",
        weights: { "BURBERRY": 5, "BARBOUR": 4, "RALPH_LAUREN": 4, "BROOKS_BROTHERS": 3, "J_CREW": 3 }
      },
      {
        ko: "그래픽/로고",
        en: "Graphics/Logos",
        ja: "グラフィック/ロゴ",
        zh: "图案/标志",
        weights: { "SUPREME": 5, "STUSSY": 4, "FEAR_OF_GOD": 3, "OFF_WHITE": 4, "BALENCIAGA": 3 }
      }
    ]
  },
  {
    id: 15,
    ko: "주로 어떤 바지를 입나요?",
    en: "What type of pants do you mainly wear?",
    ja: "主にどのようなパンツを履きますか？",
    zh: "您主要穿什么类型的裤子？",
    options: [
      {
        ko: "진/데님",
        en: "Jeans/Denim",
        ja: "ジーンズ/デニム",
        zh: "牛仔裤",
        weights: { "LEVI": 5, "GAP": 4, "UNIQLO": 4, "ACNE_STUDIOS": 3, "APC": 3 }
      },
      {
        ko: "정장 바지",
        en: "Dress pants",
        ja: "ドレスパンツ",
        zh: "正装裤",
        weights: { "HUGO_BOSS": 5, "ARMANI": 4, "ZARA": 4, "COS": 3, "UNIQLO": 3 }
      },
      {
        ko: "치노 팬츠",
        en: "Chino pants",
        ja: "チノパンツ",
        zh: "休闲裤",
        weights: { "RALPH_LAUREN": 4, "GAP": 4, "UNIQLO": 4, "J_CREW": 3, "TOMMY_HILFIGER": 3 }
      },
      {
        ko: "조거 팬츠/트랙 팬츠",
        en: "Jogger/Track pants",
        ja: "ジョガーパンツ/トラックパンツ",
        zh: "运动裤",
        weights: { "NIKE": 5, "ADIDAS": 5, "FEAR_OF_GOD": 4, "ESSENTIALS": 4, "LULULEMON": 3 }
      }
    ]
  },
  {
    id: 16,
    ko: "어떤 티셔츠 스타일을 선호하시나요?",
    en: "What t-shirt style do you prefer?",
    ja: "どのようなTシャツスタイルを好みますか？",
    zh: "您喜欢什么样的T恤风格？",
    options: [
      {
        ko: "베이직 무지 티셔츠",
        en: "Basic plain t-shirts",
        ja: "ベーシック無地Tシャツ",
        zh: "基础纯色T恤",
        weights: { "UNIQLO": 5, "MUJI": 4, "COS": 4, "HANES": 3, "GAP": 3 }
      },
      {
        ko: "브랜드 로고 티셔츠",
        en: "Brand logo t-shirts",
        ja: "ブランドロゴTシャツ",
        zh: "品牌标志T恤",
        weights: { "SUPREME": 5, "STUSSY": 4, "NIKE": 4, "ADIDAS": 4, "FEAR_OF_GOD": 3 }
      },
      {
        ko: "그래픽/프린트 티셔츠",
        en: "Graphic/Print t-shirts",
        ja: "グラフィック/プリントTシャツ",
        zh: "图案/印花T恤",
        weights: { "KENZO": 4, "VERSACE": 3, "MOSCHINO": 3, "GANNI": 3, "OFF_WHITE": 4 }
      },
      {
        ko: "오버사이즈 티셔츠",
        en: "Oversized t-shirts",
        ja: "オーバーサイズTシャツ",
        zh: "宽松T恤",
        weights: { "FEAR_OF_GOD": 5, "ESSENTIALS": 4, "BALENCIAGA": 4, "ACNE_STUDIOS": 3, "STUSSY": 3 }
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
        ko: "봄/여름 위주",
        en: "Mainly spring/summer",
        ja: "主に春/夏",
        zh: "主要春夏",
        weights: { "UNIQLO": 4, "HM": 3, "ZARA": 3, "COS": 3, "LEMAIRE": 2 }
      },
      {
        ko: "가을/겨울 위주",
        en: "Mainly fall/winter",
        ja: "主に秋/冬",
        zh: "主要秋冬",
        weights: { "CANADA_GOOSE": 5, "MONCLER": 4, "STONE_ISLAND": 4, "PATAGONIA": 4, "ACNE_STUDIOS": 3 }
      },
      {
        ko: "사계절 균등하게",
        en: "All seasons equally",
        ja: "四季均等に",
        zh: "四季均等",
        weights: { "UNIQLO": 4, "MUJI": 4, "COS": 3, "GAP": 3, "ZARA": 3 }
      },
      {
        ko: "필요할 때마다",
        en: "As needed",
        ja: "必要に応じて",
        zh: "按需购买",
        weights: { "MUJI": 3, "UNIQLO": 3, "COS": 3, "GAP": 2, "LEMAIRE": 3 }
      }
    ]
  },
  {
    id: 18,
    ko: "브랜드 선택 시 가장 중요한 요소는?",
    en: "What's most important when choosing brands?",
    ja: "ブランド選択時に最も重要な要素は？",
    zh: "选择品牌时最重要的因素是？",
    options: [
      {
        ko: "품질과 내구성",
        en: "Quality and durability",
        ja: "品質と耐久性",
        zh: "质量和耐用性",
        weights: { "PATAGONIA": 5, "STONE_ISLAND": 4, "LEVI": 4, "ARC_TERYX": 4, "COMMON_PROJECTS": 3 }
      },
      {
        ko: "디자인과 스타일",
        en: "Design and style",
        ja: "デザインとスタイル",
        zh: "设计和风格",
        weights: { "ACNE_STUDIOS": 5, "COMME_DES_GARCONS": 4, "LEMAIRE": 4, "APC": 3, "JACQUEMUS": 3 }
      },
      {
        ko: "브랜드 이미지",
        en: "Brand image",
        ja: "ブランドイメージ",
        zh: "品牌形象",
        weights: { "SUPREME": 5, "OFF_WHITE": 4, "FEAR_OF_GOD": 4, "GUCCI": 4, "BALENCIAGA": 3 }
      },
      {
        ko: "실용성과 편의성",
        en: "Practicality and convenience",
        ja: "実用性と利便性",
        zh: "实用性和便利性",
        weights: { "UNIQLO": 5, "MUJI": 4, "GAP": 3, "NIKE": 3, "ADIDAS": 3 }
      }
    ]
  },
  {
    id: 19,
    ko: "패션 정보는 주로 어디서 얻나요?",
    en: "Where do you mainly get fashion information?",
    ja: "ファッション情報は主にどこで得ますか？",
    zh: "您主要从哪里获取时尚信息？",
    options: [
      {
        ko: "소셜미디어 (인스타그램, 틱톡 등)",
        en: "Social media (Instagram, TikTok, etc.)",
        ja: "ソーシャルメディア（Instagram、TikTokなど）",
        zh: "社交媒体（Instagram、TikTok等）",
        weights: { "FEAR_OF_GOD": 4, "OFF_WHITE": 4, "BALENCIAGA": 3, "SUPREME": 3, "STONE_ISLAND": 3 }
      },
      {
        ko: "패션 잡지/웹사이트",
        en: "Fashion magazines/websites",
        ja: "ファッション雑誌/ウェブサイト",
        zh: "时尚杂志/网站",
        weights: { "ACNE_STUDIOS": 4, "LEMAIRE": 4, "APC": 3, "COS": 3, "JACQUEMUS": 3 }
      },
      {
        ko: "주변 사람들",
        en: "People around me",
        ja: "周りの人々",
        zh: "周围的人",
        weights: { "UNIQLO": 4, "ZARA": 3, "HM": 3, "GAP": 3, "NIKE": 2 }
      },
      {
        ko: "특별히 없음",
        en: "No particular source",
        ja: "特にない",
        zh: "没有特别来源",
        weights: { "MUJI": 4, "UNIQLO": 3, "GAP": 3, "LEVI": 2, "HANES": 2 }
      }
    ]
  },
  {
    id: 20,
    ko: "가장 중요하게 생각하는 옷의 기능은?",
    en: "What function of clothing is most important to you?",
    ja: "服の機能で最も重要視するものは？",
    zh: "您认为服装最重要的功能是？",
    options: [
      {
        ko: "체온 조절",
        en: "Temperature regulation",
        ja: "体温調節",
        zh: "温度调节",
        weights: { "PATAGONIA": 5, "THE_NORTH_FACE": 4, "ARC_TERYX": 4, "UNIQLO": 3, "MUJI": 3 }
      },
      {
        ko: "움직임의 자유로움",
        en: "Freedom of movement",
        ja: "動きやすさ",
        zh: "活动自由度",
        weights: { "LULULEMON": 5, "NIKE": 4, "ADIDAS": 4, "UNIQLO": 3, "GAP": 3 }
      },
      {
        ko: "스타일 표현",
        en: "Style expression",
        ja: "スタイル表現",
        zh: "风格表达",
        weights: { "ACNE_STUDIOS": 5, "COMME_DES_GARCONS": 4, "FEAR_OF_GOD": 4, "OFF_WHITE": 3, "BALENCIAGA": 3 }
      },
      {
        ko: "사회적 지위 표현",
        en: "Social status expression",
        ja: "社会的地位の表現",
        zh: "社会地位表达",
        weights: { "GUCCI": 5, "HERMÈS": 5, "PRADA": 4, "ROLEX": 4, "BOTTEGA_VENETA": 4 }
      }
    ]
  }
];