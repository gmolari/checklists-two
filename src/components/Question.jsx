import {useContext, useEffect, useState } from "react"
import { Context } from "../context/Context"

export default function Question({question, id}){
    const {tab, mainAnswers, setMainAnswers} = useContext(Context)

    const [myAnswer, setMyAnswer] = useState(tab?.answers?.id ? tab?.answers?.id : '')

    function handleAns(e){
        setMyAnswer(e.target.value)
    }

    useEffect(() => {
        if (myAnswer) setMainAnswers({...mainAnswers, [id]: myAnswer })
    }, [myAnswer])


    return (
        <div className="container-question">
            <label htmlFor={id}> { question } </label>
            <textarea onChange={handleAns} id={id} defaultValue={myAnswer}></textarea>
            {/* <input type="text" id={id} /> */}
        </div>
    )
}