import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "보일러 플레이트",
  description: "Next.js 사용 프로젝트용 보일러 플레이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
