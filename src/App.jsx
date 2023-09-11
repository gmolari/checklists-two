import checklists from './util/checklists'
import { UserProvider } from './context/Context'

function App() {

  console.log(checklists)

  return (
    <UserProvider>

      {
        checklists?.attendance?.checks?.fiber?.questions?.map(i => (
          <p>{i}</p>
        ))
      }

    </UserProvider>
  )
}

export default App
