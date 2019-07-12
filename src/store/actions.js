import { checkDraw, checkWin, placeNewPiece } from './thunkActions';

const placePiece = (columnIndex, board, player) => dispatch => {
    const placeNewPieceData = placeNewPiece(board, columnIndex, player);
    const pieceWasSet = placeNewPieceData[0];
    const newBoard = placeNewPieceData[1];

    if (pieceWasSet) {
        dispatch({
            type: "UPDATE_BOARD",
            board: newBoard
        });
        dispatch(runCheckDraw(newBoard));
        dispatch(checkWinConditions(newBoard, player));
    }
};

const runCheckDraw = board => dispatch => {
    if (!checkDraw(board)) {
        dispatch({
            type: "SET_GAME_STATUS",
            gameStatus: "Draw"
        });
    }
}

const checkWinConditions = (board, player) => dispatch => {  
    if (checkWin(board, player)) {
        dispatch({
            type: "SET_GAME_STATUS",
            gameStatus: "Won",
        });
    }
    else {
        dispatch({
            type: "SET_ACTIVE_PLAYER",
            player: player === 1 ? 2 : 1
        });
    }
};

const startGame = player => dispatch => {
    dispatch({
        type: "SET_ACTIVE_PLAYER",
        player: player
    });
    dispatch({
        type: "SET_GAME_STATUS",
        gameStatus: "In Progress",
    });
}

const resetGame = () => dispatch => {
    dispatch({
        type: "SET_GAME_STATUS",
        gameStatus: "Start",
    });
    dispatch({
        type: 'UPDATE_BOARD',
        board: [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ]
    });
};

export {
    placePiece,
    startGame,
    resetGame,
};
