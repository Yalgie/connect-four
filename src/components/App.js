import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import useStyles from "./styles/app";

export default function App() {
    const classes = useStyles();

    return (
        <Container>
            <Box my={4}>
                <h1 className={classes.text}>App</h1>
            </Box>
        </Container>
    );
};
