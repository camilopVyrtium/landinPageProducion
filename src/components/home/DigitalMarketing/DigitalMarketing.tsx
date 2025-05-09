import clsx from 'clsx';
import Image from 'next/image';
import { digitalMarketing } from '@/data/homeData';
import Button from '@/components/common/Button';
import { useTranslations } from 'next-intl';
import digitalMarketingDivition from '@/assets/images/home/digitalMarketingDivition.svg'
export const DigitalMarketing = () => {
    const { animation, button } = digitalMarketing;
    const { text, variant } = button;

    const t = useTranslations("pages.homePage.digitalMarketing");
    return (
        <div className={clsx("flex flex-col items-center", "md:flex-row")} id='digital-marketing'>
            <video autoPlay muted loop preload='none' className={clsx('max-w-full', 'md:w-1/2')}>
                <source {...animation} />
            </video>
            <div>
                <div className='flex font-black text-blue1 max-w-full'>
                    <span className={clsx("text-5xl self-start font-black", "lg:text-8xl")}>{t("question.start")}</span>
                    <div className={clsx("flex flex-col text-3xl self-center my-4 mx-1", "lg:text-6xl")}>
                        <div className='text-start'>{t("question.line1")}</div>
                        <div className='text-gray3 ml-4'>{t("question.line2")}</div>
                        <div className='text-end'>{t("question.line3")}</div>
                    </div>
                    <span className={clsx("text-5xl self-end", "lg:text-8xl")}>{t("question.end")}</span>
                </div>
                <div className='relative'>
                    <Button showModalContact variant={variant} className={clsx(`absolute top-[0.5rem] md:top-0  md:bottom-1/2 right-7`)}>{text}</Button>
                    <Image src={digitalMarketingDivition} alt='divition' className='max-w-full mb-4 hidden md:block' width={1000} height={144} />
                </div>
            </div>

        </div>
    )
}