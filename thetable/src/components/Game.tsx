import { Fab, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Player = () => {
  return (
    <Fab>
      <Link to={`/`} className="link">
        Home
      </Link>
    </Fab>
  );
};

export default Player;
