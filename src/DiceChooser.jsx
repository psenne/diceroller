import React, { useState } from "react";
import Die from "./Die";
import DiceRoller from "./DiceRoller";

export default function DiceChooser() {
    const [dicetypes, setdice] = useState([]);

    const AddToDiceRoller = dicetype => {
        setdice([...dicetypes, dicetype]);
    };

    const ClearSelection = () => setdice([]);

    return (
        <>
            <h2>Click a die below to add to the roll</h2>
            <div>
                <Die clickable AddToDiceRoller={AddToDiceRoller} dicetype="4" roll="4" />
                <Die clickable AddToDiceRoller={AddToDiceRoller} dicetype="6" roll="6" />
                <Die clickable AddToDiceRoller={AddToDiceRoller} dicetype="8" roll="8" />
                <Die clickable AddToDiceRoller={AddToDiceRoller} dicetype="10" roll="10" />
                <Die clickable AddToDiceRoller={AddToDiceRoller} dicetype="12" roll="12" />
                <Die clickable AddToDiceRoller={AddToDiceRoller} dicetype="20" roll="20" />
            </div>
            <DiceRoller ClearSelection={ClearSelection} dicetypes={dicetypes} />
        </>
    );
}
