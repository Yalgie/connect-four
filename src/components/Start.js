import React from 'react';
import { useDispatch } from "react-redux";
import { startGame } from "../store/actions";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from "./styles/app";

export default function Start() {
    const dispatch = useDispatch();
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
                onClick={() => dispatch(startGame(1))} 
                className={classes.redButton}
            >
                Red
            </Button>
            <Button 
                variant="contained" 
                onClick={() => dispatch(startGame(2))} 
                className={classes.yellowButton}
            >
                Yellow
            </Button>
        </Paper>
    );
};
