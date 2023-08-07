import {Links} from "@/views";
import {ArrowDropDown} from "@mui/icons-material";
import {Button, Menu as MenuContainer, MenuItem} from "@mui/material";
import styles from "@styles/navbar.module.scss";
import React, {useCallback, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const Menu = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const {pathname} = useLocation();
    const navigate = useNavigate();
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
                {Links.find(link => link.href === pathname.split("/")[1])?.label ?? ('Menu')}
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
                            navigate(link.href)
                            setOpen(false)
                        }}
                        style={{
                            color: pathname.split("/")[1] === link.href ? "#bd2949" : "#111111",
                            backgroundColor: '#FFFFFFF'
                        }}
                    > {link.label}
                    </MenuItem>
                ))}
                <MenuItem
                    key={'contact-us-number'}
                    onClick={() => {
                        window.open("tel:+19059170818")
                        setOpen(false)
                    }
                    }
                    style={{
                        color: "#111111",
                        backgroundColor: '#FFFFFFF'
                    }}
                > {'Contact Us'}
                </MenuItem>
            </MenuContainer>
        </nav>
    )
}

const Bar = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    return (
        <ul className={styles.NavLinks}>
            {Links.map(link => (
                <li key={link.href}>
                    <Button
                        color={pathname.split("/")[1] === link.href ? "primary" : "secondary"}
                        onClick={() => {
                            navigate(link.href);
                        }}
                        size={"large"}
                    >
                        {link.label}
                    </Button>
                </li>
            ))}
            <li key={'contactUs'}>
                <Button
                    color={"secondary"}
                    onClick={() => {
                        window.open("tel:+19059170818")
                    }}
                    size={"large"}
                >
                    {'Contact Us'}
                </Button>
            </li>
        </ul>

    )
}

export function Navbar() {
    /*Navigation component displayed on top of the customer view components such as home, fleet, services and contact us
    * It automatically shows the component that is active by using the usePathname
    * This component returns null when the route does not exist in Links*/
    const {pathname} = useLocation();
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
        } else {
            setDesktop(true);
        }

        return () => {
            media.onchange = null
        };
    }, []);
    return (
        pathname === '/' ?
            null :
            <nav className={styles.Nav}>
                <img src="/logo512.jpg" alt="logo" width={125} height={125}/>{desktop ?
                <Bar/> :
                <Menu/>}
            </nav>
    )
}
