import React from 'react';
import { connect } from "react-redux";
import { startGame } from "../store/actions";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from "./styles/app";

const Start = ({ startGame }) => {
    const classes = useStyles();
    
    return (
        <Paper className={classes.paperContainer}>
            <Typography variant="h5" component="h3">
                Let's Play Connect 4!
            </Typography>
            <Typography component="p">
                Select the colour that should go first.
            </Typography>
            <Button 
                variant="contained" 
                onClick={() => startGame(1)} 
                className={classes.redButton}
            >
                Red
            </Button>
            <Button 
                variant="contained" 
                onClick={() => startGame(2)} 
                className={classes.yellowButton}
            >
                Yellow
            </Button>
        </Paper>
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
        startGame: player => {
            dispatch(startGame(player));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);
