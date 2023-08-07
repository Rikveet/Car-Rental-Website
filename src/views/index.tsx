import AboutUs from "@views/AboutUs";
import React from "react";
import {createBrowserRouter, Outlet,} from "react-router-dom";
import {Navbar} from "@components/Navbar";
import Fleet from "@views/Fleet";
import ComingSoon from "@components/animations/ComingSoon";

export const Links = [
    {href: "", label: "About Us", Component: <AboutUs/>,},
    {href: "fleet", label: "Our Fleet", Component: <Fleet/>},
    {
        href: "booking",
        label: "Bookings",
        Component:
            <div className={'h-screen w-[100%] flex flex-col content-center items-center bg-[#FEFEFE]'}>
                <div
                    className={`min-h-screen w-[100%] flex flex-col content-center items-center bg-[#FEFEFE]`}
                    style={{
                        marginTop: '20px',
                        padding: '10px',
                        fontFamily: 'space mono',
                        fontSize: '1rem',
                        maxWidth: '1000px'
                    }}
                >
                    To book a ride, please call us at <a
                    href="tel:+19059170818"
                    style={{
                        borderBottom: '1px solid #A22C29',
                        paddingBottom: '3px',
                        color: '#A22C29',
                        width: '120px',
                    }}>905-917-0818</a>
                    <ComingSoon/>
                </div>
            </div>


    },
    //{href: "tel:+19059170818", label: "Contact Us", Component: null}
]

export const RootRoute = () => {
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


