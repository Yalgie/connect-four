const checkWin = (board, player) => {
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
            [...Array(4)].forEach((_, downIdx) => {
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
            });

            if (col !== player) {
                hCount = 0;
                vArr[colIdx] = 0;
            } else if ((hCount === 4) ||
                (vArr[colIdx] === 4) ||
                (diagRightCount === 4) ||
                (diagLeftCount === 4)) {
                setWin = true;
            }
        });
    });

    return setWin;
}

const checkDraw = (board) => {
    let emptyFound = false;

    board.forEach(rows => {
        rows.forEach(col => {
            if (col === 0) emptyFound = true;
        });
    });

    return emptyFound;
}

const placeNewPiece = (board, columnIndex, player) => {
    let set = false;

    const newBoard = [...board].reverse().map(rows => {
        return rows.map((col, i) => {
            if ((i === columnIndex) && (col === 0) && !set) {
                set = true;
                return player;
            } else return col;
        });
    }).reverse();

    return [set, newBoard];
}

export {
    checkWin,
    checkDraw,
    placeNewPiece,
}
