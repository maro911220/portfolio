/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // 프로덕션 환경에서만 콘솔 제거
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // 폰트 최적화
  optimizeFonts: true,

  // 헤더 설정으로 캐싱 최적화
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|mp4|ttf|otf|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  env: {
    API_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    EMAILSERVICE: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    EMAILTEMP: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  },
};

export default nextConfig;
