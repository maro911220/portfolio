import type { Metadata } from "next";
import Header from "./(layout)/header";
import Footer from "./(layout)/footer";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Maro Portfolio",
  description: "MARO의 포트폴리오 페이지 입니다.",
  keywords: ["maro"],
  icons: {
    icon: "/favicon.ico",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
