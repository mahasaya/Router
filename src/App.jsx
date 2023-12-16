import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import Navbar from "./Components/Navbar"
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Dashboard from "./Pages/Dashboard"
import PrivateRoute from './Pages/PrivateRoute'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {

  const [isLoggedin, setLogin] = useState(false);

  return (
    <div className='w-screen h-screen bg-black flex flex-col overflow-x-hidden' > 
      <Navbar
        isLoggedin = {isLoggedin} 
        setLogin = {setLogin}
      />
      
      <Routes>
        
        <Route path="/" element ={<Home/>}/>
        <Route path='/login' element={<Login setLogin = {setLogin}/>}/>
        <Route path='/signup' element={<Signup setLogin={setLogin}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedin = {isLoggedin} >
            <Dashboard/>
          </PrivateRoute>
        }
        />

      </Routes>
     
    </div>
  )
}

export default App
