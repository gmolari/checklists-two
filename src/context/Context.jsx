import { createContext, useEffect } from "react";
import { useState } from "react";

const Context = createContext()

function UserProvider({children}){
    const [type, setType] = useState('');
    const [check, setCheck] = useState('');

    useEffect(() => {
        const lType = localStorage.type
        const lCheck = localStorage.check

        lType ? setType(lType) : setType('')
        lCheck ? setCheck(lCheck) : setCheck('')
    },[])

    return (
        <Context.Provider value={
            {
                type,
                check,
                setType,
                setCheck
            }
        }>
            {children}
        </Context.Provider>
    )
} 

export {
    Context,
    UserProvider
}