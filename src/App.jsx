import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import useAuthContext from "./hooks/useAuthContext";

function App() {
  const {AuthIsReady} = useAuthContext();

  return (
    <>
    {AuthIsReady && <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>}
    </>
  );
}

export default App;
