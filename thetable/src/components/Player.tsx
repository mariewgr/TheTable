import { Fab, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import PlayersContext from "../context/PlayersContext.tsx";

type PlayerProps = {
  i: number;
  //   nbPlayers: number;
  //   setNbPlayers: (nbPlayers: number) => void;
};
const Player = (p: PlayerProps) => {
  const { updatePlayers, players } = useContext(PlayersContext);
  return (
    <>
      <TextField
        value={players.get(p.i - 1) ?? ""}
        label={`Player${p.i}`}
        onChange={(e) => {
          updatePlayers(p.i - 1, e.target.value);
        }}
      />
    </>
  );
};

export default Player;
