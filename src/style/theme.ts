import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#39efe7',
            light: '#a9fff9',
            dark: '#39908c',
        },
        secondary: {
            main: '#f5ff13',
            dark: '#8a900c',
            light: '#fbffd0',
        },
        background: {
            default: '#0b1212',
            paper: '#000000',
        },
        error: {
            main: '#e21000',
        },
        info: {
            main: '#a9daff',
        },
        success: {
            main: '#8cff90',
        },
    },
    spacing: 0,
    typography: {
        fontFamily: 'Quicksand',
        fontSize: 16,
        fontWeightLight: 200,
        fontWeightRegular: 600,
    },
});

export default theme;