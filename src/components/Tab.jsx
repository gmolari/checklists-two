import { useContext, useEffect, useState } from "react"
import { Context } from "../context/Context"

export default function Tab({name, type, check, answers}){
    const {clickTab} = useContext(Context)

    const [active, setActive] = useState(true)

    function hanldeMe(){
        setActive(true)
        clickTab(type, check, answers)
    }

    useEffect(() => {

    }, [])

    return (
        <div className="tab">
            {name ? name: 'new tab'}
        </div>
    )
}