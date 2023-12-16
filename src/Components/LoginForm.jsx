import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom"



const LoginForm = (props) => {

  const navigate = useNavigate();
  let setLogin = props.setLogin;

  const [formData, setFormData] = useState({
    email:"", password:""
  })
  
  const [showPassword , setPassword] = useState(false);
  
  function changeHandler(event){
    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name] : event.target.value
       }
    )
  
    )
  }

  function submitHandler(event){
    event.preventDefault();
    setLogin(true);
    toast.success("Logged in ");
    navigate("/dashboard")
  }

  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6 '>
      
      <label className='w-full '>
        <p className=' text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]' >
          E-mail Address <sup className=' text-pink-500'>*</sup>
        </p>
    

        <input 
          placeholder='Enter email address'
          required
          type='email'
          value = {formData.email}
          onChange={changeHandler}
          name='email'
          className='bg-gray-600 rounded-[0.5rem] text-gray-300 w-full p-[12px] '
        />

      </label>

      <label className='w-full relative'>
          <p className=' text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]' >
            Password <sup className=' text-pink-500'>*</sup>
          </p>
      

        <input 
          placeholder='Enter passoword'
          required
          type={showPassword ? ("text") : ("password")}
          value = {formData.password}
          onChange={changeHandler}
          name ="password"
          className='bg-gray-600 rounded-[0.5rem] text-gray-300 w-full p-[12px] ' 
        />

        <span className='absolute right-3 top-[38px] cursor-pointer'
        onClick={() =>{
          setPassword((prev)=> !prev)
        }}>
          {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
        </span>
      
        <Link to = "#">
          <p className='text-xs mt-1 text-blue-500 max-w-max ml-auto'>
            Forogt Password
          </p>
        </Link>

      </label>      

       <button className='bg-yellow-300 rounded-[8px] font-medium text-gray-800 px-[12px] py-[8px] mt-7 ' type="submit">
        Sign-in
       </button>   
    </form>
  )
}

export default LoginForm