'use client'
import { Topic as TopicModel } from "@/interfaces/common/Blog";
import { Topic } from "@/components/blog/Topic"
import { Filter } from "@/components/blog/Filter"
import { useForm } from "@/hooks/useForm"
import { Option } from "@/components/common/InputSelect"

type Props = {
    topics: (TopicModel)[]
}
export type Filter = {
    title: string;
    topic: string;
    date: string;
}
const initialFilter: Filter = {
    title: '', topic: '', date: ''
}
export const Topics = ({ topics }: Props) => {
    const { form, handleChange } = useForm(initialFilter);
    const topicOptions = topics.map(({ title, id }) => ({ id, text: title, value: title } as Option));
    return (
        <div id="topics" className="max-w-[1920px]">
            <Filter form={form} handleChange={handleChange} topicOptions={topicOptions} />
            <div>
                {
                    topics
                        .filter(({ title }) => {
                            if (form.topic.length === 0)
                                return true;
                            return form.topic === title;
                        })
                        .map(({ id, ...topic }) => (<Topic key={id} {...topic} filterCard={form.title} />))
                }
            </div>
        </div>
    )
}