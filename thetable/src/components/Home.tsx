import React, { useContext, useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import Player from "./Player.tsx";

const Home = () => {
  const [nbPlayers, setNbPlayers] = useState(2);
  function nInts(nbPlayers: number) {
    return [...Array(nbPlayers).keys()];
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 32,
      }}
    >
      {nInts(nbPlayers).map((_, i) => (
        <Player i={i + 1} />
      ))}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setNbPlayers(nbPlayers + 1)} // mettre un max + afficher modale
        >
          <AddIcon />
        </Fab>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => {
            if (nbPlayers > 0) {
              setNbPlayers(nbPlayers - 1); // mettre un min + afficher modale
            }
          }}
        >
          <RemoveIcon />
        </Fab>
      </div>
      <Link to={`Game`} className="link">
        Create Game
      </Link>
    </div>
  );
};

export default Home;
