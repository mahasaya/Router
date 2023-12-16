import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';


const Navbar = (props) => {

  let isLoggedin = props.isLoggedin;
  let setLogin = props.setLogin;


  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

    <Link to ="/">
      <img src={logo} alt='logo' width={160} height={32} loading="lazy"/>
    </Link>

    <nav>
      <ul className='   text-gray-300 flex gap-x-6'>
         
         <li>
          <Link to ="/">Home</Link>
         </li>
         <li>
          <Link to ="about">About</Link>
         </li>
         <li>
          <Link to ="contact">Contact</Link>
         </li>
      </ul>
    </nav>

    <div className='  text-gray-300 flex items-center gap-x-6'>
      
      {
        !isLoggedin &&
        <Link to="/login">
          <button className=' bg-gray-800  text-gray-300 py-[8px] px-[12px] rounded-[8px] border border-gray-600' onClick={() =>{
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
          <button className=' bg-gray-800  text-gray-300 py-[8px] px-[12px] rounded-[8px] border border-gray-600' onClick={() =>{
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
          <button className=' bg-gray-800 text-gray-300 py-[8px] px-[12px] rounded-[8px] border border-gray-600' onClick={() =>{
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
          <button className=' bg-gray-800 text-gray-300 py-[8px] px-[12px] rounded-[8px] border border-gray-600'>
            Dashboard
          </button>
        </Link>
      }

    </div>

    </div>
  )
}

export default Navbar

