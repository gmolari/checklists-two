import {useContext, useEffect, useState } from "react"
import { Context } from "../context/Context"

export default function Question({question, id}){
    const {tab, mainAnswers, setMainAnswers} = useContext(Context)

    const [myAnswer, setMyAnswer] = useState(mainAnswers[id] ? mainAnswers[id] : '')

    function handleAns(e){
        setMyAnswer(e.target.value)
    }

    useEffect(() => {
        if (myAnswer || myAnswer == '') setMainAnswers({...mainAnswers, [id]: myAnswer })
    }, [myAnswer])


    return (
        <div className="container-question">
            <label htmlFor={id}> { question } </label>
            <textarea onChange={handleAns} id={id} defaultValue={myAnswer}>
            </textarea>
        </div>
    )
}