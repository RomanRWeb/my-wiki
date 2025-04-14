import "../../article-style.scss"
import "./examle.scss"

export default function Positions() {

    const examples: string[] = [
        `.element {
    position: static;
}`,
        `.element {
    position: relative;
    top: 10px; /* Сдвинет элемент вниз на 10 пикселей */
    left: 20px; /* Сдвинет элемент вправо на 20 пикселей */
}`,
        `.container {
    position: relative; /* Это будет ближайший предок для абсолютного элемента */
}

.element {
    position: absolute;
    top: 0; /* От верхней границы контейнера */
    left: 0; /* От левой границы контейнера */
}`,
        `.element {
    position: fixed;
    top: 0; /* Прикреплен к верхней части окна браузера */
    right: 0; /* Прикреплен к правой части окна браузера */
}`,
        `.element {
    position: sticky;
    top: 0; /* Элемент станет фиксированным при прокрутке до верхней границы окна */
}`
    ]

    return (
        <article className={"page"}>
            <h1 className={"page__article-name"}>
                Позиционирование
            </h1>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    Позиционирование элементов в CSS — это важный аспект веб-разработки, который позволяет управлять
                    расположением элементов на странице. CSS предоставляет несколько различных методов позиционирования,
                    каждый из которых имеет свои особенности и применения. Давайте рассмотрим основные из них.
                </p>
                <h3 className={"section__name center"}>
                    Статическое позиционирование
                </h3>
                <p className={"section__paragraph"}>
                    Это значение по умолчанию для всех элементов. Элементы с position: static располагаются в обычном
                    потоке документа, и их положение определяется порядком следования в HTML.
                </p>
                <pre className={"section__code"}>
                    {examples[0]}
                </pre>
                <h3 className={"section__name center"}>
                    Относительное позиционирование
                </h3>
                <p className={"section__paragraph"}>
                    Элементы с <code className={"section__code"}>position: relative</code> располагаются относительно
                    своего нормального положения в потоке
                    документа. При этом можно использовать свойства <code className={"section__code"}>top</code>, <code
                    className={"section__code"}>right</code>, <code className={"section__code"}>bottom</code> и <code
                    className={"section__code"}>left</code> для смещения элемента от
                    его исходного положения. (приоритет у <code className={"section__code"}>top</code> выше чем у <code
                    className={"section__code"}>bottom</code>, а у <code className={"section__code"}>left</code> выше
                    чем у <code className={"section__code"}>right</code>)
                </p>
                <pre className={"section__code"}>
                    {examples[1]}
                </pre>
                <h3 className={"section__name center"}>
                    Абсолютное позиционирование
                </h3>
                <p className={"section__paragraph"}>
                    Элементы с <code className={"section__code"}>position: absolute</code> удаляются из нормального
                    потока документа и позиционируются
                    относительно ближайшего предка с ненормальным позиционированием (то есть, у которого установлено
                    значение <code className={"section__code"}>relative</code>, <code
                    className={"section__code"}>absolute</code>, или <code className={"section__code"}>fixed</code>).
                    Если таких предков нет, элемент будет позиционироваться
                    относительно окна браузера.
                </p>
                <pre className={"section__code"}>
                    {examples[2]}
                </pre>
                <h3 className={"section__name center"}>
                    Фиксированное позиционирование
                </h3>
                <p className={"section__paragraph"}>
                    Элементы с <code className={"section__code"}>position: fixed</code> также удаляются из нормального
                    потока документа, но они фиксируются
                    относительно окна браузера. Это означает, что они остаются на одном и том же месте даже при
                    прокрутке страницы.
                </p>
                <pre className={"section__code"}>
                    {examples[3]}
                </pre>
                <h3 className={"section__name center"}>
                    &#34;Липкое&#34; позиционирование
                </h3>
                <p className={"section__paragraph"}>
                    Элементы с <code className={"section__code"}>position: sticky</code> ведут себя как относительные до
                    тех пор, пока не достигнут определенной позиции при прокрутке (у родительского контейнера должно
                    быть
                    установлено свойство <code className={"section__code"}>overflow: scroll</code>), после чего они
                    становятся
                    фиксированными. Это полезно для создания &#34;липких&#34; заголовков или навигационных панелей.
                </p>
                <pre className={"section__code"}>
                    {examples[4]}
                </pre>
                <h3 className={"section__paragraph center"}>
                    z-index
                </h3>
                <p className={"section__paragraph"}>
                    <code className={"section__code"}>z-index</code>: определяет положение позиционированного элемента и
                    его дочерних элементов или флекс-элементов по оси z. Перекрывающие элементы с большим значением
                    z-index будут накладываться поверх элементов с меньшим z-index.
                </p>
                <div className={"section__example-container"} style={{minHeight: "180px"}}>
                    <span className={"el-z abs-1"}>z-index: 1</span>
                    <span className={"el-z abs-2"}>z-index: 2</span>
                    <span className={"el-z abs-3"}>z-index: 3</span>
                    <span className={"el-z abs-4"}>z-index: 4</span>
                </div>
                <p className={"section__paragraph"}>
                    Проиллюстрируем это все небольшим примером:
                </p>
                <div className={"section__example-container"} style={{translate: "0", marginBottom: "1rem"}}>
                    <span className={"el__fixed"}>position: fixed</span>
                    <div className={"wrapper"}>
                        <div className={"container__scroll"}>
                            <span className={"el__relative"}>position: relative</span>
                            <span className={"el__absolute"}>position: absolute</span>
                            <span className={"el__sticky"}>position: sticky</span>
                        </div>
                        <br></br>
                        <div className={"container__scroll"}>
                            <span className={"el__sticky"}>position: sticky</span>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}
