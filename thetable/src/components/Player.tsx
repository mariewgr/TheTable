import { Fab, TextField } from "@mui/material";
import React, { useState } from "react";

type PlayerProps = {
  i: number;
  //   nbPlayers: number;
  //   setNbPlayers: (nbPlayers: number) => void;
};
const Player = (p: PlayerProps) => {
  const [player, setPlayer] = useState("");
  return (
    <>
      <TextField
        value={player}
        label={`Player${p.i}`}
        onChange={(e) => setPlayer(e.target.value)}
      />
    </>
  );
};

export default Player;
