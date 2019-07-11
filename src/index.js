import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './components/App';

// Wrapping the app in the redux provider
// Passing through the store for access throughout the app
ReactDOM.render(
    <Provider store={store}>
        <CssBaseline />
        <App />
    </Provider>, 
    document.getElementById('root')
);
