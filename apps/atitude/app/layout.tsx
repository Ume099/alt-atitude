import localFont from "next/font/local";
import "./globals.css";
import styles from "./page.module.css";
import { Metadata } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "エニアグラム適職検査",
  description: "90個の質問に回答して、あなたに最適な仕事を診断しよう！",
  icons: {
    icon: "/favicon.ico", // 通常のブラウザ用ファビコン
    apple: "/apple-touch-icon.png", // iOSデバイス等用アイコン
    shortcut: "/shortcut-icon.png", // PWAなどでショートカットに追加されるアイコン
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <a href="/enneagram10" rel="noopener noreferrer"></a>
        </footer>
      </body>
    </html>
  );
}
