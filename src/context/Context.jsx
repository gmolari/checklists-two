import { createContext, useEffect } from "react";
import { useState } from "react";

const Context = createContext()

function UserProvider({children}){
    const [type, setType] = useState('');
    const [check, setCheck] = useState('');
    const [mainAnswers, setMainAnswers] = useState('');

    useEffect(() => {
        const lType = localStorage.type
        const lCheck = localStorage.check

        if (lType && lCheck){
            setType(lType)
            setCheck(lCheck)
        }
    },[])

    return (
        <Context.Provider value={
            {
                type,
                check,
                mainAnswers,
                setType,
                setCheck,
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