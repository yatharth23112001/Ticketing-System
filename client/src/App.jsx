import { useState } from 'react'
import { Navbar, Sign_in, Footer} from './components'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='App'> 
        <Navbar/>
        <Sign_in/>
        <Footer/>
    </div>
  )
}

export default App
