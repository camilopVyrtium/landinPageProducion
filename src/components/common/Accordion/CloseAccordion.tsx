type Props = {
    stroke?: string;
    className?: string;
}
export const CloseAccordion = ({ className, stroke = "#D7E2E1"}: Props) => {
    return (
        <svg width="52" height="37" viewBox="0 0 52 37" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M10 10.5L24.5858 25.0858C25.3668 25.8668 26.6332 25.8668 27.4142 25.0858L42 10.5" stroke={stroke} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}