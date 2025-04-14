import "../../article-style.scss"
import "./style.scss"
import Link from "next/link";

export default function Selectors() {

    const examples: string[] = [
        `p {
    color: blue;
}`,
        `.class-name {
    color: blue;
}`,
        `#id {
    color: blue;
}`,
        `input[type="text"] {
    color: blue;
}`,
        `div p {
    color: blue;
}`,
        `div > p {
    color: blue;
}`,
        `div + p {
    color: blue;
}`,
        `div ~ p {
    color: blue;
}`,
        `a:hover{
    color: blue;
}`,
        `p::first-line{
    color: blue;
}`,
        `div * {
    color: blue;
}`
    ]

    return (
        <article className={"page"}>
            <h1 className={"page__article-name"}>
                Селекторы
            </h1>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    Селекторы в CSS — это паттерны, которые используются для выбора элементов HTML, к которым будут
                    применяться стили. Селекторы позволяют разработчикам точно указывать, какие элементы на странице
                    должны быть стилизованы. В CSS существует множество типов селекторов, и они могут комбинироваться
                    для создания более сложных правил.
                </p>
                <ul className={"section__list"}>
                    Селекторы элементов:
                    <li className={"section__list-element"}>
                        Селектор по тегу
                        <p className={"section__paragraph"}>
                            Выбирает все элементы с данным тегом.
                        </p>
                        <pre className={"section__code"}>
                            {examples[0]}
                        </pre>
                    </li>
                    <li className={"section__list-element"}>
                        Селектор по классу
                        <p className={"section__paragraph"}>
                            Выбирает все элементы с данным классом, который выделяется точкой перед названием.
                        </p>
                        <pre className={"section__code"}>
                            {examples[1]}
                        </pre>
                    </li>
                    <li className={"section__list-element"}>
                        Селектор по идентификатору
                        <p className={"section__paragraph"}>
                            Выбирает все элементы с данным идентификатором, который выделяется решеткой перед названием.
                        </p>
                        <pre className={"section__code"}>
                            {examples[2]}
                        </pre>
                    </li>
                    <li className={"section__list-element"}>
                        Атрибутный селектор
                        <p className={"section__paragraph"}>
                            Выбирает элементы на основе наличия или значения атрибутов.
                        </p>
                        <pre className={"section__code"}>
                            {examples[3]}
                        </pre>
                    </li>
                </ul>
                <br></br>
                <ul className={"section__list"}>
                    Селекторы вложенных элементов:
                    <li className={"section__list-element"}>
                        Селектор потомка
                        <p className={"section__paragraph"}>
                            Этот селектор выбирает все элементы, которые являются потомками указанного элемента,
                            независимо от уровня вложенности.
                        </p>
                        <pre className={"section__code"}>
                            {examples[4]}
                        </pre>
                    </li>
                    <li className={"section__list-element"}>
                        Селектор дочернего элемента
                        <p className={"section__paragraph"}>
                            Этот селектор выбирает только те элементы, которые являются непосредственными дочерними
                            элементами указанного родителя. Он не будет выбирать элементы, которые находятся на более
                            глубоком уровне вложенности.
                        </p>
                        <pre className={"section__code"}>
                            {examples[5]}
                        </pre>
                    </li>
                    <li className={"section__list-element"}>
                        Соседний селектор
                        <p className={"section__paragraph"}>
                            Выбирает элемент, который является непосредственным соседом другого элемента. Выберет только
                            один элемент.
                        </p>
                        <pre className={"section__code"}>
                            {examples[6]}
                        </pre>
                    </li>
                    <li className={"section__list-element"}>
                        Общий соседний селектор
                        <p className={"section__paragraph"}>
                            Этот селектор выбирает все элементы, которые являются соседями указанного элемента и следуют
                            за ним в DOM.
                        </p>
                        <pre className={"section__code"}>
                            {examples[7]}
                        </pre>
                    </li>
                </ul>
                <p className={"section__paragraph"}>
                    * - универсальный селектор и соответствует любому тегу. Убирая звёздочки с простых селекторов имеет
                    тот
                    же эффект. Например, <code className={"section__code"}>* .warning</code> и <code
                    className={"section__code"}>.warning</code> считаются равными.
                </p>
                <pre className={"section__code"}>
                    {examples[10]}
                </pre>
                <p className={"section__paragraph"}>
                    В этом примере текст всех элементов внутри <code className={"section__code"}>div</code> будет синим.
                </p>
                <p className={"section__paragraph"}>
                    Еще существуют псевдоэлементы и псевдоклассы, но они часто служат довольно специфическим целям.
                    Псевдокласс — это селектор, который выбирает элементы, находящиеся в специфическом состоянии,
                    например, они являются первым элементом своего типа (<code
                    className={"section__code"}>:first-child</code>), или на них наведён указатель мыши(<code
                    className={"section__code"}>:hover</code>). Все псевдоклассы ведут себя подобным образом. Они
                    нацелены на какой-то фрагмент вашего документа, находящийся в определённом состоянии, и ведут себя
                    так, как если бы вы добавили класс в свой HTML. Псевдоэлементы начинаются с двоеточия.
                </p>
                <pre className={"section__code"}>
                    {examples[8]}
                </pre>
                <p className={"section__paragraph"}>
                    Псевдоэлементы ведут себя сходным образом, однако они действуют так, как если бы вы добавили в
                    разметку целый новый HTML-элемент, а не применили класс к существующим элементам. Псевдоэлементы
                    начинаются с двойного двоеточия.
                </p>
                <pre className={"section__code"}>
                    {examples[9]}
                </pre>
                <p className={"section__paragraph"}>
                    В целом на MDN есть хорошая <Link className={"link"} target={"_blank"}
                                                      href={"https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"}>статья</Link> про
                    эти селекторы, даже со списком.
                </p>
                <p className={"section__paragraph"}>
                    Стоит упомянуть про вес у селекторов, в целом это способ, с помощью которого браузеры определяют,
                    какие значения свойств CSS наиболее соответствуют элементу и, следовательно, будут применены.
                    Специфичность представляет собой вес, придаваемый конкретному правилу CSS. Вес правила определяется
                    количеством каждого из типов селекторов в данном правиле. Если у нескольких правил специфичность
                    одинакова, то к элементу применяется последнее по порядку правило CSS. Специфичность имеет значение
                    только в том случае, если один элемент соответствует нескольким правилам. Согласно спецификации CSS,
                    правило для непосредственно соответствующего элемента всегда будет иметь больший приоритет, чем
                    правила, унаследованные от предка.
                </p>
                <p className={"section__paragraph"}>
                    Организуем распределение веса в табличку:
                </p>
                <div className={"section__example-container"}>
                    <div className={"table-wrapper"}>
                        <div className={"table"}>
                            <div className={"cell"}>селектор</div>
                            <div className={"cell"}>вес селектора</div>
                            <div className={"cell"}>inline стили</div>
                            <div className={"cell"}>1000</div>
                            <div className={"cell"}>селекторы по ID</div>
                            <div className={"cell"}>100</div>
                            <div className={"cell"}>Классы/атрибуты/псевдоклассы</div>
                            <div className={"cell"}>10</div>
                            <div className={"cell"}>теговые селекторы/псевдоэлементы</div>
                            <div className={"cell"}>1</div>
                        </div>
                    </div>
                </div>
                <p className={"section__paragraph"}>
                    Для определения веса селектора нужно просто сложить веса всех селекторов и таким образом можно
                    прикинуть какие правила будут применяться. Однако <code
                    className={"section__code"}>!important</code> имеет максимальный приоритет
                    и свойства с этим параметром будут применяться вне зависимости от веса селектора.
                </p>
            </section>
        </article>
    )
}
