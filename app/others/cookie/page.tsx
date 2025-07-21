import "../../article-style.scss"
import Link from "next/link";
import InputWithCookie from "@/components/InputWithCookie/InputWithCookie";

export default function Cookies() {

    const examples: string[] = [
        `Cookies.set('username', 'User', { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) }); // Устанавливает на 7 дней`,
        `Cookies.set('username', 'User', { 'max-age': 7 * 24 * 60 * 60 }); // Устанавливает на 7 дней`,
        `Cookies.set('username', 'User', { path: '/' }); // Доступен для всего сайта`,
        `Cookies.set('username', 'User', { domain: 'example.com' }); // Доступен для example.com и всех его поддоменов`,
        `Cookies.set('username', 'User', { secure: true }); // Доступен только по HTTPS`,
        `Cookies.set('username', 'User', { httpOnly: true }); // Доступен только на сервере`,
        `Cookies.set('username', 'User', { sameSite: 'Lax' });`


    ]

    return (
        <article className={"page"}>
            <h1 className={"page__article-name"}>
                Cookie
            </h1>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    (В примерах используется библиотека <Link href={"https://www.npmjs.com/package/js-cookie"}
                                                              target={"_blank"}>js-cookie</Link>)
                </p>
                <p className={"section__paragraph"}>
                    Cookies представляют собой небольшие фрагменты данных, которые хранятся в браузере и отправляются на
                    сервер с каждым HTTP-запросом.
                </p>
                <ul className={"section__list"}>
                    Взаимодействие с куки ограничивается:
                    <li className={"section__list-element"}>
                        созданием cookie;
                    </li>
                    <li className={"section__list-element"}>
                        чтением cookie;
                    </li>
                    <li className={"section__list-element"}>
                        удалением cookie.
                    </li>
                </ul>
                <h2 className={"section__name"}>Создание куки</h2>
                <ul className={"section__list"}>
                    Но для начала рассмотрим атрибуты cookie
                    <li className={"section__list-element"}>
                        <code>expires</code> - указывает дату и время, когда cookie истечет. Если
                        этот атрибут не
                        установлен, cookie будет действовать только в течение текущей сессии (т.е. будет удален при
                        закрытии браузера).
                        <div className={"section__example-container"}>
                            <div className={"example section__code"}>
                                {examples[0]}
                            </div>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code>max-age</code> - указывает максимальное время жизни cookie в секундах с момента его
                        установки. В отличие от expires, который указывает конкретную дату, max-age задает срок действия
                        относительно текущего времени.
                        <div className={"section__example-container"}>
                            <div className={"example section__code"}>
                                {examples[1]}
                            </div>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code>path</code> - определяет путь на сервере, для которого cookie будет доступен. По умолчанию
                        cookie доступен для текущего пути и всех его подкаталогов.
                        <div className={"section__example-container"}>
                            <div className={"example section__code"}>
                                {examples[2]}
                            </div>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code>domain</code> - указывает домен, для которого cookie будет доступен. Если не указано, по
                        умолчанию используется домен текущего документа.
                        <div className={"section__example-container"}>
                            <div className={"example section__code"}>
                                {examples[3]}
                            </div>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code>secure</code> - указывает, что cookie должен передаваться только по защищённым соединениям
                        (HTTPS). Если это значение установлено в true, cookie не будет отправляться по обычному HTTP.
                        <div className={"section__example-container"}>
                            <div className={"example section__code"}>
                                {examples[4]}
                            </div>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code>httpOnly</code> - указывает, что cookie не должен быть доступен через JavaScript
                        (например, через <code>document.cookie</code>). Это помогает защитить cookie от атак типа XSS
                        (межсайтовый скриптинг).
                        <div className={"section__example-container"}>
                            <div className={"example section__code"}>
                                {examples[5]}
                            </div>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code>sameSite</code> - помогает предотвратить атаки CSRF (межсайтовая подделка запросов). Он
                        может принимать значения:
                        <ul className={"section__list"}>
                            <li className={"section__list-element"}>
                                <code>Strict</code>: Cookie отправляется только если запрос происходит с того же сайта.
                            </li>
                            <li className={"section__list-element"}>
                                <code>Lax</code>: Cookie отправляется с запросами GET от других сайтов.
                            </li>
                            <li className={"section__list-element"}>
                                <code>None</code>: Cookie отправляется всегда, но требует установки атрибута <code>Secure</code>.
                            </li>
                        </ul>
                        <div className={"section__example-container"}>
                            <div className={"example section__code"}>
                                {examples[6]}
                            </div>
                        </div>
                        <div className={"section__example-container"}>
                            <p className={"section__code"}>просто напиши сюда что-нибудь и обнови страницу</p>
                            <InputWithCookie></InputWithCookie>
                        </div>
                    </li>
                </ul>
            </section>
        </article>
    )
}
