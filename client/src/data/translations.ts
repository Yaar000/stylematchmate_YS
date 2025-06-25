export interface Translation {
  title: string;
  subtitle: string;
  genderSelect: string;
  male: string;
  female: string;
  startButton: string;
  duration: string;
  analyzing: string;
  analyzingDesc: string;
  resultTitle: string;
  alternativeTitle: string;
  shareTitle: string;
  restartButton: string;
  backButton: string;
  match: string;
  copyLink: string;
  copied: string;
}

export const translations: Record<string, Translation> = {
  ko: {
    title: "Fashion Brand Matcher",
    subtitle: "20개의 질문으로 당신의 스타일을 분석하여\n가장 어울리는 패션 브랜드를 찾아드려요",
    genderSelect: "성별을 선택해주세요",
    male: "남성",
    female: "여성",
    startButton: "테스트 시작하기",
    duration: "약 3-5분 소요",
    analyzing: "결과를 분석하고 있어요",
    analyzingDesc: "당신의 스타일을 분석 중입니다",
    resultTitle: "당신에게 가장 어울리는 브랜드는",
    alternativeTitle: "이런 브랜드도 어울려요",
    shareTitle: "결과 공유하기",
    restartButton: "다시 테스트하기",
    backButton: "이전",
    match: "일치도",
    copyLink: "링크 복사",
    copied: "복사됨!"
  },
  en: {
    title: "Fashion Brand Matcher",
    subtitle: "Find your perfect fashion brand\nthrough 20 style questions",
    genderSelect: "Please select your gender",
    male: "Male",
    female: "Female",
    startButton: "Start Test",
    duration: "Takes about 3-5 minutes",
    analyzing: "Analyzing your results",
    analyzingDesc: "Calculating your style profile",
    resultTitle: "Your best matching brand is",
    alternativeTitle: "These brands also suit you",
    shareTitle: "Share your results",
    restartButton: "Take Test Again",
    backButton: "Back",
    match: "Match",
    copyLink: "Copy Link",
    copied: "Copied!"
  },
  ja: {
    title: "Fashion Brand Matcher",
    subtitle: "20の質問であなたのスタイルを分析し\n最適なファッションブランドを見つけます",
    genderSelect: "性別を選択してください",
    male: "男性",
    female: "女性",
    startButton: "テスト開始",
    duration: "約3-5分かかります",
    analyzing: "結果を分析しています",
    analyzingDesc: "あなたのスタイルを分析中",
    resultTitle: "あなたに最も適したブランドは",
    alternativeTitle: "これらのブランドもお似合いです",
    shareTitle: "結果をシェア",
    restartButton: "もう一度テスト",
    backButton: "戻る",
    match: "適合度",
    copyLink: "リンクをコピー",
    copied: "コピーしました！"
  },
  zh: {
    title: "Fashion Brand Matcher",
    subtitle: "通过20个问题分析您的风格\n找到最适合您的时尚品牌",
    genderSelect: "请选择您的性别",
    male: "男性",
    female: "女性",
    startButton: "开始测试",
    duration: "大约需要3-5分钟",
    analyzing: "正在分析您的结果",
    analyzingDesc: "正在计算您的风格档案",
    resultTitle: "最适合您的品牌是",
    alternativeTitle: "这些品牌也很适合您",
    shareTitle: "分享您的结果",
    restartButton: "重新测试",
    backButton: "返回",
    match: "匹配度",
    copyLink: "复制链接",
    copied: "已复制！"
  }
};
