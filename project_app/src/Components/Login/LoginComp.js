import React from 'react'
import "./Login.css"
const LoginComp = ({signup,signin}) => {
  return (
    <div className='app__login-container section__padding'>
      <div className='app__login-container-title headtext white'>
        {
          signup ? (<h3>SignUp</h3>) : (<h3>SignIn</h3>)
        }
        
      </div>
      <div className='app__login-container-username'>
        <label className='subtext'>Username</label><br/>
        <input type={"text"} className="username" placeholder='Enter the username' required name="username" autoFocus/>
      </div>
      <div className='app__login-container-password'>
        <label className='subtext'>Password</label><br/>
        <input type={"password"} className="password" placeholder='Enter the password' required name="password"  minlength="8"/>
      </div>
      {
        signup && (
          <>
            <div className='app__login-container-address'>
              <label className='subtext'>Address</label><br/>
              <input type={"text"} className="address" placeholder='Enter the username' required name="address"/>
            </div>
            <div className='app__login-container-contact'>
              <label className='subtext'>Contact Number</label><br/>
              <input type={"number"} className="contact" placeholder='Enter the username' required name="contact" size={"10"}/>
            </div>
            <div className='app__login-container-select'>
              <label className='subtext'> Are you farmer or consumer?</label><br/>
              <select name="roler">
                <option value="none" selected>Consumer</option>
                <option value="male">Farmer</option>
              </select>
            </div>
          </>
        )
      }

      <button type='button' className='custom__button l_btn'>
        Submit
      </button>
    </div>
  )
}

export default LoginComp