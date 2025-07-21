import "../../article-style.scss"
import "./examples.scss"
import Link from "next/link";

export default function Overflow() {

    const examples: string[] = [
        `overflow: visible`,
        `overflow: hidden`,
        `overflow: scroll`,
        `.scroll-wrapper{
  width: clamp(200px, 100%, 1000px);
  height: 300px;
  overflow: scroll;

  &::-webkit-scrollbar {
    background-color: transparent;
  }

  &::-webkit-scrollbar-button {
    background-color: fuchsia;
  }

  &::-webkit-scrollbar-track {
    background-color: lime;
  }

  &::-webkit-scrollbar-thumb {
    background-color: blue;
  }

  &::-webkit-scrollbar-corner{
    background-color: aqua;
  }
`
    ]

    return (
        <article className={"page"}>
            <h1 className={"page__article-name"}>Overflow</h1>
            <section className={"page__section"}>
                <p className={"section__paragraph"}>
                    <code className={"section__code"}>overflow</code> определяет, необходимо ли для переполненного
                    блочного элемента содержимое обрезать, предоставить
                    полосы прокрутки или просто отобразить. (Текст в примерах одинаковой длины)
                </p>
                <ul className={"section__list"}>
                    <code className={"section__code"}>overflow</code> может принимать следующие значения:
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>visible</code> - значение по умолчанию. Содержимое, выходящее
                        за границы элемента, будет видно и не будет обрезаться
                        <div className={"section__example-container"}>
                            <pre className={"section__code"}>{examples[0]}</pre>
                            <div className={"result-wrapper"}>
                                <div className={"el-overflow-default"}>
                                    <p>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Praesent sagittis blandit nunc eget facilisis. Nunc at
                                        rutrum
                                        metus. Proin sit amet lacus lacus. Aliquam vitae fermentum tortor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>hidden</code> - содержимое, выходящее за пределы элемента,
                        будет обрезано и не будет видно.
                        <div className={"section__example-container"}>
                            <pre className={"section__code"}>{examples[1]}</pre>
                            <div className={"result-wrapper"}>
                                <div className={"el-overflow-hidden"}>
                                    <p>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Praesent sagittis blandit nunc eget facilisis. Nunc at
                                        rutrum
                                        metus. Proin sit amet lacus lacus. Aliquam vitae fermentum tortor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>clip</code> - похожее по
                        результату на <code className={"section__code"}>hidden</code>, но границы
                        родительского блока рассчитываются с учётом внутренних отступов.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>scroll</code> - появляются полосы прокрутки (горизонтальная и
                        вертикальная), даже если содержимое помещается в элемент. Полосы прокрутки всегда видны.
                        <div className={"section__example-container"}>
                            <pre className={"section__code"}>{examples[2]}</pre>
                            <div className={"result-wrapper"}>
                                <div className={"el-overflow-scroll"}>
                                    <p>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Praesent sagittis blandit nunc eget facilisis. Nunc at
                                        rutrum
                                        metus. Proin sit amet lacus lacus. Aliquam vitae fermentum tortor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>auto</code> - полосы прокрутки появляются только в том случае,
                        если содержимое превышает размеры элемента.
                    </li>
                </ul>
                <p className={"section__paragraph"}>
                    Существует также более специфичные свойства для управления переполнением по отдельным осям: <code
                    className={"section__code"}>overflow-x</code> - управляет переполнением по горизонтали, <code
                    className={"section__code"}>overflow-y</code> - управляет переполнением по вертикали.
                </p>
                <p className={"section__paragraph"}>
                    И так же есть свойства для определенных HTML элементов: <code
                    className={"section__code"}>overflow-block</code> - устанавливает, что будет отображаться, когда
                    содержимое переполняет начальные и конечные края блока, <code
                    className={"section__code"}>overflow-inline</code> - устанавливает, что будет отображаться, когда
                    содержимое переполняет начальные и конечные края строкового элемента.
                </p>
                <p className={"section__paragraph"}>
                    <code className={"section__code"}>overflow-anchor</code> предоставляет возможность отказаться от
                    поведения привязки прокрутки браузера, которое регулирует положение прокрутки для минимизации
                    смещения контента. Может быть либо <code className={"section__code"}>none</code>, либо <code
                    className={"section__code"}>auto</code>.
                </p>
                <p className={"section__paragraph"}>
                    <code className={"section__code"}>overflow-wrap</code> применяется к строковым элементам,
                    устанавливая должен ли браузер расставлять переносы строк внутри неразрывной строки, чтобы избежать
                    выхода текста за границы элемента.</p>
                <ul className={"section__list"}>
                    Может принимать значения:
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>normal</code> - разрыв строк происходит согласно обычным
                        правилам разрыва (такими как пробел между двумя словами).
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>anywhere</code> - чтобы избежать выхода текста за границы
                        элемента, таких как длинных слов или URL, неразрывная строка символов может быть разбита в
                        любой точке, если в строке нет других допустимых точек разрыва.Возможность мягкого переноса,
                        представленная разрывом слов, рассматривается, когда вычисляется минимальный контент
                        внутренних размеров.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>break-word</code> - так же как и со значением <code
                        className={"section__code"}>anywhere</code>,
                        слова, которые обычно нельзя перенести по слогам, могут быть разбиты в произвольных точках,
                        если нет других допустимых разрывов в строке, но возможность мягкого переноса,
                        представленная разрывом слов не рассматривается, когда вычисляется минимальный контент
                        внутренних размеров.
                    </li>
                </ul>
                <div className={"section__example-container flex-wrap"}>
                    <div className={"wrapper"}>
                        <p>overflow-wrap: normal</p>
                        <div className={"el-wrap-normal"}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. <i>dfjhgkdjhgdfhgdjghsadasdasd</i> Praesent sagittis blandit nunc eget
                            facilisis.
                            Nunc at rutrum metus. Proin sit amet lacus lacus. Aliquam vitae fermentum tortor.
                        </div>
                    </div>
                    <div className={"wrapper"}>
                        <p>overflow-wrap: anywhere</p>
                        <div className={"el-wrap-anywhere"}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. <i>dfjhgkdjhgdfhgdjghsadasdasd</i> Praesent sagittis blandit nunc eget
                            facilisis.
                            Nunc at rutrum metus. Proin sit amet lacus lacus. Aliquam vitae fermentum tortor.
                        </div>
                    </div>
                    <div className={"wrapper"}>
                        <p>overflow-wrap: break-word</p>
                        <div className={"el-wrap-break-word"}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. <i>dfjhgkdjhgdfhgdjghsadasdasd</i> Praesent sagittis blandit nunc eget
                            facilisis.
                            Nunc at rutrum metus. Proin sit amet lacus lacus. Aliquam vitae fermentum tortor.
                        </div>
                    </div>

                </div>
                <p className={"section__paragraph"}>
                    Немного про стилизацию прокручиваемых элементов - задать стиль элементов прокрутки можно с помощью
                    псевдоклассов:

                </p>
                <ul className={"section__list"}>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>::webkit-scrollbar</code> - для стилизации всей полосы
                        прокрутки.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>::webkit-scrollbar-button</code> - для стилизации кнопок
                        (стрелочек, которые расположены сверху и снизу полосы прокрутки).
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>::webkit-scrollbar-thumb</code> - для стилизации маркера
                        прокрутки (элемент, показывающий позицию &#34;экрана&#34; относительно всего контента).
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>::webkit-scrollbar-track</code> - для стилизации полосы по
                        которой передвигается маркер.
                    </li>
                    <li className={"section__list-element"}>
                        <code className={"section__code"}>::webkit-scrollbar-corner</code> - для стилизации угла
                        контейнера в которой встречаются горизонтальная и вертикальная полоса прокрутки
                    </li>
                </ul>
                <p className={"section__paragraph"}>На самом деле это не все свойства, но этого достаточно (<Link
                    href={"https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar"} target={"_blank"}
                    className={"link"}>тут</Link> можно прочитать про все доступные возможности для стилизации).</p>
                <p className={"section__paragraph"}>
                    Проиллюстрируем все это небольшим цветным примером:
                </p>
                <div className={"section__example-container"}>
                    <pre className={"section__code"}>
                        {examples[3]}
                    </pre>
                    <div className={"result-wrapper"}>
                        <div className={"scroll-wrapper"}>
                            <div className={"el-scrollbar"}>
                                <p className={"section__paragraph"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium in quam vel
                                    sollicitudin. Vivamus a dui sed odio tristique placerat. Sed mollis eu nibh id semper.
                                    Aenean eget neque scelerisque neque bibendum semper eu nec quam. Vestibulum nec lorem
                                    facilisis, mollis arcu eget, ullamcorper ante. Proin quis elit ut orci varius
                                    pellentesque
                                    eget at dolor. Morbi tincidunt convallis orci, id consectetur nibh dictum eu. Maecenas
                                    fringilla ex non felis finibus commodo.
                                </p>

                                <p className={"section__paragraph"}>
                                    Suspendisse eget massa metus. Nullam lacinia diam ac venenatis rhoncus. Nullam eu quam
                                    libero. Nulla iaculis aliquet erat at feugiat. Integer venenatis diam ac mi rhoncus
                                    consequat. Sed porttitor vehicula mi, id dignissim nisl scelerisque et. Nulla sem ipsum,
                                    aliquet non rutrum quis, scelerisque vel sem.
                                </p>


                                <p className={"section__paragraph"}>
                                    Quisque in metus in augue vestibulum dignissim pharetra id sapien. Etiam eget hendrerit
                                    nunc. Vestibulum felis nisi, suscipit sit amet tincidunt quis, vestibulum non nulla.
                                    Donec
                                    commodo nunc vitae dictum bibendum. Aliquam ac eleifend lacus. Integer a mi magna.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                    egestas. Ut vitae tellus sit amet sapien vulputate rhoncus non nec quam. Integer
                                    tincidunt
                                    sem et porta vehicula. Donec vestibulum risus id justo convallis, hendrerit maximus nunc
                                    pretium. Vestibulum vitae lorem et velit scelerisque vulputate. Maecenas ac leo neque.
                                    Praesent rhoncus nibh odio, quis eleifend mi ullamcorper in. Fusce a odio gravida,
                                    blandit sem eget, consequat elit. Proin luctus auctor justo ac tempor. Nullam finibus
                                    non augue at
                                    aliquet.
                                </p>


                                <p className={"section__paragraph"}>
                                    Suspendisse accumsan risus a sapien consequat, ut aliquam erat volutpat. Cras hendrerit
                                    ex tristique, pulvinar lorem eget, gravida tortor. In malesuada quam ligula, a iaculis
                                    neque mollis sit amet. Integer fringilla enim vehicula justo dignissim fermentum.
                                    Vestibulum sodales magna eu sapien efficitur, sit amet tincidunt est pulvinar. Sed
                                    varius iaculis. Suspendisse vel nunc in diam dapibus vestibulum at non enim. Maecenas
                                    vitae augue semper, venenatis urna eget, viverra quam. Duis velit sapien, iaculis eget
                                    ex quis, faucibus dapibus risus. Morbi ut dolor dictum, eleifend leo at, tempus nisl.
                                    Cras id luctus ex.
                                </p>

                                <p className={"section__paragraph"}>
                                    Praesent at ligula libero. Vestibulum lobortis id nisi at blandit. Sed at orci ac eros
                                    efficitur mollis vitae at tellus. Fusce suscipit facilisis dolor, eget pellentesque enim
                                    ornare at. Vestibulum vel felis massa. Sed finibus felis lorem, non feugiat magna
                                    condimentum fermentum. Nullam ultrices, odio vitae pellentesque aliquet, augue libero
                                    lacinia erat, vel suscipit libero turpis eget lorem. Quisque eleifend nisl quis lectus
                                    porta, et placerat ex dignissim. Curabitur laoreet urna sed felis tempor maximus. Class
                                    aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </article>
    )
}
