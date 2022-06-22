import { Icon } from "@iconify/react";

interface ActionIconProps {
    icon: string;
    action: () => void;
}

const ActionIcon = ({ icon, action }: ActionIconProps) => {
    return (
        <div className="w-12 h-12 p-2 rounded-full cursor-pointer accent-colour hover:backdrop-brightness-125">
            <Icon icon={icon} width="100%" height="100%" onClick={() => action()} />
        </div>
    )
}

export default ActionIcon