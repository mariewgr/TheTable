import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { Typography } from "@mui/material";
import React from "react";
import PlayersContext from "../context/PlayersContext.tsx";

export default function DialogRollDice() {
  const {
    toggleModalDice,
    openModalDice,
    diceNumber,
    table,
    currentPlayer,
    game,
  } = useContext(PlayersContext);

  return (
    <>
      <Dialog
        open={openModalDice}
        onClose={() => {
          toggleModalDice(false); //SetTimeout??
        }}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          style={{
            minHeight: 50,
            textAlign: "center",
            paddingTop: 20,
            fontStyle: "Helvetica",
          }}
        >
          <Typography style={{ paddingBottom: 10 }}>
            {`You Did: ${diceNumber}`}{" "}
          </Typography>{" "}
        </DialogTitle>
        <DialogContent
          style={{
            fontStyle: "Helvetica",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography style={{ paddingBottom: 10 }}>
            {`You have to: ${table.get(game.get(currentPlayer) ?? 0)}`}{" "}
          </Typography>{" "}
        </DialogContent>
        <DialogActions style={{ justifyContent: "space-between" }}>
          <Button
            onClick={() => {
              toggleModalDice(false);
              // setTimeout(() => activeObject?.focus(), 100);
            }}
            style={{ color: "grey" }}
            variant="outlined"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
