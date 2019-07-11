import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    redButton: {
        backgroundColor: "#cd1a30",
        color: "#FFF",
        marginRight: "15px",
        marginTop: "15px",
    },
    yellowButton: {
        backgroundColor: "#fdc500",
        color: "#333",
        marginTop: "15px",
    },
    paperContainer: {
        padding: "30px",
        maxWidth: "500px",
        margin: "0 auto",
        marginTop: "30px",
    },
    disable: {
        pointerEvents: "none",
    }
}));
