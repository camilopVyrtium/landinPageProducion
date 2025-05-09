type Props = {
    color?: string;
    className?: string;
}
export const ActualPoint = ({ color = "#FF5143", className }: Props) => {
    return (
        <svg width="125" height="30" viewBox="0 0 125 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="0.5" y="0.0205078" width="124" height="29.9597" rx="14.9799" fill={color} />
        </svg>
    )
}