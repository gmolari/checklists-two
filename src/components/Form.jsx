import Question from "./Question"
import checklists from '../util/checklists'
import { useContext } from "react"
import { Context } from "../context/Context"

export default function Form(){
    const {questions} = useContext(Context)

    return (
        <form>
            {
                questions?.map(i => (
                    <Question key={questions.indexOf(i)} id={questions.indexOf(i)} question={i} />
                ))
            }
        </form>
    )
}