import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import Navbar from "./Components/Navbar"
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Dashboard from "./Pages/Dashboard"

function App() {

  const [isLoggedin, setLogin] = useState(false);

  return (
    <div> 
      <Navbar
        isLoggedin = {isLoggedin} 
        setLogin = {setLogin}
      />
      
      <Routes>
        
        <Route path="/" element ={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
     
    </div>
  )
}

export default App
