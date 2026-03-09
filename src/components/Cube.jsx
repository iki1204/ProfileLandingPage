import { useAnimationFrame } from "motion/react";
import { useRef } from "react";

export default function Cube() {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="container">
      <div className="cube" ref={ref}>
        <div className="side front" />
        <div className="side back" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
      </div>

      <style>{`
        .cube-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 80px 0;
          perspective: 1000px;
        }

        .cube {
          width: 240px;
          height: 240px;
          position: relative;
          transform-style: preserve-3d;
        }

        .side {
          position: absolute;
          width: 240px;
          height: 240px;
          border: 1px solid rgba(255,255,255,0.25);
          opacity: 0.9;
        }

        .front  { transform: translateZ(120px); background: rgba(34,211,238,0.35); }
        .back   { transform: rotateY(180deg) translateZ(120px); background: rgba(168,85,247,0.35); }
        .right  { transform: rotateY(90deg) translateZ(120px); background: rgba(59,130,246,0.35); }
        .left   { transform: rotateY(-90deg) translateZ(120px); background: rgba(16,185,129,0.35); }
        .top    { transform: rotateX(90deg) translateZ(120px); background: rgba(244,114,182,0.35); }
        .bottom { transform: rotateX(-90deg) translateZ(120px); background: rgba(251,191,36,0.35); }
      `}</style>
    </div>
  );
}
