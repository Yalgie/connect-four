import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    board: {
        backgroundColor: "#1e62f3",
        padding: "15px",
        width: "450px",
        borderRadius: "15px 15px 5px 5px",
        margin: "0 auto",
    },
    row: {
        display: "flex"
    },
    col: {
        margin: "5px",
        width: "50px",
        height: "50px",
        color: "#FFF",
        textAlign: "center",
        borderRadius: "50px",
        backgroundColor: "#FFF",
        cursor: "pointer",
        boxSizing: "border-box",
    },
    yellow: {
        backgroundColor: "#fdc500",
    },
    red: {
        backgroundColor: "#cd1a30",
    },
    hover: {
        border: '3px solid #3cd070',
    },
    paperContainer: {
        padding: "30px",
        maxWidth: "500px",
        margin: "0 auto",
        marginTop: "30px",
        marginBottom: "30px",
    },
}));
