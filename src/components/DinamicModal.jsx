import NameField from "./NameField"
import Button from "./Button"
import { Context } from "../context/Context"
import { useContext } from "react"

function TabName(){
    const {closeModal, newTab, modalCheck} = useContext(Context)

    function confirm(data){
        newTab(modalCheck.src)
        closeModal()
    }

    function cancel(){
        closeModal()
    }

    return (
        <>
            <h2> Novo Checklist de {modalCheck.check} </h2>
            <NameField holder={'Protocolo, OS, código...'} label={'Nome da Aba (opcional)'} name={'name-tab'}/>

            <div className="buttons">
                <Button myClass={'cancel'} content={'Cancelar'} func={cancel} data={''}/>
                <Button myClass={'confirm'} content={'Confirmar'} func={confirm} data={''}/>
            </div>
        </>
    )
}

function TecName(){
    const {closeModal, updateNameTec} = useContext(Context)

    function confirm(data){
        updateNameTec()
        closeModal()
    }

    function cancel(){
        closeModal()
    }

    return (
        <>
            <div className="name">
                <NameField holder={'Digite seu nome '} label={'Técnico Interno'} name={'name-tec'}/>
            </div>

            <div className="buttons">
                <Button myClass={''} content={'Confirmar'} func={confirm} data={''}/>
                <Button myClass={''} content={'Cancelar'} func={cancel} data={''}/>
            </div>
        </>
    )
}

const Modal = {
    tabName: <TabName />,
    tecName: <TecName />
}

export default function DinamicModal({type}) {
    console.log(type)
    return (
        <div className="container-modal">

        {
            Modal[type]
        }

        </div>
    )
}