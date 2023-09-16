import { useContext} from "react"
import { Context } from "../context/Context"


export default function NameField({holder, label, name}){

    const {setValue} = useContext(Context)

    return (
        <div className="container-nfield">

            <label htmlFor={name}> {label} </label>
            <input id={name} onChange={(e) => setValue(e.target.value)} type="text" placeholder={holder}/>

        </div>
    )
}