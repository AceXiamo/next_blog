import { atom } from "jotai";

export type MenuItem = {
  key: string;
  title: string;
  path: string;
  icon: string;
};

export const menuAtom = atom<MenuItem[]>([
  {
    key: "home",
    title: "Home",
    path: "/",
    icon: "heroicons:home-solid",
  },
  {
    key: "about",
    title: "About",
    path: "/about",
    icon: "heroicons:cube-transparent-20-solid",
  },
]);
