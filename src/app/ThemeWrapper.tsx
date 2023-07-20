"use client";
import {ThemeProvider} from "@mui/material";
import {theme} from "@utils/theme";
import {Navbar} from "@components/Navbar";
import React from "react";

export default function ThemeWrapper({children}:{children: React.ReactNode}) {
    return (
        <ThemeProvider theme={theme}>
            <Navbar/>
            {children}
        </ThemeProvider>
    )
}