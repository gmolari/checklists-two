import checklists from "../util/checklists"
import { useState, useContext } from "react"
import Button from "./Button"
import { Context } from "../context/Context"

export default function Checklists(){
    const {type, setTypeModal, setModalCheck} = useContext(Context)

    const [checks, setChecks] = useState([])
    
    if (checks.length <= 0){
        for(const i in checklists[type]?.checks){
            checklists[type]?.checks[i] ? checks?.push({name: checklists[type]?.checks[i]?.name[0], src: checklists[type]?.checks[i]?.name[1]}) : ''
        }
    }

    function handleCheck(data){
        setModalCheck(data)
        setTypeModal('tabName')
    }

    return (
        <aside className="checklists">
            <div className="container-menu">
                {
                    checks.length > 0 && <h2 className="check">
                        CHECKLISTS
                    </h2>
                }
                {
                    checks?.map(i => (
                        <Button key={checks.indexOf(i)} myClass={'button-check'} func={handleCheck} data={{src: i.src, check: i.name}} content={i.name} />
                    ))
                }
            </div>
        </aside>
    )
}