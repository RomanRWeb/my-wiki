import "../../article-style.scss"
import "./example.scss"
import Link from "next/link";

export default function Positions() {

    const examples: string[] = [
        `background: linear-gradient(direction, color-stop1, color-stop2, ...);`,
        `.el-linear-gradient {
  background: linear-gradient(to right, white, black);
}`,
        `background: radial-gradient(shape size at position, color-stop1, color-stop2, ...);`,
        `.el-radial-element{
  background: radial-gradient(circle, white, black);
}`,
        `.el-conic-gradient{
  background: conic-gradient(white, black);
}`,
        `.el-multiple-colors{
  background: linear-gradient(to right, red, orange, yellow, green);;
}`,
        `.el-points{
  background: linear-gradient(to right, red 0%, orange 15%, yellow 45%, green 100%);
}`,
        `.el-points-lined {
  background: linear-gradient(
                  to right,
                  red 25%,
                  orange 25%,
                  orange 50%,
                  yellow 50%,
                  yellow 75%,
                  green 75%
  );
}`,
        `.el-offset{
  background: radial-gradient(circle at 0% 50%, red 0%, yellow 30%, orange 50%, green 75%);
}`,
        `.el-repeating {
  background: repeating-linear-gradient(
                  90deg,
                  white 0%,
                  white 5%,
                  black 5%,
                  black 10%,
  );
}`
    ]

    return (
        <article className={"page"}>
            <h1 className={"page__article-name"}>Градиенты</h1>
            <code className={"section__code"}></code>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    Градиенты в CSS — это плавные переходы между двумя или более цветами.
                    Они могут использоваться как фоновое изображение для элементов, добавляя визуальный интерес и
                    глубину. В
                    CSS есть несколько типов градиентов, включая линейные и радиальные. Давайте рассмотрим их подробнее.
                </p>
                <ul className={"section__list"}>
                    <li className={"section__list-element"}>
                        Линейные градиенты
                        <p className={"section__paragraph"}>
                            Линейные градиенты создаются с помощью функции <code
                            className={"section__code"}>linear-gradient()</code>. Они представляют собой
                            переход цветов вдоль прямой линии.
                        </p>
                        <code className={"section__code"}>
                            {examples[0]}
                        </code>
                        <ul className={"section__list"}>
                            <li className={"section__list-element"}>
                                direction: Направление градиента (например, <code className={"section__code"}>to
                                right</code>, <code className={"section__code"}>to bottom</code>, <code
                                className={"section__code"}>45deg</code> и т.д.).
                            </li>
                            <li className={"section__list-element"}>
                                color-stop: Цвета, которые будут использоваться в градиенте. Вы можете указать
                                дополнительные параметры для определения местоположения каждого цвета.
                            </li>
                        </ul>
                        <div className={"section__example-container"}>
                            <pre className={"example section__code"}>
                                {examples[1]}
                            </pre>
                            <div className={"result-wrapper"}>
                                <div className={"result el-linear-gradient"}></div>
                            </div>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        Радиальные градиенты
                        <p className={"section__paragraph"}>Радиальные градиенты создаются с помощью функции
                            <code className={"section__code code-gap-left"}>radial-gradient()</code>. Они
                            представляют собой переход
                            цветов от центра к краям.</p>
                        <code className={"section__code"}>
                            {examples[2]}
                        </code>
                        <ul className={"section__list"}>
                            <li className={"section__list-element"}>
                                shape: Форма градиента (<code className={"section__code"}>circle</code> или <code
                                className={"section__code"}>ellipse</code>).
                            </li>
                            <li className={"section__list-element"}>
                                size: Размер градиента (<code className={"section__code"}>closest-side</code>, <code
                                className={"section__code"}>farthest-side</code>, <code
                                className={"section__code"}>closest-corner</code>, <code
                                className={"section__code"}>farthest-corner</code>).
                            </li>
                            <li className={"section__list-element"}>
                                position: Положение центра градиента (например, <code
                                className={"section__code"}>center</code>, <code className={"section__code"}>top</code>,
                                <code className={"section__code code-gap-left"}>left</code> и т.д.).
                            </li>
                        </ul>
                        <div className={"section__example-container"}>
                            <pre className={"example section__code"}>
                                {examples[3]}
                            </pre>
                            <div className={"result-wrapper"}>
                                <div className={"result el-radial-gradient"}></div>
                            </div>
                        </div>
                    </li>
                    <li className={"section__paragraph"}>
                        Конические градиенты
                        <p className={"section__paragraph"}>Конические градиенты создаются с помощью функции
                            <code className={"section__code code-gap-left"}>conic-gradient()</code>. Они
                            представляют собой переход
                            цветов, обёрнутых вокруг центральной точки.</p>
                        <p className={"section__paragraph"}>
                            Синтаксис конического градиента схож с синтаксисом кругового градиента, но с тем отличием,
                            что точки остановки цвета располагаются вокруг градиентной дуги, вдоль длины окружности
                            круга, а не по градиентной линии, идущей от центра градиента. Также, точки остановки цвета
                            задаются только в процентах или градусах, абсолютные величины недопустимы.
                        </p>
                        <div className={"section__example-container"}>
                            <pre className={"example section__code"}>
                                {examples[4]}
                            </pre>
                            <div className={"result-wrapper"}>
                                <div className={"result el-conic-gradient"}></div>
                            </div>
                        </div>
                    </li>
                </ul>
                <p className={"section__paragraph"}>
                    Вы можете использовать более двух цветов в одном градиенте. Просто добавьте дополнительные цветовые
                    остановки.
                </p>
                <div className={"section__example-container"}>
                            <pre className={"example section__code"}>
                                {examples[5]}
                            </pre>
                    <div className={"result-wrapper"}>
                        <div className={"result el-multiple-colors"}></div>
                    </div>
                </div>
                <p className={"section__paragraph"}>
                    Для четкого определения где и как будут переходить друг в дргуа цвета были придуманы точки
                    остановки. Подробнее рассмотрим их тут
                </p>
                <p className={"section__paragraph"}>
                    Каждая точка остановки задается цветом и может иметь дополнительный параметр, указывающий позицию
                    этого цвета в градиенте. Позиция может быть задана в процентах или в единицах длины (например, <code
                    className={"section__code"}>px</code>,
                    <code className={"section__code"}>rem</code> и т.д.).
                </p>
                <p className={"section__paragraph"}>
                    Рассмотрим пример линейного градиента с несколькими точками остановки:
                </p>
                <div className={"section__example-container"}>
                    <pre className={"example section__code"}>
                        {examples[6]}
                    </pre>
                    <div className={"result-wrapper"}>
                        <div className={"result el-points"}></div>
                    </div>
                </div>
                <ul className={"section__list"}> В этом примере:
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>red 0%</code>
                        : Красный цвет начинается с самого левого края (0%).
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>yellow 50%</code>
                        : Желтый цвет достигает своей полной насыщенности на 50% ширины элемента.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>green 100%</code>
                        : Зеленый цвет полностью заполняет элемент к правому краю (100%).
                    </li>
                </ul>
                <p className={"section__paragraph"}>
                    Рассмотрим пример линейного градиента с несколькими точками остановки, но расположив точки
                    вплотную(Точки остановки могут быть в двух позициях, что эквивалентно двум подряд точкам остановки с
                    тем же цветом на разных позициях):
                </p>
                <div className={"section__example-container"}>
                    <pre className={"example section__code"}>
                        {examples[7]}
                    </pre>
                    <div className={"result-wrapper"}>
                        <div className={"result el-points-lined"}></div>
                    </div>
                </div>
                <p className={"section__paragraph"}>
                    С круговым градиентом точки остановки тоже работают.
                </p>
                <p className={"section__paragraph"}>
                    Также можно расположить центр градиента с помощью ключевых значений, процентной или абсолютной
                    длины. Значения в
                    виде числа или процента повторяются в случае, если указано только одно из них, иначе порядок
                    повторения будет определяться порядком расположения, начиная слева и сверху.
                </p>
                <div className={"section__example-container"}>
                    <pre className={"example section__code"}>
                        {examples[8]}
                    </pre>
                    <div className={"result-wrapper"}>
                        <div className={"result el-offset"}></div>
                    </div>
                </div>
                <p className={"section__paragraph"}>
                    Еще существуют повторяющиеся версии всех градиентов -
                    <code className={"section__code code-gap-inline"}>repeating-linear-gradient()</code>,
                    <code className={"section__code code-gap-inline"}>repeating-radial-gradient()</code> и
                    <code className={"section__code code-gap-inline"}>repeating-conic-gradient()</code>.Это позволяет
                    создавать интересные текстуры и фоны, которые могут быть использованы в веб-дизайне.
                </p>
                <div className={"section__example-container"}>
                    <pre className={"example section__code"}>
                        {examples[9]}
                    </pre>
                    <div className={"result-wrapper"}>
                        <div className={"result el-repeating"}></div>
                    </div>
                </div>
                <p className={"section__paragraph"}>
                    Добавив немного анимации можно создавать довльно интересные элементы декора страницы.
                </p>
                <div className={"section__example-container"} style={{marginBottom: "1rem"}}>
                    <div className={"nothing"}>
                        <div className={"funny-container"}>
                            <div className={"result el-repeating-1 animated"}></div>
                            <div className={"result el-repeating-1 animated"}></div>
                            <div className={"result el-repeating-1 animated"}></div>
                        </div>
                        <div className={"funny-container"}>
                            <div className={"result el-repeating-2 animated"}></div>
                            <div className={"result el-repeating-2 animated"}></div>
                            <div className={"result el-repeating-2 animated"}></div>
                        </div>
                        <div className={"funny-container"}>
                            <div className={"result el-repeating-1 animated"}></div>
                            <div className={"result el-repeating-1 animated"}></div>
                            <div className={"result el-repeating-1 animated"}></div>
                        </div>
                        <div className={"funny-container"}>
                            <div className={"result el-repeating-2 animated"}></div>
                            <div className={"result el-repeating-2 animated"}></div>
                            <div className={"result el-repeating-2 animated"}></div>
                        </div>
                        <div className={"funny-container"}>
                            <div className={"result el-repeating-1 animated"}></div>
                            <div className={"result el-repeating-1 animated"}></div>
                            <div className={"result el-repeating-1 animated"}></div>
                        </div>
                    </div>
                </div>
                <p className={"section__paragraph"}>
                    Удобный сайт для создания градиентов <Link className={"link"} href={"https://cssgradient.io/"}
                                                               target={"_blank"}>тут</Link>.
                </p>
            </section>
        </article>
    )
}
