import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "../src/contexts/AuthContext";
import { RoomProvider } from "./contexts/RoomContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <RoomProvider>
        <App />
      </RoomProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
