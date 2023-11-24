import { useContext } from "react"
import { Context } from "../Context"

const Question = (questao) => {
    const {answers} = useContext(Context)

    return (
        <div className="container-question">
            <div className="questao">
                <p>{questao}</p>
            </div>
            <div className="resposta">

            </div>
        </div>
    )
}

export default Question