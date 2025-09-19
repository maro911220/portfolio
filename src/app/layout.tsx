import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "@/styles/globals.scss";

// 메타 정보
const title = "Maro Portfolio";
const url = "https://maro-portfolio.vercel.app";
const des = "MARO의 포트폴리오 페이지 입니다.";

// 사이트 메타데이터 설정
export const metadata: Metadata = {
  title: title,
  description: des,
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL(url),
  openGraph: {
    title: title,
    siteName: title,
    url: url,
    description: des,
    images: "/tumb.jpg",
    type: "website",
  },
};

// RootLayout 컴포넌트
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
