import React from "react";
import "./App.css";
import Die from "./Die";

function App() {
    return (
        <div className="App">
            <header className="App-header">Dice/Stat Roller</header>
            <div>
                <Die dicetype="4" />
                <Die dicetype="6" />
                <Die dicetype="8" />
                <Die dicetype="10" />
                <Die dicetype="12" />
                <Die dicetype="20" />
            </div>
        </div>
    );
}

export default App;
