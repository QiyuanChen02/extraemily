import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

export const socialLinks = {
    twitch: {
        icon: "mdi:twitch",
        url: "https://www.twitch.tv/extraemily",
    },
    youtube: {
        icon: "akar-icons:youtube-fill",
        url: "https://www.youtube.com/c/extraemily",
    },
    discord: {
        icon: "akar-icons:discord-fill",
        url: "https://discord.gg/z3QdTwF",
    },
    tiktok: {
        icon: "cib:tiktok",
        url: "https://tiktok.com/@extra.emilyyy",
    },
    twitter: {
        icon: "akar-icons:twitter-fill",
        url: "https://twitter.com/extraemilyy",
    },
    instagram: {
        icon: "akar-icons:instagram-fill",
        url: "https://www.instagram.com/extra.emilay",
    },
    reddit: {
        icon: "akar-icons:reddit-fill",
        url: "https://www.reddit.com/r/ExtraEmily",
    },
};

export type Socials = keyof typeof socialLinks;

interface SocialIconProps {
    media: Socials;
    clickable?: boolean;
    hasText?: boolean;
}

// Button which goes to a social media page when clicked
const SocialIcon = ({ media, clickable = true, hasText = false }: SocialIconProps) => {

    const router = useRouter()

    const goToWebsite = () => {
        if (clickable) {
            router.push(socialLinks[media].url);
        }
    }

    return (
        <button aria-label={`Go to ${media}`} className={`flex items-center ${hasText ? 'p-4 border-b-2' : 'rounded-full'} ${clickable ? "cursor-pointer hover:backdrop-brightness-125" : ""}`} onClick={goToWebsite}>
            <div className={`w-12 h-12 p-2 accent-colour`}>
                <Icon icon={socialLinks[media].icon} width="100%" height="100%" />
            </div>
            {hasText && <p className="text-lg accent-colour">{media}</p>}
        </button>
    )
}

export default SocialIcon