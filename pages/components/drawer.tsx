import { Icon } from "@iconify/react";
import React from "react";
import { socialLinks } from "../helpers/socialmedialinks";
import SocialIcon from "./socialicon";

interface DrawerProps {
    closeModal: () => void;
}

interface SocialLinkProps {
    media: keyof typeof socialLinks;
}

const SocialLink = ({ media }: SocialLinkProps) => {
    return (
        <button className="flex items-center p-3 border-b-2 cursor-pointer hover:backdrop-brightness-125" onClick={() => document.location.href = socialLinks[media].url}>
            <SocialIcon media={media} clickable={false} />
            <p className="text-lg accent-colour">{media}</p>
        </button>
    )
}

// Returns a <Drawer> component for the menu
const Drawer = ({ closeModal }: DrawerProps) => {
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50" onClick={closeModal}>
            </div>
            <div className="absolute top-0 right-0 z-50 flex flex-col h-screen p-3 bg-colour-2">
                <SocialLink media="twitch" />
                <SocialLink media="youtube" />
                <SocialLink media="discord" />
                <SocialLink media="tiktok" />
                <SocialLink media="twitter" />
                <SocialLink media="reddit" />
                <SocialLink media="instagram" />
            </div>
        </>
    )
}

export default Drawer