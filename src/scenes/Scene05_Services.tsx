import React from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { colors } from "../theme";
import { BigStatement } from "../components/BigStatement";
import { fontStack } from "../theme";

const ServiceRow: React.FC<{ label: string; index: number; fontSize?: number }> = ({
  label,
  index,
  fontSize = 54,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = index * 14;
  const p = spring({ frame: frame - start, fps, config: { damping: 200, mass: 0.5, stiffness: 120 } });
  const opacity = interpolate(p, [0, 1], [0, 1]);
  const x = interpolate(p, [0, 1], [-40, 0]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 28, opacity, transform: `translateX(${x}px)` }}>
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: 14,
          background: colors.yellow,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: fontStack,
          fontWeight: 800,
          fontSize,
          color: colors.white,
          letterSpacing: -1,
          maxWidth: 1300,
        }}
      >
        {label}
      </span>
    </div>
  );
};

export const Scene05_Services: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={40}>
        <AbsoluteFill style={{ background: colors.pink, alignItems: "center", justifyContent: "center" }}>
          <BigStatement lines={["¿Qué hacemos?"]} color={colors.blue} fontSize={84} delayPerLine={0} />
        </AbsoluteFill>
      </Sequence>

      <Sequence from={40}>
        <AbsoluteFill style={{ background: colors.black, alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 38, alignItems: "flex-start" }}>
            <ServiceRow label="Transformamos ideas en identidad." index={0} />
            <ServiceRow label="Convertimos videos en impacto." index={1} />
            <ServiceRow
              label="Tu estrategia deja de ser suposición y pasa a ser realidad."
              index={2}
              fontSize={42}
            />
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
