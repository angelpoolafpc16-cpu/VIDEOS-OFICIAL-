import React from "react";
import { AbsoluteFill, Sequence, staticFile, interpolate, useCurrentFrame } from "remotion";
import { colors } from "../theme";
import { BigStatement } from "../components/BigStatement";
import { LogoAssemble } from "../components/LogoAssemble";
import { AccentLine } from "../components/AccentLine";

export const Scene08_Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeOut = interpolate(frame, [200, 220], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: colors.blue, opacity: fadeOut }}>
      <Sequence from={0} durationInFrames={40}>
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
          <BigStatement lines={["Yo soy CREA."]} color={colors.yellow} fontSize={70} delayPerLine={0} />
        </AbsoluteFill>
      </Sequence>

      <Sequence from={40}>
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <LogoAssemble src={staticFile("brand/icon-blue.png")} size={260} seed={3} />
          <div style={{ marginTop: 8 }}>
            <BigStatement
              lines={["Bienvenidos a Equipo Creativo."]}
              color={colors.white}
              fontSize={54}
              delayPerLine={0}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={140}>
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", top: 200 }}>
          <BigStatement lines={["Hagamos que valga la pena."]} color={colors.yellow} fontSize={44} delayPerLine={0} />
          <div style={{ marginTop: 20 }}>
            <AccentLine color={colors.white} delay={10} width={120} />
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
