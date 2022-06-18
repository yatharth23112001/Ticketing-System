import { useState } from 'react'
import { Navbar, Welcome, Footer} from './components'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  const [components, setComponents] = useState({
    "navbar": true, 
    "welcome": true,
    "footer": true
  })

  return (
    <div className='App'>
        {components["navbar"] && <Navbar/>}
        {components["welcome"] && <Welcome/>}
        {components["footer"] && <Footer/>}
    </div>
  )
}

export default App
