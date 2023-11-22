"use client";

import Image from "next/image";
import HomeInfo from "@/components/HomeInfo";

export default function Home() {
  return (
    <div className="flex flex-col p-[100px]">
      <Image
        alt="avatar"
        className="rounded-full"
        width={60}
        height={60}
        src={`https://axm.moe/avatar`}
      ></Image>
      <div className="selection:bg-emerald-400/10 mt-[20px]">
        <HomeInfo />
      </div>
    </div>
  );
}
