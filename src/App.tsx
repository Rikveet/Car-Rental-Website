import ThemeWrapper from "@/util/ThemeWrapper";
import React from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "@/views";


export default function App() {
    return (
        <ThemeWrapper>
            <RouterProvider router={router} />
        </ThemeWrapper>
    );
}