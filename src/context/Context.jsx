import { createContext, useEffect } from "react";
import { useState } from "react";
import checklists from "../util/checklists";

const Context = createContext()

function UserProvider({children}){
    const [type, setType] = useState('')
    const [check, setCheck] = useState('')
    const [tab, setTab] = useState('')
    const [tabs, setTabs] = useState([])
    const [mainAnswers, setMainAnswers] = useState({})
    const [cAnswers, setCAnswers] = useState({})
    const [questions, setQuestions] = useState([])
    const [nameQ, setNameQ] = useState('')


    function newTab(name){
        let id = Math.floor(Math.random() * 99999)
        let idFree = true

        do{
            for(let i in tabs){
                if (id == tabs[i].id) {
                    id = Math.floor(Math.random() * 99999)
                    idFree = false
                    break
                }
            }
        }while(!idFree)
        
        const tabNew = {id, name, type, check, answers: mainAnswers}

        setTabs([...tabs, tabNew])
        setTab(tabNew)
    }

    useEffect(() => {
        const lTabs = localStorage.tabs
        const lTab = localStorage.tab

        if (lTabs) setTabs(JSON.parse(lTabs))
        if (lTab) {
            setTab(JSON.parse(lTab))
        }
    }, [])

    useEffect(() => {
        if (mainAnswers) setCAnswers(mainAnswers)
    }, [mainAnswers])

    useEffect(() => {
        if (type && check){
            setQuestions(checklists[type].checks[check].questions)
        }
    }, [check])

    useEffect(() => {
        if (type && check){
            setNameQ(checklists[type].checks[check]?.name[0])
        }
    }, [questions])

    useEffect(() => {
        localStorage.setItem('tabs', JSON.stringify(tabs))
    }, [tabs])

    useEffect(() => {
        console.log(tab)
        localStorage.setItem('tab', JSON.stringify(tab))

        let currentLocalAnswers = {}

        try {
            currentLocalAnswers = JSON.parse(localStorage.answers).type.check
        } catch (error) {
            
        }
        
        setType(tab.type)
        setCheck(tab.type)
        
        setMainAnswers(currentLocalAnswers)
    },[tab])

    return (
        <Context.Provider value={
            {
                type,
                check,
                mainAnswers,
                cAnswers,
                questions,
                nameQ,
                tab,
                tabs,
                setType,
                setCheck,
                setMainAnswers,
                setCAnswers,
                setQuestions,
                setNameQ,
                setTab,
                setTabs,
                newTab
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