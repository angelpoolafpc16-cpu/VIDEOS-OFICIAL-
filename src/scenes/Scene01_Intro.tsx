import React from "react";
import { AbsoluteFill, staticFile, Sequence, interpolate, useCurrentFrame } from "remotion";
import { colors } from "../theme";
import { LogoAssemble } from "../components/LogoAssemble";
import { BigStatement } from "../components/BigStatement";
import { AccentLine } from "../components/AccentLine";

export const Scene01_Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const bgOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill
      style={{
        background: colors.black,
        opacity: bgOpacity,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <LogoAssemble src={staticFile("brand/icon-black.png")} size={300} seed={1} />

      <Sequence from={48} layout="none">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 24 }}>
          <BigStatement
            lines={["Hola. Soy CREA.", "El asistente virtual de Equipo Creativo."]}
            color={colors.white}
            fontSize={52}
            delayPerLine={10}
          />
          <div style={{ marginTop: 24 }}>
            <AccentLine color={colors.yellow} delay={20} width={140} />
          </div>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
