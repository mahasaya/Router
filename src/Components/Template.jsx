import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from 'react-icons/fc'

const Template = ({title,desc1,desc2, image, formtype, setLogin}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] justify-between py-12 mx-auto gap-x-12 gap-y-0'>
        <div>
            <h1 className=' text-gray-50 font-semibold text-[1.875rem] leading-[2.357rem]'>
                {title}
            </h1>
            
            <p className='text-[1.25rem] leading[1.65rem] mt-4'>
                <span className=' text-gray-400  '>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ?
            (<SignupForm setLogin={setLogin}/>):
            (<LoginForm setLogin={setLogin}/>)
            }

            <div className=' flex  items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-gray-600  '></div>
                <p className=' text-gray-500 font-medium leading-[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-gray-600 '></div>
            </div>


            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-gray-500 border border-gray-600 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>
                    Sign Up with Google
                </p>
            </button>

        </div>

        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frameImage}
                alt='pattern'
                width={558}
                height={504}
                loading='lazy'
            />

            <img src={image}
                alt='Students'
                width={450}
                height={400}
                loading='lazy' 
                className='absolute -top-4 right-4  ' 
            />
        </div>    

    </div>
  )
}

export default Template