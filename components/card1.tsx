import Image from "next/image";

interface Card1Type {
    imageSrc: string;
    upperText: string;
    lowerText: string;
    buttonText: string;
    handleClick: () => void;
    width?: number | null;
    height?: number | null;
    textColour?: string;
    buttonColour?: string;
}

// Returns dimensions of card in same way that tailwind calculates width and height
const dimensions = (width: number | null, height: number | null) => {
    return {
        width: width ? (width * 0.25).toString() + 'rem' : '100%',
        height: height ? (height * 0.25).toString() + 'rem' : '11rem'
    }
}

// Returns a <Card1> component with the given props (needs refactoring)
const Card1 = ({ imageSrc, upperText, lowerText, buttonText, handleClick, width = null, height = null, textColour = "text-twitch-colour", buttonColour = "bg-twitch-colour" }: Card1Type) => {
    return (
        <div style={dimensions(width, height)} className={`flex flex-col ${height ? '' : 'flex-auto'} p-4 bg-colour-2 rounded-md`}>
            <div className="flex h-2/3">
                <div className="flex-auto pr-2">
                    <h2 className={`mb-2 text-lg ${textColour}`}>{upperText}</h2>
                    <p className="text-lg text-colour line-clamp-2 2xl:line-clamp-3">{lowerText}</p>
                </div>

                <div className="relative flex-none hidden h-5/6 aspect-video sm:block">
                    <Image src={imageSrc ? imageSrc : 'https://vod-secure.twitch.tv/_404/404_processing_320x180.png'} layout="fill" alt="top clip thumbnail" />
                </div>
            </div>
            <div className="flex items-end justify-center h-1/3">
                <button onClick={handleClick} className={`px-6 rounded ${buttonColour} hover:brightness-125 h-4/5`}>
                    <p className="text-lg text-colour">{buttonText}</p>
                </button>
            </div>
        </div>
    )
}

export default Card1