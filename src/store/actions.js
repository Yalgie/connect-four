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

// Only check for the active player
const checkWinConditions = (board, player) => {
    return async (dispatch) => {
        let win = false;

        // Horizontal
        board.forEach(row => {
            let hCount = 0;
            row.forEach(col => {
                if (col === player) hCount++;
                if (hCount === 4) win = true;
                else if (col !== player) hCount = 0;
            });
        });

        // Vertical
        let vArr = [0, 0, 0, 0, 0, 0, 0];
        board.forEach(row => {
            row.forEach((col, x) => {
                if (col === player) vArr[x]++;
                if (vArr[x] === 4) win = true;
                else if (col !== player) vArr[x] = 0;
            });
        });

        // Diagonal 
        board.forEach((row, i) => {
            row.forEach((col, x) => {
                let cR = x;
                let cL = x;
                let dR = 0;
                let dL = 0;

                for (let r = 0; r < 4; r++) {
                    if (board[i] !== undefined && board[i][cR] !== undefined) {
                        if (board[i][cR] === player) dR++;
                        cR++;
                    }
                }
                
                for (let r = 0; r < 4; r++) {
                    if (board[i] !== undefined && board[i][cL] !== undefined) {
                        if (board[i][cL] === player) dL++;
                        cL--;
                    }
                }

                if ((dR === 4) || (dL === 4)) {
                    win = true;
                }
            });
        });

        let p = 1;

        if (player === 1) p = 2;


        
        dispatch({
            type: "SET_ACTIVE_PLAYER",
            player: p
        });

        console.log(win)
    }
};

// const checkHorizontal = board => {

// };

// const checkVertical = board => {

// };

// const checkDiagonal = board => {

// };

export {
    placePiece,
};
