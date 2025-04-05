import "../../article-style.scss"


export default function Tables() {


    const table_example =
        `<table>                        
    <caption>
    example
    </caption>
    
    <thead>
    </thead>
    
    <tbody>
    </tbody>
    
    <tfoot>
    </tfoot>
</table>`;

    const table_example_simple =
        `<table>
    <tbody>
        <tr>
            <td>строка1</td>
            <td>значение1</td>
            <td>значение2</td>
        </tr>
        <tr>
            <td>строка2</td>
            <td>значение1</td>
            <td>значение2</td>
        </tr>
    </tbody>
</table>`;

    const table_example_final =
        `<table className={"section__table"}>
    <caption>
        Table 1
    </caption>
    <thead>
    <tr>
        <td>&nbsp;</td>
        <td>Knocky</td>
        <td>Flor</td>
        <td>Ella</td>
        <td>Juan</td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Breed</td>
        <td>Jack Russell</td>
        <td>Poodle</td>
        <td>Streetdog</td>
        <td>Cocker Spaniel</td>
    </tr>
    <tr>
        <td>Age</td>
        <td>16</td>
        <td>9</td>
        <td>10</td>
        <td>5</td>
    </tr>
    <tr>
        <td>Owner</td>
        <td>Mother-in-law</td>
        <td>Me</td>
        <td>Me</td>
        <td>Sister-in-law</td>
    </tr>
    <tr>
        <td>Eating Habits</td>
        <td>ALL</td>
        <td>Nibbles at food</td>
        <td>Hearty eater</td>
        <td>Will eat till he explodes</td>
    </tr>
    </tbody>
                </table>`;

    return (
        <article className={"page"}>
            <h1 className={"page__article-name"}> Таблицы </h1>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    В целом всем и так понятно что такое таблицы и зачем они нужны. Стоит отметить что использование
                    HTML таблиц
                    (вместо стилизации в CSS) для создания разметки оформления страниц неправильно и стоит избегать
                    такого
                </p>
                <ul className={"section__list"}>Минусами такой разметки являются:
                    <li className={"section__list-element"}>
                        Таблицы, используемые для оформления, уменьшают доступность страниц для людей, имеющих проблемы
                        со зрением: Скринридеры, используемые ими, интерпретируют HTML-теги и читают
                        содержимое пользователю. Поскольку таблицы не являются средством для представления структуры
                        таблицы, и разметка получается сложнее, чем при использовании методов CSS, скринридеры вводят
                        пользователей в заблуждение.
                    </li>
                    <li className={"section__list-element"}>
                        Таблицы создают путаницу тегов: Как уже упоминалось, оформление страниц с помощью таблиц даёт
                        более сложную структуру разметки, чем специально предназначенные для этого методы.
                        Соответственно, такой код труднее писать, поддерживать и отлаживать.
                    </li>
                    <li className={"section__list-element"}>
                        Таблицы не реагируют автоматически на тип устройства: У надлежащих контейнеров
                        (например,
                        <code className={"section__code code-gap-last-word"}> {"<header>"} </code>,
                        <code className={"section__code code-gap-last-word"}> {"<section>"} </code>,
                        <code className={"section__code code-gap-inline"}> {"<article>"} </code> и т.п.)
                        ширина по умолчанию равна 100% от их
                        родительского элемента. У таблиц же размер по умолчанию подстраивается под их содержимое, так
                        что чтобы они одинаково хорошо работали на разных типах устройств необходимо принимать
                        дополнительные меры.
                    </li>
                </ul>
                <p className={"section__paragraph"}>
                    Таблица задается тэгом<code className={"section__code code-gap-last-word"}>{"<table>"}</code>,
                    внутрь
                    поместим тэги<code className={"section__code code-gap-inline"}>{"<caption>"}</code>- он нужен для
                    указания названия
                    таблицы. <code className={"section__code"}>{"<thead>"}</code>,
                    <code className={"section__code code-gap-inline"}>{"<tbody>"}</code>и<code
                    className={"section__code code-gap-last-word"}>{"<tfoot>"}</code> используются для создания
                    заголовка таблицы,
                    основного тела таблицы и суммирующей строки в таблице. Таким образом каркас таблицы будет выглядеть
                    так:
                </p>
                <pre className={"section__code"} style={{width: "200px"}}>
                    {table_example}
                </pre>
                <p className={"section__paragraph"}>
                    Таблицы заполняются построчно, строка это тэг<code
                    className={"section__code code-gap-inline"}>{"<tr>"}</code>(table row),
                    в строку записываются значения в тэге<code
                    className={"section__code code-gap-inline"}>{"<td>"}</code>(table data). Для примера построим
                    небольшую таблицу:
                </p>
                <div className={"section__example-container"}>
                    <pre className={"section__code example"}>
                    {table_example_simple}
                    </pre>
                    <div className={"result-wrapper"}>
                        <div className={"result"}>
                            <table className={"section__code"}>
                                <tbody>
                                <tr>
                                    <td>строка1</td>
                                    <td>значение1</td>
                                    <td>значение2</td>
                                </tr>
                                <tr>
                                    <td>строка2</td>
                                    <td>значение1</td>
                                    <td>значение2</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <p className={"section__paragraph"}>
                    Теперь построим более сложную таблицу используя почти все HTML тэги для этого:
                </p>
                <div className={"section__example-container"} style={{marginBottom: "1rem"}}>
                    <pre className={"section__code multi-line example"}>{table_example_final}</pre>
                    <div className={"result-wrapper"}>
                        <div className={"result"}>
                            <table className={"section__table"}>
                                <caption>
                                    Table 1
                                </caption>
                                <thead>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>Knocky</td>
                                    <td>Flor</td>
                                    <td>Ella</td>
                                    <td>Juan</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Breed</td>
                                    <td>Jack Russell</td>
                                    <td>Poodle</td>
                                    <td>Streetdog</td>
                                    <td>Cocker Spaniel</td>
                                </tr>
                                <tr>
                                    <td>Age</td>
                                    <td>16</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Owner</td>
                                    <td>Mother-in-law</td>
                                    <td>Me</td>
                                    <td>Me</td>
                                    <td>Sister-in-law</td>
                                </tr>
                                <tr>
                                    <td>Eating Habits</td>
                                    <td>All</td>
                                    <td>Nibbles at food</td>
                                    <td>Hearty eater</td>
                                    <td>Will eat till he explodes</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}
