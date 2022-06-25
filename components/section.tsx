interface SectionProps {
    children: JSX.Element | JSX.Element[];
    type: string;
}

const Section = ({ children }: SectionProps) => {
    return <>{children}</>
}

export default Section