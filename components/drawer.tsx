import React from "react";
import useConsole from "../hooks/useconsole";

interface DrawerProps {
    closeModal: () => void;
    children: JSX.Element[];
}

// Returns a <Drawer> component for the menu
const Drawer = ({ closeModal, children }: DrawerProps) => {

    return (
        <>
            <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50" onClick={closeModal}>
            </div>
            <div className="absolute top-0 right-0 z-50 flex flex-col h-screen bg-colour-2">
                {children.filter(child => child.props.type === "SocialIcon")}
            </div>
        </>
    )
}

export default Drawer