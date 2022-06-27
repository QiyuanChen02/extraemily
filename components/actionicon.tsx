import { Icon } from "@iconify/react";

interface ActionIconProps {
    icon: string;
    action: () => void;
    ariaLabel: string;
}

// Used for icon buttons in website to do a task (For example to open a drawer)
const ActionIcon = ({ icon, action, ariaLabel }: ActionIconProps) => {
    return (
        <button aria-label={ariaLabel} className="rounded-full cursor-pointer hover:backdrop-brightness-125" onClick={action}>
            <div className="w-12 h-12 p-2 accent-colour">
                <Icon icon={icon} width="100%" height="100%" />
            </div>
        </button>

    )
}

export default ActionIcon