import React, { useState } from "react";
import Die from "./Die";

const DiceRoller = ({ dicetypes, numberofdice }) => {
    const [number, setnumber] = useState([]);
    const [total, settotal] = useState(0);
    const [dice, setdice] = useState([]);

    const AddToRolls = roll => {
        var arrTotal = [...dice, roll];
        var rolls = arrTotal.reduce((total, die) => {
            return total + die;
        }, 0);

        setdice(arrTotal);
        settotal(rolls);
    };

    const Roll = () => {
        setnumber([...Array(numberofdice).keys()]);
    };

    return (
        <div id="diceroller">
            <p>
                {dicetypes.map(dicetype => {
                    return <Die dicetype={dicetype} onRoll={AddToRolls} />;
                })}
            </p>
            <p>
                Total: {dice.join(" + ")} {dice.length > 1 ? " = " + total : ""}
            </p>
        </div>
    );
};

export default DiceRoller;
