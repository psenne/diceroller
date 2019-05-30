import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
    border: 1px solid gray;
    padding: 0.5rem;
`;

export default function Die({ dicetype }) {
    const [number, setnumber] = useState(1);
    const [mod, setmod] = useState(0);
    const [total, settotal] = useState("");

    const UpdateNumber = ev => {
        setnumber(ev.currentTarget.value);
    };

    const UpdateMod = ev => {
        setmod(ev.currentTarget.value);
    };

    const Roll = () => {
        var rolls = 0;

        for (var i = 0; i < parseInt(number); i++) {
            rolls = rolls + Math.floor(Math.random() * parseInt(dicetype)) + 1;
        }

        settotal(rolls + parseInt(mod));
    };

    return (
        <Box>
            <div>
                <input type="number" onChange={UpdateNumber} value={number} min="1" />d{dicetype} + <input type="number" onChange={UpdateMod} value={mod} min="0" />
                <button onClick={Roll}>Roll</button> {total}
            </div>
        </Box>
    );
}
