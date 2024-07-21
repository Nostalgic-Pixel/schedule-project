import NavBar from "./components/NavBar";
import React from "react";
import Calendar from "./components/Calendar";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Calendar />
    </div>
  );
};

export default App;
