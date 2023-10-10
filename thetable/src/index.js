import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PlayersContextProvider } from "./context/PlayersContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Game from "./components/Game.tsx";
import Home from "./components/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "game",
    element: <Game />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlayersContextProvider>
    <RouterProvider router={router} />
    </PlayersContextProvider>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <PlayersContextProvider>
//       <RouterProvider router={router} />
//     </PlayersContextProvider>
//   </React.StrictMode>
// );
