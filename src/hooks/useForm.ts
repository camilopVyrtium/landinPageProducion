import { ChangeEvent, useState } from "react"

export const useForm = <T>(initialState: T) => {
    const [form, setForm] = useState<T>(initialState);
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    return {
        form,
        setForm,
        handleChange
    }
}