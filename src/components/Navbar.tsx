"use client"
import {Button, Menu as MenuContainer, MenuItem} from "@mui/material";
import {usePathname, useRouter} from "next/navigation";
import Image from "next/image";
import styles from "@styles/navbar.module.scss";
import React, {useCallback, useEffect, useState} from "react";
import {ArrowDropDown} from "@mui/icons-material";

const Links = [
    {href: "/", label: "Home"},
    {href: "/fleet", label: "Our Fleet"},
    {href: "/booking", label: "Your Bookings"},
    {href: "/services", label: "Services"},
    {href: "/contact-us", label: "Contact Us"},
]

const Menu = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const path = usePathname();
    const router = useRouter();
    return (
        <nav className={`${styles.NavLinks} justify-end`}>
            <Button
                id="menu-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={() => {
                    setAnchorEl(document.getElementById("menu-button"))
                    setOpen(true)
                }}
                endIcon={<ArrowDropDown/>}
            >
                {Links.find(link => link.href === path)?.label ?? ('Menu')}
            </Button>
            <MenuContainer
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}

            >
                {Links.map(link => (
                    <MenuItem
                        key={link.href}
                        onClick={() => {
                            router.push(link.href)
                            setOpen(false)
                        }}
                        style={{
                            color: path === link.href ? "#bd2949" : "#111111",
                            backgroundColor: '#FFFFFFF'
                        }}
                    > {link.label}
                    </MenuItem>
                ))}
            </MenuContainer>
        </nav>
    )
}

const Bar = () => {
    const path = usePathname();
    const router = useRouter();
    return (

        <ul className={styles.NavLinks}>
            {Links.map(link => (
                <li key={link.href}>
                    <Button
                        color={path === link.href ? "primary" : "secondary"}
                        onClick={() => {
                            router.push(link.href);
                        }}
                        size={"large"}
                    >
                        {link.label}
                    </Button>
                </li>
            ))}
        </ul>

    )
}

export function Navbar() {
    /*Navigation component displayed on top of the customer view components such as home, fleet, services and contact us
    * It automatically shows the component that is active by using the usePathname
    * This component returns null when the route does not exist in Links*/
    const path = usePathname();
    const [desktop, setDesktop] = useState(false);

    const updateTarget = useCallback((e: MediaQueryListEvent) => {
        if (e.matches) {
            setDesktop(false);
        } else {
            setDesktop(true);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${1100}px)`);
        media.onchange = updateTarget;

        if (media.matches) {
            setDesktop(false);
        }else{
            setDesktop(true);
        }

        return () => {
            media.onchange = null
        };
    }, []);
    return (
        path === '/' ?
            null :
            <nav className={styles.Nav}>
                <Image src="/logo.svg" alt="logo" width={125} height={125} priority/>{desktop ?
                <Bar/> :
                <Menu/>}
            </nav>
    )
}
