import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './store';

// Wrapping the app in the redux provider
// Passing through the store for access throughout the app
ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </Provider>, 
    document.getElementById('root')
);
