import * as Routes from "@/constants/routes";

export const contentList: {
    chapter: string,
    paragraph: { description: string, link: string }[]
}[] = [
    {
        chapter: "HTML",
        paragraph: [
            {description: "Семантические тэги", link: Routes.SEMANTIC_TAGS_ROUTE},
            {description: "Таблицы", link: Routes.TABLES_ROUTE},
            {description: "Элемент head", link: Routes.HEAD_ROUTE},
            {description: "Формы", link: Routes.FORMS_ROUTE},
        ]
    },
    {
        chapter: "CSS",
        paragraph: [
            {description: "Контейнеры", link: Routes.CONTAINERS_ROUTE},
            {description: "Селекторы", link: Routes.SELECTOR_ROUTE},
            {description: "Позицонирование", link: Routes.POSITIONS_ROUTE},
            {description: "Блочная модель", link: Routes.BLOCK_ROUTE},
            {description: "Градиенты", link: Routes.GRADIENT_ROUTE},
            {description: "Border", link: Routes.BORDER_ROUTE},
            {description: "Background", link: Routes.BACKGROUND_ROUTE},
            {description: "Overflow", link: Routes.OVERFLOW_ROUTE},
        ]
    },
    {
        chapter: "JS", paragraph: [
            {description: "Строки", link: Routes.STRING_ROUTE},
            {description: "Массивы", link: Routes.ARRAYS_ROUTE},
        ]
    },
    {
        chapter: "REACT", paragraph: [
            {description: "Зачем", link: Routes.ABOUT_ROUTES},
            {description: "Хуки", link: Routes.HOOKS_ROUTE},
        ]
    },
    {
        chapter: "Другое", paragraph: [
            {description: "Cookie", link: Routes.COOKIE_ROUTE},
        ]
    },
]
