import { useContext } from "react"
import { Context } from "../context/Context"
import Tab from "./Tab"

export default function Tabs(){
    const {tabs, type, check, mainAnswers} = useContext(Context)

    return (
        <div className="tabs">
            <div className="container-menu">
                {tabs?.map(tab => (
                    <Tab key={tabs?.indexOf(tab)} type={tab.type} check={tab.check} answers={tab.mainAnswers}/>
                ))}
            </div>
        </div>
    )
}