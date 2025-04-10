import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "host",
  description: "ホストページ(localhost:3000)",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
