import Spline from "@splinetool/react-spline/next"

type Props = {
    animation: string;
}
export const Animation = ({ animation }: Props) => {

    return (
        <div>
            <Spline
                scene={animation}
            />
        </div>
    )
}