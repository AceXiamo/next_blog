"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import EventEmitter from "events";

enum ToastType {
  "error" = "#f87171",
  "success" = "#34d399",
  "info" = "#94a3b8",
  "warning" = "#fbbf24",
}

type ToastDefine = {
  id?: string;
  content?: string;
  duration?: number;
  type: keyof typeof ToastType | string;
  color?: string;
  borderColor?: string;
  bgColor?: string;
};

class ToastManager {
  root: HTMLElement | null;
  eventEmitter: EventEmitter;
  onDestroy: (() => void) | null = null;

  constructor(onMounted: (eventEmitter: EventEmitter) => void, onDestroy: () => void) {
    this.eventEmitter = new EventEmitter();
    this.root = document.createElement("div");
    document.createElement("div");
    document.body.appendChild(this.root);
    createRoot(this.root).render(
      <ToastProvider
        onMounted={() => {
          onMounted(this.eventEmitter);
        }}
        destroy={this.destroy}
        eventEmitter={this.eventEmitter}
      />,
    );
    this.onDestroy = onDestroy;
  }

  destroy = () => {
    this.onDestroy && this.onDestroy();
    setTimeout(() => {
      this.root?.remove();
      this.root = null;
    }, 200);
  };
}

function ToastProvider({
  onMounted,
  destroy,
  eventEmitter,
}: {
  onMounted: () => void;
  destroy: () => void;
  eventEmitter: EventEmitter;
}) {
  const [toasts, setToasts] = useState<ToastDefine[]>([]);

  const showToastAction = useCallback(
    (message: ToastDefine) => {
      message.id = String(Math.random());
      setToasts(oldToasts => [...oldToasts, message]);
      setTimeout(() => {
        setToasts(oldToasts => {
          if (oldToasts.length === 1) destroy();
          return oldToasts.filter(toast => toast.id !== message.id);
        });
      }, message.duration || 2000);
    },
    [destroy],
  );

  useEffect(() => {
    eventEmitter.on("showToast", showToastAction);
    if (onMounted) onMounted();
    return () => {
      eventEmitter.off("showToast", showToastAction);
    };
  }, [onMounted, eventEmitter, showToastAction]);
  return (
    <div className="fixed right-[20px] top-[20px] flex flex-col gap-[10px]">
      <AnimatePresence>
        {toasts.map(toast => (
          <Toast key={toast.id} msg={toast} />
        ))}
      </AnimatePresence>
    </div>
  );
}

const Toast = ({ msg }: { msg: ToastDefine }) => {
  const color = getColor(msg.type);
  const item: ToastDefine = {
    ...msg,
    color,
    borderColor: color,
    bgColor: `${color}20`,
  };

  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, scale: 0.5, x: -60 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.5, x: -60 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="bg-white rounded-md min-w-[200px] p-[10px] text-[13px] border-solid border"
        style={{ backgroundColor: item.bgColor, color: item.color, borderColor: item.borderColor }}
      >
        {msg.content}
      </div>
    </motion.div>
  );
};

const getColor = (key: string) => {
  let color = ToastType[key as keyof typeof ToastType];
  if (color) return color;
  return key;
};

let toastInstance: ToastManager | null = null;

function show(msg: ToastDefine | string) {
  let message: ToastDefine = {
    duration: 2000,
    type: "info",
  };
  if (typeof msg === "string")
    message = {
      content: msg,
      ...message,
    };
  else message = { ...message, ...msg };

  if (!toastInstance) {
    toastInstance = new ToastManager(
      eventEmitter => {
        eventEmitter.emit("showToast", message);
      },
      () => {
        toastInstance = null;
      },
    );
  } else toastInstance.eventEmitter.emit("showToast", message);
}

export default { show };
