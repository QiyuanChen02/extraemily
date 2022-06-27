interface SectionProps {
    children: JSX.Element | JSX.Element[];
    type: string;
    display?: boolean;
}

// Used to break up {children} into sections, for components such as <Navbar> and <Card>
const Section = ({ children, display = true }: SectionProps) => {
    return <>{display ? children : null}</>
}

export default Section