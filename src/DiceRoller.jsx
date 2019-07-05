import React, { useState } from "react";
import Die from "./Die";

const GetRandomNumber = () => {
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
};

const DiceRoller = ({ dicetypes, numberofdice }) => {
    const [rolls, setrolls] = useState([]);
    const [total, settotal] = useState(0);
    const [dice, setdice] = useState([]);

    const CalcTotal = () => {
        var totaldice = rolls.reduce((total, die) => {
            return total + die;
        }, 0);

        settotal(totaldice);
    };

    const Roll = () => {
        
    };

    const Clear = () =>{
        setrolls([]);
        CalcTotal();
    }

    return (
        <div id="diceroller">
            <p>
                <button onClick={Roll}>Roll Dice</button>
                <button onClick={Clear}>Clear Dice</button>
            </p>
            <p>
                {rolls.map(({dicetype, roll}) => {
                    return <Die dicetype={dicetype} roll={roll} />;
                })}
            </p>
            <p>
                Total: {dice.join(" + ")} {rolls.length > 1 ? " = " + total : ""}
            </p>
        </div>
    );
};

export default DiceRoller;
