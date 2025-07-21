import "../../article-style.scss"
import Link from "next/link";

export default function headTags() {

    const example_MDN: string =
        `<meta
  property="og:image"
  content="https:// developer.mozilla.org /mdn-social-share.png/>"
<meta
  property="og:description"
  content="Веб-документация на MDN предоставляет
собой информацию об открытых веб-технологиях, включая HTML, CSS и различные API для веб-сайтов и прогрессивных веб-приложений. Также на сайте содержатся материалы для разработчиков о таких продуктах Mozilla, как Инструменты разработчика Firefox."/>
<meta property="og:title" content="MDN Web Docs"/>`;

    return (
        <article className={"page"}>
            <h1 className={"page__article-name"}>Что такое head</h1>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    Содержимое
                    <code className={"section__code code-gap-left"}>{"<head>"}</code>, в отличие от содержимого
                    элемента
                    <code className={"section__code code-gap-left"}>{"<body>"}</code>, не отображается на странице.
                    Задача
                    <code className={"section__code code-gap-inline"}>{"<head>"}</code>— хранить метаданные документа.
                </p>
                <p className={"section__paragraph"}>
                    Метаданные — данные, которые описывают данные. В HTML место для метаданных
                    документа — элемент<code className={"section__code code-gap-left"}>{"<meta>"}</code>.
                    Существует множество разновидностей
                    <code className={"section__code code-gap-left"}>{"<meta>"}</code>, однако тут я рассмотрю
                    только
                    несколько самых популярных.
                </p>
                <pre className={"section__code code-gap-inline"}>
                    {"<meta charset=\"utf-8\" />"}
                </pre>
                <p className={"section__paragraph"}>
                    В этом элементе указана кодировка документа — набор символов, которые в нём можно использовать.
                    utf-8 — универсальный набор символов, который включает почти все символы со всех языков
                    человечества. Такая веб-страница сможет работать с любым языком.
                </p>
                <p className={"section__paragraph"}>
                    У элементов <code className={"section__code"}>{"<meta>"}</code> есть атрибуты
                    <code className={"section__code code-gap-inline"}>{"name"}</code>и <code
                    className={"section__code"}>{"content"}</code>.
                </p>
                <pre className={"section__code multi-line"}>
                    <code>{`<meta name="author" content="Иван Иваныч/>`}</code>
                    <code>{`<meta`}</code>
                    <code>{`    name="description"`}</code>
                    <code>{`    content="Задача магазана «Ватрушки» - создать удобную систему для заказа ватрушек в Ивановске"/>`}</code>
                </pre>
                <p className={"section__paragraph"}>
                    <code className={"section__code"} style={{marginRight: "1ch"}}>{"name"}</code>
                    тип элемента, то есть какие именно метаданные он содержит,
                    <code className={"section__code code-gap-inline"}>{"content"}</code>сами метаданные.
                </p>
                <p className={"section__paragraph"}>
                    По указанному имени автора (author) можно найти человека, который написал страницу, и связаться с
                    ним. Некоторые системы управления содержимым (CMS(Content management system)) автоматически
                    обрабатывают эту информацию и
                    делают её доступной для таких целей.
                    Краткое описание (description) содержимого страницы учитывается поисковыми системами при совпадении
                    ключевых слов(SEO).
                </p>
                <p className={"section__paragraph"}>
                    В метаданных можно указать своему сайту иконку. <Link className={"link"}
                    target={"_blank"}
                    href={"https://ru.wikipedia.org/wiki/Favicon"}>Favicon</Link> значок
                    веб-сайта или веб-страницы. Отображается браузером во вкладке перед названием страницы, и в качестве
                    картинки рядом с закладкой, а также в адресной строке в некоторых браузерах.
                </p>
                <ul className={"section__list"}>
                    Чтобы добавить на сайт иконку:
                    <li className={"section__list-element"}>
                        Сохраните изображение желательно в формате .ico (многие браузеры поддерживают и в более
                        привычных форматах,
                        таких как .gif или .png, но старые браузеры только .ico) в папку со своим документом.
                    </li>
                    <li className={"section__list-element"}>
                        Добавьте ссылку на иконку в<code className={"section__code code-gap-inline"}>{"<head>"}</code>документа:
                    </li>
                </ul>
                <pre
                    className={"section__code"}>{`<link rel=\"shortcut icon\" href=\"favicon.ico\" type=\"image/x-icon\"/>`}</pre>
                <p className={"section__paragraph"}>
                    В сети вы найдёте также другие типы метаданных. Многие из них — это собственные форматы, созданные
                    для предоставления определённым сайтам (например, социальных сетей) специальной информации, которую
                    они могут использовать.
                </p>
                <p className={"section__paragraph"}>
                    Например, Протокол Open Graph создан Facebook (запрещенная в РФ организация) чтобы предоставить
                    сайтам дополнительные возможности
                    использования метаданных. В исходном коде MDN Web Docs вы можете найти строки:
                </p>
                <pre className={"example section__code"}>
                        {example_MDN}
                </pre>
                <p className={"section__paragraph"}>
                    Один из результатов добавления этих метаданных в том, что когда вы добавите ссылку MDN Web Docs в
                    социальной сети,то она отобразится с изображением и описанием, улучшая опыт взаимодействия
                </p>
            </section>
        </article>
    )
}
