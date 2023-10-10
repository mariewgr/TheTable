import { Button, Fab, TextField } from "@mui/material";
import React, { memo, useContext, useState } from "react";
import { Link } from "react-router-dom";
import PlayersContext from "../context/PlayersContext.tsx";
import DialogRollDice from "./RollDice.tsx";
import PlayerProgress from "./PlayerProgress.tsx";

const Player = () => {
  const {
    players,
    toggleModalDice,
    openModalDice,
    currentPlayer,
    game,
    nextPlayer,
    updtateGame,
    setDiceNumber,
  } = useContext(PlayersContext);
  function rollDice() {
    setDiceNumber(Math.floor(Math.random() * 6) + 1);
    updtateGame(currentPlayer, Math.floor(Math.random() * 6) + 1);
    nextPlayer();
    toggleModalDice(true);
  }
  return (
    <>
      <Link
        to={`/`}
        className="link"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          padding: 10,
        }}
      >
        Home
      </Link>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {Object.values(players).map((p, i) => (
          <PlayerProgress
            name={players.get(parseInt(p)) ?? ""}
            progress={game.get(parseInt(p)) ?? 0}
          />
        ))}
      </div>
      <h2
        style={{ display: "flex", justifyContent: "center" }}
      >{`You turn ${players.get(currentPlayer)}`}</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={() => {
            rollDice();
          }}
        >
          Roll the dice
        </Button>
      </div>

      {openModalDice && <DialogRollDice />}
    </>
  );
};

export default memo(Player);
