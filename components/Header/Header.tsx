"use client"

import "./Header.scss"
import {FC, useEffect, useState} from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import NoteIcon from "../../public/icons/notes-svgrepo-com.svg";
import {ROOT_ROUTE} from "@/constants/routes";

const Header: FC = () => {

    const pathname = usePathname();
    const [chapter, setChapter] = useState(" ");

    useEffect(()=>{
        setChapter(pathname.split("/")[1].toUpperCase());
        //console.log('chapter: ', JSON.stringify(chapter, null, 2));
    }, [pathname])

    return (
        <header className={"header"}>
            <Link className={"header__icon-link"} href={ROOT_ROUTE}>
                <Image className={"header__icon"} src={NoteIcon} alt="Иконка заметок" width="50" height="50"/>
            </Link>
            <h1 className={"header__name"}>{chapter}</h1>
        </header>
    )
}

export default Header;
