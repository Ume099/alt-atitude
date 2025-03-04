"use client";
import { useState } from "react";
import styles from "./page.module.css";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    try {
      const response = await axios.get("http://localhost:3004"); // Hono APIを叩く
      setMessage(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("API Error:", error);
      setMessage("API呼び出しに失敗しました");
    }
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <a href="/enneagram10">質問10個</a>
        <button onClick={fetchMessage}>test</button>
        {message}
      </main>
    </div>
  );
}
