import useConsole from "../hooks/useconsole"

export const Card2Text = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return <>{children}</>
}

export const Card2Image = ({ children }: { children: JSX.Element }) => {
    return <>{children}</>
}

export const Card2Button = ({ children }: { children: JSX.Element }) => {
    return <>{children}</>
}

interface Card2Props {
    children?: null | JSX.Element[];
    width?: string | null;
    height?: string | null;
}

// Returns a <Card2> component with the given props (needs refactoring)
const Card2 = ({ width = null, height = null, children = null }: Card2Props) => {

    useConsole(children)
    const text = children && children.filter(child => child.type.name === "Card2Text")[0] || null
    const image = children && children.filter(child => child.type.name === "Card2Image")[0] || null
    const button = children && children.filter(child => child.type.name === "Card2Button")[0] || null

    return (
        <div className={`flex flex-col ${width ? width : 'flex-1'} ${height ? height : 'flex-1'} p-4 bg-colour-2 rounded-md`}>
            <div className="flex h-2/3">
                <div className="flex-auto pr-2">
                    {text}
                </div>

                <div className="relative flex-none hidden h-5/6 aspect-video sm:block">
                    {image}
                </div>
            </div>
            <div className="flex items-end justify-center h-1/3">
                {button}
            </div>
        </div>
    )
}

export default Card2