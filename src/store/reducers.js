export default (state = {}, action) => {
    switch(action.type) {
        case 'UPDATE_BOARD':
            return {
                ...state,
                board: action.board,
            }
        case 'SET_GAME_STATUS':
            return {
                ...state,
                gameStatus: action.gameStatus
            }
        case 'SET_ACTIVE_PLAYER':
            return {
                ...state,
                player: action.player,
            }
        default:
            return state;
    }
};
