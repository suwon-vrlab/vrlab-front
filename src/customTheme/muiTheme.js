import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {blue} from "@material-ui/core/colors";

const muiTheme = createMuiTheme({
    palette: {
        primary: {main: blue[300]}, // Purple and green play nicely together.
        secondary: {main: '#11cb5f'}, // This is just green.A700 as hex.
    },
});

export default muiTheme