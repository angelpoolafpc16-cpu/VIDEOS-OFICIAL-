import React from "react";
import { Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

type Piece = {
  // grid cell as fraction of full image (0..1)
  x: number;
  y: number;
  w: number;
  h: number;
  // where it flies in from, in px offset
  fromX: number;
  fromY: number;
  fromRotate: number;
  delay: number;
};

const GRID = 4;

const buildPieces = (seed: number): Piece[] => {
  const pieces: Piece[] = [];
  const cell = 1 / GRID;
  let i = 0;
  for (let row = 0; row < GRID; row++) {
    for (let col = 0; col < GRID; col++) {
      const angle = (i * 47 + seed * 13) % 360;
      const rad = (angle * Math.PI) / 180;
      const dist = 700 + ((i * 31) % 400);
      pieces.push({
        x: col * cell,
        y: row * cell,
        w: cell,
        h: cell,
        fromX: Math.cos(rad) * dist,
        fromY: Math.sin(rad) * dist,
        fromRotate: (i % 2 === 0 ? 1 : -1) * (40 + (i % 5) * 12),
        delay: (i % GRID) * 1.2 + Math.floor(i / GRID) * 1.6,
      });
      i++;
    }
  }
  return pieces;
};

export const LogoAssemble: React.FC<{
  src: string;
  size: number;
  durationInFrames?: number;
  hold?: boolean;
  reverse?: boolean;
  seed?: number;
}> = ({ src, size, durationInFrames = 40, hold = true, reverse = false, seed = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pieces = React.useMemo(() => buildPieces(seed), [seed]);
  const localFrame = frame;

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      {pieces.map((p, idx) => {
          const pieceStart = p.delay * 2;
          let progress = spring({
            frame: localFrame - pieceStart,
            fps,
            config: { damping: 18, mass: 0.6, stiffness: 90 },
            durationInFrames,
          });
          progress = Math.max(0, Math.min(1, progress));
          if (reverse) progress = 1 - progress;

          const tx = interpolate(progress, [0, 1], [reverse ? 0 : p.fromX, reverse ? p.fromX : 0]);
          const ty = interpolate(progress, [0, 1], [reverse ? 0 : p.fromY, reverse ? p.fromY : 0]);
          const rot = interpolate(progress, [0, 1], [reverse ? 0 : p.fromRotate, reverse ? p.fromRotate : 0]);
          const opacity = hold
            ? interpolate(progress, [0, 0.15, 1], [0, 1, 1])
            : interpolate(progress, [0, 1], [1, 0]);

          return (
            <div
              key={idx}
              style={{
                position: "absolute",
                left: p.x * size,
                top: p.y * size,
                width: p.w * size,
                height: p.h * size,
                overflow: "hidden",
                transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg)`,
                opacity,
              }}
            >
              <Img
                src={src}
                style={{
                  position: "absolute",
                  left: -p.x * size,
                  top: -p.y * size,
                  width: size,
                  height: size,
                }}
              />
            </div>
          );
        })}
    </div>
  );
};
