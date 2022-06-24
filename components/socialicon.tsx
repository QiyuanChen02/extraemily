import { Icon } from "@iconify/react";
import { socialLinks, Socials } from "../helpers/socialmedialinks";

interface SocialIconProps {
    media: Socials;
    clickable?: boolean;
    hasText?: boolean;
}

const SocialIcon = ({ media, clickable = true, hasText = false }: SocialIconProps) => {

    const goToWebsite = () => {
        if (clickable) {
            document.location.href = socialLinks[media].url
        }
    }

    return (
        <button className={`flex items-center cursor-pointer ${hasText ? 'p-4 border-b-2' : 'rounded-full'} ${clickable ? "cursor-pointer hover:backdrop-brightness-125" : ""}`} onClick={goToWebsite}>
            <div className={`w-12 h-12 p-2 accent-colour`}>
                <Icon icon={socialLinks[media].icon} width="100%" height="100%" />
            </div>
            {hasText && <p className="text-lg accent-colour">{media}</p>}
        </button>
    )
}

export default SocialIcon