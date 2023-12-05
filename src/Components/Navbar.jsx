import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';


const Navbar = (props) => {

  let isLoggedin = props.isLoggedin;
  let setLogin = props.setLogin;


  return (
    <div className='flex justify-evenly'>

    <Link to ="/">
      <img src={logo} alt='logo' width={160} height={32} loading="lazy"/>
    </Link>

    <nav>
      <ul className='flex gap-3'>
         
         <li>
          <Link to ="Home">Home</Link>
         </li>
         <li>
          <Link to ="About">About</Link>
         </li>
         <li>
          <Link to ="Contact">Contact</Link>
         </li>
      </ul>
    </nav>

    <div className=' flex ml-5 mr-3 gap-3'>
      
      {
        !isLoggedin &&
        <Link to="/login">
          <button onClick={() =>{
            setLogin(true);
            toast.success("logged in succesfully")
          }}>
            Login
          </button>
        </Link>
      }

      {
        !isLoggedin &&
        <Link to="/signup">
          <button onClick={() =>{
            setLogin(true);
            toast.success("logged in succesfully")
          }}> 
            Sign Up
          </button>
        </Link>
      }

      {
        isLoggedin &&
        <Link to="/">
          <button onClick={() =>{
            setLogin(false);
            toast.success("logged out succesfully")
          }}>
            Log Out
          </button>
        </Link>
      }

      {
        isLoggedin &&
        <Link to="/dashboard">
          <button>
            Dashboard
          </button>
        </Link>
      }

    </div>

    </div>
  )
}

export default Navbar

