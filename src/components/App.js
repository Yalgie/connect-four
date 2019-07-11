import React from 'react';
import Board from "./Board";
import Start from "./Start";
import End from "./End";
import { connect } from "react-redux";

const App = ({ gameStatus }) => {
    switch (gameStatus) {
        case "Start":
            return <Start />
        case "Won":
        case "Draw":
            return <End />
        default:
            return <Board />;
    }
};

const mapStateToProps = state => {
    return {
        gameStatus: state.gameStatus,
    }
};

export default connect(mapStateToProps)(App);
