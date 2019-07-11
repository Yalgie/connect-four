import React, { useState } from 'react';
import { connect } from "react-redux";
import { placePiece } from "../store/actions";
import useStyles from "./styles/board";
import Paper from '@material-ui/core/Paper';
            
const Board = ({ board, placePiece, player }) => {
    // Using activeCol to highlight all pieces in a column when hovering
    // This allows the player to visibly see which row their piece will go in
    const [activeCol, setActiveCol] = useState(null); 
    const classes = useStyles();
    const colorPlayer = player === 1 ? "Red" : "Yellow";

    const Rows = ({ rows }) => {
        return rows.map((cols, i) => {
            return (
                <div key={i} className={classes.row}>
                    <Cols cols={cols} />
                </div>
            );
        });
    };

    const Cols = ({ cols }) => {
        return cols.map((cell, i) => {
            const hover = i === activeCol ? classes.hover : '';
            const red = cell === 1 ? classes.red : '';
            const yellow = cell === 2 ? classes.yellow : '';

            return (
                <div 
                    onMouseEnter={() => setActiveCol(i)}
                    onClick={() => placePiece(i, board, player)}
                    key={i} 
                    className={`${classes.col} ${hover} ${red} ${yellow}`}>
                </div>
            );
        })
    };

    return (
        <Paper className={classes.paperContainer}>
            <h1>{colorPlayer}'s Turn</h1>
            <div className={classes.board}>
                <Rows rows={board} />
            </div>
        </Paper>
    );
};

const mapStateToProps = state => {
    return {
        board: state.board,
        player: state.player,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        placePiece: (columnIndex, board, player) => {
            dispatch(placePiece(columnIndex, board, player));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
