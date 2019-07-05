import React from "react";
import styled from "styled-components";

const Box = styled.button`
    border: 1px solid gray;
    padding: 0.5rem;
    width: 64px;
    height: 64px;
    margin: 1rem;
    border-radius: ${props => (props.dicetype ? `${props.dicetype * 2}px` : "")};
    cursor: ${props => (props.clickable ? "pointer" : "default")};
`;

const Die = ({ roll, dicetype, clickable, AddToDiceRoller }) => {
    return (
        <Box clickable={clickable} dicetype={dicetype} onClick={() => AddToDiceRoller(dicetype)}>
            {roll}
        </Box>
    );
};

export default Die;
