import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Need to manually include custom Redux Dev Tools
// Install chrome app to see redux working in your console
// https://github.com/zalmoxisus/redux-devtools-extension

import reducers from "./reducers";

const initialState = {
    player: 1, // Red = 1, Yellow = 2
    board: [
       [0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0],
    ],
    gameStatus: "Start", // Start, In Progress, Won, Draw
};

export default createStore(
    reducers,
    { ...initialState },
    composeWithDevTools(applyMiddleware(thunk))
);
