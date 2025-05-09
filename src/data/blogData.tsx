import { New, Topic } from "@/interfaces/common/Blog";
import { TranslateFunction } from "@/interfaces/common/TranslateFunction";
import imageBlog from '@/assets/images/common/blog/imageBlog.jpeg';
import card1Blog from '@/assets/images/blog/cards/card1-blog.png';
import card2Blog from '@/assets/images/blog/cards/card2-blog.png';
import card3Blog from '@/assets/images/blog/cards/card3-blog.png';
import test1 from '@/assets/images/blogs/test1.png'
export const getBlog = (t: TranslateFunction) => {
    return {
        news: [
            {
                id: t('news.0.id'),
                title: t('news.0.title'),
                text: t('news.0.text'),
                image: imageBlog,
                button: {
                    variant: 'white',
                    text: t('news.0.button.text'),
                    href: '/blog/la-IA-avanza-de-nuevo'
                }
            }
        ] as New[],
        topics: [
            {
                id: t('topics.0.id'),
                title: t('topics.0.title'),
                cards: [
                    {
                        id: t('topics.0.cards.0.id'),
                        title: t('topics.0.cards.0.title'),
                        text: t('topics.0.cards.0.text'),
                        categories: [
                            {
                                category: t('topics.0.cards.0.categories.0.category')
                            },
                            {
                                category: t('topics.0.cards.0.categories.1.category')
                            }
                        ],
                        image: card1Blog,
                        url: '/',
                    },
                    {
                        id: t('topics.0.cards.1.id'),
                        title: t('topics.0.cards.1.title'),
                        text: t('topics.0.cards.1.text'),
                        categories: [
                            {

                                category: t('topics.0.cards.1.categories.0.category')
                            },
                            {

                                category: t('topics.0.cards.1.categories.1.category')
                            }
                        ],
                        image: card2Blog,
                        url: '/',
                    },
                    {
                        id: t('topics.0.cards.2.id'),
                        title: t('topics.0.cards.2.title'),
                        text: t('topics.0.cards.2.text'),
                        categories: [
                            {

                                category: t('topics.0.cards.2.categories.0.category')
                            },
                            {

                                category: t('topics.0.cards.2.categories.1.category')
                            }
                        ],
                        image: card3Blog,
                        url: '/',
                    },
                ]
            },
            {
                id: t('topics.1.id'),
                title: t('topics.1.title'),
                cards: [
                    {
                        id: t('topics.1.cards.0.id'),
                        title: t('topics.1.cards.0.title'),
                        text: t('topics.1.cards.0.text'),
                        categories: [
                            {

                                category: t('topics.1.cards.0.categories.0.category')
                            },
                            {

                                category: t('topics.1.cards.0.categories.1.category')
                            }
                        ],
                        image: card1Blog,
                        url: '/',
                    },
                    {
                        id: t('topics.1.cards.1.id'),
                        title: t('topics.1.cards.1.title'),
                        text: t('topics.1.cards.1.text'),
                        categories: [
                            {

                                category: t('topics.1.cards.1.categories.0.category')
                            },
                            {

                                category: t('topics.1.cards.1.categories.1.category')
                            }
                        ],
                        image: card2Blog,
                        url: '/',
                    },
                    {
                        id: t('topics.1.cards.2.id'),
                        title: t('topics.1.cards.2.title'),
                        text: t('topics.1.cards.2.text'),
                        categories: [
                            {

                                category: t('topics.1.cards.2.categories.0.category')
                            },
                            {

                                category: t('topics.1.cards.2.categories.1.category')
                            }
                        ],
                        image: card3Blog,
                        url: '/',
                    },
                ]
            },
            {
                id: t('topics.2.id'),
                title: t('topics.2.title'),
                cards: [
                    {
                        id: t('topics.2.cards.0.id'),
                        title: t('topics.2.cards.0.title'),
                        text: t('topics.2.cards.0.text'),
                        categories: [
                            {

                                category: t('topics.2.cards.0.categories.0.category')
                            },
                            {

                                category: t('topics.2.cards.0.categories.1.category')
                            }
                        ],
                        image: card1Blog,
                        url: '/',
                    },
                    {
                        id: t('topics.2.cards.1.id'),
                        title: t('topics.2.cards.1.title'),
                        text: t('topics.2.cards.1.text'),
                        categories: [
                            {

                                category: t('topics.2.cards.1.categories.0.category')
                            },
                            {

                                category: t('topics.2.cards.1.categories.1.category')
                            }
                        ],
                        image: card2Blog,
                        url: '/',
                    },
                    {
                        id: t('topics.2.cards.2.id'),
                        title: t('topics.2.cards.2.title'),
                        text: t('topics.2.cards.2.text'),
                        categories: [
                            {

                                category: t('topics.2.cards.2.categories.0.category')
                            },
                            {

                                category: t('topics.2.cards.2.categories.1.category')
                            }
                        ],
                        image: card3Blog,
                        url: '/',
                    },
                ]
            },
        ] as Topic[],

    }
}
export const getFullBlog = (t: TranslateFunction, slug: string) => {

    return {
        slug,
        title: t(`news.${slug}.title`),
        text: t(`news.${slug}.text`),
        image: imageBlog,
        createdAt: '2025-03-25T00:00:00.000Z',
        textOwner: t('textOwner'),
        sections: [
            {
                id: `section-${slug}-1`,
                title: t(`news.${slug}.sections.0.title`),
                text: t(`news.${slug}.sections.0.text`),
                image: test1,
            },
            {
                id: `section-${slug}-2`,
                title: t(`news.${slug}.sections.1.title`),
                text: t(`news.${slug}.sections.1.text`),
                // image: '/images/blogs/test2.png'
            },
            {
                id: `section-${slug}-3`,
                title: t(`news.${slug}.sections.2.title`),
                text: t(`news.${slug}.sections.2.text`),
                // image: '/images/blogs/test2.png'
            },
        ],
        owner: 'Luisa Latorre',
        textSimilar: t('textSimilar'),
        similar: [
            {
                id: t(`news.${slug}.similar.0.id`),
                title: t(`news.${slug}.similar.0.title`),
                text: t(`news.${slug}.similar.0.text`),
                categories: [
                    {
                        category: t(`news.${slug}.similar.0.categories.0.category`)
                    },
                    {
                        category: t(`news.${slug}.similar.0.categories.1.category`)
                    }
                ],
                image: card1Blog,
                url: '/',
            },
            {
                id: t(`news.${slug}.similar.1.id`),
                title: t(`news.${slug}.similar.1.title`),
                text: t(`news.${slug}.similar.1.text`),
                categories: [
                    {
                        category: t(`news.${slug}.similar.1.categories.0.category`)
                    },
                    {
                        category: t(`news.${slug}.similar.1.categories.1.category`)
                    }
                ],
                image: card2Blog,
                url: '/',
            },
            {
                id: t(`news.${slug}.similar.2.id`),
                title: t(`news.${slug}.similar.2.title`),
                text: t(`news.${slug}.similar.2.text`),
                categories: [
                    {
                        category: t(`news.${slug}.similar.2.categories.0.category`)
                    },
                    {
                        category: t(`news.${slug}.similar.2.categories.1.category`)
                    }
                ],
                image: card3Blog,
                url: '/',
            },
        ]
    }
}