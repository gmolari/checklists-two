import { useContext, useEffect, useState } from "react"
import { Context } from "../context/Context"
import delSvg from "../assets/svg/x.svg"

export default function Tab({me}){
    const {clickTab, activeTab, deleteTab} = useContext(Context)
    const [active, setActive] = useState()

    function handleMe(){
        clickTab(me)
    }

    useEffect(() => {
        if (activeTab == me.id) setActive(true)
        else setActive(false)
    }, [])

    return (
        <div onClick={handleMe} title={me.name} className={active ? "tab active" : "tab inactive"}>
            <div className="tab-name">
                <div>{me?.name ? me.name : 'new tab'}</div>
            </div>
            <div onClick={() => deleteTab(me.id)} className="tab-x">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#040D12" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
        </div>
    )
}