import {
    SEMANTIC_TAGS_ROUTE,
    TABLES_ROUTE,
    HEAD_ROUTE,
    SELECTOR_ROUTE,
    CONTAINERS_ROUTE,
    FORMS_ROUTE,
    POSITIONS_ROUTE,
    GRADIENT_ROUTE, STRING_ROUTES, ARRAYS_ROUTES
} from "@/constants/routes";

export const contentList: {
    chapter: string,
    paragraph: { description: string, link: string }[]
}[] = [
    {
        chapter: "HTML",
        paragraph: [
            {description: "Семантические тэги", link: SEMANTIC_TAGS_ROUTE},
            {description: "Таблицы", link: TABLES_ROUTE},
            {description: "Элемент head", link: HEAD_ROUTE},
            {description: "Формы", link: FORMS_ROUTE},
        ]
    },
    {
        chapter: "CSS",
        paragraph: [
            {description: "Контейнеры", link: CONTAINERS_ROUTE},
            {description: "Селекторы", link: SELECTOR_ROUTE},
            {description: "Позицонирование", link: POSITIONS_ROUTE},
            {description: "Градиенты", link: GRADIENT_ROUTE},
        ]
    },
    {
        chapter: "JS", paragraph: [
            {description: "Строки", link: STRING_ROUTES},
            {description: "Массивы", link: ARRAYS_ROUTES},
        ]
    },
    {chapter: "REACT", paragraph: []}
]
