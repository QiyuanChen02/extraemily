interface CardProps {
    children?: null | JSX.Element[];
    width: string | null;
    height: string | null;
}

// Returns a specific card with text, an image, and a button
const Card = ({ width, height, children = null }: CardProps) => {

    const text = children && children.filter(child => child.props.type === "CardText")[0] || null
    const image = children && children.filter(child => child.props.type === "CardImage")[0] || null
    const button = children && children.filter(child => child.props.type === "CardButton")[0] || null

    return (
        <div className={`flex flex-col ${width} ${height} p-4 bg-colour-2 rounded-md`}>
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

export default Card