"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Card, CardBody, Spacer, Button } from "@heroui/react";

type FormData = {
  [key: string]: "true" | "false"; // 各質問 q0, q1, ..., q9 の回答が "true"/"false"
};

export default function Home() {
  // 質問と、それぞれ影響を与えるエニアグラムタイプ
  const questions = [
    { text: "新しいことに挑戦するのが好きだ", types: [7, 3] },
    { text: "人と衝突するのはできるだけ避けたい", types: [9, 2] },
    { text: "何事も計画を立ててから行動する", types: [1, 6] },
    { text: "成功するためには努力が不可欠だ", types: [3, 8] },
    { text: "周りの人の気持ちをよく察する", types: [2, 4] },
    { text: "論理的に物事を考えるのが得意だ", types: [5, 8] },
    { text: "困っている人を助けるのが好きだ", types: [6, 2] },
    { text: "カリスマ性があると言われる", types: [8, 3] },
    { text: "美的センスがあると感じる", types: [4, 9] },
    { text: "一人の時間を大切にしたい", types: [5, 9] },
  ];

  // スコア管理（集計後の結果）と診断タイプを格納
  const [result, setResult] = useState<number | null>(null);

  // React Hook Form
  const { register, handleSubmit } = useForm<FormData>();

  // フォーム送信時にスコアを集計し、診断結果をセット
  const onSubmit = (data: FormData) => {
    const newScores: { [type: number]: number } = {};

    questions.forEach((question, index) => {
      const answerIsYes = data[`q${index}`] === "true";
      question.types.forEach((type) => {
        if (newScores[type] == null) {
          newScores[type] = 0;
        }
        if (answerIsYes) {
          // 「はい」を選んだらスコア +1
          newScores[type] += 1;
        } else {
          // 「いいえ」を選んだらスコア -1 (最小 0)
          newScores[type] = Math.max(newScores[type] - 1, 0);
        }
      });
    });

    // 最もスコアが高いタイプを探す
    let maxType = null;
    let maxScore = 0;
    for (const [typeStr, score] of Object.entries(newScores)) {
      if (score > maxScore) {
        maxScore = score;
        maxType = parseInt(typeStr, 10);
      }
    }
    setResult(maxType);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      {/* タイトルと説明 */}
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-2xl font-bold">エニアグラム診断</h1>
        <p className="mt-2 text-gray-600">
          以下の10問に答えて、あなたのエニアグラムタイプを診断しましょう！
        </p>
      </div>

      {/* 質問フォーム */}
      <Card className="w-full max-w-xl">
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            {questions.map((q, index) => (
              <div key={index} className="mb-4 border-b pb-2">
                <p className="font-medium">{q.text}</p>
                <div className="mt-2 flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="true"
                      {...register(`q${index}`, { required: true })}
                      className="mr-2"
                    />
                    はい
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="false"
                      {...register(`q${index}`, { required: true })}
                      className="mr-2"
                    />
                    いいえ
                  </label>
                </div>
              </div>
            ))}

            <Spacer y={0.5} />
            <Button type="submit" color="primary" className="w-full">
              診断結果を見る
            </Button>
          </form>
        </CardBody>
      </Card>

      {/* 結果表示 */}
      {result !== null && (
        <Card className="w-full max-w-xl mt-6 bg-green-50">
          <CardBody>
            <h2 className="text-lg font-semibold">診断結果</h2>
            <p className="mt-2 text-gray-700">
              あなたのエニアグラムタイプは「タイプ <b>{result}</b> 」です！
            </p>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
