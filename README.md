# 포트폴리오

이 프로젝트는 Next.js로 구축된 개인 포트폴리오 웹사이트입니다.

- **프레임워크**: Next.js
- **언어**: TypeScript
- **스타일링**: SCSS (Sass), Tailwind CSS.
- **애니메이션**: GSAP (GreenSock Animation Platform)
- **상태 관리**: Zustand

### 설치

1. **프로젝트 복제**

   ```bash
   git clone https://github.com/maro911220/portfolio.git
   ```

2. **설치:**
   ```bash
   npm install
   # 또는
   yarn install
   ```
3. **환경 변수 설정:**
   프로젝트 루트에 `.env.local` 파일을 생성하고 다음을 추가하십시오
   ```
   EMAIL=your_email@example.com
   EMAILSERVICE=your_email_service_id
   EMAILTEMP=your_email_template_id
   ```
   (문의 양식이 작동하려면 실제 이메일 서비스 정보로 교체가 필요합니다.)
   https://www.emailjs.com/

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하십시오.
