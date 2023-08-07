import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#bd2949',
        },
        secondary: {
            main: '#464646',
        },
        background:{
            default: '#FFFFFF',
        },
        text: {
            primary: '#ffffff',
            secondary: '#ffffff'
        },
        error: {
            main: '#DF2935',
        },
        warning: {
            main: '#F3B700',
        },
        success: {
            main: '#00A878',
        },
        info: {
            main: '#6369D1',
        }
    }
})