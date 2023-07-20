'use client';

import {Button, InputBase, Paper} from "@mui/material";
import {Space_Mono} from "@next/font/google";


const spaceMono = Space_Mono({weight: '400', style: 'normal', preload: false});

export function Subscribe() {
    return (
        <Paper
            component="form"
            sx={{p: '5px 5px', display: 'flex', alignItems: 'center', width: 400, background: '#D9D9D9'}}
        >
            <InputBase
                className={spaceMono.className}
                sx={{ml: 1, flex: 1, background: '#D9D9D9', color: "#000000", borderRadius: 10}}
                placeholder={"name@email.com"}
                inputProps={{'aria-label': 'enter your email to subscribe for exclusive offers'}}
            />
            <Button className={spaceMono.className} type="button" sx={{p: '10px', background: 'rgb(0,0,0) !important', color: 'rgb(217,217,217)'}} aria-label="subscribe">
                Subscribe
            </Button>
        </Paper>
    )
}
