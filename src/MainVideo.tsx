import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Scene01_Intro } from "./scenes/Scene01_Intro";
import { Scene02_Questions } from "./scenes/Scene02_Questions";
import { Scene03_Normal } from "./scenes/Scene03_Normal";
import { Scene04_Motor } from "./scenes/Scene04_Motor";
import { Scene05_Services } from "./scenes/Scene05_Services";
import { Scene06_Resultados } from "./scenes/Scene06_Resultados";
import { Scene07_Split } from "./scenes/Scene07_Split";
import { Scene08_Outro } from "./scenes/Scene08_Outro";

export const SCENE_DURATIONS = [150, 110, 170, 120, 190, 120, 110, 230];

const scenes = [
  Scene01_Intro,
  Scene02_Questions,
  Scene03_Normal,
  Scene04_Motor,
  Scene05_Services,
  Scene06_Resultados,
  Scene07_Split,
  Scene08_Outro,
];

export const TOTAL_DURATION = SCENE_DURATIONS.reduce((a, b) => a + b, 0);

export const MainVideo: React.FC = () => {
  let cursor = 0;
  return (
    <AbsoluteFill>
      {scenes.map((Scene, i) => {
        const from = cursor;
        cursor += SCENE_DURATIONS[i];
        return (
          <Sequence key={i} from={from} durationInFrames={SCENE_DURATIONS[i]}>
            <Scene />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
