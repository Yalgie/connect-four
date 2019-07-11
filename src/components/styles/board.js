import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    row: {
        display: "flex"
    },
    col: {
        width: "50px",
        height: "50px",
        color: "#FFF",
        backgroundColor: "#333",
        textAlign: "center",
        cursor: "pointer",
    },
    hover: {
        backgroundColor: 'red'
    }
}));
