import { UserProvider } from './context/Context'
import Form from './components/Form'

function App() {

  return (
    <UserProvider>

      <main>

        <div className="container-form">
          <Form />
        </div>
      
      </main>

    </UserProvider>
  )
}

export default App
