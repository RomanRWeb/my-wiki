import React, {FC} from "react";
import {contentList} from "@/constants/content-list";
import Link from "next/link";
import "./Navbar.scss"

interface Props {
    chapter: string,
    paragraph: { description: string, link: string }[]
}

const ListElements: FC<Props> = ({chapter, paragraph}) => {
    return (
        <ul className={"navbar__chapter"}> {chapter}
            {paragraph.map((e: { description: string, link: string }) => <Link href={e.link}
                                                                               className={"navbar__paragraph"}
                                                                               key={`${e.description}`}>{e.description}</Link>)}
        </ul>
    )
}

const Navbar: FC = () => {
    return (
        <aside className={"navbar"}>
            <span className={"navbar__button"}>
                <span className={"navbar__button__stick"}/>
            </span>
            <nav className={"navbar__List"}>
                {contentList.map(e =>
                    <ListElements key={`${e.chapter}`} chapter={e.chapter} paragraph={e.paragraph}/>)
                }
            </nav>
        </aside>
    )
}

export default Navbar;
