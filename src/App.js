import React from "react";
import "./App.css";

import CardList from "./components/CardList"
import NavBarComp from "./components/NavBar"


function App() {
  return (
    <div className="App">
      <div style={{backgroundColor: "white", textAlign: "left"}}>
    <NavBarComp />
    </div>
      <div style={{margin: "6% 30% 0% 30%"}} className="card-items">
      <CardList />
      </div>
      
    </div>
  );
}

export default App;
