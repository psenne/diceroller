import React, { Component } from "react";
import styled from "styled-components";

const GetRandomNumber = () => {
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
};

const Box = styled.span`
    border: 1px solid gray;
    padding: 0.5rem;
    margin: 1rem;
`;

export default class Die extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roll: 0
        };
    }

    componentDidMount() {
        const { onRoll, dicetype } = this.props;
        const roll = Math.floor(GetRandomNumber() * parseInt(dicetype)) + 1;

        this.setState({
            roll
        });
        onRoll(roll);
    }

    render() {
        const { roll } = this.state;
        return <Box>{roll}</Box>;
    }
}
