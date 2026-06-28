import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { colors, fontStack } from "../theme";

const WORDS = ["Sin rodeos.", "Sin relleno.", "Resultados."];

export const Scene06_Resultados: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: colors.yellow, alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: 50 }}>
        {WORDS.map((word, i) => {
          const start = i * 16;
          const p = spring({ frame: frame - start, fps, config: { damping: 12, mass: 0.5, stiffness: 200 } });
          const scale = interpolate(p, [0, 0.6, 1], [2.2, 0.92, 1]);
          const opacity = interpolate(p, [0, 0.2, 1], [0, 1, 1]);
          const isLast = i === WORDS.length - 1;
          return (
            <span
              key={word}
              style={{
                fontFamily: fontStack,
                fontWeight: 900,
                fontSize: 72,
                color: isLast ? colors.white : colors.blue,
                WebkitTextStroke: isLast ? `3px ${colors.blue}` : undefined,
                opacity,
                transform: `scale(${scale})`,
                letterSpacing: -2,
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
