import React, { Fragment } from 'react';
import Board from "./Board";
import { connect } from "react-redux";
import { startGame, resetGame } from "../store/actions";

const App = ({ startGame, gameStatus, player, resetGame }) => {
    if (gameStatus === "Start") {
        return <Fragment>
            <h1>Let's Play Connect 4!</h1>
            <p>Select the colour that should go first.</p>
            <button onClick={() => startGame(1)}>Red</button>
            <button onClick={() => startGame(2)}>Yellow</button>
        </Fragment>
    }
    if (gameStatus === "Won" || gameStatus === "Draw") {
        const colorPlayer = player === 1 ? "Red" : "Yellow";

        return <Fragment>
            {gameStatus === "Won" ? <h1>{colorPlayer} Won!</h1> : <h1>Draw!</h1>}
            <button onClick={() => resetGame()}>Play Again!</button>
        </Fragment>
    }
    else {
        return <Fragment>
            <Board />
        </Fragment>
    }
};

const mapStateToProps = state => {
    return {
        gameStatus: state.gameStatus,
        player: state.player,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        startGame: player => {
            dispatch(startGame(player));
        },
        resetGame: () => {
            dispatch(resetGame());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
