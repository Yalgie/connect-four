import React, { useState, Fragment } from 'react';
import { connect } from "react-redux";
import { placePiece } from "../store/actions";
import useStyles from "./styles/board";

const Board = ({ board, placePiece, player, gameStatus }) => {
    // Using this to highlight all pieces in a column when hovering
    // This allows the player to visibly see which row their piece will go in
    const [activeCol, setActiveCol] = useState(null); 
    const classes = useStyles();

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
            return (
                <div 
                    onMouseEnter={() => setActiveCol(i)}
                    onClick={() => placePiece(i, board, player)}
                    key={i} 
                    className={`${classes.col} ${i === activeCol ? classes.hover : ''} ${cell === 1 ? classes.red : '' } ${cell === 2 ? classes.yellow : '' }`}>
                </div>
            );
        })
    };

    const colorPlayer = player === 1 ? "Red" : "Yellow";

    return <Fragment>
        <h1>{colorPlayer}'s Turn</h1>
        <div className={classes.board}><Rows rows={board} /></div>
    </Fragment>
};

const mapStateToProps = state => {
    return {
        board: state.board,
        player: state.player,
        gameStatus: state.gameStatus,
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
