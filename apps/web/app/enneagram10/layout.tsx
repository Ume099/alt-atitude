"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeroUIProvider>
        <ToastProvider />
        {children}
      </HeroUIProvider>
    </>
  );
}
