import { Bullet } from "@/interfaces/common/Bullet";
import { ButtonVariant } from "@/interfaces/common/Button";
import { RichTranslateFunction } from "@/interfaces/common/TranslateFunction";

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
const bullets = [9, 11, 8, 8, 4, 8];
const bulletsImages = [
    [
        "/images/our-process-catalog/marketing-digital/set-up_+_branding.png",
        "/images/our-process-catalog/marketing-digital/business-management-software.png",
        "/images/our-process-catalog/marketing-digital/social-media-management.png",
        "/images/our-process-catalog/marketing-digital/landing-page.png",
        "/images/our-process-catalog/marketing-digital/ecommerce.png",
        "/images/our-process-catalog/marketing-digital/google-ads.png",
        "/images/our-process-catalog/marketing-digital/channel-creation.png",
        "/images/our-process-catalog/marketing-digital/avatar-development-with-ai.png",
        "/images/our-process-catalog/marketing-digital/seo.png"
    ],
    [
        "/images/our-process-catalog/creative-projects/professional-3d-animation_design.png",
        "/images/our-process-catalog/creative-projects/designer-hub.png",
        "/images/our-process-catalog/creative-projects/storyboard.png",
        "/images/our-process-catalog/creative-projects/corporate-video_edition.png",
        "/images/our-process-catalog/creative-projects/digital-illustration.png",
        "/images/our-process-catalog/creative-projects/injection-molds.png",
        "/images/our-process-catalog/creative-projects/vfx-productions.png",
        "/images/our-process-catalog/creative-projects/videos-cgi.png",
        // Data
        "/images/our-process-catalog/marketing-digital/set-up_+_branding.png",
        "/images/our-process-catalog/marketing-digital/set-up_+_branding.png",
        "/images/our-process-catalog/marketing-digital/set-up_+_branding.png",
    ],
    [
        "/images/our-process-catalog/social-media-managment/social-network-administration.png",
        "/images/our-process-catalog/social-media-managment/administration-advertising-guidelines.png",
        "/images/our-process-catalog/social-media-managment/service_community-manager.png",
        "/images/our-process-catalog/social-media-managment/market-research.png",
        "/images/our-process-catalog/social-media-managment/buyer-person.png",
        "/images/our-process-catalog/social-media-managment/content-strategies.png",
        "/images/our-process-catalog/social-media-managment/response-protocols.png",
    ],
    
    [
        "/images/our-process-catalog/audiovisual-productions/photographic-studio.png",
        "/images/our-process-catalog/audiovisual-productions/art-direction.png",
        "/images/our-process-catalog/audiovisual-productions/content-production.png",
        "/images/our-process-catalog/audiovisual-productions/consultancy_accompaniment-legal-production_videos.png",
        "/images/our-process-catalog/audiovisual-productions/services-streaming.png",
        // Data
        "/images/our-process-catalog/marketing-digital/set-up_+_branding.png",
        "/images/our-process-catalog/marketing-digital/set-up_+_branding.png",
        "/images/our-process-catalog/marketing-digital/set-up_+_branding.png",
    ],
    [
        "/images/our-process-catalog/applied-ai/business-automation.png",
        "/images/our-process-catalog/applied-ai/internal-connection.png",
        "/images/our-process-catalog/applied-ai/customer-experience.png",
        "/images/our-process-catalog/applied-ai/content-production.png",
        "/images/our-process-catalog/applied-ai/business-development.png",
    ],
    [
        "/images/our-process-catalog/public-relations/marketing-experiencial.png",
        "/images/our-process-catalog/public-relations/in-person-event-planning.png",
        "/images/our-process-catalog/public-relations/brand-activation.png",
        "/images/our-process-catalog/social-media-managment/response-protocols.png",
        "/images/our-process-catalog/public-relations/freepress.png",
        "/images/our-process-catalog/applied-ai/customer-experience.png",
    ],
]
export const getOurServices = (t: RichTranslateFunction): NuestrosServicios => {
    return {
        title: t('title'),
        text: <>
            {t.rich('text', {
                bold: (text: string) => <strong className="font-bold">{text}</strong>,
            })}
        </>,
        services: [
            {
                id: t('services.0.id'),
                title: t('services.0.title'),
                color: '#D7E2E1',
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
                    backgroundImage: bulletsImages[0][i],
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
                    backgroundImage: bulletsImages[1][i],
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
                    backgroundImage: bulletsImages[2][i],
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
                    description: t(`services.${value}.bullets.${i}.description`),
                    backgroundImage: bulletsImages[3][i],
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
                    backgroundImage: bulletsImages[4][i],
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
                    backgroundImage: bulletsImages[5][i],
                }))
            }
        ]
    }
}