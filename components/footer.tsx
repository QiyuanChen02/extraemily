import Image from "next/image";
import Logo from "./logo";

// icons from icon-set.iconify.design
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import useBreakPoint from "../hooks/usebreakpoint";

// Returns a <Footer> component with the given props.
const Footer = () => {

    const isSmall = useBreakPoint({ base: true, md: false })

    return (
        <section className="absolute bottom-0 flex flex-col items-center justify-center w-full h-16 gap-1 bg-colour-2 md:h-20">
            <p className="text-colour">Extraemily &copy; 2022</p>
            <p className="text-colour">Made by FailToWin_ with &#9829;</p>
        </section>
    )
}

export default Footer