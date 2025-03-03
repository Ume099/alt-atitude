import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "エニアグラム適職検査",
  description: "90個の質問に回答して、あなたに最適な仕事を診断しよう！",
  icons: {
    icon: "/favicon.ico", // 通常のブラウザ用ファビコン
    apple: "/apple-touch-icon.png", // iOSデバイス等用アイコン
    shortcut: "/shortcut-icon.png", // PWAなどでショートカットに追加されるアイコン
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <a href="/enneagram10">sss</a>
      </main>
    </div>
  );
}
