import { UserProvider } from './context/Context'
import Form from './components/Form'
import Menu from './components/Menu'

function App() {

  return (
    <UserProvider>

        <div className="main-container">

          <Menu />

          <main className="container-form">
            <Form />
          </main>
        
        </div>

    </UserProvider>
  )
}

export default App
