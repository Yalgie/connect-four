const placePiece = (columnIndex, board, player) => {
    /* 
        Unsure whether I should be passing the board array 
        and player index around; Or if i should directly access 
        the state within this action. Feels cleaner to just 
        pass them through as arguments.

        This function reverses the board array so that i can search
        from the bottom up. once there is a cell that has no pieces
        active in it, and it's in the same column as the clicked one
        it will update it to include the active players index. I then
        reverse the array back to normal and pass the board into the
        reducer.
    */ 

    return async (dispatch) => {
        let set = false;

        const newBoard = board.reverse().map(rows => {
            return rows.map((col, i) => {
                if (i === columnIndex && col === 0 && !set) {
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

        dispatch(checkConditions());
    }
};

const checkConditions = () => {
    return async (dispatch) => {
        console.log("???")
    }
}

export {
    placePiece,
};
