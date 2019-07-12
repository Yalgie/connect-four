const placePiece = (columnIndex, board, player) => dispatch => {
    /* 
        Unsure whether I should be passing the board array 
        and player index around; Or if i should directly access 
        the state within this action. Feels cleaner to just 
        pass them through as arguments.

        This function reverses the board array so that i can search
        from the bottom up. once there is a cell that has no pieces
        active in it, and it's in the same column as the clicked one
        it will update it to include the active players index (1 or 2). 
        I then reverse the array back to normal and pass the board into 
        the reducer.
    */ 

    let set = false; // acts as a break; statement (sort of)

    const newBoard = [...board].reverse().map(rows => {
        return rows.map((col, i) => {
            if ((i === columnIndex) && (col === 0) && !set) {
                set = true;
                return player;
            }
            else return col;
        });
    }).reverse();

    // if !set it means the column is full and no more pieces can be added
    if (set) {
        dispatch({
            type: "UPDATE_BOARD",
            board: newBoard
        });
        dispatch(checkDraw(newBoard));
        dispatch(checkWinConditions(newBoard, player));
    }
};

const checkDraw = board => dispatch => {
    let emptyFound = false;

    board.forEach(rows => {
        rows.forEach(col => {
            if (col === 0) emptyFound = true;
        });
    });

    if (!emptyFound) {
        dispatch({
            type: "SET_GAME_STATUS",
            gameStatus: "Draw"
        });
    }
}

const checkWinConditions = (board, player) => dispatch => {
    // vArr is used for counting vertical win conditions
    let vArr = [0, 0, 0, 0, 0, 0, 0];
    let setWin = false;

    board.forEach((row, rowIdx) => {
        // hCount is used for counting horizontal win conditions
        let hCount = 0;

        row.forEach((col, colIdx) => {
            let rightColIdx = colIdx; // Used for incrementing rightward diagonal indexes
            let leftColIdx = colIdx; // Used for decrementing rightward diagonal indexes
            let diagRightCount = 0; // Used for counting rightward diagonal win conditions
            let diagLeftCount = 0; // Used for counting leftward diagonal win conditions

            if (col === player) {
                // If the active index in this column is the current player
                hCount++;
                vArr[colIdx]++;
            };

            // Checking the next 4 downward left/right diagonal cells
            for (let downIdx = 0; downIdx < 4; downIdx++) {
                const rowDown = board[rowIdx + downIdx];
                const rowDownExists = rowDown !== undefined;
                const colLeftExists = row[leftColIdx] !== undefined;
                const colRightExists = row[rightColIdx] !== undefined;

                if (rowDownExists && colLeftExists) {
                    if (rowDown[leftColIdx] === player) diagLeftCount++;
                    leftColIdx--;
                }

                if (rowDownExists && colRightExists) {
                    if (rowDown[rightColIdx] === player) diagRightCount++;
                    rightColIdx++;
                }
            }

            if (col !== player) {
                hCount = 0;
                vArr[colIdx] = 0;
            }
            else if ((hCount === 4) || 
                    (vArr[colIdx] === 4) || 
                    (diagRightCount === 4) || 
                    (diagLeftCount === 4)) {
                setWin = true;
            } 
        });
    });

    if (setWin) {
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
