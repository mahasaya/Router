import React from 'react'
import Template from "../Components/Template"
import signImg from "../assets/signup.png"

const Signup = ({setLogin}) => {
  return (

    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond"
      desc2="Education to future-proof your career"
      image={signImg}
      formtype='signup'
      setLogin={setLogin}
    />
  )
}

export default Signup