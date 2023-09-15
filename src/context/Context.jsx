import { createContext, useEffect } from "react";
import { useState } from "react";
import checklists from "../util/checklists";

const Context = createContext()

function UserProvider({children}){
    const [type, setType] = useState('')
    const [check, setCheck] = useState('')
    const [tab, setTab] = useState({})
    const [tabs, setTabs] = useState([])
    const [mainAnswers, setMainAnswers] = useState({})
    const [questions, setQuestions] = useState([])
    const [nameQ, setNameQ] = useState('')
    const [activeTab, setActiveTab] = useState('')

    const [keyForm, setKeyForm] = useState(Math.random())
    const [initAns, setInitAns] = useState(Math.random())


    function newTab(name, check){
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
        
        const tabNew = {id, name, type, check}

        setTabs([...tabs, tabNew])
        setTab(tabNew)
    }

    function clickTab(tab){
        setTab(tab)
    }

    function initAnswers(){
        const lTab = localStorage[tab.id]

        if (!lTab) {
            let cQuest = {}
            for (let i in questions){
                cQuest[i] = ''
            }

            if (tab.id) {
                localStorage.setItem(tab.id, JSON.stringify(cQuest))
                setMainAnswers(cQuest)
            }
        }

        if (lTab && tab){
            setMainAnswers(JSON.parse(lTab))
        }
        setKeyForm(Math.random())
    }
    
    function updateAnswers(){
        if (tab.id) localStorage.setItem(tab.id, JSON.stringify(mainAnswers))
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
        updateAnswers()
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

        setInitAns(Math.random())
    }, [questions])

    useEffect(() => {
        initAnswers()
    }, [initAns])

    useEffect(() => {
        localStorage.setItem('tabs', JSON.stringify(tabs))
    }, [tabs])

    useEffect(() => {
        localStorage.setItem('tab', JSON.stringify(tab))
        setType(tab.type)
        setCheck(tab.check)

        setInitAns(Math.random())
    },[tab])

    return (
        <Context.Provider value={
            {
                type,
                check,
                mainAnswers,
                questions,
                nameQ,
                tab,
                tabs,
                activeTab,
                keyForm,
                setType,
                setCheck,
                setMainAnswers,
                setQuestions,
                setNameQ,
                setTab,
                setTabs,
                newTab,
                setActiveTab,
                clickTab,
                updateAnswers
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