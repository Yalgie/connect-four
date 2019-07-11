import React from 'react';
import { connect } from "react-redux";
import useStyles from "./styles/board";

const Col = ({ cols }) => {
    const classes = useStyles();

    return cols.map(cell => {
        return <div className={classes.col}>
            <p data-i={cell}>{cell}</p>
        </div>
    })
}

const Board = ({ board }) => {
    const classes = useStyles();

    return board.map(cols => {
        return <div className={classes.row}>
            <Col cols={cols} />
        </div>
    })
};

// Redux Wizardry
const mapStateToProps = state => {
    return {
        board: state.board,
    }
};

export default connect(mapStateToProps)(Board);
