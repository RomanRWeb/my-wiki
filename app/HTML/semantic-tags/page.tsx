import Link from "next/link";
import "../../article-style.scss";

export default function Semantic_tags() {
    return (
        <article className="page">
            <h1 className={"page__article-name"}> Семантические тэги </h1>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    Семантические теги в HTML5 — это элементы, которые имеют четкое значение и предназначение, что
                    помогает как разработчикам, так и браузерам лучше понимать структуру и содержание веб-страницы.
                    Использование семантических тегов улучшает доступность, SEO (поисковую оптимизацию) и делает код
                    более читаемым.
                </p>
                <ul className={"section__list"}>Можно привести в пример такие тэги как:
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<header>"}</code>
                        : Используется для определения заголовка документа или раздела. Он может содержать другие
                        элементы-заголовки, а также логотип, форму поиска, имя автора и другие элементы.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<nav>"}</code>
                        : Определяет навигационные ссылки. Этот тег помогает разработчикам и поисковым системам понять,
                        где находятся основные навигационные элементы.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<main>"}</code>
                        : Указывает на основной контент страницы. Это основной блок, который содержит уникальную
                        информацию, отличающуюся от других страниц.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<article>"}</code>
                        : Представляет собой независимый фрагмент контента, который может быть распространен или
                        повторно использован. Например, в этот тэг может быть помещен текст статьи, блог/поста или
                        новостной заметки.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<section>"}</code>
                        : Используется для группировки тематически связанного контента. Это может быть раздел статьи или
                        страницы.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<aside>"}</code>
                        : Содержит контент, который связан с основным содержимым, но не является его основной частью.
                        Например, это может быть боковая панель с дополнительной информацией или ссылками.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<footer>"}</code>
                        : Определяет нижний колонтитул документа или раздела. Обычно содержит информацию о авторских
                        правах, ссылки на политику конфиденциальности и контактные данные.
                    </li>
                </ul>
                <p className={"section__paragraph"}> Обычно эти тэги называют секнционными, потому что они делят
                    страницу на большие логические блоки. Еще есть контекстные тэги, они нужны для описания контента
                    внутри секционных тэгов. </p>
                <ul className={"section__list"}>К таким тэгам можно отнести:
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<h1> - <h6>"}</code>
                        : используются для заголовков. Чем ниже цифра, тем больше заголовок.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<button>"}</code>
                        : используются для кнопок, удобно применять внутри тэга
                        <code className={"section__code code-gap-last-word"}>{"<form>"}</code>
                        .
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<table>"}</code>
                        : нужны для создания таблиц, используется совместно с
                        <code className={"section__code code-gap-inline"}>{"<tr>, <th>, <td>"}</code>
                        для задания разметки таблицы.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<ul> и <ol>"}</code>
                        : для создания списков, используется совместно с
                        <code className={"section__code code-gap-inline"}>{"<li>"}</code>
                        для создания элементов внутри списка.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<a>"}</code>
                        : для ссылок, в Next.js этот элемент заменяется
                        <Link className={"section__code code-gap-last-word link"}
                              href={"https://nextjs.org/docs/pages/api-reference/components/link"}
                              target="_blank"> {"<Link>"} </Link>
                        .
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<img>"}</code>
                        : для ссылок, в Next.js этот элемент заменяется
                        <Link className={"section__code code-gap-last-word link"}
                              href={"https://nextjs.org/docs/pages/api-reference/components/image"}
                              target="_blank"> {"<Image>"} </Link>
                        .
                    </li>
                </ul>
                <p className={"section__paragraph"}> Список всех тэгов можно найти
                    <Link className={"code-gap-inline link"}
                          href={"https://developer.mozilla.org/ru/docs/Web/HTML/Element"}
                          target="_blank"> {"тут"} </Link>
                    или
                    <Link className={"code-gap-last-word link"}
                          href={"https://html5css.ru/tags/default.php"}
                          target="_blank"> {"тут"} </Link>
                    .
                </p>
                <h2 className={"section__name center"}>
                    Для чего нужна семантика
                </h2>
                <h3 className={"section__name"}>
                    1. Читаемость кода
                </h3>
                <p className={"section__paragraph"}>
                    Семантические теги имеют четкое назначение и смысл, что делает код более понятным для
                    разработчиков. Когда другие программисты (или вы сами в будущем) читают код, они могут быстро
                    понять структуру страницы и ее содержание, что облегчает внесение изменений и исправление
                    ошибок.
                </p>
                <h3 className={"section__name"}>
                    2. Структурированность
                </h3>
                <p className={"section__paragraph"}>
                    Семантические теги помогают организовать контент на странице, разделяя его на
                    логические блоки. Это упрощает навигацию по коду и позволяет легче находить нужные элементы при
                    необходимости их редактирования или обновления.
                </p>
                <h3 className={"section__name"}>
                    3. Поддержка доступности
                </h3>
                <p className={"section__paragraph"}>
                    Семантические теги улучшают доступность веб-страниц для людей с ограниченными
                    возможностями. Это означает, что при поддержке и обновлении кода важно учитывать не только
                    визуальные аспекты, но и то, как контент воспринимается различными пользователями. Семантические
                    теги помогают обеспечить лучшую поддержку вспомогательных технологий, таких как экранные
                    считыватели.
                </p>
                <h3 className={"section__name"}>
                    4. SEO-оптимизация
                </h3>
                <p className={"section__paragraph"}>
                    Семантические теги помогают поисковым системам лучше индексировать и понимать
                    содержание страницы. Это может привести к улучшению позиций в результатах поиска, что, в свою очередь,
                    снижает необходимость в частых изменениях кода для улучшения SEO(search engine optimization).
                </p>


            </section>

        </article>

    )
}
