import { createContext, useEffect } from "react";
import { useState } from "react";

const Context = createContext()

function UserProvider({children}){
    const [type, setType] = useState('attendance')
    const [check, setCheck] = useState('fiber')
    const [cTab, setCTab] = useState('')
    const [tabs, setTabs] = useState([])
    const [mainAnswers, setMainAnswers] = useState({});
    const [cAnswers, setCAnswers] = useState({})

    useEffect(() => {
        const lType = localStorage.type
        const lCheck = localStorage.check
        const lTabs = localStorage.tabs

        if (lTabs) setTabs(JSON.parse(lTabs))

        if (lType && lCheck){
            const currentLocalAnswers = JSON.parse(localStorage.answers).type.check
            
            setType(lType)
            setCheck(lCheck)
            
            setMainAnswers(currentLocalAnswers)
        }
    }, [])

    useEffect(() => {

        if (mainAnswers) setCAnswers(mainAnswers)

    }, [mainAnswers])

    useEffect(() => {
        localStorage.setItem('type', type)

        console.log(type)

    }, [type])

    return (
        <Context.Provider value={
            {
                type,
                check,
                mainAnswers,
                cAnswers,
                setType,
                setCheck,
                setMainAnswers,
                setCAnswers
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