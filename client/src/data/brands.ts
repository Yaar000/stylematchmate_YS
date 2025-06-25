export interface Brand {
  id: string;
  name: string;
  displayName: string;
  description: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
  };
  logo: string;
  website: string;
  score: number;
}

// 로고 이미지 경로를 자동으로 생성하는 함수
export function getLogoPath(brandId: string): string {
  // 지원하는 이미지 확장자들
  const extensions = ['png', 'jpg', 'jpeg', 'svg', 'webp'];
  
  // 개발 환경에서는 로컬 이미지 우선 확인
  for (const ext of extensions) {
    const localPath = `/logos/${brandId}.${ext}`;
    // 실제 파일 존재 여부는 브라우저에서 확인됨
    return localPath;
  }
  
  // 기본 fallback 이미지
  return `/logos/${brandId}.png`;
}

export const brands: Brand[] = [
  {
    id: "UNIQLO",
    name: "UNIQLO",
    displayName: "유니클로",
    description: {
      ko: "실용적이고 심플한 스타일을 추구하는 당신",
      en: "For those who pursue practical and simple style",
      ja: "実用的でシンプルなスタイルを追求するあなたに",
      zh: "追求实用简约风格的您"
    },
    logo: getLogoPath("UNIQLO"),
    website: "https://www.uniqlo.com",
    score: 0
  },
  {
    id: "ZARA",
    name: "ZARA",
    displayName: "자라",
    description: {
      ko: "트렌디하고 패스트 패션을 좋아하는 당신",
      en: "For those who love trendy and fast fashion",
      ja: "トレンディでファストファッションを愛するあなたに",
      zh: "喜爱时尚快消的您"
    },
    logo: getLogoPath("ZARA"),
    website: "https://www.zara.com",
    score: 0
  },
  {
    id: "HM",
    name: "H&M",
    displayName: "에이치앤엠",
    description: {
      ko: "합리적 가격의 패션을 찾는 당신",
      en: "For those seeking affordable fashion",
      ja: "リーズナブルな価格のファッションを求めるあなたに",
      zh: "寻求平价时尚的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.hm.com",
    score: 0
  },
  {
    id: "MUJI",
    name: "MUJI",
    displayName: "무인양품",
    description: {
      ko: "미니멀하고 자연스러운 디자인을 선호하는 당신",
      en: "For those who prefer minimal and natural design",
      ja: "ミニマルで自然なデザインを好むあなたに",
      zh: "偏爱极简自然设计的您"
    },
    logo: getLogoPath("MUJI"),
    website: "https://www.muji.com",
    score: 0
  },
  {
    id: "COS",
    name: "COS",
    displayName: "코스",
    description: {
      ko: "모던하고 세련된 베이직 아이템을 좋아하는 당신",
      en: "For those who love modern and sophisticated basics",
      ja: "モダンで洗練されたベーシックアイテムを愛するあなたに",
      zh: "喜爱现代精致基础款的您"
    },
    logo: getLogoPath("COS"),
    website: "https://www.cosstores.com",
    score: 0
  },
  {
    id: "ACNE_STUDIOS",
    name: "ACNE STUDIOS",
    displayName: "아크네 스튜디오",
    description: {
      ko: "독창적이고 아방가르드한 스타일을 추구하는 당신",
      en: "For those who pursue original and avant-garde style",
      ja: "独創的でアバンギャルドなスタイルを追求するあなたに",
      zh: "追求原创前卫风格的您"
    },
    logo: getLogoPath("ACNE_STUDIOS"),
    website: "https://www.acnestudios.com",
    score: 0
  },
  {
    id: "ARKET",
    name: "ARKET",
    displayName: "아켓",
    description: {
      ko: "지속가능하고 모던한 에센셜을 추구하는 당신",
      en: "For those who pursue sustainable and modern essentials",
      ja: "持続可能でモダンなエッセンシャルを追求するあなたに",
      zh: "追求可持续现代必需品的您"
    },
    logo: getLogoPath("ARKET"),
    website: "https://www.arket.com",
    score: 0
  },
  {
    id: "GUCCI",
    name: "GUCCI",
    displayName: "구찌",
    description: {
      ko: "럭셔리하고 독특한 디자인을 사랑하는 당신",
      en: "For those who love luxury and unique design",
      ja: "ラグジュアリーでユニークなデザインを愛するあなたに",
      zh: "热爱奢华独特设计的您"
    },
    logo: getLogoPath("GUCCI"),
    website: "https://www.gucci.com",
    score: 0
  },
  {
    id: "PRADA",
    name: "PRADA",
    displayName: "프라다",
    description: {
      ko: "이탈리아 럭셔리 패션의 정수를 추구하는 당신",
      en: "For those who pursue the essence of Italian luxury fashion",
      ja: "イタリアンラグジュアリーファッションの真髄を追求するあなたに",
      zh: "追求意大利奢华时尚精髓的您"
    },
    logo: getLogoPath("PRADA"),
    website: "https://www.prada.com",
    score: 0
  },
  {
    id: "NIKE",
    name: "NIKE",
    displayName: "나이키",
    description: {
      ko: "스포츠웨어와 스트리트 패션을 사랑하는 당신",
      en: "For those who love sportswear and street fashion",
      ja: "スポーツウェアとストリートファッションを愛するあなたに",
      zh: "热爱运动装和街头时尚的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.nike.com",
    score: 0
  },
  {
    id: "ADIDAS",
    name: "ADIDAS",
    displayName: "아디다스",
    description: {
      ko: "클래식한 스포츠 헤리티지를 추구하는 당신",
      en: "For those who pursue classic sports heritage",
      ja: "クラシックなスポーツヘリテージを追求するあなたに",
      zh: "追求经典运动传统的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.adidas.com",
    score: 0
  },
  {
    id: "MANGO",
    name: "MANGO",
    displayName: "망고",
    description: {
      ko: "여성스럽고 트렌디한 스타일을 추구하는 당신",
      en: "For those who pursue feminine and trendy style",
      ja: "女性らしくトレンディなスタイルを追求するあなたに",
      zh: "追求女性化时尚风格的您"
    },
    logo: getLogoPath("HM"),
    website: "https://shop.mango.com",
    score: 0
  },
  {
    id: "GAP",
    name: "GAP",
    displayName: "갭",
    description: {
      ko: "아메리칸 캐주얼의 정수를 추구하는 당신",
      en: "For those who pursue the essence of American casual",
      ja: "アメリカンカジュアルの真髄を追求するあなたに",
      zh: "追求美式休闲精髓的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.gap.com",
    score: 0
  },
  {
    id: "LEVI",
    name: "LEVI'S",
    displayName: "리바이스",
    description: {
      ko: "클래식한 데님 문화를 사랑하는 당신",
      en: "For those who love classic denim culture",
      ja: "クラシックなデニム文化を愛するあなたに",
      zh: "热爱经典牛仔文化的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.levi.com",
    score: 0
  },
  {
    id: "RALPH_LAUREN",
    name: "RALPH LAUREN",
    displayName: "랄프 로렌",
    description: {
      ko: "아메리칸 프레피 스타일의 대표주자를 추구하는 당신",
      en: "For those who pursue the representative of American preppy style",
      ja: "アメリカンプレッピースタイルの代表格を追求するあなたに",
      zh: "追求美式预科生风格代表的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.ralphlauren.com",
    score: 0
  },
  {
    id: "BURBERRY",
    name: "BURBERRY",
    displayName: "버버리",
    description: {
      ko: "영국 전통 럭셔리의 클래식함을 추구하는 당신",
      en: "For those who pursue the classic elegance of British luxury",
      ja: "英国の伝統的ラグジュアリーのクラシックさを追求するあなたに",
      zh: "追求英国传统奢华经典的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.burberry.com",
    score: 0
  },
  {
    id: "TOMMY_HILFIGER",
    name: "TOMMY HILFIGER",
    displayName: "타미 힐피거",
    description: {
      ko: "아메리칸 클래식 스포츠웨어를 사랑하는 당신",
      en: "For those who love American classic sportswear",
      ja: "アメリカンクラシックスポーツウェアを愛するあなたに",
      zh: "热爱美式经典运动装的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.tommy.com",
    score: 0
  },
  {
    id: "CALVIN_KLEIN",
    name: "CALVIN KLEIN",
    displayName: "캘빈 클라인",
    description: {
      ko: "미니멀하고 모던한 미국 디자인을 추구하는 당신",
      en: "For those who pursue minimal and modern American design",
      ja: "ミニマルでモダンなアメリカンデザインを追求するあなたに",
      zh: "追求极简现代美式设计的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.calvinklein.com",
    score: 0
  },
  {
    id: "HUGO_BOSS",
    name: "HUGO BOSS",
    displayName: "휴고 보스",
    description: {
      ko: "독일 정밀함과 모던 비즈니스웨어를 추구하는 당신",
      en: "For those who pursue German precision and modern businesswear",
      ja: "ドイツの精密さとモダンビジネスウェアを追求するあなたに",
      zh: "追求德国精密和现代商务装的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.hugoboss.com",
    score: 0
  },
  {
    id: "ARMANI",
    name: "ARMANI",
    displayName: "아르마니",
    description: {
      ko: "이탈리아 럭셔리 테일러링의 정수를 추구하는 당신",
      en: "For those who pursue the essence of Italian luxury tailoring",
      ja: "イタリアンラグジュアリーテーラリングの真髄を追求するあなたに",
      zh: "追求意大利奢华剪裁精髓的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.armani.com",
    score: 0
  },
  {
    id: "PATAGONIA",
    name: "PATAGONIA",
    displayName: "파타고니아",
    description: {
      ko: "환경을 생각하는 아웃도어 라이프스타일을 추구하는 당신",
      en: "For those who pursue environmentally conscious outdoor lifestyle",
      ja: "環境を考慮したアウトドアライフスタイルを追求するあなたに",
      zh: "追求环保户外生活方式的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.patagonia.com",
    score: 0
  },
  {
    id: "THE_NORTH_FACE",
    name: "THE NORTH FACE",
    displayName: "노스페이스",
    description: {
      ko: "도전정신과 아웃도어 어드벤처를 추구하는 당신",
      en: "For those who pursue challenging spirit and outdoor adventure",
      ja: "チャレンジ精神とアウトドアアドベンチャーを追求するあなたに",
      zh: "追求挑战精神和户外冒险的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.thenorthface.com",
    score: 0
  },
  {
    id: "LULULEMON",
    name: "LULULEMON",
    displayName: "룰루레몬",
    description: {
      ko: "프리미엄 애슬레저와 웰니스 라이프스타일을 추구하는 당신",
      en: "For those who pursue premium athleisure and wellness lifestyle",
      ja: "プレミアムアスレジャーとウェルネスライフスタイルを追求するあなたに",
      zh: "追求高端运动休闲和健康生活方式的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.lululemon.com",
    score: 0
  },
  {
    id: "COMME_DES_GARCONS",
    name: "COMME DES GARÇONS",
    displayName: "꼼 데 가르송",
    description: {
      ko: "전위적이고 해체적인 일본 패션을 추구하는 당신",
      en: "For those who pursue avant-garde and deconstructive Japanese fashion",
      ja: "前衛的で脱構築的な日本ファッションを追求するあなたに",
      zh: "追求前卫解构日本时尚的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.comme-des-garcons.com",
    score: 0
  },
  {
    id: "ISSEY_MIYAKE",
    name: "ISSEY MIYAKE",
    displayName: "이세이 미야케",
    description: {
      ko: "혁신적인 소재와 기술을 통한 일본 디자인을 추구하는 당신",
      en: "For those who pursue Japanese design through innovative materials and technology",
      ja: "革新的な素材と技術による日本デザインを追求するあなたに",
      zh: "通过创新材料和技术追求日本设计的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.isseymiyake.com",
    score: 0
  },
  {
    id: "GANNI",
    name: "GANNI",
    displayName: "가니",
    description: {
      ko: "스칸디나비아의 유쾌하고 현대적인 감성을 추구하는 당신",
      en: "For those who pursue Scandinavian playful and contemporary sensibility",
      ja: "スカンジナビアの楽しくて現代的な感性を追求するあなたに",
      zh: "追求斯堪的纳维亚活泼现代感性的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.ganni.com",
    score: 0
  },
  {
    id: "STUSSY",
    name: "STÜSSY",
    displayName: "스투시",
    description: {
      ko: "서핑과 스트리트 컬처의 오리지널을 추구하는 당신",
      en: "For those who pursue the original of surf and street culture",
      ja: "サーフィンとストリートカルチャーのオリジナルを追求するあなたに",
      zh: "追求冲浪和街头文化原创的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.stussy.com",
    score: 0
  },
  {
    id: "SUPREME",
    name: "SUPREME",
    displayName: "슈프림",
    description: {
      ko: "뉴욕 스케이트보드 컬처의 아이콘을 추구하는 당신",
      en: "For those who pursue the icon of New York skateboard culture",
      ja: "ニューヨークスケートボードカルチャーのアイコンを追求するあなたに",
      zh: "追求纽约滑板文化图标的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.supremenewyork.com",
    score: 0
  },
  {
    id: "OFF_WHITE",
    name: "OFF-WHITE",
    displayName: "오프 화이트",
    description: {
      ko: "스트리트웨어와 럭셔리의 경계를 허무는 당신",
      en: "For those who break the boundaries between streetwear and luxury",
      ja: "ストリートウェアとラグジュアリーの境界を破るあなたに",
      zh: "打破街头服饰和奢侈品界限的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.off---white.com",
    score: 0
  },
  {
    id: "BALENCIAGA",
    name: "BALENCIAGA",
    displayName: "발렌시아가",
    description: {
      ko: "미래적이고 실험적인 럭셔리를 추구하는 당신",
      en: "For those who pursue futuristic and experimental luxury",
      ja: "未来的で実験的なラグジュアリーを追求するあなたに",
      zh: "追求未来实验性奢华的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.balenciaga.com",
    score: 0
  },
  {
    id: "JACQUEMUS",
    name: "JACQUEMUS",
    displayName: "자크뮈스",
    description: {
      ko: "프렌치 시크와 모던한 감성을 추구하는 당신",
      en: "For those who pursue French chic and modern sensibility",
      ja: "フレンチシックとモダンな感性を追求するあなたに",
      zh: "追求法式优雅和现代感性的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.jacquemus.com",
    score: 0
  },
  {
    id: "TOTEME",
    name: "TOTÊME",
    displayName: "토템",
    description: {
      ko: "스웨덴 미니멀리즘의 정수를 추구하는 당신",
      en: "For those who pursue the essence of Swedish minimalism",
      ja: "スウェーデンミニマリズムの真髄を追求するあなたに",
      zh: "追求瑞典极简主义精髓的您"
    },
    logo: getLogoPath("HM"),
    website: "https://toteme-studio.com",
    score: 0
  },
  {
    id: "STONE_ISLAND",
    name: "STONE ISLAND",
    displayName: "스톤 아일랜드",
    description: {
      ko: "기능성과 혁신적인 소재를 추구하는 당신",
      en: "For those who pursue functionality and innovative materials",
      ja: "機能性と革新的な素材を追求するあなたに",
      zh: "追求功能性和创新材料的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.stoneisland.com",
    score: 0
  },
  {
    id: "MM6_MAISON_MARGIELA",
    name: "MM6 MAISON MARGIELA",
    displayName: "MM6 메종 마르지엘라",
    description: {
      ko: "현대적이고 실험적인 디자인을 추구하는 당신",
      en: "For those who pursue contemporary and experimental design",
      ja: "現代的で実験的なデザインを追求するあなたに",
      zh: "追求现代实验性设计的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.maisonmargiela.com",
    score: 0
  },
  {
    id: "VEJA",
    name: "VEJA",
    displayName: "베자",
    description: {
      ko: "지속가능한 패션과 환경을 생각하는 당신",
      en: "For those who think about sustainable fashion and environment",
      ja: "持続可能なファッションと環境を考えるあなたに",
      zh: "关注可持续时尚和环境的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.veja-store.com",
    score: 0
  },
  {
    id: "CONVERSE",
    name: "CONVERSE",
    displayName: "컨버스",
    description: {
      ko: "클래식한 스니커즈 문화를 사랑하는 당신",
      en: "For those who love classic sneaker culture",
      ja: "クラシックなスニーカー文化を愛するあなたに",
      zh: "热爱经典运动鞋文化的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.converse.com",
    score: 0
  },
  {
    id: "VANS",
    name: "VANS",
    displayName: "반스",
    description: {
      ko: "스케이트보드와 스트리트 문화를 즐기는 당신",
      en: "For those who enjoy skateboard and street culture",
      ja: "スケートボードとストリート文化を楽しむあなたに",
      zh: "享受滑板和街头文化的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.vans.com",
    score: 0
  },
  {
    id: "NEW_BALANCE",
    name: "NEW BALANCE",
    displayName: "뉴발란스",
    description: {
      ko: "편안함과 기능성을 중시하는 당신",
      en: "For those who value comfort and functionality",
      ja: "快適さと機能性を重視するあなたに",
      zh: "重视舒适性和功能性的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.newbalance.com",
    score: 0
  },
  {
    id: "GOLDEN_GOOSE",
    name: "GOLDEN GOOSE",
    displayName: "골든 구스",
    description: {
      ko: "빈티지하고 럭셔리한 스니커즈를 선호하는 당신",
      en: "For those who prefer vintage and luxury sneakers",
      ja: "ヴィンテージでラグジュアリーなスニーカーを好むあなたに",
      zh: "偏爱复古奢华运动鞋的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.goldengoose.com",
    score: 0
  },
  {
    id: "COMMON_PROJECTS",
    name: "COMMON PROJECTS",
    displayName: "커먼 프로젝츠",
    description: {
      ko: "미니멀하고 고급스러운 신발을 추구하는 당신",
      en: "For those who pursue minimal and luxurious footwear",
      ja: "ミニマルで高級な靴を追求するあなたに",
      zh: "追求极简奢华鞋履的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.commonprojects.com",
    score: 0
  },
  {
    id: "MAISON_KITSUNE",
    name: "MAISON KITSUNÉ",
    displayName: "메종 키츠네",
    description: {
      ko: "파리지앵 시크와 일본적 감성을 동시에 추구하는 당신",
      en: "For those who pursue both Parisian chic and Japanese sensibility",
      ja: "パリジャンシックと日本的感性を同時に追求するあなたに",
      zh: "同时追求巴黎时尚和日式美学的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.kitsune.fr",
    score: 0
  },
  {
    id: "APC",
    name: "A.P.C.",
    displayName: "아페쎄",
    description: {
      ko: "프렌치 미니멀리즘의 정수를 추구하는 당신",
      en: "For those who pursue the essence of French minimalism",
      ja: "フレンチミニマリズムの真髄を追求するあなたに",
      zh: "追求法式极简主义精髓的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.apc.fr",
    score: 0
  },
  {
    id: "LEMAIRE",
    name: "LEMAIRE",
    displayName: "르메르",
    description: {
      ko: "우아하고 절제된 프렌치 디자인을 추구하는 당신",
      en: "For those who pursue elegant and restrained French design",
      ja: "エレガントで抑制されたフレンチデザインを追求するあなたに",
      zh: "追求优雅克制法式设计的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.lemaire.fr",
    score: 0
  },
  {
    id: "BOTTEGA_VENETA",
    name: "BOTTEGA VENETA",
    displayName: "보테가 베네타",
    description: {
      ko: "이탈리아 장인정신과 럭셔리를 추구하는 당신",
      en: "For those who pursue Italian craftsmanship and luxury",
      ja: "イタリアの職人精神とラグジュアリーを追求するあなたに",
      zh: "追求意大利工艺和奢华的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.bottegaveneta.com",
    score: 0
  },
  {
    id: "SAINT_LAURENT",
    name: "SAINT LAURENT",
    displayName: "생 로랑",
    description: {
      ko: "프렌치 로큰롤 시크를 추구하는 당신",
      en: "For those who pursue French rock and roll chic",
      ja: "フレンチロックンロールシックを追求するあなたに",
      zh: "追求法式摇滚时尚的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.ysl.com",
    score: 0
  },
  {
    id: "HERMÈS",
    name: "HERMÈS",
    displayName: "에르메스",
    description: {
      ko: "최고급 럭셔리와 전통 장인정신을 추구하는 당신",
      en: "For those who pursue ultimate luxury and traditional craftsmanship",
      ja: "最高級ラグジュアリーと伝統的職人精神を追求するあなたに",
      zh: "追求顶级奢华和传统工艺的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.hermes.com",
    score: 0
  },
  {
    id: "DIOR",
    name: "DIOR",
    displayName: "디올",
    description: {
      ko: "파리 쿠튀르의 우아함을 추구하는 당신",
      en: "For those who pursue the elegance of Parisian couture",
      ja: "パリクチュールのエレガンスを追求するあなたに",
      zh: "追求巴黎高级定制优雅的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.dior.com",
    score: 0
  },
  {
    id: "CHANEL",
    name: "CHANEL",
    displayName: "샤넬",
    description: {
      ko: "타임리스한 프렌치 럭셔리를 추구하는 당신",
      en: "For those who pursue timeless French luxury",
      ja: "タイムレスなフレンチラグジュアリーを追求するあなたに",
      zh: "追求永恒法式奢华的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.chanel.com",
    score: 0
  },
  {
    id: "FEAR_OF_GOD",
    name: "FEAR OF GOD",
    displayName: "피어 오브 갓",
    description: {
      ko: "LA 럭셔리 스트리트웨어를 추구하는 당신",
      en: "For those who pursue LA luxury streetwear",
      ja: "LAラグジュアリーストリートウェアを追求するあなたに",
      zh: "追求洛杉矶奢华街头服饰的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.fearofgod.com",
    score: 0
  },
  {
    id: "ESSENTIALS",
    name: "ESSENTIALS",
    displayName: "에센셜",
    description: {
      ko: "편안하고 럭셔리한 베이직을 추구하는 당신",
      en: "For those who pursue comfortable and luxurious basics",
      ja: "快適でラグジュアリーなベーシックを追求するあなたに",
      zh: "追求舒适奢华基础款的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.fearofgod.com",
    score: 0
  },
  {
    id: "KHAITE",
    name: "KHAITE",
    displayName: "카이트",
    description: {
      ko: "모던하고 미니멀한 여성스러움을 추구하는 당신",
      en: "For those who pursue modern and minimal femininity",
      ja: "モダンでミニマルな女性らしさを追求するあなたに",
      zh: "追求现代极简女性魅力的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.khaite.com",
    score: 0
  },
  {
    id: "THE_ROW",
    name: "THE ROW",
    displayName: "더 로우",
    description: {
      ko: "절제된 럭셔리와 완벽한 실루엣을 추구하는 당신",
      en: "For those who pursue restrained luxury and perfect silhouette",
      ja: "抑制されたラグジュアリーと完璧なシルエットを追求するあなたに",
      zh: "追求克制奢华和完美轮廓的您"
    },
    logo: getLogoPath("HM"),
    website: "https://www.therow.com",
    score: 0
  }
];
