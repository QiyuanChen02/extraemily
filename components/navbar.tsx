
// icons from icon-set.iconify.design
import useBreakPoint from "../hooks/usebreakpoint";

export const NavbarLogo = ({ children }: { children: JSX.Element }) => {
    return <>{children}</>
}

export const NavbarLinks = ({ children }: { children: JSX.Element }) => {
    return <>{children}</>
}

interface NavbarProps {
    children: [JSX.Element, JSX.Element];
}

// Returns a <Navbar> component with the given props.
const Navbar = ({ children }: NavbarProps) => {

    const logo = children.filter(child => child.type.name === "NavbarLogo")
    const links = children.filter(child => child.type.name === "NavbarLinks")

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