import React, { useState } from 'react';
import { connect } from "react-redux";
import useStyles from "./styles/board";

const Board = ({ board }) => {
    const [activeCol, setActiveCol] = useState(null);
    const classes = useStyles();

    return board.map((cols, i) => {
        return <div key={i} className={classes.row}>
            {cols.map((cell, x) => {
                return <div onMouseEnter={() => {
                    setActiveCol(x)
                }} key={x} className={`${classes.col} ${x === activeCol ? classes.active : null}`}>
                    <p data-i={cell}>{cell}</p>
                </div>
            })}
        </div>
    });
};

// Redux Wizardry
const mapStateToProps = state => {
    return {
        board: state.board,
    }
};

export default connect(mapStateToProps)(Board);
