import { New } from "@/components/common/New/New";
import { New as NewModel } from "@/interfaces/common/Blog"

type Props = {
    news: NewModel[];
}
export const News = ({ news }: Props) => {
    return (
        <div id="news" className="max-w-[1920px]">
            {
                news.map(({ id, ...theNew }) => (<New key={id} {...theNew} />))
            }
        </div>
    )
}