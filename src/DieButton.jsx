import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border: 1px solid gray;
    padding: 1rem;
    margin: 1rem;
`;

export default function DieButton({ children, AddToDiceRoller }) {
    return <Button onClick={() => AddToDiceRoller(children)}>{children}</Button>;
}
