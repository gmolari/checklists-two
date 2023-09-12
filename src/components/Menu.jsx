import checklists from "../util/checklists"
import { useState, useContext } from "react"
import Button from "./Button"
import { Context } from "../context/Context"

export default function Menu(){
    const {setType} = useContext(Context)

    const [types, setTypes] = useState([])
    
    if (types.length <= 0){
        for(const i in checklists){
            checklists[i] ? types?.push({name: checklists[i].name, src: checklists[i].src}) : ''
        }
    }

    function handleType(src){
        setType(src)
    }

    return (
        <aside className="menu">
            {
                types?.map(i => (
                    <Button key={types.indexOf(i)} func={handleType} data={i.src} content={i.name} />
                ))
            }
        </aside>
    )
}