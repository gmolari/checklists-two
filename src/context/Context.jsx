import { createContext, useEffect } from "react";
import { useState } from "react";
import checklists from "../util/checklists";

const Context = createContext()

function UserProvider({children}){
    const [type, setType] = useState('')
    const [check, setCheck] = useState('')
    const [cTab, setCTab] = useState('')
    const [tabs, setTabs] = useState([])
    const [mainAnswers, setMainAnswers] = useState({})
    const [cAnswers, setCAnswers] = useState({})
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const lType = localStorage.type
        const lCheck = localStorage.check
        const lTabs = localStorage.tabs
        let currentLocalAnswers = {}

        if (lTabs) setTabs(JSON.parse(lTabs))

        if (lType && lCheck){
            try {
                currentLocalAnswers = JSON.parse(localStorage.answers).type.check
            } catch (error) {
                
            }
            
            
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
    }, [type])

    useEffect(() => {
        localStorage.setItem('check', check)

        if (type && check){
            setQuestions(checklists[type].checks[check].questions)
        }
    }, [check])

    return (
        <Context.Provider value={
            {
                type,
                check,
                mainAnswers,
                cAnswers,
                questions,
                setType,
                setCheck,
                setMainAnswers,
                setCAnswers,
                setQuestions
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