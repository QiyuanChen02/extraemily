import { useEffect, useState } from "react";

interface NavbarProps {
    children: null | [JSX.Element, JSX.Element];
}

// Returns a <Navbar> component
const Navbar = ({ children }: NavbarProps) => {

    const [logo, setLogo] = useState<null | JSX.Element>(null)
    const [links, setLinks] = useState<null | JSX.Element>(null)

    useEffect(() => {
        if (children) {
            setLogo(children.filter(child => child.props.type === "NavbarLogo")[0] || null)
            setLinks(children.filter(child => child.props.type === "NavbarLinks")[0] || null)
        }
    }, [children])

    return (
        <nav className="flex items-center w-full h-20 px-4 bg-colour-2 md:h-24 md:px-6">
            <div className="flex items-center justify-between w-full">
                {logo}
                <div className="flex gap-1">
                    {links}
                </div>
            </div>
        </nav>
    )
}

export default Navbar