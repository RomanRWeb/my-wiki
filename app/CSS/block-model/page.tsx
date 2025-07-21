import "../../article-style.scss"
import Link from "next/link";
import "./examples.scss"


export default function BlockModel() {

    const examples: string[] = [
        `Полная ширина = width + padding-left + padding-right + border-left + border-right;
Полная высота = height + padding-top + padding-bottom + border-top + border-bottom;`,
        `Полная ширина = width (включает padding и border);
Полная высота = height (включает padding и border);`
    ];

    return (
        <article className={"page"}>
            <h1 className={"page__article-name"}>
                Блочная модель
            </h1>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    В CSS можно выделить 2 типа элементов - строчные и блочные. Эта характеристика описывает поведение
                    элемента в контексте потока документа и относительно других блоков. Блочный элемент будет вести себя
                    так:
                </p>
                <ul className={"section__list"}>
                    <li className={"section__list-element"}>
                        Начнется с новой строки.
                    </li>
                    <li className={"section__list-element"}>
                        Попытается занять всю строку по ширине.
                    </li>
                    <li className={"section__list-element"}>
                        К блоку будут применятся свойства <code className={"section__code"}>height</code> и <code
                        className={"section__code"}>width</code>.
                    </li>
                </ul>
                <p className={"section__paragraph"}>
                    К блочным элементам изначально относятся <code>h1</code>, <code>p</code>, <code>div</code> и
                    множество других (<Link href={"https://www.w3schools.com/HTML/html_blocks.asp"} target={"_blank"}>тут
                    все теги</Link>).
                </p>
                <ul className={"section__list"}>
                    Если тип отображения элемента - <code>inline</code>, то:
                    <li className={"section__list-element"}>
                        Элемент не будет переносится на новую строку.
                    </li>
                    <li className={"section__list-element"}>
                        Свойства <code>height</code> и <code>width</code> не будут применяться.
                    </li>
                </ul>
                <div className={"section__example-container"}>
                    <div className={"rad-container"}>
                        <input type={"radio"} className={"radio-0"} id="radio-0" defaultChecked={true}
                               name={"rad"}></input><label htmlFor="radio-0">marginTop: 0px </label>
                        <input type={"radio"} className={"radio-100"} id="radio-100" name={"rad"}></input><label
                        htmlFor="radio-100">marginTop: 100px</label>
                    </div>
                    <div className={"result-wrapper reserved"}>
                        <div className={"wrapper-example-inline"}>
                            <span>Lorem Ipsum</span>
                            <i className={"el-margin-inline"}>dolor</i>
                            <span>sit amet</span>
                        </div>
                    </div>
                </div>
                <p className={"section__paragraph"}>
                    По умолчанию строчными эдементами
                    считаются <code>i</code>, <code>span</code>, <code>a</code>, <code>strong</code> и множество других.
                </p>
                <p className={"section__paragraph"}>
                    Элементы также имеют внутренний тип отображения, который определяет расположение элементов внутри
                    них. По умолчанию элементы внутри блока располагаются в нормальном потоке: они ведут себя так же,
                    как и любые другие блочные или строчные элементы.
                </p>
                <p className={"section__paragraph"}>Однако мы можем изменить внутренний тип отображения, используя такие
                    значения <code>display</code> как <code>flex</code> или <code>grid</code>. Если мы установим <code>display:
                        flex;</code> для элемента, внешний тип отображения примет значение <code>block</code>, но
                    внутренний тип
                    изменится на <code>flex</code>. Любые прямые дочерние элементы этого блока станут flex-объектами
                </p>
                <p className={"section__paragraph"}>
                    Полностью блочная модель в CSS применяется к блочным элементам, строчные элементы используют не все
                    свойства, определённые блочной моделью. Модель определяет, как разные части элемента — поля, рамки,
                    отступы и содержимое — работают вместе, чтобы создать объект, который вы можете увидеть на странице.
                    В CSS существует две основные блочные модели: стандартная блочная модель и
                    альтернативная блочная модель (блочная модель с учетом границ).
                </p>
                <ul className={"section__list"}>
                    Блочный элемент состоит из:
                    <li className={"section__list-element"}>
                        Контент - область, где отображается ваш контент, размер которой можно изменить с помощью таких
                        свойств, как <code>width</code> (если не указано, то элемент занимает всю доступную ширину
                        родительского контейнера) и <code>height</code> (если не указано, то высота будет зависеть от
                        содержимого).
                    </li>
                    <li className={"section__list-element"}>
                        Внутренний отступ (padding) - внутренние отступы добавляются внутри элемента, между содержимым и
                        границей. Задать размеры отступ можно свойством <code>padding</code>.
                    </li>
                    <li className={"section__list-element"}>
                        Границы (border) - оборачивает содержимое и внутренние отступы. Её размер и стиль можно
                        контролировать с помощью <code>border</code> и связанных свойств.
                    </li>
                    <li className={"section__list-element"}>
                        Внешний отступ (margin) - внешний слой представляет собой пространство между текущим и другими
                        элементами. Его размер контролируется с помощью <code>margin</code> и связанных свойств.
                    </li>
                </ul>
                <p className={"section__paragraph"}>
                    В стандартной блочной модели, если указать элементу
                    атрибуты <code>width</code> и <code>height</code>, это определит ширину и высоту содержимого. Любые
                    отступы и рамки затем добавляются к этой ширине и высоте для получения общего размера элемента.
                    Таким образом формула для рассчета ширины и высоты элемента будет выглядеть так:
                </p>
                <pre className={"section__code"}>
                        {examples[0]}
                </pre>
                <p className={"section__paragraph"}>
                    Альтернативная блочная модель изменяет способ расчета размеров элементов. При использовании
                    свойства <code>box-sizing: border-box</code> полные размеры элемента включают в себя границы и
                    внутренние отступы. Это означает, что ширина и высота, заданные для элемента, будут включать в себя
                    все внутренние отступы и границы. Таким образом формула для рассчета ширины и высоты элемента будет
                    выглядеть так:
                </p>
                <pre className={"section__code"}>
                        {examples[1]}
                </pre>
                <p className={"section__paragraph"}>
                    И это восхитительно.
                </p>
            </section>
        </article>
    )
}
