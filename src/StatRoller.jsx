import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
    border: 1px solid gray;
    padding: 0.5rem;
`;

const DieOutline = styled.div`
    border: 0;
`;

export default function Die({ dicetype }) {
    const [number, setnumber] = useState(1);
    const [mod, setmod] = useState(0);
    const [total, settotal] = useState(0);
    const [dice, setdice] = useState([]);

    const UpdateNumber = ev => {
        setnumber(ev.currentTarget.value);
    };

    const UpdateMod = ev => {
        setmod(ev.currentTarget.value);
    };

    const Roll = () => {
        var rolls = 0;
        // var arrTotal = [...total];
        var arrTotal = [];

        for (var i = 0; i < parseInt(number); i++) {
            var roll = Math.floor(Math.random() * parseInt(dicetype)) + 1;
            rolls = rolls + roll;
            arrTotal.push(roll);
        }
        setdice(arrTotal);
        settotal(rolls);
    };

    return (
        <Box>
            <div>
                <input type="number" onChange={UpdateNumber} value={number} min="1" />d{dicetype}
                <button onClick={Roll}>Roll</button> {dice.join(" + ")} {dice.length > 1 ? " = " + total : ""}
            </div>
        </Box>
    );
}
