import "../../article-style.scss"
import "./examples.scss"

export default function Background() {

    const examples: string[] = [
        `background-image: url("icons/eye.svg");`,
        `background-position: right | left`,
        `background-size: 30px | 80px`,
        `background-repeat: no-repeat | repeat space`,
        `background-image: linear-gradient(90deg, red, green);
border: 10px dotted rgba(255, 255, 255, 0.4);
background-clip: text | border-box`
    ]

    return (
        <article className={"page"}>
            <h1 className={"page__article-name"}>
                Background
            </h1>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    Свойство <code className={"section__code"}>background</code> используется для задания фона элемента.
                    Оно
                    является сокращённой записью
                    для нескольких свойств, связанных с фоном, и позволяет легко управлять цветом, изображениями,
                    позиционированием и повторением фона.
                </p>
                <ul className={"section__list"}>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>background-color</code> - задает цвет фона элемента. Можно
                        использовать названия цветов, HEX-коды, RGB или RGBA.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>background-image</code> - указывает изображение, которое
                        будет использоваться в качестве фона. Изображения рисуются в слоях контекстов наложения одно
                        поверх другого. Первый слой выводится так, чтобы он был ближе всего к пользователю.
                        <div className={"section__example-container"}>
                            <pre className={"section__code"}>
                                {examples[0]}
                            </pre>
                            <div className={"result-wrapper"}>
                                <div className={"el-icon-image"}></div>
                            </div>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>background-position</code> - определяет положение фонового
                        изображения. Позиция определяет координату x/y, чтобы разместить элемент относительно границ
                        поля
                        элемента. Она может быть определена с использованием одного и двух значений. Если используются
                        два значения, первое значение предоставляет горизонтальную позицию, а второе представляет
                        вертикальную позицию. Если указано только одно, второе значение считается <code
                        className={"section__code"}>center</code>.
                        <div className={"section__example-container"}>
                            <pre className={"section__code"}>
                                {examples[1]}
                            </pre>
                            <div className={"rad-container"}>
                                <input className={"left"} id="leftRad" type="radio" name={"rad"}/><label
                                htmlFor="leftRad">{"←"}</label>
                                <input className={"right"} id="rightRad" type="radio" name={"rad"}/><label
                                htmlFor="rightRad">{"→"}</label>
                            </div>
                            <div className={"result-wrapper"}>

                                <div className={"el-icon-position"}></div>
                                <div className={"el-icon-position"}></div>
                            </div>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>background-size</code> - указывает изображение, которое
                        будет использоваться в качестве фона. Изображение может быть оставлено в исходном размере,
                        растянуто, или подогнано под размеры доступного пространства. Это свойство должно быть указано
                        после <code className={"section__code"}>{"<position>"}</code>, разделённого
                        символом &#39;/&#39;.
                        <div className={"section__example-container"}>
                            <pre className={"section__code"}>
                                {examples[2]}
                            </pre>
                            <div className={"result-wrapper"}>
                                <div className={"el-icon-size size-40"}></div>
                                <div className={"el-icon-size size-60"}></div>
                            </div>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>background-repeat</code> - определяет, как будет повторяться
                        фоновое изображение. Они могут повторяться по горизонтальной и вертикальной оси или не
                        повторяться вовсе.
                        <div className={"section__example-container"}>
                            <pre className={"section__code"}>
                                {examples[3]}
                            </pre>
                            <div className={"result-wrapper"}>
                                <div className={"el-icon-repeat no-repeat"}></div>
                                <div className={"el-icon-repeat repeat-space"}></div>
                            </div>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>background-attachment</code> - указывает, будет ли фон
                        прокручиваться вместе с содержимым или оставаться фиксированным. Задается ключевыми словами:
                        <ul className={"section__list"}>
                            <li className={"section__list-element"}>
                                <code className={"section__code"}>fixed</code> - фон фиксируется относительно области
                                просмотра. Даже если элемент имеет механизм прокрутки, фон не перемещается вместе с
                                элементом.
                            </li>
                            <li className={"section__list-element"}>
                                <code className={"section__code"}>local</code> - фон фиксируется относительно
                                содержимого элемента. Если элемент имеет механизм прокрутки, фон прокручивается с
                                содержимым элемента, и область рисования фона и область позиционирования фона относятся
                                к прокручиваемой области элемента, а не к границе, обрамляющей их.
                            </li>
                            <li className={"section__list-element"}>
                                <code className={"section__code"}>scroll</code> - фон фиксируется относительно самого
                                элемента и не прокручивается с его содержимым. (Он фактически прикреплён к границе
                                элемента.)
                            </li>
                        </ul>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>background-clip</code> - определяет как цвет фона или фоновое
                        изображение будут выводиться под границами блока. Если фоновое изображение или цвет не заданы,
                        это свойство будет иметь визуальный эффект, только если у границы есть прозрачные области или
                        частично непрозрачные области.
                        <ul className={"section__list"}>
                            <li className={"section__list-element"}>
                                <code className={"section__code"}>border-box</code>
                                - фон распространяется до внешнего края границы (но под границей в z-порядке).
                            </li>
                            <li className={"section__list-element"}>
                                <code className={"section__code"}>padding-box</code>
                                - фон распространяется до внешнего края отступа. Под границей фон не рисуется.
                            </li>
                            <li className={"section__list-element"}>
                                <code className={"section__code"}>content-box</code>
                                - фон закрашивается внутри (обрезается) поля содержимого.
                            </li>
                            <li className={"section__list-element"}>
                                <code className={"section__code"}>text</code>
                                - фон закрашивается внутри (обрезается) текста переднего плана.
                            </li>
                        </ul>
                        <div className={"section__example-container"}>
                            <pre className={"section__code"}>
                                {examples[4]}
                            </pre>
                            <div className={"result-wrapper"}>
                                <div className={"el-icon-clip clip-text"}>Neque porro quisquam est qui dolorem ipsum quia dolor
                                    sit amet, consectetur, adipisci velit...
                                </div>
                                <div className={"el-icon-clip clip-border"}>Neque porro quisquam est qui dolorem ipsum quia dolor
                                    sit amet, consectetur, adipisci velit...
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>background-origin
                        </code> - устанавливает область расположения фона. Другими словами, оно устанавливает исходную
                        позицию
                        изображения, установленную с помощью свойства <code
                        className={"section__code"}>background-image</code>.
                        <ul className={"section__list"}>
                            <li className={"section__list-element"}>
                                <code className={"section__code"}>border-box</code>- фон располагается относительно
                                рамки.
                            </li>
                            <li className={"section__list-element"}>
                                <code className={"section__code"}>padding-box</code>- фон расположен относительно поля
                                отступа.
                            </li>
                            <li className={"section__list-element"}>
                                <code className={"section__code"}>content-box</code>- фон располагается относительно
                                поля содержимого.
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </article>
    )
}
