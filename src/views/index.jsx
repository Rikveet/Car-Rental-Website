import Home from "@views/Home";
import React from "react";
import {createBrowserRouter, Outlet,} from "react-router-dom";
import {Navbar} from "@components/Navbar";

export const Links = [
    {href: "", label: "Home", Component: <Home/>, },
    {href: "fleet", label: "Our Fleet", Component: <div></div>},
    {href: "booking", label: "Your Bookings", Component: <div></div>},
    {href: "services", label: "Services", Component: <div></div>},
    {href: "contact-us", label: "Contact Us", Component: <div></div>}
]

export const RootRoute = ()=>{
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootRoute/>,
        children: Links.map(({href, Component}) => (
            {
                path: href,
                element: Component
            }))
    }
]);


