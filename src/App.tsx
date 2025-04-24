
import './App.css'
import { AppHeader } from './components/AppHeader'
import { AppMain } from './components/AppMain'
import { infos } from './info'

function App() {
  

  return (
    <>
     <AppHeader />
     <AppMain infos={infos} />
    </>
  )
}

export default App
