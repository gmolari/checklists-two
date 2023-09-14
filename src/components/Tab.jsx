import { useEffect, useState } from "react"

export default function Tab({name, type, check, answers}){
    const [active, setActive] = useState(true)

    useEffect(() => {

    }, [])

    return (
        <div className="tab">
            {name ? name: 'new tab'}
        </div>
    )
}