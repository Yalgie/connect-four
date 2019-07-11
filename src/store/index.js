import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Need to manually include custom Redux Dev Tools
// Install chrome app to see redux working in your console
// https://github.com/zalmoxisus/redux-devtools-extension

import reducers from "./reducers";

const initialState = {
    turn: 1,
    board: [
       [0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0],
    ]
};

export default createStore(
    reducers,
    { ...initialState },
    composeWithDevTools()
);
