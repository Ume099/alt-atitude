"use client";

import { useState } from "react";

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

  // スコア管理用の state
  const [scores, setScores] = useState<{ [key: number]: number }>({});
  const [result, setResult] = useState<number | null>(null);

  // 回答を記録
  const handleSelect = (questionIndex: number, value: boolean) => {
    setScores((prev) => {
      const newScores = { ...prev };

      // 選択した質問に関連するすべてのタイプにスコアを加算（または削除）
      questions[questionIndex].types.forEach((type) => {
        if (value) {
          newScores[type] = (newScores[type] || 0) + 1;
        } else {
          newScores[type] = Math.max((newScores[type] || 0) - 1, 0);
        }
      });

      return newScores;
    });
  };

  // 診断結果を計算
  const handleSubmit = () => {
    const maxType = Object.entries(scores).reduce(
      (max, [key, value]) => (value > (max.value || 0) ? { key, value } : max),
      { key: null, value: 0 }
    );
    setResult(maxType.key ? parseInt(maxType.key) : null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">エニアグラム診断</h1>
      <p className="mb-6 text-gray-600">
        以下の10問に答えて、あなたのエニアグラムタイプを診断しましょう！
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        {questions.map((q, index) => (
          <div key={index} className="mb-4 p-2 border-b">
            <p className="mb-2">{q.text}</p>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name={`q${index}`}
                  className="mr-2"
                  onChange={() => handleSelect(index, true)}
                />
                はい
              </label>
              <label>
                <input
                  type="radio"
                  name={`q${index}`}
                  className="mr-2"
                  onChange={() => handleSelect(index, false)}
                />
                いいえ
              </label>
            </div>
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          診断結果を見る
        </button>
      </div>
      {result !== null && (
        <div className="mt-6 p-4 bg-green-100 rounded-md shadow">
          <h2 className="text-lg font-semibold">診断結果</h2>
          <p className="mt-2 text-gray-800">
            あなたのエニアグラムタイプは「タイプ {result} 」です！
          </p>
        </div>
      )}
    </div>
  );
}
