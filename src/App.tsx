
import './App.css'
import { AppHeader } from './components/AppHeader'
import { AppMain } from './components/AppMain'
import { ways } from './info'


function App() {
  return (
    <>
     <AppHeader />
     <AppMain ways={ways} />
    </>
  )
}

export default App
