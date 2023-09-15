import { useContext, useEffect, useState } from "react"
import { Context } from "../context/Context"

export default function Tab({me}){
    const {clickTab, activeTab} = useContext(Context)
    const [active, setActive] = useState()

    function handleMe(){
        clickTab(me)
    }

    useEffect(() => {
        if (activeTab == me.id) setActive(true)
        else setActive(false)
    }, [])

    return (
        <div onClick={handleMe} className={active ? "tab active" : "tab inactive"}>
            {me?.name ? me.name : 'new tab'}
        </div>
    )
}