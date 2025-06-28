# Cogito:in - AI 시대의 사고력 훈련 웹서비스

AI 시대에 필요한 사고력을 훈련하는 5분 브레인트레이닝 웹서비스입니다.

## 기술 스택

- **Frontend Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI State**: React Hooks

## 프로젝트 구조

```
cogitoin-app/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # 랜딩 페이지
│   │   ├── learn/        # 개념 학습 페이지
│   │   ├── quiz/         # 퀴즈 섹션
│   │   ├── progress/     # 진행상황 대시보드
│   │   ├── layout.tsx    # 루트 레이아웃
│   │   └── globals.css   # 글로벌 스타일
│   ├── components/       # React 컴포넌트
│   │   └── Navigation.tsx
│   └── lib/              # 유틸리티 함수
│       └── utils.ts
├── public/               # 정적 파일
├── package.json          # 프로젝트 의존성
├── tsconfig.json         # TypeScript 설정
├── tailwind.config.ts    # Tailwind CSS 설정
└── next.config.mjs       # Next.js 설정
```

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm run start
```

## 주요 기능

1. **개념 학습** (/learn)
   - 비판적 사고, 직관, 창의성 관련 핵심 개념 학습
   - 카드 형식의 인터랙티브 UI
   - 예시를 통한 쉬운 이해

2. **퀴즈 섹션** (/quiz)
   - 개념 기반 문제 풀이
   - 즉각적인 피드백과 해설
   - AI 멘토 피드백 기능 (모의)

3. **진행상황 대시보드** (/progress)
   - 학습 통계 시각화
   - 스킬별 성장 추적
   - 주간 활동 및 업적 시스템

4. **반응형 디자인**
   - 모바일 우선 접근
   - 태블릿 및 데스크톱 최적화
   - 부드러운 애니메이션과 전환 효과

## 개발 가이드

### 새로운 페이지 추가

1. `src/app/` 디렉토리에 새 폴더 생성
2. `page.tsx` 파일 생성
3. Navigation 컴포넌트에 링크 추가

### 스타일링

- Tailwind CSS 유틸리티 클래스 사용
- 커스텀 색상은 `tailwind.config.ts`에서 primary 색상 팔레트 사용
- 반응형은 Tailwind의 반응형 프리픽스 사용 (sm:, md:, lg:)

### 컴포넌트 작성

- TypeScript로 타입 안전성 확보
- 클라이언트 컴포넌트는 'use client' 지시어 사용
- 재사용 가능한 컴포넌트는 `src/components/`에 배치