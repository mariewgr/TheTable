import {
  useLocalStore,
  StoreConfig,
  LoadingMap,
  ErrorMap,
} from "state-decorator";

import { createContext } from "react";
import { setArgIn } from "state-decorator/helpers";

export type Player = {
  id: string;
  name: string;
};

type Actions = {
  setPlayers: (Players: Player[]) => void;
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
  Players: Player[];
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
    Players: [],
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
    setPlayers: setArgIn("Players"), //({ args: [Players] }) => ({ Players }),
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

export const PlayersContext = createContext<PlayersContextProps>(null);

export function PlayersContextProvider(p: { children: JSX.Element }) {
  const { state: s, actions: a, loadingMap, errorMap } = useLocalStore(config);

  return (
    <PlayersContext.Provider value={{ ...s, ...a, loadingMap, errorMap }}>
      {p.children}
    </PlayersContext.Provider>
  );
}

export default PlayersContext;
