import "../../article-style.scss"
import Link from "next/link";

export default function Hooks() {

    const examples: string[] = [
        `useEffect(() => {
    // ...
    return () => {
      // ...
    };
  }, [dependencyList]);`,
        `import { useContext } from 'react';

function Button() {
  const theme = useContext(ThemeContext);
  // ...
  }`,
        `function MyPage() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  // ... renders buttons inside ...
}`,
        `function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { number: 5 });
  // ...
  return (
    <button onClick = {()=>{dispatch({type: 'increment'})}}>
  )
}`,
        `function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}`,
        `const handleSmth = useCallback((Props)=>{
    // ...
    return smth;
}, [dependencies])`,
        `const memoizedValue = useMemo(() => {
    // ...
    return value;
}, [dependencies]);`
    ]

    return (
        <article className={"page"}>
            <h1 className={"page__article-name"}>
                Хуки
            </h1>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    Хуки в React — это функции, которые позволяют вам использовать состояние и другие возможности React
                    без написания классов. Они были введены в React 16.8 и значительно упростили работу с состоянием и
                    жизненным циклом компонентов. Давайте рассмотрим основные хуки и их использование.
                </p>
                <ul className={"section__list"}>
                    <li className={"section__list-element"}>
                        <code>useEffect</code> - позволяет выполнять побочные эффекты в функциональных компонентах
                        (например, запросы к API, подписки на события). Принимает функцию и массив зависимостей. Функция
                        будет выполнена после рендера компонента.
                        <div className={"section__example-container"}>
                            <pre className={"section__code"}>
                                {examples[0]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code>useContext</code> - позволяет использовать контекст в функциональных компонентах. Нужен
                        для упрощения получения доступа к данным контекста без использования <code>prop drilling</code>.
                        <div className={"section__example-container"}>
                            <pre className={"section__code"}>
                                {examples[1]}
                            </pre>
                            <pre className={"section__code"}>
                                {examples[2]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code>useState</code> или жу хук состояния - используется для создания внутреннего состояния
                        компонента.
                        Состоит из 2 элементов: текущее состояние и функция для установки состояния. Может принимать
                        аргумент в виде изначального состояния.
                        <div className={"section__example-container"}>
                            <pre
                                className={"section__code"}>const [state, setState] = useState{"<string>"}(&#34; &#34;)</pre>
                        </div>
                        Тут дополнительно указан строковый тип (для TypeScript) для состояния <code>state</code> и
                        указано начальное
                        состояние <code>&#34; &#34;</code>.
                    </li>
                    <li className={"section__list-element"}>
                        <code>useReducer</code> - похожий на <code>useState</code>, позволяет управлять сложным
                        состоянием с помощью функции редюсера.
                        <div className={"section__example-container"}>
                            <pre className={"section__code"}>
                                {examples[3]}
                            </pre>
                        </div>
                        <code>dispatch</code> функция принимает только один аргумент - <code>action</code>. Это может
                        быть значение любого типа. Без переопределения <code>action</code> является объектом со
                        свойством <code>type</code>,
                        идентифицирующим его, и, необязательно, другими свойствами с дополнительной информацией.
                    </li>
                    <li className={"section__list-element"}>
                        <code>useRef</code> - позволяет создавать ссылку на DOM-элемент или сохранять любое значение
                        между рендерами без вызова повторного рендера.
                        <div className={"section__example-container"}>
                            <pre className={"section__code"}>
                                {examples[4]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code>useCallback</code> - это хук в React, который позволяет мемоизировать функции,
                        предотвращая их пересоздание при каждом рендере компонента. Это может быть полезно для
                        оптимизации производительности, особенно когда вы передаете функции в дочерние компоненты или
                        используете их в зависимостях других хуков, таких как <code>useEffect</code>.
                        <div className={"section__example-container"}>
                            <pre className={"section__code"}>
                                {examples[5]}
                            </pre>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code>useMemo</code> - как <code>useCallback</code>, но позволяет мемоизировать значения,
                        вычисляемые на
                        основе зависимостей. Он используется для оптимизации производительности, предотвращая повторные
                        вычисления значений при каждом рендере компонента, если зависимости не изменились.
                        <div className={"section__example-container"}>
                            <pre className={"section__code"}>
                                {examples[6]}
                            </pre>
                        </div>
                    </li>
                </ul>
                <p className={"section__paragraph"}>
                    Тут я упомянул только самые часто используемые хуки, все их можно найти <Link
                    href={"https://react.dev/reference/react/hooks"}
                    target={"_blank"}>тут</Link>.
                </p>
                <ul className={"section__list"}>
                    При использовании хуков придерживайтесь следующей логики:
                    <li className={"section__list-element"}>
                        Вызывайте хуки только на верхнем уровне: Не вызывайте хуки внутри циклов, условий или вложенных
                        функций.
                    </li>
                    <li className={"section__list-element"}>
                        Вызывайте хуки только из функциональных компонентов: Не используйте хуки внутри обычных
                        JavaScript-функций или классов.
                    </li>
                </ul>
            </section>
        </article>
    )
}
