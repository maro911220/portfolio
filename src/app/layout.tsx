import type { Metadata } from "next";
import Header from "./(layout)/header";
import Footer from "./(layout)/footer";
import "@/styles/globals.scss";

// 사이트 메타데이터 설정
export const metadata: Metadata = {
  title: "Maro Portfolio",
  description: "MARO의 포트폴리오 페이지 입니다.",
  keywords: ["maro"],
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://maro-portfolio.vercel.app"),
  openGraph: {
    title: "Maro Portfolio",
    siteName: "Maro Portfolio",
    url: "https://maro-portfolio.vercel.app",
    description: "MARO의 포트폴리오 페이지 입니다.",
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
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
