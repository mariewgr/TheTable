import {
  CircularProgress,
  LinearProgress,
  Typography,
  linearProgressClasses,
  styled,
} from "@mui/material";
import React from "react";

type PlayerProgressProps = {
  name: string;
  progress: number;
};
const MAX = 20;

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
//p.progress + 100 /MAX;

const PlayerProgress = (p: PlayerProgressProps) => {
  return (
    <div
      className="player-progress"
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 25,
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h6">{p.name}</Typography>
      <CircularProgress variant="determinate" value={p.progress + 100 / MAX} />
    </div>
  );
};

export default PlayerProgress;
