"use client"
import clsx from "clsx";
import { InputSearch } from "@/components/common/InputSearch"
import { InputSelect, Option } from "@/components/common/InputSelect"
import { ChangeEventHandler } from "react"
export type FilterModel = {
    title: string;
    topic: string;
    date: string;
}
type Props = {
    form: FilterModel;
    handleChange: ChangeEventHandler<HTMLSelectElement>;
    topicOptions: Option[];
    dateOptions?: Option[];

}
export const Filter = ({ form, handleChange, topicOptions }: Props) => {
    const { title, topic, date } = form;
    return (
        <div className={clsx("flex flex-col mt-10 justify-between gap-4", "md:flex-row")}>
            <InputSearch name="title" placeholder="Busca un tema..." value={title} handleChange={handleChange} className="flex-grow" />
            <div className={clsx("flex md:flex-grow gap-4")}>
                <InputSelect name="topic" placeholder="Tema" value={topic} options={topicOptions} handleChange={handleChange} className="w-1/2" />
                <InputSelect name="date" placeholder="Fecha" value={date} handleChange={handleChange} options={[]} className="w-1/2" />
            </div>
        </div>
    )
}