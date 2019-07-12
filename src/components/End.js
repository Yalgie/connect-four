import React, { Fragment } from 'react';
import Board from "./Board";
import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../store/actions";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import useStyles from "./styles/app";

export default function End() {
    const gameStatus = useSelector(state => state.gameStatus);
    const player = useSelector(state => state.player);
    const dispatch = useDispatch();
    const classes = useStyles();
    const colorPlayer = player === 1 ? "Red" : "Yellow";

    return (
        <Fragment>
            <Paper className={classes.paperContainer}>
                {gameStatus === "Won" ? <h1>{colorPlayer} Won!</h1> : <h1>Draw!</h1>}
                <Button variant="contained" onClick={() => dispatch(resetGame())}>
                    Play Again!
                </Button>
            </Paper>
            
            <div className={classes.disable}>
                <Board />
            </div>
        </Fragment>
    );
};
