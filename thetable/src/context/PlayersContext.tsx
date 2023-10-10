import {
  useLocalStore,
  StoreConfig,
  LoadingMap,
  ErrorMap,
} from "state-decorator";

import React, { createContext } from "react";
import { setArgIn } from "state-decorator/helpers";

type Players = Map<number, string>;

type Game = Map<number, number>;

type Table = Map<number, string>;

const initTable = new Map<number, string>();
initTable.set(1, "Start");
initTable.set(2, "1 Shot");
initTable.set(3, "2 Shots for the one with glasses");
initTable.set(4, "everyone drinks");
initTable.set(5, "Waterfall");
initTable.set(6, "choose a drinkbody");
initTable.set(7, "1 shot for the one left");
initTable.set(8, "1 shot for the one right");
initTable.set(9, "truth or dare");
initTable.set(10, "go back to case 4");
initTable.set(11, "rime tour(find a word that rime with the previous one)");
initTable.set(12, "never I have ever");
initTable.set(13, "categories");
initTable.set(14, "make a rule");
initTable.set(15, "push ups(distribute how much slips you dis push ups");
initTable.set(16, "everyone drinks");
initTable.set(17, "1 shot");
initTable.set(18, "2 shots");
initTable.set(19, "go back to case 10");
initTable.set(20, "finish your drink");
initTable.set(21, "everyone with brown hair drinks");
initTable.set(22, "waterfall");
initTable.set(23, "truth or dare");
initTable.set(24, "everyone drinks");
initTable.set(25, "never I have ever");
initTable.set(26, "categories");
initTable.set(27, "everyone with blue eyes drinks");
initTable.set(28, "1 shot");
initTable.set(29, "give 5 sips");
initTable.set(30, "go back to case 20");
initTable.set(31, "finish your drink");
initTable.set(32, "everyone single drinks");
initTable.set(33, "waterfall");
initTable.set(34, "truth or dare");
initTable.set(35, "everyone drinks");
initTable.set(36, "never I have ever");
initTable.set(37, "categories");
initTable.set(38, "2 shots");
initTable.set(39, "give 5 sips");
initTable.set(40, "go back to case 30");
initTable.set(41, "finish your drink");
initTable.set(42, "finish");

type Actions = {
  setPlayers: (players: Players) => void;
  updatePlayers: (id: number, name: string) => void;
  setGame: (game: Game) => void;
  updtateGame: (playerId: number, place: number) => void;
  toggleModalDice: (openModalDice: boolean) => void;
  nextPlayer: () => void;
  setDiceNumber: (diceNumber: number) => void;
  //   setOpenCreateModal: (openCreateModal: boolean) => void;
  //   setOpenUpdateModal: (openUpdateModal: boolean) => void;
  //   setOpenUpdateImageModal: (openUpdateModal: boolean) => void;
  //   setOpenDeleteModal: (openDeleteModal: boolean) => void;
  //   loadPlayers: () => Promise<Response>;
  //   deletePlayer: (PlayerId: string | undefined) => Promise<unknown>;
  //   createPlayer: (
  //     id: string,
  //     name: string,
  //   ) => Promise<Player>;
  //   updatePlayer: (
  //     PlayerId: string | undefined,
  //     firstName: string,
  //     lastName: string,
  //     birthdate: Dayjs | null,
  //     imageUrl: string
  //   ) => Promise<Player>;
  //   setOpenDeleteSuccess: (openDeleteSucces: boolean) => void;
  //   setOpenCreateSuccess: (openCreateSucces: boolean) => void;
  //   setOpenUpdateSuccess: (openUpdateSucces: boolean) => void;
  //   setOpenUpdateImageSuccess: (openUpdateSucces: boolean) => void;
  //   setPage: (page: number) => void;
  //   setLanguage: (language: Language) => void;
};

export type PlayersListActions = Actions;

export type State = {
  players: Players;
  game: Game;
  openModalDice: boolean;
  currentPlayer: number;
  diceNumber: number;
  table: Table;
  //   openCreateModal: boolean;
  //   openDeleteModal: boolean;
  //   openUpdateModal: boolean;
  //   openUpdateImageModal: boolean;
  //   openDeleteSuccess: boolean;
  //   openCreateSuccess: boolean;
  //   openUpdateSuccess: boolean;
  //   openUpdateImageSuccess: boolean;
  //   page: number;
  //   language: Language;
};

export type PlayersState = State;

// Initial state & actions
export const config: StoreConfig<State, Actions> = {
  getInitialState: () => ({
    players: new Map<number, string>(),
    game: new Map<number, number>(),
    openModalDice: false,
    currentPlayer: 0,
    diceNumber: 0,
    table: initTable,
    // openCreateModal: false,
    // openDeleteModal: false,
    // openUpdateModal: false,
    // openUpdateImageModal: false,
    // openDeleteSuccess: false,
    // openCreateSuccess: false,
    // openUpdateSuccess: false,
    // openUpdateImageSuccess: false,
    // page: 1,
    // language: Language.EN,
  }),

  actions: {
    setPlayers: setArgIn("players"), //({ args: [Players] }) => ({ Players }),
    setGame: setArgIn("game"),
    updatePlayers: ({ s, args: [id, name] }) => {
      s.players.set(id, name);
      return { players: s.players };
    },
    updtateGame: ({ s, args: [playerId, place] }) => {
      const currentScore = s.game.get(playerId) ?? 0;
      s.game.set(playerId, place + currentScore);
      return { game: s.game };
    },
    toggleModalDice: setArgIn("openModalDice"),
    nextPlayer: ({ s }) => {
      if (s.players.size === 0) {
        return { currentPlayer: 0 };
      }
      const newPlayer = (s.currentPlayer + 1) % s.players.size;
      return { currentPlayer: newPlayer };
    },
    setDiceNumber: setArgIn("diceNumber"),
    //     setOpenDeleteSuccess: setArgIn("openDeleteSuccess"),
    //     setOpenUpdateSuccess: setArgIn("openUpdateSuccess"),
    //     setOpenUpdateImageSuccess: setArgIn("openUpdateImageSuccess"),
    //     setOpenCreateSuccess: setArgIn("openCreateSuccess"),
    //     setPage: setArgIn("page"),
    //     setLanguage: setArgIn("language"),
    //     loadPlayers: {
    //       isErrorManaged: true,
    //       getPromise: () =>
    //         fetch("http://localhost:3050/api/Players?limit=100").then((res) =>
    //           res.ok ? res.json() : Promise.reject(new Error("didn't load"))
    //         ),
    //       effects: ({ res }) => ({ Players: res.Players }),
    //     },
    //     deletePlayer: {
    //       getPromise: ({ args: [PlayerId] }) =>
    //         fetch(`http://localhost:3050/api/Players/${PlayerId}`, {
    //           method: "DELETE",
    //         }).then((res) =>
    //           res.ok ? res.json() : Promise.reject(new Error("didn't delete"))
    //         ),
    //       effects: ({ s, args: [PlayerId] }) => {
    //         const newPlayers = [...s.Players];
    //         return {
    //           Players: newPlayers.filter((Player) => Player.id !== PlayerId),
    //         };
    //       },
    //     },
    //     setOpenCreateModal: setArgIn("openCreateModal"),
    //     setOpenDeleteModal: setArgIn("openDeleteModal"),
    //     setOpenUpdateModal: setArgIn("openUpdateModal"),
    //     setOpenUpdateImageModal: setArgIn("openUpdateImageModal"),
    //     createPlayer: {
    //       getPromise: ({ args: [_id, firstName, lastName, birthdate, imageUrl] }) =>
    //         fetch(`http://localhost:3050/api/Players`, {
    //           method: "POST",
    //           headers: {
    //             "Content-type": "application/json",
    //           },
    //           body: JSON.stringify({ firstName, lastName, birthdate, imageUrl }),
    //         }).then((res) =>
    //           res.ok ? res.json() : Promise.reject(new Error("didn't create"))
    //         ),
    //       effects: ({ s, res }) => {
    //         return { Players: [res].concat(s.Players) };
    //       },
    //       sideEffects: ({ a }) => {
    //         a.setOpenCreateModal(false);
    //         a.setPage(1);
    //         a.setOpenCreateSuccess(true);
    //       },
    //     },
    //     updatePlayer: {
    //       getPromise: ({ args: [id, firstName, lastName, birthdate, imageUrl] }) =>
    //         fetch(`http://localhost:3050/api/Players/${id}`, {
    //           method: "PUT",
    //           headers: {
    //             "Content-type": "application/json",
    //           },
    //           body: JSON.stringify({ firstName, lastName, birthdate, imageUrl }),
    //         }).then((res) =>
    //           res.ok ? res.json() : Promise.reject(new Error("didn't update"))
    //         ),
    //       effects: ({ s, args: [PlayerId], res }) => {
    //         const newPlayers = [...s.Players];
    //         const index = newPlayers.findIndex((Player) => Player.id === PlayerId);
    //         newPlayers[index] = res;
    //         return { Players: newPlayers };
    //       },
    //       sideEffects: ({ a }) => {
    //         a.setOpenUpdateModal(false);
    //         a.setOpenUpdateSuccess(true);
    //       },
    //     },
  },
  //   onMount: () => dayjs.locale("en"),
  //   logEnabled: false,
  //   middlewares: [devtools()],
};

type PlayersContextProps = State &
  Actions & {
    loadingMap: LoadingMap<Actions>;
    errorMap: ErrorMap<Actions>;
  };

export const PlayersContext = createContext<PlayersContextProps>(null as any);

export function PlayersContextProvider(p: { children: JSX.Element }) {
  const { state: s, actions: a, loadingMap, errorMap } = useLocalStore(config);

  return (
    <PlayersContext.Provider value={{ ...s, ...a, loadingMap, errorMap }}>
      {p.children}
    </PlayersContext.Provider>
  );
}

export default PlayersContext;
