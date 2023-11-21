import React from "react";
import HeadBar from "@/app/(main)/HeadBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col relative">
      <HeadBar />
      <div>{children}</div>
    </div>
  );
}
