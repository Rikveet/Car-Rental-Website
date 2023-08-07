import {theme} from "@/util/theme";
import {ThemeProvider} from "@mui/material";

import React from "react";

export default function ThemeWrapper({children} : {children: React.ReactNode}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}