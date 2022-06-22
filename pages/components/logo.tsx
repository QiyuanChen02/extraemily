import Image from "next/image";

export interface LogoProps {
    name: string;
    location: string;
    rounded?: boolean;
    hasText?: boolean;
}

// Returns a <Logo> component with the given props. Note that the text font and image source must still be set.
const Logo = ({ location, name, rounded = true, hasText = false }: LogoProps) => {
    return (
        <div className="flex items-center">
            <div className={`overflow-hidden relative w-14 h-14 ${rounded && 'rounded-full'}`}>
                <Image src={"/" + location} alt={`logo of ${name}`} layout="fill" />
            </div>
            {hasText && <h1 className="p-4 text-4xl text-center md:p-6 accent-colour font-logofont">{name}</h1>}
        </div>
    )
}

export default Logo