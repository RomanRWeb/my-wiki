'use client'

import "./InputWithCookie.scss"
import React, {useCallback, useEffect, useState} from "react";
import Cookies from "js-cookie";

const InputWithCookie = () => {

    const [inputValue, setInputValue] = useState<string>("");

    useEffect(() => {
        const savedCookie = Cookies.get('ExampleInputValue');
        setInputValue(savedCookie? savedCookie : "");
    }, []);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement >)=>{
        const value = e.target.value;
        setInputValue(value);
        Cookies.set('ExampleInputValue', value, {expires: 7});
    },[])

    return (
        <div className={"inputWithCookie-wrapper"}>
            <input className={"inputWithCookie"} type={"text"} value={inputValue} onChange={handleChange} size={30}></input>
        </div>
    )
}

export default InputWithCookie;
