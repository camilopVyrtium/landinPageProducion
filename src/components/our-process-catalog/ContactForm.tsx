"use client";

import { useTranslations } from "next-intl";
import { FormEvent, useEffect, useState } from "react";
import Button from "../common/Button";
import { Input } from "../common/Input";
import { InputSelect } from "../common/InputSelect";
import { form } from "@/data/commonData";
import Image from "next/image";

const API_URL = "https://vyrtium.com/api/form";

export const ContactForm = () => {
  const t = useTranslations("pages.ourProcessCatalog.contactForm");

  const { services } = form;

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
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

      setFullname("");
      setEmail("");
      setCompany("");
      setPhone("");
      setService("");
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
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-0 md:gap-4 pt-10">
      <div className="relative flex flex-col items-start justify-start md:pb-0 pb-28">
        <h2 className="text-red1 font-black text-2xl md:text-3xl">
          {t("title_1")}
        </h2>
        <h2 className="text-gray3 font-black text-3xl w-[80%] md:w-[60%] md:text-4xl whitespace-pre-line">
          {t("title_2")}
        </h2>
        <Image
          width={200}
          height={100}
          className="absolute top-0 right-0 h-full -z-10 md:w-[22rem] sm:w-[18rem]"
          alt="Contact form image"
          src="/images/our-process-catalog/contact-form/banner.png"
        />
      </div>
      <div className="flex flex-col items-center justify-center pb-8">
        {
          success || error ? (
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-green1 font-black text-xl md:text-2xl">
                {error ? t("error") : t("success")}
              </h2>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:py-4 z-10">
              <div>
                <Input
                  name="fullname"
                  value={fullname}
                  placeholder="Nombres y apellidos"
                  handleChange={(e) => setFullname(e.target.value)}
                  className="md:my-2 "
                />
                <Input
                  name="email"
                  value={email}
                  placeholder="E-mail"
                  handleChange={(e) => setEmail(e.target.value)}
                  className="my-2"
                />
                <Input
                  name="company"
                  value={company}
                  placeholder="Compañia"
                  handleChange={(e) => setCompany(e.target.value)}
                  className="my-2"
                />
                <div className={"flex justify-between gap-4"}>
                  <Input
                    name="phone"
                    value={phone}
                    placeholder="Telefono"
                    handleChange={(e) => setPhone(e.target.value)}
                    className="my-2 md:w-full"
                  />
                  <InputSelect
                    name="service"
                    handleChange={(e) => setService(e.target.value)}
                    placeholder="Servicio"
                    value={service}
                    options={services}
                    className="my-2 md:w-full"
                  />
                </div>
                <p className="text-gray3 text-sm pb-2">{t("terms")}</p>
              </div>
              <Button type="submit" variant="primary" className="self-end">
                {t("button")}
              </Button>
            </form>
          )}
      </div>
    </div>
  );
};
