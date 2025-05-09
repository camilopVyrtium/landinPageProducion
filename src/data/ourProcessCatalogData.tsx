import { Bullet } from "@/interfaces/common/Bullet";
import { ButtonVariant } from "@/interfaces/common/Button";
import { TranslateFunction } from "@/interfaces/common/TranslateFunction";
import setUp from '@/assets/icons/set-up-branding.svg'
import socialMedia from '@/assets/icons/social-media.svg'
import softwareEmpresarial from '@/assets/icons/software-de-gestion-empresarial.svg'
import landingPage from '@/assets/icons/landing-page.svg'
import ecommerce from '@/assets/icons/ecommerce.svg'
import googleAds from '@/assets/icons/google-ads.svg'
import administracionPutas from '@/assets/icons/administracion-pautas.svg'
import administracionRRSS from '@/assets/icons/administracion-rrss.svg'
import buyerPerson from '@/assets/icons/buyer-person.svg'
// import chatbot from '@/assets/icons/chatbot.svg'
import communityManager from '@/assets/icons/community-manager.svg'
// import cyberseguridad from '@/assets/icons/cyberseguridad.svg'
import artDirection from '@/assets/icons/direccion-de-arte.svg'
import corporateVideoEdition from '@/assets/icons/ediccion-de-video-corporativo.svg'
import professional3DDesign from '@/assets/icons/diseño-3d-profesional.svg'
import multimediaStudio from '@/assets/icons/estudio-foto-y-video.svg'
import designersHub from '@/assets/icons/hub-de-diseñadores.svg'
import vfx from '@/assets/icons/vfx.svg'
import cgi from '@/assets/icons/cgi.svg'
import digitalIllustration from '@/assets/icons/ilustracion-digital.svg'
import crisisManagement from '@/assets/icons/manejo-de-crisis.svg'
import marketingExperiential from '@/assets/icons/marketing-experiencial.svg'
import avatarsIa from '@/assets/icons/avatars-ia.svg'
import injectionMolds from '@/assets/icons/moldes-de-inyeccion.svg'
import eventPlanning from '@/assets/icons/planeacion-de-eventos.svg'
import positioningSeo from '@/assets/icons/posicionamiento-seo.svg'
import creationChannels from '@/assets/icons/creation-channels.svg';
import digitalContentProduction from '@/assets/icons/produccion-de-contenidos-digitales.svg'
import contentStrategy from '@/assets/icons/content-strategy.svg'
import marketResearch from '@/assets/icons/investigacion-de-mercados.svg';
import storyboard from '@/assets/icons/story-board.svg';
import audioRecordingStudio from '@/assets/icons/estudio-de-grabacion-de-audio.svg';
import streamming from '@/assets/icons/streamming.svg';
import empresarialAutomatization from '@/assets/icons/empresarial-automatization.svg';
import internalNetwork from '@/assets/icons/internal-network.svg';
import customerExperience from '@/assets/icons/custommer-experience.svg';
import contentAndProduct from '@/assets/icons/content-and-product.svg';
import developmentBussiness from '@/assets/icons/development-bussiness.svg';
import brandActivation from '@/assets/icons/brand-activation.svg';
import managmentInfluencers from '@/assets/icons/management-influencers.svg';
export type Service = {
    id: string;
    title: string;
    text: React.ReactNode;
    bullets: (Bullet & { id: string; })[];
    color: string;
    button: {
        text: string;
        variant: ButtonVariant;
        href: string;
    }
}
type NuestrosServicios = {
    title: string;
    text: React.ReactNode;
    services: Service[];
}
const bullets = [9, 8, 7, 5, 5, 6];
const bulletIcons = [
    [
        setUp, softwareEmpresarial, socialMedia, landingPage, ecommerce, googleAds, creationChannels, avatarsIa, positioningSeo
    ],
    [
        professional3DDesign, designersHub, storyboard, corporateVideoEdition, digitalIllustration, injectionMolds, vfx, cgi,
    ],
    [
        administracionRRSS, administracionPutas, communityManager, marketResearch, buyerPerson, contentStrategy, crisisManagement
    ],
    [
        multimediaStudio, artDirection, digitalContentProduction, audioRecordingStudio, streamming
    ],
    [
        empresarialAutomatization, internalNetwork, customerExperience, contentAndProduct, developmentBussiness,
    ],
    [
        marketingExperiential, eventPlanning, brandActivation, crisisManagement, setUp, managmentInfluencers
    ],
]
export const getOurServices = (t: TranslateFunction): NuestrosServicios => {
    return {
        title: t('title'),
        text: <>
            {t.rich('text', {
                bold: (text) => <strong className="font-bold">{text}</strong>,
            })}
        </>,
        services: [
            {
                id: t('services.0.id'),
                title: t('services.0.title'),
                color: '#90D6D6',
                button: {
                    text: t('services.0.button.text'),
                    variant: 'secondary',
                    href: '#'
                },
                text: (
                    <>
                        {t('services.0.text.part1')}
                        <strong>{t('services.0.text.strong1')} </strong>
                    </>
                ),
                bullets: new Array(bullets[0]).fill(0).map((value, i) => ({
                    id: t(`services.${value}.bullets.${i}.id`),
                    title: t(`services.${value}.bullets.${i}.title`),
                    // backgroundImage: bulletsImages[0][i],
                    icon: bulletIcons[0][i],
                    description: t(`services.${value}.bullets.${i}.description`),
                }))
            },
            {
                id: t('services.1.id'),
                title: t('services.1.title'),
                color: '#64D2D9',

                button: {
                    text: t('services.1.button.text'),
                    variant: 'secondary',
                    href: '#'
                },
                text: (
                    <>
                        {t('services.1.text.part1')}
                        <strong>{t('services.1.text.strong1')}</strong>
                    </>
                ),
                bullets: new Array(bullets[1]).fill(1).map((value, i) => ({
                    id: t(`services.${value}.bullets.${i}.id`),
                    title: t(`services.${value}.bullets.${i}.title`),
                    icon: bulletIcons[1][i],
                    // backgroundImage: bulletsImages[1][i],
                    description: t(`services.${value}.bullets.${i}.description`),
                }))
            },
            {
                id: t('services.2.id'),
                title: t('services.2.title'),
                color: '#FF5143',
                button: {
                    text: t('services.2.button.text'),
                    variant: 'primary',
                    href: '#'
                },
                text: (
                    <>
                        {t('services.2.text.part1')}
                        <strong>{t('services.2.text.strong1')}</strong>
                        {t('services.2.text.part2')}
                        <strong>{t('services.2.text.strong2')}</strong>
                        {t('services.2.text.part3')}
                    </>
                ),
                bullets: new Array(bullets[2]).fill(2).map((value, i) => ({
                    id: t(`services.${value}.bullets.${i}.id`),
                    title: t(`services.${value}.bullets.${i}.title`),
                    icon: bulletIcons[2][i],
                    // backgroundImage: bulletsImages[2][i],
                    description: t(`services.${value}.bullets.${i}.description`),
                }))
            },
            {
                id: t('services.3.id'),
                title: t('services.3.title'),
                color: '#2F383F',
                button: {
                    text: t('services.3.button.text'),
                    variant: 'gray',
                    href: '#'
                },
                text: (
                    <>
                        {t('services.3.text.part1')}
                    </>
                ),
                bullets: new Array(bullets[3]).fill(3).map((value, i) => ({
                    id: t(`services.${value}.bullets.${i}.id`),
                    title: t(`services.${value}.bullets.${i}.title`),
                    icon: bulletIcons[3][i],
                    description: t(`services.${value}.bullets.${i}.description`),
                    // backgroundImage: bulletsImages[3][i],
                }))
            },
            {
                id: t('services.4.id'),
                title: t('services.4.title'),
                color: '#72777A',
                button: {
                    text: t('services.4.button.text'),
                    variant: 'gray',
                    href: '#'
                },
                text: (
                    <>
                        {t('services.4.text.part1')}
                        <strong>{t('services.4.text.strong1')}</strong>
                    </>
                ),
                bullets: new Array(bullets[4]).fill(4).map((value, i) => ({
                    id: t(`services.${value}.bullets.${i}.id`),
                    title: t(`services.${value}.bullets.${i}.title`),
                    description: t(`services.${value}.bullets.${i}.description`),
                    icon: bulletIcons[4][i],
                    // backgroundImage: bulletsImages[4][i],
                }))
            },
            {
                id: t('services.5.id'),
                title: t('services.5.title'),
                color: '#FF7E7B',
                button: {
                    text: t('services.5.button.text'),
                    variant: 'primary',
                    href: '#'
                },
                text: (
                    <>
                        {t('services.5.text.part1')}
                        <strong>{t('services.5.text.strong1')}</strong>
                        {t('services.5.text.part2')}
                    </>
                ),
                bullets: new Array(bullets[5]).fill(5).map((value, i) => ({
                    id: t(`services.${value}.bullets.${i}.id`),
                    title: t(`services.${value}.bullets.${i}.title`),
                    description: t(`services.${value}.bullets.${i}.description`),
                    icon: bulletIcons[5][i],
                    // backgroundImage: bulletsImages[5][i],
                }))
            }
        ]
    }
}