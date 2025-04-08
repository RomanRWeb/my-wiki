import "../../article-style.scss"
import Link from "next/link";

export default function Strings() {

    const examples: string[] = [
        `let str = "Hello World";
console.log(str.length); // "11"`,
        `console.log(str.substring(1, 4)); // "ell"`,
        `console.log(str.slice(-3)); // "rld" (последние три символа)
console.log(str.slice(3, -2)); // "lo Wo" (извлекает от индекса 3 до конца строки минус два символа)`,
        `console.log(str.indexOf("e")); // 1`,
        `console.log(str.lastIndexOf("o")); // 7`,
        `console.log(str.toUpperCase()); // HELLO WORLD;`,
        `console.log(str.split(" ")); // [""Hello", "World"]`,
        `let spacedStr = "  Hello World "; console.log(spacedStr.trim()); // "Hello World";"`,
        `let HelloStr = "Hello";
let WorldStr = "World"
console.log(HelloStr.concat(" ", WorldStr)); // "Hello World";`,
        `let str = "Hello World";
console.log(str.toUpperCase().indexOf("L")); // 2)`,
    ]

    return (
        <article className={"page"}>
            <h1 className={"page__article-name"}>Строки</h1>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    Строка (string) — это один из основных типов данных, который используется для представления
                    текстовой информации. Строки могут содержать любые символы, включая буквы, цифры, пробелы и
                    специальные символы. Давайте рассмотрим основные аспекты работы со строками в JavaScript.
                </p>
                <p className={"section__paragraph"}>
                    Строки можно создавать с помощью двойных и одиночных кавычек, обратные кавычки используются для
                    создания шаблонных строк, например строка:
                </p>
                <pre className={"section__code"}>{"const helloUser = \u0060Hello, ${user}\u0060!"}</pre>
                <p className={"section__paragraph"}>{"будет \u0022Hello John!\u0022 или \u0022Hello Ivan!\u0022 в зависимости от переменной user."}</p>
                <h2 className={"section__name"}>
                    Методы
                </h2>
                <p className={"section__paragraph"}>
                    Рассмотрим основные методы работы со строками:
                </p>
                <ul className={"section__list"}>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>length</code> - метод для получения длины строки.
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[0]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>substring(startIndex, endIndex)</code> - возвращает подстроку
                        строки между двумя индексами, или от одного индекса и до конца строки. Если startIndex больше
                        endIndex, то они меняются местами.
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[1]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>substring(startIndex, endIndex)</code> - еще один метод для
                        получения подстроки. Извлекает часть строки и возвращает новую строку без изменения оригинальной
                        строки.
                        Если один из индексов отрицательный, он будет интерпретирован как смещение от конца строки.
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[2]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>indexOf(searchValue)</code> и <code
                        className={"section__code"}>lastIndexOf(searchValue)</code> возвращают индекс
                        первого или последнего вхождения указанного значения в строковый объект.
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[3]}
                            </pre>
                        </div>
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[4]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>toUpperCase()</code> и <code
                        className={"section__code"}>toLowerCase()</code> изменяют регистр всей строки
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[5]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>split(separator)</code> разбивает объект String на массив
                        строк путём разделения строки указанной подстрокой.
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[6]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>trim()</code> удаляет пробелы с начала и конца строки.
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[7]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>concat()</code> объединяет текст из двух или более строк и
                        возвращает новую строку.
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[8]}
                            </pre>
                        </div>
                    </li>
                </ul>
                <p className={"section__paragraph"}>(все методы можно найти <Link target={"_blank"} className={"link"}
                                                                                  href={"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String"}>тут</Link>)
                </p>
                <p className={"section__paragraph"}>Важно отметить, что строки в JavaScript являются неизменяемыми
                    (immutable). Это означает, что после создания строки вы не можете изменить ее содержимое напрямую.
                    Вместо этого любые операции над строками создают новую строку.</p>
                <p className={"section__paragraph"}>
                    Еще в JS есть возможность вызова методов по цепочке, где каждый метод возвращает сам объект или
                    другой объект, на котором можно вызвать следующий метод. Это позволяет писать более компактный и
                    читаемый код.
                </p>
                <div className={"example"} style={{marginBottom: "1rem"}}>
                            <pre className={"section__code"}>
                                {examples[9]}
                            </pre>
                </div>
            </section>
        </article>
    )
}
