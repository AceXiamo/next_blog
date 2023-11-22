"use client";
import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import { menuAtom } from "@/atoms/menu";
import { useRouter } from "next/navigation";

export default function HeadBar() {
  const [menu] = useAtom(menuAtom);
  const router = useRouter();

  return (
    <>
      <div className="flex gap-[30px] items-center bg-gray-500/20 h-[70px] px-[100px] backdrop-blur-[2px] z-[99]">
        {menu.map((item, index) => (
          <div
            key={index}
            className="text-white text-[20rpx] cursor-pointer flex items-center gap-[5px]"
            onClick={() => {
              if (item.path) {
                router.push(item.path);
              }
            }}
          >
            <Icon icon={item.icon} className="relative -top-[2px]" />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}
