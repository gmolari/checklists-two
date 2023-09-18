import { useContext } from "react"
import { Context } from "../context/Context"
import Tab from "./Tab"

export default function Tabs(){
    const {tabs} = useContext(Context)

    return (
        <div className="tabs">
            <div className="container-menu">
                {tabs?.map(tab => (
                    <Tab key={tabs?.indexOf(tab)} me={tab}/>
                ))}
            </div>
        </div>
    )
}