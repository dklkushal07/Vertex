import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { authenticate } from '../../apiCalls/loginApi';
import "./Login.css"
function LoginComp({ signup, signin }) {
  // async function signInFunction(){

  // }

  const navigator = useNavigate()

  const [username, setName] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [contact, setContact] = useState('')
  const [role, setRole] = useState('Consumer')

  async function signInFunction() {

    const response = await fetch('http://localhost:1337/api/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        role,
      }),
    })
    const data = await response.json()
    const {user} = data; 
    console.log(user)

    

    if (data.user) {
      window.localStorage.setItem("user",JSON.stringify(data.user))
      alert('Login successful')
      if (role == "Consumer"){
        navigator("/retailer")
      }
      else if(role=="Farmer"){
        navigator("/farmer")
      }
      else if(role=="Employee"){
        // redirect to employee dashboard
      }
    }
    else {
      alert('Please check your username,password and role')
    }
  }

  async function signUpFunction() {

    const response = await fetch('http://localhost:1337/api/register', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        address,
        contact,
        role,
      }),
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <div className='app__login-container section__padding'>
      <div className='app__login-container-title headtext white'>
        {
          signup ? (<h3>SignUp</h3>) : (<h3>SignIn</h3>)
        }

      </div>

      {
        signup && (
          <>
            <div className='app__login-container-username'>
              <label className='subtext'>Username</label><br />
              <input value={username} type={"text"} className="username" placeholder='Enter the username' required name="username" autoFocus onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='app__login-container-password'>
              <label className='subtext'>Password</label><br />
              <input value={password} type={"password"} className="password" placeholder='Enter the password' required name="password" minlength="8" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='app__login-container-address'>
              <label className='subtext'>Address</label><br />
              <input value={address} type={"text"} className="address" placeholder='Enter the address' required name="address" onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className='app__login-container-contact'>
              <label className='subtext'>Contact Number</label><br />
              <input value={contact} type={"number"} className="contact" placeholder='Enter the contact number' required name="contact" size={"10"} onChange={(e) => setContact(e.target.value)} />
            </div>
            <div className='app__login-container-select'>
              <label className='subtext'>Register As</label><br />
              <select name="roler" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Consumer" selected>Consumer</option>
                <option value="Farmer">Farmer</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
            <button type='button' className='custom__button l_btn' onClick={signUpFunction}>
              Submit
            </button>
          </>
        )
      }
      {
        signin && (
          <>
            <div className='app__login-container-username'>
              <label className='subtext'>Username</label><br />
              <input value={username} type={"text"} className="username" placeholder='Enter the username' required name="username" autoFocus onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='app__login-container-password'>
              <label className='subtext'>Password</label><br />
              <input value={password} type={"password"} className="password" placeholder='Enter the password' required name="password" minlength="8" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='app__login-container-select'>
              <label className='subtext'> Login As</label><br />
              <select name="roler" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Consumer" selected>Consumer</option>
                <option value="Farmer">Farmer</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
            <button type='button' className='custom__button l_btn' onClick={signInFunction} >
              Submit
            </button>
          </>
        )
      }


    </div>
  )
}



export default LoginComp