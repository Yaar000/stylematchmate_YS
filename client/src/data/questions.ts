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

export const questions: Question[] = [
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
        weights: { "RALPH_LAUREN": 5, "BURBERRY": 5, "BROOKS_BROTHERS": 4, "TOMMY_HILFIGER": 3 }
      },
      {
        ko: "트렌디하고 현대적인",
        en: "Trendy and modern",
        ja: "トレンディでモダンな",
        zh: "时尚现代",
        weights: { "ZARA": 5, "HM": 4, "ASOS": 4, "TOPSHOP": 3, "MANGO": 3 }
      },
      {
        ko: "캐주얼하고 편안한",
        en: "Casual and comfortable",
        ja: "カジュアルで快適な",
        zh: "休闲舒适",
        weights: { "UNIQLO": 5, "GAP": 4, "MUJI": 4, "AMERICAN_APPAREL": 3 }
      },
      {
        ko: "독창적이고 개성있는",
        en: "Unique and distinctive",
        ja: "独創的で個性的な",
        zh: "独特个性",
        weights: { "ACNE_STUDIOS": 5, "COMME_DES_GARCONS": 4, "MAISON_MARGIELA": 4, "ISSEY_MIYAKE": 3 }
      }
    ]
  },
  {
    id: 2,
    ko: "쇼핑할 때 가장 중요한 요소는?",
    en: "What's most important when shopping?",
    ja: "ショッピングで最も重要な要素は？",
    zh: "购物时最重要的因素是？",
    options: [
      {
        ko: "가격 대비 성능",
        en: "Value for money",
        ja: "コストパフォーマンス",
        zh: "性价比",
        weights: { "UNIQLO": 5, "HM": 4, "ZARA": 3, "MUJI": 3, "GAP": 3 }
      },
      {
        ko: "브랜드 명성",
        en: "Brand reputation",
        ja: "ブランドの評判",
        zh: "品牌声誉",
        weights: { "GUCCI": 5, "PRADA": 5, "LOUIS_VUITTON": 5, "BURBERRY": 4, "RALPH_LAUREN": 4 }
      },
      {
        ko: "디자인과 스타일",
        en: "Design and style",
        ja: "デザインとスタイル",
        zh: "设计风格",
        weights: { "ACNE_STUDIOS": 5, "COS": 4, "ARKET": 4, "WEEKDAY": 3, "MONKI": 3 }
      },
      {
        ko: "품질과 내구성",
        en: "Quality and durability",
        ja: "品質と耐久性",
        zh: "质量耐用",
        weights: { "PATAGONIA": 5, "LEVI": 4, "MUJI": 4, "UNIQLO": 3, "LL_BEAN": 3 }
      }
    ]
  },
  {
    id: 3,
    ko: "선호하는 색상 팔레트는?",
    en: "Preferred color palette?",
    ja: "好みのカラーパレットは？",
    zh: "偏好的色彩搭配？",
    options: [
      {
        ko: "블랙, 화이트, 그레이",
        en: "Black, white, gray",
        ja: "ブラック、ホワイト、グレー",
        zh: "黑白灰",
        weights: { "COS": 5, "MUJI": 4, "ACNE_STUDIOS": 4, "ARKET": 3, "UNIQLO": 3 }
      },
      {
        ko: "네이비, 베이지, 브라운",
        en: "Navy, beige, brown",
        ja: "ネイビー、ベージュ、ブラウン",
        zh: "深蓝米色棕色",
        weights: { "RALPH_LAUREN": 5, "BURBERRY": 4, "BROOKS_BROTHERS": 4, "TOMMY_HILFIGER": 3 }
      },
      {
        ko: "밝고 화려한 색상",
        en: "Bright and vibrant colors",
        ja: "明るく鮮やかな色",
        zh: "明亮鲜艳色彩",
        weights: { "HM": 4, "ZARA": 4, "MANGO": 3, "TOPSHOP": 3, "ASOS": 3 }
      },
      {
        ko: "파스텔과 부드러운 톤",
        en: "Pastel and soft tones",
        ja: "パステルと柔らかいトーン",
        zh: "粉彩柔和色调",
        weights: { "ARKET": 4, "COS": 3, "MONKI": 3, "WEEKDAY": 3, "OTHER_STORIES": 4 }
      }
    ]
  },
  {
    id: 4,
    ko: "어떤 분위기의 옷을 입고 싶나요?",
    en: "What mood do you want your clothes to convey?",
    ja: "どのような雰囲気の服を着たいですか？",
    zh: "您希望服装传达什么样的气氛？",
    options: [
      {
        ko: "프로페셔널하고 세련된",
        en: "Professional and sophisticated",
        ja: "プロフェッショナルで洗練された",
        zh: "专业精致",
        weights: { "COS": 5, "ARKET": 4, "ACNE_STUDIOS": 4, "FILIPPA_K": 4, "TOTEME": 3 }
      },
      {
        ko: "편안하고 자연스러운",
        en: "Comfortable and natural",
        ja: "快適で自然な",
        zh: "舒适自然",
        weights: { "MUJI": 5, "UNIQLO": 4, "PATAGONIA": 4, "EILEEN_FISHER": 3, "EVERLANE": 3 }
      },
      {
        ko: "화려하고 눈에 띄는",
        en: "Glamorous and eye-catching",
        ja: "華やかで目を引く",
        zh: "华丽抢眼",
        weights: { "GUCCI": 5, "VERSACE": 4, "DOLCE_GABBANA": 4, "MOSCHINO": 3, "BALMAIN": 3 }
      },
      {
        ko: "독특하고 창의적인",
        en: "Unique and creative",
        ja: "ユニークで創造的な",
        zh: "独特创意",
        weights: { "COMME_DES_GARCONS": 5, "ISSEY_MIYAKE": 4, "YOHJI_YAMAMOTO": 4, "RICK_OWENS": 3 }
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
        ko: "직장이나 비즈니스 미팅",
        en: "Work or business meetings",
        ja: "職場やビジネスミーティング",
        zh: "工作或商务会议",
        weights: { "HUGO_BOSS": 5, "ARMANI": 4, "CALVIN_KLEIN": 4, "BROOKS_BROTHERS": 3, "BANANA_REPUBLIC": 3 }
      },
      {
        ko: "캐주얼한 일상생활",
        en: "Casual daily life",
        ja: "カジュアルな日常生活",
        zh: "休闲日常生活",
        weights: { "UNIQLO": 5, "GAP": 4, "LEVI": 4, "AMERICAN_EAGLE": 3, "HOLLISTER": 3 }
      },
      {
        ko: "특별한 행사나 파티",
        en: "Special events or parties",
        ja: "特別なイベントやパーティー",
        zh: "特殊活动或聚会",
        weights: { "ZARA": 4, "HM": 3, "MANGO": 3, "TOPSHOP": 3, "ASOS": 4 }
      },
      {
        ko: "예술적이거나 창의적인 환경",
        en: "Artistic or creative environments",
        ja: "芸術的または創造的な環境",
        zh: "艺术或创意环境",
        weights: { "ACNE_STUDIOS": 5, "GANNI": 4, "STUSSY": 3, "OPENING_CEREMONY": 3, "DOVER_STREET_MARKET": 4 }
      }
    ]
  },
  {
    id: 6,
    ko: "선호하는 핏(fit)은?",
    en: "What's your preferred fit?",
    ja: "好みのフィットは？",
    zh: "您喜欢什么版型？",
    options: [
      {
        ko: "타이트하고 몸에 딱 맞는",
        en: "Tight and form-fitting",
        ja: "タイトで体にフィットする",
        zh: "紧身合体",
        weights: { "ZARA": 4, "HM": 3, "TOPSHOP": 3, "MANGO": 3, "ASOS": 3 }
      },
      {
        ko: "루즈하고 여유있는",
        en: "Loose and relaxed",
        ja: "ルーズでリラックスした",
        zh: "宽松休闲",
        weights: { "ACNE_STUDIOS": 4, "WEEKDAY": 4, "MONKI": 3, "GANNI": 3, "STUSSY": 3 }
      },
      {
        ko: "슬림하지만 편안한",
        en: "Slim but comfortable",
        ja: "スリムだが快適な",
        zh: "修身但舒适",
        weights: { "UNIQLO": 5, "COS": 4, "ARKET": 4, "MUJI": 3, "EVERLANE": 3 }
      },
      {
        ko: "클래식한 정장 핏",
        en: "Classic tailored fit",
        ja: "クラシックなテーラードフィット",
        zh: "经典剪裁",
        weights: { "HUGO_BOSS": 5, "ARMANI": 4, "RALPH_LAUREN": 4, "BROOKS_BROTHERS": 4, "CALVIN_KLEIN": 3 }
      }
    ]
  },
  {
    id: 7,
    ko: "어떤 소재를 선호하시나요?",
    en: "What materials do you prefer?",
    ja: "どのような素材を好みますか？",
    zh: "您喜欢什么材质？",
    options: [
      {
        ko: "천연 소재 (면, 린넨, 울)",
        en: "Natural materials (cotton, linen, wool)",
        ja: "天然素材（コットン、リネン、ウール）",
        zh: "天然材质（棉、亚麻、羊毛）",
        weights: { "MUJI": 5, "PATAGONIA": 4, "EILEEN_FISHER": 4, "EVERLANE": 3, "ARKET": 3 }
      },
      {
        ko: "고급 원단 (실크, 캐시미어)",
        en: "Luxury fabrics (silk, cashmere)",
        ja: "高級生地（シルク、カシミア）",
        zh: "高档面料（丝绸、羊绒）",
        weights: { "HERMÈS": 5, "LORO_PIANA": 4, "BRUNELLO_CUCINELLI": 4, "MAX_MARA": 3, "TOTEME": 3 }
      },
      {
        ko: "합성 소재 (폴리에스터, 나일론)",
        en: "Synthetic materials (polyester, nylon)",
        ja: "合成素材（ポリエステル、ナイロン）",
        zh: "合成材质（聚酯纤维、尼龙）",
        weights: { "NIKE": 4, "ADIDAS": 4, "UNDER_ARMOUR": 3, "LULULEMON": 3, "UNIQLO": 2 }
      },
      {
        ko: "혁신적인 기능성 소재",
        en: "Innovative functional materials",
        ja: "革新的な機能性素材",
        zh: "创新功能材质",
        weights: { "PATAGONIA": 5, "ARC_TERYX": 4, "LULULEMON": 4, "NIKE": 3, "ADIDAS": 3 }
      }
    ]
  },
  {
    id: 8,
    ko: "패션에 대한 관심도는?",
    en: "How interested are you in fashion?",
    ja: "ファッションへの関心度は？",
    zh: "您对时尚的关注度？",
    options: [
      {
        ko: "매우 높음 - 최신 트렌드를 항상 따라감",
        en: "Very high - always follow latest trends",
        ja: "非常に高い - 常に最新トレンドをフォロー",
        zh: "非常高 - 总是跟随最新潮流",
        weights: { "BALENCIAGA": 5, "OFF_WHITE": 4, "VETEMENTS": 4, "JACQUEMUS": 3, "GANNI": 3 }
      },
      {
        ko: "보통 - 가끔 새로운 스타일 시도",
        en: "Moderate - occasionally try new styles",
        ja: "普通 - たまに新しいスタイルを試す",
        zh: "中等 - 偶尔尝试新风格",
        weights: { "ZARA": 4, "HM": 3, "MANGO": 3, "COS": 3, "ARKET": 3 }
      },
      {
        ko: "낮음 - 기본적인 옷만 선호",
        en: "Low - prefer basic clothing",
        ja: "低い - ベーシックな服を好む",
        zh: "较低 - 偏爱基础款",
        weights: { "UNIQLO": 5, "MUJI": 4, "GAP": 4, "AMERICAN_APPAREL": 3, "EVERLANE": 3 }
      },
      {
        ko: "나만의 스타일 추구",
        en: "Pursue my own unique style",
        ja: "自分だけのスタイルを追求",
        zh: "追求自己独特风格",
        weights: { "ACNE_STUDIOS": 5, "COMME_DES_GARCONS": 4, "ISSEY_MIYAKE": 4, "MAISON_MARGIELA": 3 }
      }
    ]
  },
  {
    id: 9,
    ko: "주로 어떤 시즌 옷을 많이 구매하시나요?",
    en: "Which season clothes do you buy most?",
    ja: "主にどの季節の服を多く購入しますか？",
    zh: "您主要购买哪个季节的服装？",
    options: [
      {
        ko: "봄/여름 - 가볍고 시원한 옷",
        en: "Spring/Summer - light and cool clothes",
        ja: "春/夏 - 軽くて涼しい服",
        zh: "春夏 - 轻薄凉爽的衣服",
        weights: { "UNIQLO": 4, "HM": 3, "ZARA": 3, "MANGO": 3, "COS": 2 }
      },
      {
        ko: "가을/겨울 - 따뜻한 아우터",
        en: "Fall/Winter - warm outerwear",
        ja: "秋/冬 - 暖かいアウター",
        zh: "秋冬 - 保暖外套",
        weights: { "CANADA_GOOSE": 5, "MONCLER": 4, "PATAGONIA": 4, "THE_NORTH_FACE": 3, "WOOLRICH": 3 }
      },
      {
        ko: "사계절 - 레이어링 가능한 옷",
        en: "All seasons - layerable clothes",
        ja: "四季 - レイヤリング可能な服",
        zh: "四季 - 可叠穿的衣服",
        weights: { "MUJI": 4, "UNIQLO": 4, "COS": 3, "ARKET": 3, "EVERLANE": 3 }
      },
      {
        ko: "계절에 상관없이 - 특별한 아이템",
        en: "Season-independent - special items",
        ja: "季節に関係なく - 特別なアイテム",
        zh: "不分季节 - 特殊单品",
        weights: { "ACNE_STUDIOS": 4, "GANNI": 3, "STUSSY": 3, "OPENING_CEREMONY": 3, "COMME_DES_GARCONS": 4 }
      }
    ]
  },
  {
    id: 10,
    ko: "선호하는 쇼핑 방식은?",
    en: "What's your preferred shopping method?",
    ja: "好みのショッピング方法は？",
    zh: "您偏好的购物方式？",
    options: [
      {
        ko: "온라인 - 편리함을 중시",
        en: "Online - value convenience",
        ja: "オンライン - 便利さを重視",
        zh: "网购 - 重视便利性",
        weights: { "ASOS": 5, "ZALANDO": 4, "NET_A_PORTER": 3, "FARFETCH": 3, "SSENSE": 3 }
      },
      {
        ko: "오프라인 매장 - 직접 체험 중시",
        en: "Physical stores - value hands-on experience",
        ja: "オフライン店舗 - 直接体験を重視",
        zh: "实体店 - 重视亲身体验",
        weights: { "UNIQLO": 4, "ZARA": 4, "HM": 3, "COS": 3, "MUJI": 3 }
      },
      {
        ko: "브랜드 플래그십 스토어",
        en: "Brand flagship stores",
        ja: "ブランドフラッグシップストア",
        zh: "品牌旗舰店",
        weights: { "APPLE": 5, "NIKE": 4, "ADIDAS": 4, "SUPREME": 3, "COMME_DES_GARCONS": 3 }
      },
      {
        ko: "멀티브랜드 편집숍",
        en: "Multi-brand concept stores",
        ja: "マルチブランド編集ショップ",
        zh: "多品牌集合店",
        weights: { "DOVER_STREET_MARKET": 5, "OPENING_CEREMONY": 4, "COLETTE": 3, "SSENSE": 3, "BROWNS": 3 }
      }
    ]
  },
  {
    id: 11,
    ko: "어떤 액세서리를 자주 착용하시나요?",
    en: "What accessories do you frequently wear?",
    ja: "どのようなアクセサリーをよく着用しますか？",
    zh: "您经常佩戴什么配饰？",
    options: [
      {
        ko: "시계, 가방 등 실용적인 아이템",
        en: "Watches, bags and practical items",
        ja: "時計、バッグなど実用的なアイテム",
        zh: "手表、包包等实用物品",
        weights: { "MICHAEL_KORS": 4, "COACH": 4, "KATE_SPADE": 3, "FOSSIL": 3, "LONGCHAMP": 3 }
      },
      {
        ko: "귀걸이, 목걸이 등 장신구",
        en: "Earrings, necklaces and jewelry",
        ja: "イヤリング、ネックレスなどの装身具",
        zh: "耳环、项链等首饰",
        weights: { "TIFFANY": 5, "PANDORA": 4, "SWAROVSKI": 3, "CARTIER": 5, "VAN_CLEEF": 4 }
      },
      {
        ko: "모자, 스카프 등 포인트 아이템",
        en: "Hats, scarves and accent pieces",
        ja: "帽子、スカーフなどのポイントアイテム",
        zh: "帽子、围巾等点睛之笔",
        weights: { "HERMÈS": 5, "ACNE_STUDIOS": 4, "GANNI": 3, "STUSSY": 3, "SUPREME": 3 }
      },
      {
        ko: "액세서리는 거의 착용하지 않음",
        en: "Rarely wear accessories",
        ja: "アクセサリーはほとんど着用しない",
        zh: "很少佩戴配饰",
        weights: { "MUJI": 4, "COS": 3, "ARKET": 3, "UNIQLO": 2, "EVERLANE": 3 }
      }
    ]
  },
  {
    id: 12,
    ko: "선호하는 신발 스타일은?",
    en: "What's your preferred shoe style?",
    ja: "好みの靴のスタイルは？",
    zh: "您偏好的鞋子风格？",
    options: [
      {
        ko: "스니커즈 - 편안함 우선",
        en: "Sneakers - comfort first",
        ja: "スニーカー - 快適さ優先",
        zh: "运动鞋 - 舒适第一",
        weights: { "NIKE": 5, "ADIDAS": 5, "CONVERSE": 4, "VANS": 4, "NEW_BALANCE": 3 }
      },
      {
        ko: "정장화 - 포멀한 스타일",
        en: "Dress shoes - formal style",
        ja: "ドレスシューズ - フォーmalスタイル",
        zh: "正装鞋 - 正式风格",
        weights: { "CHURCH": 5, "ALLEN_EDMONDS": 4, "JOHNSTON_MURPHY": 3, "COLE_HAAN": 3, "CLARKS": 3 }
      },
      {
        ko: "부츠 - 개성있는 스타일",
        en: "Boots - distinctive style",
        ja: "ブーツ - 個性的なスタイル",
        zh: "靴子 - 个性风格",
        weights: { "DR_MARTENS": 5, "TIMBERLAND": 4, "RED_WING": 4, "FRYE": 3, "UGG": 3 }
      },
      {
        ko: "플랫 슈즈/로퍼 - 심플한 스타일",
        en: "Flats/Loafers - simple style",
        ja: "フラットシューズ/ローファー - シンプルなスタイル",
        zh: "平底鞋/乐福鞋 - 简约风格",
        weights: { "GUCCI": 4, "PRADA": 4, "TOD": 4, "FERRAGAMO": 3, "COLE_HAAN": 3 }
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
        ko: "저예산 (3만원 이하)",
        en: "Low budget (under $30)",
        ja: "低予算（30ドル未満）",
        zh: "低预算（30美元以下）",
        weights: { "HM": 5, "FOREVER21": 4, "PRIMARK": 4, "OLD_NAVY": 3, "TARGET": 3 }
      },
      {
        ko: "중예산 (3-10만원)",
        en: "Medium budget ($30-100)",
        ja: "中予算（30-100ドル）",
        zh: "中等预算（30-100美元）",
        weights: { "UNIQLO": 5, "ZARA": 4, "GAP": 4, "MANGO": 3, "COS": 3 }
      },
      {
        ko: "고예산 (10만원 이상)",
        en: "High budget (over $100)",
        ja: "高予算（100ドル以上）",
        zh: "高预算（100美元以上）",
        weights: { "ACNE_STUDIOS": 5, "COS": 4, "ARKET": 4, "GANNI": 3, "TOTEME": 3 }
      },
      {
        ko: "럭셔리 (30만원 이상)",
        en: "Luxury (over $300)",
        ja: "ラグジュアリー（300ドル以上）",
        zh: "奢侈品（300美元以上）",
        weights: { "GUCCI": 5, "PRADA": 5, "BALENCIAGA": 4, "SAINT_LAURENT": 4, "BOTTEGA_VENETA": 4 }
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
        ko: "무지 - 단색 선호",
        en: "Solid colors - prefer plain",
        ja: "無地 - 単色好み",
        zh: "纯色 - 偏爱素色",
        weights: { "MUJI": 5, "COS": 4, "ARKET": 4, "UNIQLO": 3, "EVERLANE": 3 }
      },
      {
        ko: "스트라이프 - 클래식한 패턴",
        en: "Stripes - classic patterns",
        ja: "ストライプ - クラシックなパターン",
        zh: "条纹 - 经典图案",
        weights: { "SAINT_JAMES": 5, "BRETON": 4, "J_CREW": 3, "BANANA_REPUBLIC": 3, "RALPH_LAUREN": 3 }
      },
      {
        ko: "체크 - 전통적인 패턴",
        en: "Check - traditional patterns",
        ja: "チェック - 伝統的なパターン",
        zh: "格纹 - 传统图案",
        weights: { "BURBERRY": 5, "BARBOUR": 4, "RALPH_LAUREN": 4, "BROOKS_BROTHERS": 3, "J_CREW": 3 }
      },
      {
        ko: "프린트 - 독창적인 패턴",
        en: "Prints - creative patterns",
        ja: "プリント - 創造的なパターン",
        zh: "印花 - 创意图案",
        weights: { "KENZO": 5, "VERSACE": 4, "MOSCHINO": 4, "GANNI": 3, "STUSSY": 3 }
      }
    ]
  },
  {
    id: 15,
    ko: "옷을 고를 때 가장 먼저 보는 것은?",
    en: "What do you look at first when choosing clothes?",
    ja: "服を選ぶ時、最初に見るものは？",
    zh: "选择服装时您首先关注什么？",
    options: [
      {
        ko: "색상",
        en: "Color",
        ja: "色",
        zh: "颜色",
        weights: { "GANNI": 4, "KENZO": 4, "VERSACE": 3, "MOSCHINO": 3, "JACQUEMUS": 3 }
      },
      {
        ko: "실루엣",
        en: "Silhouette",
        ja: "シルエット",
        zh: "轮廓",
        weights: { "ACNE_STUDIOS": 5, "LEMAIRE": 4, "THE_ROW": 4, "TOTEME": 3, "COS": 3 }
      },
      {
        ko: "소재",
        en: "Material",
        ja: "素材",
        zh: "材质",
        weights: { "LORO_PIANA": 5, "BRUNELLO_CUCINELLI": 4, "MAX_MARA": 4, "HERMÈS": 3, "EILEEN_FISHER": 3 }
      },
      {
        ko: "가격",
        en: "Price",
        ja: "価格",
        zh: "价格",
        weights: { "HM": 5, "UNIQLO": 4, "ZARA": 4, "FOREVER21": 3, "PRIMARK": 3 }
      }
    ]
  },
  {
    id: 16,
    ko: "어떤 상황에서 가장 자신감을 느끼나요?",
    en: "In what situation do you feel most confident?",
    ja: "どのような状況で最も自信を感じますか？",
    zh: "在什么情况下您最有自信？",
    options: [
      {
        ko: "완벽하게 차려입었을 때",
        en: "When perfectly dressed up",
        ja: "完璧に着飾った時",
        zh: "完美着装时",
        weights: { "TOM_FORD": 5, "ARMANI": 4, "HUGO_BOSS": 4, "RALPH_LAUREN": 3, "CALVIN_KLEIN": 3 }
      },
      {
        ko: "편안한 옷을 입었을 때",
        en: "When wearing comfortable clothes",
        ja: "快適な服を着た時",
        zh: "穿着舒适服装时",
        weights: { "LULULEMON": 5, "PATAGONIA": 4, "UNIQLO": 4, "GAP": 3, "AMERICAN_APPAREL": 3 }
      },
      {
        ko: "독특한 스타일을 연출했을 때",
        en: "When creating a unique style",
        ja: "ユニークなスタイルを演出した時",
        zh: "展现独特风格时",
        weights: { "COMME_DES_GARCONS": 5, "RICK_OWENS": 4, "ISSEY_MIYAKE": 4, "YOHJI_YAMAMOTO": 3, "MAISON_MARGIELA": 3 }
      },
      {
        ko: "트렌디한 옷을 입었을 때",
        en: "When wearing trendy clothes",
        ja: "トレンディな服を着た時",
        zh: "穿着时尚服装时",
        weights: { "OFF_WHITE": 5, "BALENCIAGA": 4, "VETEMENTS": 4, "JACQUEMUS": 3, "GANNI": 3 }
      }
    ]
  },
  {
    id: 17,
    ko: "주로 어떤 브랜드의 매장을 방문하시나요?",
    en: "Which brand stores do you usually visit?",
    ja: "主にどのブランドの店舗を訪れますか？",
    zh: "您通常光顾哪些品牌店铺？",
    options: [
      {
        ko: "SPA 브랜드 (유니클로, 자라, H&M)",
        en: "SPA brands (Uniqlo, Zara, H&M)",
        ja: "SPAブランド（ユニクロ、ザラ、H&M）",
        zh: "SPA品牌（优衣库、Zara、H&M）",
        weights: { "UNIQLO": 5, "ZARA": 5, "HM": 5, "MANGO": 3, "COS": 3 }
      },
      {
        ko: "디자이너 브랜드 매장",
        en: "Designer brand stores",
        ja: "デザイナーブランド店",
        zh: "设计师品牌店",
        weights: { "ACNE_STUDIOS": 5, "GANNI": 4, "JACQUEMUS": 4, "LEMAIRE": 3, "THE_ROW": 3 }
      },
      {
        ko: "럭셔리 브랜드 부티크",
        en: "Luxury brand boutiques",
        ja: "ラグジュアリーブランドブティック",
        zh: "奢侈品牌精品店",
        weights: { "GUCCI": 5, "PRADA": 5, "LOUIS_VUITTON": 5, "HERMÈS": 4, "CHANEL": 4 }
      },
      {
        ko: "멀티브랜드 편집숍",
        en: "Multi-brand select shops",
        ja: "マルチブランドセレクトショップ",
        zh: "多品牌买手店",
        weights: { "SSENSE": 4, "DOVER_STREET_MARKET": 4, "OPENING_CEREMONY": 3, "BROWNS": 3, "COLETTE": 3 }
      }
    ]
  },
  {
    id: 18,
    ko: "선호하는 바지 스타일은?",
    en: "What's your preferred pants style?",
    ja: "好みのパンツスタイルは？",
    zh: "您偏好的裤装风格？",
    options: [
      {
        ko: "스키니/슬림 진",
        en: "Skinny/slim jeans",
        ja: "スキニー/スリムジーンズ",
        zh: "紧身/修身牛仔裤",
        weights: { "LEVI": 5, "DIESEL": 4, "G_STAR": 4, "TRUE_RELIGION": 3, "7_FOR_ALL_MANKIND": 3 }
      },
      {
        ko: "와이드/루즈핏 바지",
        en: "Wide/loose fit pants",
        ja: "ワイド/ルーズフィットパンツ",
        zh: "宽松版型裤子",
        weights: { "LEMAIRE": 5, "THE_ROW": 4, "TOTEME": 4, "ACNE_STUDIOS": 3, "COS": 3 }
      },
      {
        ko: "정장 바지/슬랙스",
        en: "Dress pants/slacks",
        ja: "ドレスパンツ/スラックス",
        zh: "正装裤/西装裤",
        weights: { "HUGO_BOSS": 5, "ARMANI": 4, "CALVIN_KLEIN": 4, "BANANA_REPUBLIC": 3, "J_CREW": 3 }
      },
      {
        ko: "조거/트랙 팬츠",
        en: "Joggers/track pants",
        ja: "ジョガー/トラックパンツ",
        zh: "休闲运动裤",
        weights: { "ADIDAS": 5, "NIKE": 5, "CHAMPION": 4, "PUMA": 4, "UNDER_ARMOUR": 3 }
      }
    ]
  },
  {
    id: 19,
    ko: "어떤 톱(상의)을 가장 자주 입으시나요?",
    en: "What tops do you wear most often?",
    ja: "どのようなトップス（上着）を最もよく着ますか？",
    zh: "您最常穿什么样的上衣？",
    options: [
      {
        ko: "티셔츠/탱크톱",
        en: "T-shirts/tank tops",
        ja: "Tシャツ/タンクトップ",
        zh: "T恤/背心",
        weights: { "UNIQLO": 5, "HM": 4, "GAP": 4, "AMERICAN_APPAREL": 3, "MUJI": 3 }
      },
      {
        ko: "셔츠/블라우스",
        en: "Shirts/blouses",
        ja: "シャツ/ブラウス",
        zh: "衬衫/女式衬衫",
        weights: { "COS": 5, "ARKET": 4, "EVERLANE": 4, "J_CREW": 3, "BANANA_REPUBLIC": 3 }
      },
      {
        ko: "니트/스웨터",
        en: "Knitwear/sweaters",
        ja: "ニット/セーター",
        zh: "针织衫/毛衣",
        weights: { "COS": 4, "ACNE_STUDIOS": 4, "TOTEME": 4, "MAX_MARA": 3, "GANNI": 3 }
      },
      {
        ko: "후드티/스웨트셔츠",
        en: "Hoodies/sweatshirts",
        ja: "フーディー/スウェットシャツ",
        zh: "连帽衫/运动衫",
        weights: { "CHAMPION": 5, "STUSSY": 4, "SUPREME": 4, "OFF_WHITE": 3, "FEAR_OF_GOD": 3 }
      }
    ]
  },
  {
    id: 20,
    ko: "패션에서 가장 중요하게 생각하는 가치는?",
    en: "What value do you consider most important in fashion?",
    ja: "ファッションで最も重要だと思う価値は？",
    zh: "您认为时尚中最重要的价值是什么？",
    options: [
      {
        ko: "지속가능성과 환경보호",
        en: "Sustainability and environmental protection",
        ja: "持続可能性と環境保護",
        zh: "可持续性和环保",
        weights: { "PATAGONIA": 5, "EILEEN_FISHER": 4, "STELLA_MCCARTNEY": 4, "EVERLANE": 3, "REFORMATION": 3 }
      },
      {
        ko: "개성과 자기표현",
        en: "Individuality and self-expression",
        ja: "個性と自己表現",
        zh: "个性和自我表达",
        weights: { "COMME_DES_GARCONS": 5, "RICK_OWENS": 4, "MAISON_MARGIELA": 4, "ISSEY_MIYAKE": 3, "YOHJI_YAMAMOTO": 3 }
      },
      {
        ko: "실용성과 편안함",
        en: "Practicality and comfort",
        ja: "実用性と快適さ",
        zh: "实用性和舒适性",
        weights: { "UNIQLO": 5, "MUJI": 5, "LULULEMON": 4, "PATAGONIA": 3, "GAP": 3 }
      },
      {
        ko: "품질과 장인정신",
        en: "Quality and craftsmanship",
        ja: "品質と職人技",
        zh: "品质和工艺",
        weights: { "HERMÈS": 5, "LORO_PIANA": 5, "BRUNELLO_CUCINELLI": 4, "MAX_MARA": 4, "THE_ROW": 3 }
      }
    ]
  }
];
