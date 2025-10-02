import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import localFont from "next/font/local";
import "@/styles/globals.scss";

// 메타 정보
const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://maro-portfolio.vercel.app";
const title = "Maro Portfolio";
const description = "MARO의 포트폴리오 페이지 입니다.";

// 사이트 메타데이터 설정
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title,
    siteName: title,
    url,
    description,
    images: [
      {
        url: "/tumb.jpg",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    type: "website",
    locale: "ko_KR",
  },
};

const pretendard = localFont({
  src: "../styles/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

const freesentation = localFont({
  src: "../styles/fonts/Freesentation-9Black.woff2",
  display: "swap",
  variable: "--font-freesentation",
});

// RootLayout 컴포넌트
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${freesentation.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
