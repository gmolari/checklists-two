import { createContext, useEffect } from "react";
import { useState } from "react";
import checklists from "./util/checklists";

const Context = createContext()

function UserProvider({children}){

    const [check, setCheck] = useState('')
    const [type, setType] = useState('')
    const [aChecklists, setActualChecklists] = useState({})
    const [modalOpen, setModalOpen] = useState(false)
    const [modalTec, setModalTec] = useState(false)
    const [tec, setTec] = useState('')
    const [answers, setAnswers] = useState({})

    // INICIANDO TODAS AS VARIÁVEIS QUANDO O APLICATIVO INICIAR
    useEffect(() => {
        // Verificando se há type e check guardados
        const nType = localStorage.getItem('type');
        const nCheck = localStorage.getItem('check');
        const nTec = localStorage.getItem('tec');
        const nAnswers = localStorage.getItem('answers');

        // Se sim, atualizar os checks criados
        if (nType) setType(nType)
        if (nCheck) setCheck(nCheck)
        if (nTec) setTec(nTec)
        if (nAnswers) setAnswers(nAnswers)

        if (!nTec) setModalTec(true)

        // Se houver type e checks também atualizar os checklists que devem aparecer
        if (nType && nCheck) setActualChecklists(checklists[nType].checks[nCheck])
    }, [])

    // TYPE MUDA
    useEffect(() => {
        // Atualizando a memória do type se ele existir 
        type ? localStorage.setItem('type', type) : ''

        // Atualizando check
        setCheck('')
    }, [type])

    // CHECK MUDA
    useEffect(() => {
        // Atualizando a memória do check se ele existir
        check ? localStorage.setItem('check', check) : ''

        // Abrindo Modal
        setModalOpen(true)
    }, [check])

    // MODAL MUDA
    useEffect(() => {

    }, [modalOpen])

    // FUNÇÃO SWITCH PARA LIGAR E DESLIGAR MODAL
    /**
     * @param {boolean} value 
     */
    function switchModal(value) {
        setModalOpen(value)
    }

    /**
     * @param {boolean} value 
     */
    function switchModalTec(value) {
        setModalTec(value)
    }

    return (
        <Context.Provider 
            value={{
                check,
                type,
                tec,
                modalTec,
                modalOpen,
                aChecklists,
                answers,
                switchModal,
                switchModalTec,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export {Context, UserProvider}