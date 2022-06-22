import { Icon } from "@iconify/react";
import { socialLinks } from "../helpers/socialmedialinks";

interface SocialIconProps {
    media: keyof typeof socialLinks;
    clickable?: boolean;
}

const SocialIcon = ({ media, clickable = true }: SocialIconProps) => {

    const goToWebsite = () => {
        if (clickable) {
            document.location.href = socialLinks[media].url
        }
    }

    return (
        <div className={`w-12 h-12 p-2 rounded-full accent-colour ${clickable ? "cursor-pointer hover:backdrop-brightness-125" : ""}`}>
            <Icon icon={socialLinks[media].icon} width="100%" height="100%" onClick={goToWebsite} />
        </div>
    )
}

export default SocialIcon