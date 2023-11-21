import { createRoot } from "react-dom/client";

function Light() {
  return <div className="blur-[20px] bg-white/20 h-[100px] w-[100px] rounded-full" />;
}

let targetX: number = 0,
  targetY: number = 0,
  x: number = 0,
  y: number = 0,
  ease: number = 0.05,
  rafId: number | null = null;
  

const moveByEase = (): { x: number; y: number } => {
  x += (targetX - x) * ease;
  y += (targetY - y) * ease;
  return { x, y };
};

const generate = (init?: { x: number; y: number }) => {
  const div = document.createElement("div");
  div.style.position = "fixed";
  div.style.pointerEvents = "none";
  div.style.left = (init?.x ?? window.innerWidth / 2) + "px";
  div.style.top = (init?.y ?? window.innerHeight / 2) + "px";
  div.style.transform = "translate(-50%, -50%)";
  div.style.transition = "transform 0.7s ease, opacity 0.7s ease";
  createRoot(div).render(<Light />);
  document.body.appendChild(div);

  const animate = () => {
    const { x, y } = moveByEase();
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    const dist = Math.hypot(targetX - x, targetY - y);
    if (dist > 1) {
      rafId = requestAnimationFrame(animate);
    }
  };

  document.addEventListener("mousemove", e => {
    targetX = e.clientX;
    targetY = e.clientY;
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
    }
    animate();
  });

  document.addEventListener("mouseenter", () => {
    div.style.transform = `translate(-50%, -50%) scale(1)`;
    div.style.opacity = "1";
  });
  document.addEventListener("mouseleave", () => {
    div.style.transform = `translate(-50%, -50%) scale(0)`;
    div.style.opacity = "0";
  });
};

export default { generate };
