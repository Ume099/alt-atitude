import localFont from "next/font/local";
import "./globals.css";
import styles from "./page.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});
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
          <a href="/enneagram10" rel="noopener noreferrer">
            t
          </a>
        </footer>
      </body>
    </html>
  );
}
