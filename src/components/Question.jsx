import {useContext, useEffect, useState } from "react"
import { Context } from "../context/Context"

export default function Question({question, ans, id}){
    const [myAns, setMyAns] = useState(ans ? ans : '')

    const {type, check, mainAnswers} = useContext(Context)

    function handleAns(e){
        setMyAns(e.target.value)
    }

    useEffect(() => {
        //setar o ans total como esse

    }, [myAns])

    return (
        <div className="container-question">
            <label htmlFor={id}> { question } </label>
            <textarea onChange={handleAns} id={id} defaultValue={ans ? ans : ''}></textarea>
            {/* <input type="text" id={id} /> */}
        </div>
    )
}