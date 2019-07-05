import React, { useState, useEffect } from "react";
import Die from "./Die";

const GetDiceRoll = endnumber => {
    return Math.round((window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1)) * (endnumber - 1)) + 1;
};

const DiceRoller = ({ dicetypes, ClearSelection }) => {
    const [dice, setdice] = useState([]);
    const [rolls, setrolls] = useState([]);
    const [total, settotal] = useState(0);

    useEffect(() => {
        setrolls(dice.map(d => d.roll));
    }, [dice]);

    useEffect(() => {
        settotal(0);
        var totaldice = rolls.reduce((total, die) => {
            return total + die;
        }, 0);
        settotal(totaldice);
    }, [rolls]);

    const Roll = () => {
        const dicerolls = dicetypes.map(die => {
            return { dicetype: die, roll: GetDiceRoll(die) };
        });
        setdice(dicerolls);
    };

    const Clear = () => {
        setdice([]);
        ClearSelection();
    };

    return (
        <div id="diceroller">
            <p>
                <button onClick={Roll}>Roll Dice</button> <button onClick={Clear}>Clear Dice</button>
            </p>

            {dicetypes.length > 0 && (
                <>
                    <h2>Dice chosen</h2>
                    <p>
                        {dicetypes.map((dicetype, i) => {
                            return <Die key={`chosen-${i}`} dicetype={dicetype} roll="?" />;
                        })}
                    </p>
                </>
            )}

            {dice.length > 0 && (
                <>
                    <h2>Rolls</h2>
                    <p>
                        {dice.map(({ dicetype, roll }, i) => {
                            return <Die key={`rolled-${i}`} dicetype={dicetype} roll={roll} />;
                        })}
                    </p>
                </>
            )}
            {total > 0 && <p>Total: {total}</p>}
        </div>
    );
};

export default DiceRoller;
