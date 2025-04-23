"use client";
import clsx from "clsx";
import { FormEvent, useEffect, useState } from "react";
import { Input } from "@/components/common/Input";
import { useForm } from "@/hooks/useForm";
import { form } from "@/data/commonData";
import Image from "next/image";
import Button from "@/components/common/Button";
import { InputSelect } from "@/components/common/InputSelect";
type Props = {
  inModal?: boolean;
}

const API_URL = "https://vyrtium.com/api/form";

export const Form = ({ inModal = true }: Props) => {
  const { initialForm, services } = form;
  const { form: landingForm, handleChange } = useForm(initialForm);
  const { fullname, email, company, phone, service } = landingForm;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Error en la petición');
      }

      setSuccess(true);

    } catch {
      setSuccess(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (success || error) {
      setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 3000);
    }
  }, [success, error]);


  return (
    <div className={!inModal ? clsx("flex flex-col w-full justify-around", "lg:flex-row") : ""}>
      <div>
        <h2
          className={clsx(
            "text-2xl text-red1 font-black absolute w-80 z-10",
            "md:text-2xl md:w-1/2"
          )}
        >
          Conversemos y
          <div className={clsx(inModal ? 'text-yellow1' : 'text-gray3')}>

            <span className={clsx("text-2xl block", "md:text-3xl")}>
              DOMINEMOS EL
            </span>
            <span className={clsx("text-2xl block", "md:text-4xl")}>
              CAOS DIGITAL
            </span>
          </div>
        </h2>

        <Image
          src={"/images/common/imageForm.png"}
          alt="imageForm"
          width={460}
          height={500}
          className="md:w-[70%] w-[65%] relative left-[30%]"
        />
      </div>
      {success || error ? (
        <div className="flex flex-col items-center justify-center pt-10">
          <h2 className={clsx(success ? "text-green1 font-black text-xl md:text-2xl" : "text-red1 font-black text-xl md:text-2xl")}>{success ? "¡Gracias por contactarnos!" : "¡Ups! Algo salió mal. Por favor, inténtalo de nuevo."}</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div>
            <Input
              name="fullname"
              value={fullname}
              placeholder="Nombres y apellidos"
              handleChange={handleChange}
              className={clsx("my-2")}
            />
            <Input
              name="email"
              value={email}
              placeholder="E-mail"
              handleChange={handleChange}
              className={clsx("my-2")}
            />
            <Input
              name="company"
              value={company}
              placeholder="Compañia"
              handleChange={handleChange}
              className={clsx("my-2")}
            />
            <div className={clsx("flex justify-between gap-4")}>
              <Input
                name="phone"
                value={phone}
                placeholder="Telefono"
                handleChange={handleChange}
                className={clsx("my-2", "md:w-full")}
              />
              <InputSelect
                name="service"
                handleChange={handleChange}
                placeholder="Servicio"
                value={service}
                options={services}
                className={clsx("my-2", "md:w-full")}
              />
            </div>
            <p className="text-gray3 text-sm pb-4">
              Al enviar este formulario aceptas nuestros términos y condiciones y
              política de tratamiento de datos
            </p>
          </div>
          <Button type="submit" variant="primary" className="self-end">
            Conoce más
          </Button>
        </form>
      )}
    </div>
  );
};
