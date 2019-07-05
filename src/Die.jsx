import React from "react";
import styled from "styled-components";

const Box = styled.span`
    border: 1px solid gray;
    padding: 0.5rem;
    margin: 1rem;
`;

const Die = ({ roll, dicetype }) => {
    return (
        <Box>
            {roll}({dicetype})
        </Box>
    );
};

export default Die;
