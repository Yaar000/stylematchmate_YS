# Cloudflare Pages 배포 가이드

## 배포 준비된 파일들
- `_redirects`: SPA 라우팅 설정
- `public/_headers`: 성능 및 보안 헤더
- `wrangler.toml`: Cloudflare 설정
- `netlify.toml`: Netlify 대안 설정

## Cloudflare Pages 배포 단계

### 1. GitHub 저장소 연결
1. Cloudflare 대시보드 → Pages → "Create a project"
2. GitHub 저장소 선택 및 연결

### 2. 빌드 설정
- **Framework preset**: None
- **Build command**: `npm run build`
- **Build output directory**: `dist/public`
- **Root directory**: `/`

### 3. 환경 변수
- `NODE_ENV`: `production`

### 4. 배포 완료 후 확인
- SPA 라우팅 동작 확인
- 언어 변경 기능 테스트
- 퀴즈 진행 및 결과 표시
- 공유 기능 (카카오톡, LINE, WhatsApp, WeChat)
- 모바일 반응형 확인

## 대안 플랫폼
- **Netlify**: `netlify.toml` 설정 파일 포함
- **Vercel**: 자동 감지 및 배포 지원

## 성능 최적화
- 정적 자산 캐싱 (1년)
- 보안 헤더 설정
- 코드 분할 및 청크 최적화