import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { colors } from "../theme";
import { BigStatement } from "../components/BigStatement";
import { AccentLine } from "../components/AccentLine";

export const Scene03_Normal: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={70}>
        <AbsoluteFill style={{ background: colors.white, alignItems: "center", justifyContent: "center" }}>
          <BigStatement
            lines={["Es normal.", "Nadie nace sabiendo", "hacer crecer un negocio."]}
            color={colors.black}
            fontSize={58}
            delayPerLine={8}
          />
        </AbsoluteFill>
      </Sequence>

      <Sequence from={70}>
        <AbsoluteFill style={{ background: colors.blue, alignItems: "center", justifyContent: "center" }}>
          <BigStatement lines={["Aquí entramos nosotros."]} color={colors.yellow} fontSize={76} delayPerLine={0} />
          <div style={{ marginTop: 28 }}>
            <AccentLine color={colors.white} delay={14} width={160} />
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
