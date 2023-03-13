import React from "react";
import "./App.css";
import Card from "./component/Card/card";
import data from "./assets/data.json";

function App() {
  return (
    <main>
      {data.map((person) => (
        <Card key={person.fullName} {...person} />
      ))}
    </main>
  );
}

export default App;
