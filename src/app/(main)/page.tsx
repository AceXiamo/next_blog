"use client";

import Image from "next/image";
import ToastBtn from "@/app/(main)/ToastBtn";
import DialogBtn from "@/app/(main)/DialogBtn";
import { Icon } from "@iconify/react";
import Dependencies from "@/app/(main)/Dependencies";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image alt="avatar" className="rounded-md" width={100} height={100} src={`https://axm.moe/avatar`}></Image>

      <div className="mt-[50px] flex flex-col items-center gap-[20px]">
        <div className="text-white flex gap-[10px] items-center">
          <Icon icon="devicon:npm-wordmark" className="text-[50px]" />
        </div>
        <Dependencies />
      </div>

      <div className="mt-[50px] flex flex-col items-center gap-[20px]">
        <div className="text-white flex gap-[10px]">
          <span className="text-[20px]">⚒️</span>
          <span className="text-[20px]">Components</span>
        </div>
        <div className="flex gap-[30px]">
          <ToastBtn />
          <DialogBtn />
        </div>
      </div>
    </div>
  );
}
