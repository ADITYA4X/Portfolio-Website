"use client";

import { useEffect } from "react";

export default function JellyBackground() {
  useEffect(() => {
    const canvas = document.getElementById("jellyCanvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let particles: any[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createJellyBlob = (x: number, y: number) => {
      const size = 30 + Math.random() * 30;
      const maxSize = size * (1.5 + Math.random());
      const life = 1;
      const points = 8;
      const angleOffset = Math.random() * Math.PI;
      const speed = 1 + Math.random();
      const color = `rgba(255, ${160 + Math.random() * 60}, 0,`;

      particles.push({
        x,
        y,
        size,
        maxSize,
        life,
        points,
        angleOffset,
        speed,
        color,
      });
    };

    const drawJelly = (p: any) => {
      ctx.beginPath();
      const { x, y, size, points, angleOffset, life, color } = p;
      for (let i = 0; i <= points; i++) {
        const angle = ((Math.PI * 2) / points) * i + angleOffset;
        const radius = size + Math.sin(i + p.life * 10) * 6;
        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fillStyle = `${color} ${life})`;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        p.size += p.speed;
        p.life -= 0.02;

        if (p.life <= 0) {
          particles.splice(index, 1);
        } else {
          drawJelly(p);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const triggerJelly = (e: MouseEvent | TouchEvent) => {
      const isTouch = e instanceof TouchEvent;
      const x = isTouch ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const y = isTouch ? e.touches[0].clientY : (e as MouseEvent).clientY;

      for (let i = 0; i < 2 + Math.random() * 2; i++) {
        createJellyBlob(
          x + Math.random() * 20 - 10,
          y + Math.random() * 20 - 10
        );
      }
    };

    window.addEventListener("click", triggerJelly);
    window.addEventListener("touchstart", triggerJelly);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("click", triggerJelly);
      window.removeEventListener("touchstart", triggerJelly);
    };
  }, []);

  return (
    <canvas
      id="jellyCanvas"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
