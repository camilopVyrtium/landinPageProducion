type Props = {
    stroke?: string;
    className?: string;
}
export const OpenAccordion = ({ className, stroke = "#D7E2E1" }: Props) => {
    return (
        <svg width="52" height="37" viewBox="0 0 52 37" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M42 26.5L27.4142 11.9142C26.6332 11.1332 25.3668 11.1332 24.5858 11.9142L10 26.5" stroke={stroke} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}