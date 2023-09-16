import { Context } from './context/Context'
import Form from './components/Form'
import Menu from './components/Menu'
import Checklists from './components/Checklists'
import Tabs from './components/Tabs'
import DinamicModal from './components/DinamicModal'
import { useContext, useState } from 'react'
import ReactModal from 'react-modal'
import customStyles from './util/modalStyles'

function App() {

  const [keyCheck, setKeyCheck] = useState(Math.random())
  const {keyForm, modal, typeModal} = useContext(Context)

  return (
      <div className="main-container">

        <aside className="first-menu">
          <Menu keyCheck={setKeyCheck}/>
          <Tabs />
        </aside>

        <main className="container-form">
          <Form key={keyForm}/>
        </main>

        <Checklists key={keyCheck}/>

        <ReactModal
          isOpen={modal}
          style={customStyles}
        >

          <DinamicModal type={typeModal} />

        </ReactModal>

      </div>
  )
}

export default App
