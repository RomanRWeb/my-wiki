'use client'
import Cookies from 'js-cookie'
import "./Cookie-banner.scss"

import {FC, useCallback, useEffect, useState} from "react";

const CookieBanner: FC = () => {

    const [hidden, setHidden] = useState<boolean>(true);

    useEffect(() => {
        const cookies = Cookies.get("banner");
        if (cookies === "clicked") {
            setHidden(true);
            Cookies.set("banner", "clicked", {expires: 7})
        }
    }, [])

    const onButtonClick = useCallback(() => {
        Cookies.set("banner", "clicked", {expires: 7})
        setHidden(true);
    }, [])

    return (

        <div className={"banner"}>
            {!hidden ? (
                <div className={"banner__wrapper"}>
                    <h1>Внимание, куки!</h1>
                    <p className={"banner__text"}>
                        Я использую куки только для этого банера и для статейки, других данных я не храню
                    </p>
                    <div className={"banner__button-wrapper"}>
                        <button className={"banner__button"} onClick={onButtonClick}>Ладно</button>
                        <button className={"banner__button"} onClick={onButtonClick}>Ок</button>
                    </div>
                </div>
            ) : null
            }
        </div>
    )
}

export default CookieBanner;
