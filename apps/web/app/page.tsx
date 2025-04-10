"use client";
import styles from "./page.module.css";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
};
export default function Home() {
  const { handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Submit Data:", data);
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <a href="/enneagram10">質問10個</a>
          <button type="submit">送信</button>
        </form>
      </main>
    </div>
  );
}
