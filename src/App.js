import React from "react";
import "./App.css";

import CardList from "./components/CardList"
import NavBarComp from "./components/NavBar"


function App() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <div style={{backgroundColor: "white", textAlign: "left"}}>
    <NavBarComp dateInfo={selectedDate} dateChange = {handleDateChange} />
    </div>
      <div style={{margin: "6% 30% 0% 30%"}} className="card-items">
      <CardList dateInfo={selectedDate} />
      </div>
      
    </div>
  );
}

export default App;
