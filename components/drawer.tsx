interface DrawerProps {
    closeModal: () => void;
    children: JSX.Element[];
}

// Returns a <Drawer> component for the navbar links
const Drawer = ({ closeModal, children }: DrawerProps) => {

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-50" onClick={closeModal}>
            </div>
            <div className="fixed top-0 right-0 z-50 flex flex-col h-screen bg-colour-2">
                {children}
            </div>
        </>
    )
}

export default Drawer