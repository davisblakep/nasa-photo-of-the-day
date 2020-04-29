import React from "react";
import "./App.css";



import CardList from "./components/CardList"
import { findByLabelText } from "@testing-library/react";

function App() {
  return (
    <div className="App">
    
      <div style={{margin: "8% 30% 0% 30%"}} className="card-items">
      
      <CardList />
      
      </div>
      
    </div>
  );
}

export default App;
