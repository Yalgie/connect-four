export default (state = {}, action) => {
    switch(action.type) {
        case 'UPDATE_BOARD':
            return {
                ...state,
                board: action.board,
            }
        default:
            return state;
    }
};
