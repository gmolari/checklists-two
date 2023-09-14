import { UserProvider } from './context/Context'
import Form from './components/Form'
import Menu from './components/Menu'
import Checklists from './components/Checklists'
import Tabs from './components/Tabs'
import { useState } from 'react'

function App() {

  const [keyCheck, setKeyCheck] = useState(Math.random())

  return (
    <UserProvider>

        <div className="main-container">

          <aside className="first-menu">
            <Menu keyCheck={setKeyCheck}/>
            <Tabs />
          </aside>

          <main className="container-form">
            <Form />
          </main>

          <Checklists key={keyCheck}/>
        
        </div>

    </UserProvider>
  )
}

export default App
