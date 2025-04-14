import "../../article-style.scss"
import "./examples.scss"

export default function Border() {

    const examples: string[] = [
        `border-width: 10px;
border-style: dotted dashed groove outset;`,
        `border-width: 20px;
border-style: solid;
border-image: linear-gradient(rgb(246, 183, 60), rgb(77, 159, 12)) 10% / 20% stretch;`,
        `border: 2px solid white;
  border-radius: 20px 30px 40px 50px / 50px 40px 30px 20px;`
    ];

    return (
        <article className={"page"}>
            <h1 className={"page__article-name"}>
                Border
            </h1>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    Свойство <code className={"code"}>border</code> в CSS используется для создания рамок вокруг
                    элементов. Оно позволяет задавать
                    стиль, ширину и цвет рамки, а также управлять ее отображением. Давайте рассмотрим основные аспекты
                    работы с рамками в CSS.
                </p>
                <p className={"section__paragraph"}>
                    Свойство <code className={"section__code"}>border</code> это универсальное свойство для указания
                    всех
                    персональных свойств границ за раз:
                    <code className={"section__code code-gap-last-word"}>border-width</code>, <code
                    className={"section__code"}>border-style</code>, и <code
                    className={"section__code"}>border-color</code>.
                </p>
                <ul className={"section__list"}>
                    <code className={"section__code"}>border-style</code>: Определяет стиль рамки. Возможные значения:

                    <li className={"section__list-element"}>none: без рамки</li>
                    <li className={"section__list-element"}>solid: сплошная линия</li>
                    <li className={"section__list-element"}>dashed: пунктирная линия</li>
                    <li className={"section__list-element"}>dotted: точечная линия</li>
                    <li className={"section__list-element"}>double: двойная линия</li>
                    <li className={"section__list-element"}>groove: рифленая линия (выглядит как углубленная)</li>
                    <li className={"section__list-element"}>ridge: рифленая линия (выглядит как выпуклая)</li>
                    <li className={"section__list-element"}>inset: рамка, которая выглядит как углубленная</li>
                    <li className={"section__list-element"}>outset: рамка, которая выглядит как выпуклая</li>
                </ul>
                <div className={"section__example-container"}>
                    <pre className={"section__code example"}>
                        {examples[0]}
                    </pre>
                    <div className={"result-wrapper"}>
                        <div className={"result"}>
                            <div className={"el-example"}></div>
                        </div>
                    </div>
                </div>
                <p className={"section__paragraph"}>
                    <code className={"section__code"}>border-width</code>: Определяет ширину рамки. Можно задать одно
                    значение для всех сторон, два значения для верхний и нижних рамок или разные значения для каждой
                    стороны.
                </p>
                <p className={"section__paragraph"}>
                    <code className={"section__code"}>border-color</code>: Определяет цвет рамки. Можно использовать
                    названия цветов, HEX-коды или RGB/RGBA
                    значения.
                </p>
                <p className={"section__paragraph"}>
                    Можно устанавливать рамки для каждой стороны отдельно с помощью следующих свойств: <code
                    className={"section__code"}>border-top</code>, <code
                    className={"section__code"}>border-right</code>, <code
                    className={"section__code"}>border-bottom</code>, <code
                    className={"section__code"}>border-left</code>
                </p>

                <h2 className={"section__name center"}>
                    border-image
                </h2>
                <p className={"section__paragraph"}>
                    Свойство <code className={"section__code"}>border-image</code> рисует изображение вокруг заданного
                    элемента. Оно заменяет обычную границу элемента.
                </p>
                <ul className={"section__list"}>
                    Свойство border-image состоит из нескольких под-свойств, которые определяют, как изображение будет
                    использоваться в качестве рамки:
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>border-image-source</code>: Указывает источник изображения,
                        которое будет использоваться в качестве рамки. Тут еще можн оуказать градиент.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>border-image-slice</code>: Определяет, как изображение будет
                        разделено на части. Это значение указывает, какие части изображения будут использованы для
                        создания рамки. Значения могут быть указаны в пикселях или процентах.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__list-element"}>border-image-width</code>: Указывает ширину рамки,
                        которая будет использована для отображения изображения. Работает аналогично как и у <code
                        className={"section__list-element"}>border</code>.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>border-image-outset</code>: Определяет, насколько изображение
                        будет выходить за пределы границ элемента. Это значение может быть положительным или
                        отрицательным.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>border-image-repeat</code>: Определяет, как изображение будет
                        повторяться (или не повторяться) по краям элемента. Возможные значения:
                        <ul className={"section__list"}>
                            <li className={"section__list-element"}>
                                <code className={"section__code"}>stretch</code>: растягивает изображение, чтобы
                                заполнить рамку.
                            </li>
                            <li className={"section__list-element"}>
                                <code className={"section__code"}>repeat</code>: повторяет изображение по краям.
                            </li>
                            <li className={"section__list-element"}>
                                <code className={"section__code"}>round</code>: повторяет изображение и обрезает его
                                так, чтобы оно идеально вписывалось в рамку.
                            </li>
                            <li className={"section__list-element"}>
                                <code className={"section__code"}>space</code>: повторяет изображение с равными
                                промежутками между ними.
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className={"section__example-container"}>
                    <pre className={"section__code example"}>
                        {examples[1]}
                    </pre>
                    <div className={"result-wrapper"}>
                        <div className={"result"}>
                            <div className={"el-example-image"}></div>
                        </div>
                    </div>
                </div>
                <h2 className={"section__name center"}>
                    border-radius
                </h2>
                <p className={"section__paragraph"}>
                    <code className={"section__code"}>border-radius</code>- свойство, позволяющее разработчикам
                    определять, как скругляются границы
                    блока. Закруглённость каждого угла определяется с помощью одного или двух радиусов, определяя его
                    форму: круг или эллипс.
                </p>
                <ul className={"section__list"}>свойств может принимать от 1 до 4 значений:
                    <li className={"section__list-element"}>Одно значение: Применяется ко всем четырем углам.</li>
                    <li className={"section__list-element"}>Два значения: Первое значение применяется к верхним
                        углам (левому и правому), второе — к нижним углам.
                    </li>
                    <li className={"section__list-element"}>Три значения: Первое значение применяется к верхнему
                        левому углу, второе — к верхнему правому и нижнему левому, третье — к нижнему правому.
                    </li>
                    <li className={"section__list-element"}>Четыре значения: Каждое значение применяется к
                        соответствующему углу в следующем порядке: верхний левый, верхний правый, нижний правый,
                        нижний левый.
                    </li>
                </ul>
                <p className={"section__paragraph"}>
                    Для скругления эллипсом нужно указать 2 радиуса - если используется свойство для задания радиуса
                    одному углу, тогда значения указываются подряд, например: <code className={"section__code"}>border-top-left-radius:
                    40px 80px;</code>, если же просто <code className={"section__code"}>border-radius</code>, тогда
                    второй радиус указывается через &#34;/&#34;: <code className={"section__code"}>border-radius: 10%
                    20%
                    / 20% 10%</code>
                </p>
                <div className={"section__example-container"}>
                    <pre className={"section__code example"}>
                        {examples[2]}
                    </pre>
                    <div className={"result-wrapper"}>
                        <div className={"result"}>
                            <div className={"el-example-round"}></div>
                        </div>
                    </div>
                </div>
                <h2 className={"section__name"}>
                    Табличные свойства
                </h2>
                <p className={"section__paragraph"}>
                    Для стилизации ячеек в таблицах есть еще 2 свойства: <code
                    className={"section__code"}>border-spacing</code> и <code
                    className={"section__code"}>border-collapse</code>. <code
                    className={"section__code"}>border-spacing</code> определяет, будут ли ячейки внутри <code
                    className={"section__code"}>{`<table>`}</code> иметь общие или отдельные границы. <code
                    className={"section__code"}>border-spacing</code> устанавливает расстояние между границами соседних
                    ячеек в <code className={"section__code"}>{`<table>`}</code>. Это свойство применяется только тогда,
                    когда <code
                    className={"section__code"}>border-collapse</code> является отдельным.
                </p>
                <div className={"section__example-container last"}>
                    <div className={"result with-gap"}>
                        <table className={"table no-spacing"}>
                            <caption>border-spacing: none</caption>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>6</td>
                            </tr>
                            </tbody>
                        </table>
                        <table className={"table spacing"}>
                            <caption>border-spacing: 10px</caption>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>6</td>
                            </tr>
                            </tbody>
                        </table>
                        <table className={"table no-collapse"}>
                            <caption>border-collapse: separate</caption>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>6</td>
                            </tr>
                            </tbody>
                        </table>
                        <table className={"table collapse"}>
                            <caption>border-collapse: collapse</caption>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>6</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </article>
    )
}
