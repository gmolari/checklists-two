import checklists from "../util/checklists"
import { useState, useContext, useEffect } from "react"
import Button from "./Button"
import { Context } from "../context/Context"

export default function Checklists(){
    const {setCheck, type} = useContext(Context)

    const [checks, setChecks] = useState([])
    
    if (checks.length <= 0){
        for(const i in checklists[type]?.checks){
            checklists[type]?.checks[i] ? checks?.push({name: checklists[type]?.checks[i]?.name[0], src: checklists[type]?.checks[i]?.name[1]}) : ''
        }
    }

    function handleCheck(src){
        setCheck(src)
    }

    return (
        <aside className="checklists">
            <div className="container-menu">
                {
                    checks?.map(i => (
                        <Button key={checks.indexOf(i)} func={handleCheck} data={i.src} content={i.name} />
                    ))
                }
            </div>
        </aside>
    )
}