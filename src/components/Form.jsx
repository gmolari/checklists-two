import Question from "./Question"
import checklists from '../util/checklists'

export default function Form(){
    const questions = checklists?.attendance?.checks?.fiber?.questions

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