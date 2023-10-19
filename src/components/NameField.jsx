import { useContext, useEffect, useRef} from "react"
import { Context } from "../context/Context"


export default function NameField({holder, label, name}){
    const inp = useRef()
    const {setValue} = useContext(Context)

    useEffect(() => {
        inp.current.focus()
    }, [])

    return (
        <div className="container-nfield">

            <label htmlFor={name}> {label} </label>
            <input ref={inp} id={name} onChange={(e) => setValue(e.target.value)} type="text" placeholder={holder}/>

        </div>
    )
}