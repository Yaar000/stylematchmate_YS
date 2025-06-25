# 브랜드 로고 추가 가이드

## 📁 파일 위치
모든 브랜드 로고는 `public/logos/` 폴더에 넣어주세요.

## 📝 파일명 규칙
파일명은 **브랜드 ID**와 정확히 일치해야 합니다.

예시:
- 유니클로: `UNIQLO.png` 
- 자라: `ZARA.jpg`
- H&M: `HM.png`
- 랄프로렌: `RALPH_LAUREN.png`

## 🖼️ 지원 형식
- PNG (투명 배경 권장)
- JPG/JPEG
- SVG
- WebP

## 📐 권장 사양
- **크기**: 400x200px (2:1 비율)
- **용량**: 100KB 이하
- **배경**: 흰색 또는 투명

## 🏷️ 전체 브랜드 ID 목록

### 주요 브랜드
```
UNIQLO          - 유니클로
ZARA            - 자라  
HM              - H&M
RALPH_LAUREN    - 랄프로렌
BURBERRY        - 버버리
HUGO_BOSS       - 휴고보스
ARMANI          - 아르마니
TOMMY_HILFIGER  - 타미힐피거
NIKE            - 나이키
ADIDAS          - 아디다스
GAP             - 갭
LEVI            - 리바이스
COS             - 코스
ARKET           - 아켓
MUJI            - 무지
GUCCI           - 구찌
PRADA           - 프라다
DIOR            - 디올
CHANEL          - 샤넬
```

### 추가 브랜드
```
ACNE_STUDIOS    - 아크네 스튜디오
STONE_ISLAND    - 스톤 아일랜드
OFF_WHITE       - 오프화이트
FEAR_OF_GOD     - 피어 오브 갓
CALVIN_KLEIN    - 캘빈클라인
POLO_RALPH_LAUREN - 폴로 랄프로렌
LACOSTE         - 라코스테
NEW_BALANCE     - 뉴발란스
CONVERSE        - 컨버스
VANS            - 반스
UNDER_ARMOUR    - 언더아머
LULULEMON       - 룰루레몬
CARHARTT        - 칼하트
DR_MARTENS      - 닥터마틴
THE_NORTH_FACE  - 더 노스페이스
PATAGONIA       - 파타고니아
MONCLER         - 몽클레어
CANADA_GOOSE    - 캐나다구스
BOTTEGA_VENETA  - 보테가 베네타
SAINT_LAURENT   - 생 로랑
VERSACE         - 베르사체
MANGO           - 망고
GANNI           - 가니
TOTEME          - 토템
THE_ROW         - 더 로우
KHAITE          - 카이트
LEMAIRE         - 르메르
JACQUEMUS       - 자크뮈스
```

## 🚀 사용 방법

1. **로고 파일 추가**: `public/logos/BRAND_ID.png` 형식으로 추가
2. **자동 감지**: 앱이 자동으로 로고를 찾아서 표시
3. **폴백 처리**: 이미지가 없으면 브랜드명으로 표시

## ✅ 예시
```
public/logos/
├── UNIQLO.png
├── ZARA.jpg  
├── HM.png
├── NIKE.svg
└── GUCCI.webp
```

## 🔧 문제 해결

**로고가 안 보여요?**
- 파일명이 브랜드 ID와 정확히 일치하는지 확인
- 대소문자 구분 (모두 대문자)
- 지원 형식인지 확인 (png, jpg, svg, webp)
- 파일이 `public/logos/` 폴더에 있는지 확인

**브랜드 ID를 모르겠어요?**
- 위의 목록을 참고하거나
- `client/src/data/brands.ts` 파일에서 확인

이제 쉽게 브랜드 로고를 추가하고 관리할 수 있습니다! 🎉