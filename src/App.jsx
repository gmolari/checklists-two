import { UserProvider } from './context/Context'
import Form from './components/Form'
import Menu from './components/Menu'
import Checklists from './components/Checklists'
import { useState } from 'react'

function App() {

  const [keyCheck, setKeyCheck] = useState(Math.random())

  return (
    <UserProvider>

        <div className="main-container">

          <Menu keyCheck={setKeyCheck}/>

          <main className="container-form">
            <Form />
          </main>

          <Checklists key={keyCheck}/>
        
        </div>

    </UserProvider>
  )
}

export default App
