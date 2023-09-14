import Question from "./Question"
import checklists from '../util/checklists'
import { useContext, useEffect } from "react"
import { Context } from "../context/Context"

export default function Form(){
    const {questions, nameQ, setMainAnswers, mainAnswers} = useContext(Context)

    useEffect(() => {
        for (const i in questions){
            if (!mainAnswers[questions.indexOf(i)]) setMainAnswers({...mainAnswers, [questions.indexOf(i)]: ''})
        }
    }, [])

    return (
        <form>
            <h2> {nameQ} </h2>
            {
                questions?.map(i => (
                    <Question key={questions.indexOf(i)} id={questions.indexOf(i)} question={i} />
                ))
            }
        </form>
    )
}