import React from 'react';
import Board from "./Board";
import Start from "./Start";
import End from "./End";
import { useSelector } from "react-redux";

export default function App() {
    const gameStatus = useSelector(state => state.gameStatus);

    switch (gameStatus) {
        case "Start":
            return <Start />
        case "Won":
        case "Draw":
            return <End />
        default:
            return <Board />
    }
};
