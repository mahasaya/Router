import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

 const SignupForm = (props) => {

    let setLogin = props.setLogin;
    const navigate = useNavigate();

    const[accountType,setAccount] = useState("Student")

    const [formData, setData] = useState({
        firstName : "", 
        lastName : "",
        email : "",
        password : '',
        confirmpassword : ""
     })

     const [showpassword, setpassword] = useState(false)
     const [showpassword1, setpassword1] = useState(false)
 
     function changeHandler (event){
        setData((prevData) => ({
            ...prevData,
        [event.target.name] : event.target.value
        }))
     }

     function submitHandler(event){
            event.preventDefault();
            if(formData.password != formData.confirmpassword){
                toast.error("password do not match")
                return;
            }

            setLogin(true);
            toast.success("Account Created")
            const accountData = {
                ...formData
            };
            console.log (accountData);

            navigate("/dashboard");
     }

     

   return (
     <div>

        <div className='flex bg-gray-800 gap-x-1 my-6 rounded-full max-w-max p-1'>
            <button
                className={`${accountType === "Student"
                ?
                "bg-gray-900 text-gray-50"
                :
                "bg-transparent text-gray-400 "
                } py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>{
                    setAccount("Student")
                }}
            >
                Student
            </button>
            <button
                className={`${accountType === "Instructor"
                ?
                "bg-gray-900 text-gray-50"
                :
                "bg-transparent text-gray-400 "
                } py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>{
                    setAccount("Instructor")
                }}
            >
                Instructor
            </button>
        </div>


        <form className='flex flex-col w-full gap-4 mt-6 '
        onSubmit={submitHandler}>

            <div className=' flex  gap-5'>
                <label className='w-full'>
                    <p className=' text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>First Name <sup className=' text-pink-500'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={formData.firstName}
                        className='bg-gray-600 rounded-[0.5rem] text-gray-300 w-full p-[12px] '
                    />


                </label>

                <label className='w-full'>
                    <p className=' text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>Last Name <sup className=' text-pink-500'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='lastName'
                        onChange={changeHandler}
                        placeholder='Enter last Name'
                        value={formData.lastName}
                        className='bg-gray-600 rounded-[0.5rem] text-gray-300 w-full p-[12px] '
                    />


                </label>
            </div>
            

                <label className='w-full'>
                    <p className=' text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>Email Address <sup className=' text-pink-500'>*</sup></p>
                    <input
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email}
                        className='bg-gray-600 rounded-[0.5rem] text-gray-300 w-full p-[12px] '
                    />
                 </label>

            <div className=' flex  gap-5'>   

                <label className='w-full relative'>
                    <p className=' text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>Create Password</p>
                    <input
                        required
                        type= {showpassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.password}
                        className='bg-gray-600 rounded-[0.5rem] text-gray-300 w-full p-[12px] '
                    />
                    <span className='absolute right-3 top-10 cursor-pointer'
                        onClick={() =>{
                        setpassword((prev)=> !prev) 
                        }}>
                        {showpassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className=' text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>Confirm Password</p>
                    <input
                        required
                        type= {showpassword1 ? ("text") : ("password")}
                        name='confirmpassword'
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={formData.confirmpassword}
                        className='bg-gray-600 rounded-[0.5rem] text-gray-300 w-full p-[12px] '
                    />
                    <span className='absolute right-3 top-10 cursor-pointer'
                        onClick={() =>{
                        setpassword1((prev)=> !prev)
                        }}>
                        {showpassword1 ?  (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                    </span>
                </label>
            </div>
            
            <button className='bg-yellow-300 rounded-[8px] font-medium text-gray-800 px-[12px] py-[8px] mt-7 w-full ' type="submit" >
                Create Account
            </button>
        </form>

     </div>
   )
 }
 
 export default SignupForm