import { LinearProgress, Typography } from "@mui/material";
import React from "react";

type PlayerProgressProps = {
  name: string;
  progress: number;
};
const MAX = 20;

const PlayerProgress = (p: PlayerProgressProps) => {
  return (
    <div
      className="player-progress"
      style={{ display: "flex", flexDirection: "row", gap: 4 }}
    >
      cc
      <Typography variant="h6">{p.name}</Typography>
      <LinearProgress variant="determinate" value={(p.progress * 100) / MAX} />
    </div>
  );
};

export default PlayerProgress;
