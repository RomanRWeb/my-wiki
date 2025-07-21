import "../../article-style.scss"
import Link from "next/link";

export default function Containers() {
    return (
        <article className={"page"}>
            <h1 className={"page__article-name"}>
                Контейнеры
            </h1>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    Свойство <code className={"section__code"}>display</code> определяет тип отображения (display type)
                    элемента, имеющий два основных
                    свойства, определяющих генерацию контейнеров — внешний тип отображения определяет расположение бокса
                    в
                    схеме потока (flow layout) и внутренний тип отображения определяет расположение дочерних элементов
                    контейнера.
                </p>
                <p className={"section__paragraph"}>
                    Некоторые значения свойства <code className={"section__code"}>display</code> полностью определены в
                    их индивидуальных спецификациях. Их все можно посмотреть <Link
                    target={"_blank"}
                    href={"https://developer.mozilla.org/ru/docs/Web/CSS/display"} className={"link"}>тут</Link>,
                    а здесь я разберу только самые часто используемые случаи.
                </p>
                <ul className={"section__list"}>
                    Свойство <code className={"section__code"}>display</code> задаётся с помощью ключевых слов. Ключевые
                    слова группируются по шести категориям:
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<display-outside>"}</code> - эти ключевые слова определяют
                        внешний тип отображения элемента, который играет существенную роль в схеме потока.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<display-inside>"}</code> - эти ключевые слова определяют
                        внутренний тип отображения элемента, который определяет тип контекста форматирования,
                        в котором располагается его содержимое (при условии, что это незаменяемый элемент).
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<display-listitem>"}</code> - создаёт блоковый бокс для
                        контента и отдельный строковый (inline) бокс для элемента списка. По сути включает в себя только
                        одно свойство <code className={"section__code"}>display</code>, а именно
                        <code className={"section__code code-gap-left"}>list-item</code>. Элемент с этим
                        свойством создаст псевдоэлемент
                        <code className={"section__code code-gap-inline"}>::marker</code>с определяемым<code
                        className={"section__code code-gap-inline"}>list-style</code>свойствами (например, маркерной
                        точкой) вместе с
                        основным блоком указанного типа для его содержимого.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<display-internal>"}</code> - некоторые модели разметки,
                        такие как <code className={"section__code"}>table</code> и <code
                        className={"section__code"}>ruby</code>, имеют сложную внутреннюю структуру с
                        несколькими различными ролями,
                        которые могут выполнять их дочерние элементы и потомки. Этот раздел определяет
                        те &#34;внутренние&#34;
                        значения отображения, которые имеют смысл только в рамках этих конкретных методов разметок.
                        Полный список значений можно посмотреть <Link
                        target={"_blank"}
                        href={"https://developer.mozilla.org/en-US/docs/Web/CSS/display-internal"}
                        className={"link"}>тут</Link>.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<display-box>"}</code> - эти значения определяют,
                        генерирует ли элемент отображение боксов вообще. Состоит всего из 2 значений -
                        <code className={"section__code code-gap-left"}>{"content"}</code> и <code
                        className={"section__code"}>{"none"}</code>.
                        Элементы с значением <code className={"section__code"}>{"content"}</code> не производят
                        конкретный
                        блок сами по себе. Они заменяются своим псевдоблоком и своими дочерними блоками.
                        Значение <code className={"section__code"}>{"none"}</code> просто убирает
                        элемент со страницы и из дерева доступности.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>{"<display-legacy>"}</code> - в CSS 2 используется синтаксис с
                        одним ключевым словом для свойства display, для которого
                        требуются отдельные ключевые слова для блокового и строкового уровней одного способа разметки.
                        Список значений можно найти <Link
                        target={"_blank"}
                        href={"https://developer.mozilla.org/en-US/docs/Web/CSS/display-legacy"}
                        className={"link"}>тут</Link>.
                    </li>
                </ul>
                <p className={"section__paragraph"}>
                    Подробнее рассмотрим <code className={"section__code"}>{"<display-outside>"}</code>.
                    Он может принимать только 3 значения: <code className={"section__code"}>inline</code>, <code
                    className={"section__code"}>block</code> и <code className={"section__code"}>run-in</code>(экспериментальная
                    штука, 0.51%
                    поддержки, поэтому писать про нее не буду)
                </p>
                <p className={"section__paragraph"}>
                    <code className={"section__code"}>{"<block>"}</code> - элемент генерирует бокс элемента, создавая
                    разрывы линий, как перед, так и после элемента, при условии нормального потока.
                </p>
                <p className={"section__paragraph"}>
                    <code className={"section__code"}>{"<inline>"}</code> - элемент создаёт один или более строковых
                    (inline) боксов элемента, которые не создают разрывов строк перед собой или после себя. В нормальном
                    потоке следующий элемент будет находиться на той же линии, если есть пробел.
                </p>
                <p className={"section__paragraph"}>
                    Теперь рассмотрим <code className={"section__code"}>{"<display-inside>"}</code>:
                </p>
                <p className={"section__paragraph"}>
                    <code className={"section__code"}>flow</code> - если у этого компонента внешний тип отображения —
                    inline, и он
                    участвует в контексте форматирования block или inline, то он генерирует inline контейнер. В
                    противном
                    случае он генерирует block контейнер.
                </p>
                <p className={"section__paragraph"}>
                    <code className={"section__code"}>flow-root</code> - генерируется block-элемент, который
                    устанавливает новый контекст форматирования блока.
                </p>
                <p className={"section__paragraph"}>
                    <code className={"section__code"}>table</code> - контейнер ведет себя как <code
                    className={"section__code"}>{"<table>"}</code>.
                </p>
                <p className={"section__paragraph"}>
                    <code className={"section__code"}>flex</code> - Элемент ведет себя как блочный элемент и размещает
                    свое содержимое в соответствии с моделью flexbox. Самый популярный способ создания адаптивного
                    пользовательского интерфейса. <Link className={"link"}
                    target={"_blank"} href={"https://developer.mozilla.org/ru/docs/Learn_web_development/Core/CSS_layout/Flexbox"}>Очень
                    полезная статья для изучения flexbox</Link>
                </p>
                <p className={"section__paragraph"}>
                    <code className={"section__code"}>grid</code> - Элемент ведет себя как блочный элемент и размещает
                    свое содержимое в соответствии с моделью grid. <Link className={"link"}
                    target={"_blank"} href={"https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout"}>Очень
                    полезная статья для изучения grid</Link>
                </p>
                <h2 className={"section__name center"}>немного про SEO</h2>
                <p className={"section__paragraph"}>
                    Если свойство <code className={"section__code"}>display</code> принимает значение <code
                    className={"section__code"}>none</code> или <code className={"section__code"}>content</code> на
                    элементе, то элемент удаляется из дерева доступности. Это приводит к тому, что элемент и все его
                    дочерние элементы больше не будут восприниматься технологиями чтения экрана.
                </p>
                <p className={"section__paragraph"}>
                    Если у элемента <code className={"section__code"}>{"<table>"}</code> изменить значение свойства <code className={"section__code"}>display</code> на <code className={"section__code"}>block</code>, <code className={"section__code"}>flex</code> или <code className={"section__code"}>grid</code>, это изменит его представление в дереве доступности. Это приводит к тому, что таблица не будет объявлена должным образом с помощью технологии чтения экрана.
                </p>
            </section>
        </article>
    )
}
