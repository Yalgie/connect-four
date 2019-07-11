const placePiece = (columnIndex, board, player) => {
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
        the reducer. Then I pass the board into a checkWinConditions action
        to check win and draw conditions.
    */ 

    return async (dispatch) => {
        let set = false; // acts as a break; statement

        const newBoard = board.reverse().map(rows => {
            return rows.map((col, i) => {
                if ((i === columnIndex) && (col === 0) && !set) {
                    set = true;
                    return player;
                }
                else return col;
            });
        }).reverse();

        dispatch({
            type: "UPDATE_BOARD",
            board: newBoard
        });

        dispatch(checkWinConditions(newBoard, player));

        // Also add a checker for if the column is overflowed
        // This could maybe be a precursor function for the draw condition
        // Maybe a flash message or something and don't trigger the new turn "column full please select another"
    }
};

const checkWinConditions = (board, player) => {
    return async (dispatch) => {
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
                    else if (rowDownExists && colRightExists) {
                        if (rowDown[rightColIdx] === player) diagRightCount++;
                        rightColIdx++;
                    }
                };

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

        dispatch({
            type: "SET_ACTIVE_PLAYER",
            player: player === 1 ? 2 : 1
        });

        if (setWin) {
            dispatch({
                type: "SET_GAME_STATE",
                gameStatus: "won"
            });
        }
    }
};

export {
    placePiece,
};
