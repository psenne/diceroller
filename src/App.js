import React from "react";
import "./App.css";
import "../node_modules/normalize.css";
import DiceChooser from "./DiceChooser";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container">Dice/Stat Roller</div>
            </header>
            <div className="container">
                <DiceChooser />
            </div>
        </div>
    );
}

export default App;
