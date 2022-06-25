import { useRouter } from "next/router";

interface ButtonProps {
    url: string;
    colour: string;
    children: JSX.Element | JSX.Element[];
}

// Returns a <Button> component with the given props (needs refactoring)
const Button = ({ url, colour, children }: ButtonProps) => {

    const router = useRouter()

    return (
        <button onClick={() => router.push(url)} className={`px-6 rounded ${colour} hover:brightness-125 h-4/5`}>
            {children}
        </button>
    )
}

export default Button

