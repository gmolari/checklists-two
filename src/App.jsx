import { Context } from './context/Context'
import Form from './components/Form'
import Menu from './components/Menu'
import Checklists from './components/Checklists'
import Tabs from './components/Tabs'
import { useContext, useState } from 'react'

function App() {

  const [keyCheck, setKeyCheck] = useState(Math.random())
  const {keyForm} = useContext(Context)

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

      </div>
  )
}

export default App
