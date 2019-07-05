import React, { useState } from "react";
import styled from "styled-components";
import DieButton from "./DieButton";
import DiceRoller from "./DiceRoller";

export default function DiceChooser() {
    const [dicetypes, setdice] = useState([]);

    const AddToDiceRoller = dicetype => {
        setdice([...dicetypes, dicetype]);
    };

    return (
        <>
            <h2>Click a die below to add to the roll</h2>
            <div>
                <DieButton AddToDiceRoller={AddToDiceRoller}>4</DieButton>
                <DieButton AddToDiceRoller={AddToDiceRoller}>6</DieButton>
                <DieButton AddToDiceRoller={AddToDiceRoller}>8</DieButton>
                <DieButton AddToDiceRoller={AddToDiceRoller}>10</DieButton>
                <DieButton AddToDiceRoller={AddToDiceRoller}>12</DieButton>
                <DieButton AddToDiceRoller={AddToDiceRoller}>20</DieButton>
            </div>
            <DiceRoller dicetypes={dicetypes} />
        </>
    );
}
