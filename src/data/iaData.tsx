import { TranslateFunction } from "@/interfaces/common/TranslateFunction"
import { IaService } from "@/interfaces/ia/IaService";
import iaLine from '@/assets/images/ia/line.svg';
import lineBlue4 from '@/assets/images/common/lines/line-blue4.svg';
import lineBlue1 from '@/assets/images/common/lines/line-blue1.svg';
import lineGray1 from '@/assets/images/common/lines/line-gray1.svg';
import lineGray4 from '@/assets/images/common/lines/line-gray4.svg';
import lineRed1 from '@/assets/images/common/lines/line-red1.svg';

import ia1 from '@/assets/images/ia/ia1.png';
import ia2 from '@/assets/images/ia/ia2.png';
import ia3 from '@/assets/images/ia/ia3.png';


const bullets = [3, 4, 2, 3, 5];
// const bulletIcons = [
//     [],
//     [],
//     [],
//     [],
//     [],
// ]
export const getQueHacemosConIA = (t: TranslateFunction) => {
    return {
        title: t('title'),
        text: (
            <>
                {t('text.part1')}
                <strong>{t('text.strong1')}</strong>
            </>
        ),
        line: iaLine,
        section1: {
            title: t('section1.title'),
            text: (
                <>
                    {t('section1.text.part1')}
                    <strong>{t('section1.text.strong1')}</strong>
                    {t('section1.text.part2')}
                    <strong>{t('section1.text.strong2')}</strong>
                </>
            ),
            section: {
                text: t('section1.section.text'),
                audios: [
                    {
                        id: 'generation-voice-1',
                        src: '/audios/VozIA.wav'
                    },
                    {
                        id: 'generation-voice-2',
                        src: '/audios/voz.wav'
                    }
                ]
            }
        },
        section2: {
            title: t('section2.title'),
            text: (<>
                <strong>{t('section2.text.strong1')}</strong>
                {t('section2.text.part1')}
            </>),
            images: [
                { id: 'create-identification-image-1', image: ia1, },
                { id: 'create-identification-image-2', image: ia2, },
                { id: 'create-identification-image-3', image: ia3, },
            ],
            video: '/videos/ia.mp4',
        },
        section3: {
            title: t('section3.title'),
            text: (<>
                {t('section3.text.part1')}
            </>),
            video: '/videos/phases.mp4',
        }
    }
}

export const getMasServiciosConIa = (t: TranslateFunction): IaService => {
    return {
        title: t('title'),
        services: [
            {
                id: t('services.0.id'),
                title: t('services.0.title'),
                line: lineBlue4,
                text: t('services.0.text'),
                color: '#D7E2E1',
                button: {
                    text: t('services.0.button.text'),
                    variant: 'gray',
                    href: '#'
                },
                bullets: new Array(bullets[0]).fill(0).map((value, i) => ({
                    id: t(`services.${value}.bullets.${i}.id`),
                    title: t(`services.${value}.bullets.${i}.title`),
                    description: t(`services.${value}.bullets.${i}.description`),
                }))
            },
            {
                id: t('services.1.id'),
                title: t('services.1.title'),
                line: lineBlue1,
                text: t('services.1.text'),
                color: '#64D2D9',
                button: {
                    text: t('services.1.button.text'),
                    variant: 'secondary',
                    href: '#'
                },
                bullets: new Array(bullets[1]).fill(1).map((value, i) => ({
                    id: t(`services.${value}.bullets.${i}.id`),
                    title: t(`services.${value}.bullets.${i}.title`),
                    description: t(`services.${value}.bullets.${i}.description`),
                }))
            },
            {
                id: t('services.2.id'),
                title: t('services.2.title'),
                line: lineRed1,
                text: t('services.2.text'),
                color: '#FF5143',
                button: {
                    text: t('services.2.button.text'),
                    variant: 'primary',
                    href: '#'
                },
                bullets: new Array(bullets[2]).fill(2).map((value, i) => ({
                    id: t(`services.${value}.bullets.${i}.id`),
                    title: t(`services.${value}.bullets.${i}.title`),
                    description: t(`services.${value}.bullets.${i}.description`),
                }))
            },
            {
                id: t('services.3.id'),
                title: t('services.3.title'),
                line: lineGray1,
                text: t('services.3.text'),
                color: '#2F383F',
                button: {
                    text: t('services.3.button.text'),
                    variant: 'gray',
                    href: '#'
                },
                bullets: new Array(bullets[3]).fill(3).map((value, i) => ({
                    id: t(`services.${value}.bullets.${i}.id`),
                    title: t(`services.${value}.bullets.${i}.title`),
                    description: t(`services.${value}.bullets.${i}.description`),
                }))
            },
            {
                id: t('services.4.id'),
                title: t('services.4.title'),
                line: lineGray4,
                text: t('services.4.text'),
                color: '#72777A',
                button: {
                    text: t('services.4.button.text'),
                    variant: 'gray',
                    href: '#'
                },
                bullets: new Array(bullets[4]).fill(4).map((value, i) => ({
                    id: t(`services.${value}.bullets.${i}.id`),
                    title: t(`services.${value}.bullets.${i}.title`),
                    description: t(`services.${value}.bullets.${i}.description`),
                }))
            }
        ]
    } as IaService;
}