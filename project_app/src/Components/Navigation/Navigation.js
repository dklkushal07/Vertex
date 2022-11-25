import React from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <>
    <div id='home' className='flex__center section__padding app__navigation-container '>
      <div className='app_navigation-title'>
        <Link to={"/"} className="link"><h1 className='headtext app_navigation-title_name'>StoreHub</h1></Link>
      </div>
      <div className='app__navigation-menus flex__center subtext'>
        <ul className='app__navigation-menus_menuItems flex__center'>
          <li className='app__navigation-menus_menuItem'>Home</li>
          <li className='app__navigation-menus_menuItem'>About</li>
          <li className='app__navigation-menus_menuItem'>Aim</li>
        </ul>
      </div>
      <div className='app__navigation-profile subtext'>
        <Link to={"/signup"} className="link white"><h4>SignUp</h4></Link>
        <div className='app__navigation-profile_bar'></div>
        <Link to={"/signin"} className="link white"><h4>SignIn</h4></Link>
      </div>
    </div>
    </>
  )
}

export default Navigation