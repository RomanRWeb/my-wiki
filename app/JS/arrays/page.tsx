import "../../article-style.scss"

export default function Arrays() {

    const examples: string[] = [
        `const fruits = ["apple", "banana", "cherry"];`,
        `const fruits = new Array("apple", "banana", "cherry");`,
        `console.log(fruits.push("pineapple")); // ["apple", "banana", "cherry", "pineapple"]`,
        `console.log(fruits.pop()); // ["apple", "banana"]`,
        `console.log(fruits.shift()); // ["orange", "cherry"]`,
        `console.log(fruits.unshift("kiwi")); // ["kiwi", "apple", "banana", "cherry"]`,
        `console.log(fruits.indexOf("orange")); // 1`,
        `console.log(fruits.includes("banana")); // true`,
        `console.log(fruits.find(e => { return e[0] === "c"})) // "cherry"`,
        `fruits.forEach(fruit => console.log(fruit)); // "apple"
                                             // "banana"
                                             // "cherry"`,
        `console.log(fruits.map(e => {return e[0].toUpperCase() + e.substring(1)})); // ["Apple", "Banana", "Cherry"]})`,
        `console.log(fruits.reduce((acc, el)=>  acc.concat(" ", el), "Salad with")) // Salad with apple banana cherry`
    ]

    return (
        <article className={"page"}>
            <h1 className={"page__article-name"}>
                Массивы
            </h1>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    Массивы (Arrays) — это специальные объекты, которые позволяют хранить упорядоченные коллекции
                    значений. Они являются одним из основных типов данных в языке и предоставляют множество методов для
                    работы с данными. Давайте рассмотрим основные аспекты массивов в JavaScript.
                </p>
                <p className={"section__paragraph"}>
                    Существует несколько способов задания массивов
                </p>
                <ul className={"section__list"}>
                    <li className={"section__list-element"}>
                        Литерал массива:
                        <div className={"example"}>
                            <code className={"section__code"}>
                                {examples[0]}
                            </code>
                        </div>
                    </li>
                </ul>
                <ul className={"section__list"}>
                    <li className={"section__list-element"}>
                        Конструктор массива:
                        <div className={"example"}>
                            <code className={"section__code"}>
                                {examples[1]}
                            </code>
                        </div>
                    </li>
                </ul>
                <p className={"section__paragraph"}>
                    К элементам массива можно обратиться только через квадратные скобки, хоть элементы массива являются
                    свойствами, точно такими же, как, например, свойство toString, однако попытка получить элемент
                    массива по имени его свойства приведёт к синтаксической ошибке, поскольку имя свойства не является
                    допустимым именем JavaScript
                </p>
                <p className={"section__paragraph"}>
                    Еще по индексу можно изменять содержимое массива, но лучше придерживаться принципа иммутабельности
                    и не делать этого. Длину массива можно найти также как и у строк, через <code
                    className={"section__code"}>length</code>.
                </p>
                <p className={"section__paragraph"}>
                    JavaScript предоставляет множество встроенных методов для работы с массивами. Вот некоторые из них:
                </p>
                <ul className={"section__list"}>
                    Добавление или удаление элементов:
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>
                            push()
                        </code>:добавляет элемент в конец массива.
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[2]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>
                            pop()
                        </code>: удаляет последний элемент из массива
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[3]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>
                            shift()
                        </code>: удаляет первый элемент из массива
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[4]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>
                            unshift()
                        </code>: добавляет первый элемент в массива
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[5]}
                            </pre>
                        </div>
                    </li>
                </ul>
                <ul className={"section__list"}>
                    Поиск элементов:
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>
                            indexOf()
                        </code> возвращает индекс первого вхождения элемента.
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[6]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>
                            includes()
                        </code> : проверяет, содержится ли элемент в массиве.
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[7]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>
                            find()
                        </code> : возвращает значение первого элемента массива, прошедшего тестовую функцию.
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[8]}
                            </pre>
                        </div>
                    </li>
                </ul>
                <ul className={"section__list"}>
                    Остальное:
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>
                            forEach()
                        </code> : выполняет функцию для каждого элемента массива. (изменяет массив, поэтому если хочешь
                        модифицировать данные, то лучше
                        использовать <code className={"section__code"}>map</code>)
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[9]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>
                            map()
                        </code> : создаёт новый массив с результатом вызова указанной функции для каждого элемента
                        массива.
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[10]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>
                            reduce()
                        </code> : применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно
                        результирующее значение.
                        массива.
                        <div className={"example"}>
                            <pre className={"section__code"}>
                                {examples[11]}
                            </pre>
                        </div>
                    </li>
                </ul>
            </section>
        </article>
    )
}
