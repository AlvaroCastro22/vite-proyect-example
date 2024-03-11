import { useState } from 'react'
import NavBar from './components/navbar'
import Events from './components/Events'
import SignupForm from './components/SignUpForm'
import './App.css'

function App() {
  const [searchTerm,setSearchTerm] = useState("")
  const handleNavbarSearch = (value) => {
    setSearchTerm(value)

  }

  return (
    <>
    <NavBar onSearch={handleNavbarSearch}/>
      <Events searchTerm={searchTerm}/>
    
      {/*<SignupForm/>*/}
    </>
  )
}

export default App
