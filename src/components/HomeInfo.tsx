import { motion } from "framer-motion";
import { ReactElement } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

function Info_1() {
  return (
    <>
      <div className="text-[14px] text-white/80 leading-10">
        {"I'm `AceXiamo`, you can call me [夏末 / xiamo]."}
      </div>
    </>
  );
}

function Info_2() {
  return (
    <>
      <div className="text-[14px] text-white/80 leading-10 flex items-center">
        <div
          className="flex items-center gap-[6px] 
          relative hover:before:w-[100%]
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px] 
          before:w-0 before:bg-violet-500 before:transition-all before:duration-300
          before:blur-[2px]
        "
        >
          <Icon icon="logos:java" />
          <span>Java,</span>
        </div>
        <div
          className="flex items-center ml-2 gap-[6px]
          relative hover:before:w-[100%]
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px] 
          before:w-0 before:bg-blue-500 before:transition-all before:duration-300
          before:blur-[2px]
        "
        >
          <Icon icon="logos:typescript-icon" />
          <span>TypeScript,</span>
        </div>
        <div
          className="flex items-center ml-2 gap-[6px]
          relative hover:before:w-[100%]
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px] 
          before:w-0 before:bg-sky-500 before:transition-all before:duration-300
          before:blur-[2px]
        "
        >
          <Icon icon="logos:go" />
          <span>Golang,</span>
        </div>
        <div
          className="flex items-center ml-2 gap-[6px]
          relative hover:before:w-[100%]
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px] 
          before:w-0 before:bg-emerald-500 before:transition-all before:duration-300
          before:blur-[2px]
        "
        >
          <Icon icon="logos:vue" />
          <span>Vue,</span>
        </div>
        <div
          className="flex items-center ml-2 gap-[6px]
          relative hover:before:w-[100%]
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px] 
          before:w-0 before:bg-purple-500 before:transition-all before:duration-300
          before:blur-[2px]
        "
        >
          <Icon icon="logos:react" />
          <span>React</span>
        </div>
      </div>
    </>
  );
}

function InfoItem({
  dealy,
  child,
}: {
  dealy: number;
  child: React.ReactNode | string;
}) {
  let component: React.ReactNode | ReactElement;
  if (typeof child === "string") {
    component = (
      <span className="text-[14px] text-white/80 leading-10">{child}</span>
    );
  } else {
    component = child;
  }
  console.log(component);
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          delay: dealy,
        }}
        className="flex flex-col gap-[10px] max-w-[600px]"
      >
        {component}
      </motion.div>
    </>
  );
}

// const [textArr, setTextArr] = useState([
//   "你好 👋",
//   "我是 `AceXiamo`, 你可以叫我 [夏末]",
//   "一个菜狗全栈, 略懂 Java, TypeScript, Golang, Vue, React",
//   "爱好是敲代码, 希望能够以此来做一些有意义的事",
// ]);

export default function HomeInfo() {
  const arr = [
    "Hello 👋",
    Info_1(),
    "I'm a full-stack developer, but I might prefer front-end development over back-end, I hope to do something meaningful with this.",
    Info_2(),
    "In my free time, I learn English on Duolingo, and have been doing so up until now.",
    "I also like anime, and I've watched a lot of them, such as 'Steins;Gate', 'Clannad', 'Attack on Titan', and so on.",
    "Maybe, You can find me on ...",
  ];

  const links = [
    {
      icon: "/github.svg",
      to: "https://github.com/AceXiamo",
    },
    {
      icon: "/twitter.svg",
      to: "https://twitter.com/AceXiamo",
    },
    {
      icon: "/bilibili.svg",
      to: "https://space.bilibili.com/17906193",
    },
  ];

  return (
    <>
      {arr.map((item, index) => (
        <InfoItem key={index} dealy={index * 0.05} child={item} />
      ))}
      <div className="flex gap-[20px] items-center mt-[20px]">
        {/* {links.map((item, index) => (
          
        ))} */}

        <motion.div
          whileHover={{ scale: 1.5 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
          <Image
            src={`/github.svg`}
            alt="me"
            width="24"
            height="24"
            className="cursor-pointer"
            onClick={() => {
              window.open(`https://github.com/AceXiamo`);
            }}
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.5 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
          <Image
            src={`/twitter.svg`}
            alt="me"
            width="24"
            height="24"
            className="cursor-pointer"
            onClick={() => {
              window.open(`https://twitter.com/AceXiamo`);
            }}
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.5 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
          <Image
            src={`/bilibili.svg`}
            alt="me"
            width="24"
            height="24"
            className="cursor-pointer"
            onClick={() => {
              window.open(`https://space.bilibili.com/17906193`);
            }}
          />
        </motion.div>
      </div>
    </>
  );
}
