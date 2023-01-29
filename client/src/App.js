import "./App.css";
import React, { useState } from "react";
import Rules from "./components/rules.js";
import NavBar from "./components/navbar.js";
import Graphs from "./components/graphs";
import GameTracker from "./components/gameTracker";

function App() {
  let [navBarStatus, setNavBarStatus] = useState("home");

  const handleNavBarClick = (newValue) => {
    setNavBarStatus(newValue);
  };

  return (
    <div className="Main">
      <div className="Header">
        <h1>EAB x BAISSI</h1>
        <h3>WNRS x Prisoner's Dilemma</h3>
      </div>
      <div className="Body">
        {navBarStatus === "home" && <Rules />}
        {navBarStatus === "search" && <GameTracker />}
        {navBarStatus === "settings" && <Graphs />}
      </div>
      <div className="NavBar">
        <NavBar handleNavBarClick={handleNavBarClick} />
      </div>
    </div>
  );
}

export default App;