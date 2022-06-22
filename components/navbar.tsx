import Image from "next/image";
import Logo from "./logo";

// icons from icon-set.iconify.design
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import useBreakPoint from "../hooks/usebreakpoint";

interface NavbarProps {
    logo: JSX.Element | null;
    links: JSX.Element | null;
    logosmall: JSX.Element | null;
    linkssmall: JSX.Element | null;
}

// Returns a <Navbar> component with the given props.
const Navbar = ({ logo = null, links = null, logosmall = null, linkssmall = null }: NavbarProps) => {

    const isSmall = useBreakPoint({ base: true, md: false })

    return (
        <nav className="flex items-center w-full h-20 px-4 bg-colour-2 md:h-24 md:px-6">
            <div className="flex items-center justify-between w-full">
                {isSmall ? logosmall : logo}
                <div className="flex gap-1">
                    {isSmall ? linkssmall : links}
                </div>
            </div>
        </nav>
    )
}

export default Navbar