import React from 'react'
import {Navigation,LoginComp,Footer} from "../../Components/index"

const Login = ({signin,signup}) => {
  
  return (
    <>
    <Navigation/>
    <LoginComp signin={signin} signup={signup}/>
    {/* <Footer/> */}
    </>
  )
}

export default Login