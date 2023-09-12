import {useContext, useEffect, useState } from "react"
import { Context } from "../context/Context"

export default function Question({question, id}){
    const {cAnswers, mainAnswers, setMainAnswers} = useContext(Context)

    const [myAnswer, setMyAnswer] = useState(cAnswers?.id)

    function handleAns(e){
        console.log('setting myAnswer')
        setMyAnswer(e.target.value)
    }

    useEffect(() => {
        console.log('setting mainAnswers')
        if (myAnswer) setMainAnswers({...mainAnswers, [id]: myAnswer })
    }, [myAnswer])

    useEffect(() => {
        console.log(mainAnswers)
    }, [mainAnswers])

    return (
        <div className="container-question">
            <label htmlFor={id}> { question } </label>
            <textarea onChange={handleAns} id={id} defaultValue={myAnswer}></textarea>
            {/* <input type="text" id={id} /> */}
        </div>
    )
}