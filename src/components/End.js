import React, { Fragment } from 'react';
import Board from "./Board";
import { connect } from "react-redux";
import { resetGame } from "../store/actions";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from "./styles/app";


const End = ({ gameStatus, player, resetGame }) => {
    const classes = useStyles();
    const colorPlayer = player === 1 ? "Red" : "Yellow";

    return (
        <Fragment>
            <Paper className={classes.paperContainer}>
                <Typography variant="h5" component="h3">
                    {gameStatus === "Won" ? <h1>{colorPlayer} Won!</h1> : <h1>Draw!</h1>}
                </Typography>
                <Button 
                    variant="contained" 
                    onClick={() => resetGame()}
                >
                    Play Again!
                </Button>
            </Paper>
            
            <div className={classes.disable}>
                <Board />
            </div>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        gameStatus: state.gameStatus,
        player: state.player,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        resetGame: () => {
            dispatch(resetGame());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(End);
