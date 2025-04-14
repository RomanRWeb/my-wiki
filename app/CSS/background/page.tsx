import "../../article-style.scss"
//import "./examples.scss"

export default function Background() {

    const examples: string[] = [
        ``,
    ]

    return (
        <article className={"page"}>
            <h1 className={"page__article-name"}>
                Background
            </h1>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    Свойство <code className={"section__code"}>background</code> используется для задания фона элемента. Оно
                    является сокращённой записью
                    для нескольких свойств, связанных с фоном, и позволяет легко управлять цветом, изображениями,
                    позиционированием и повторением фона.
                </p>
            </section>
        </article>
    )
}
