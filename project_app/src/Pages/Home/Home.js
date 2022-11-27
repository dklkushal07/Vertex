import React from 'react'
import {Navigation} from "./../../Components/index"
import "./Home.css"
import  {potato} from '../../assets/index'

const Home = () => {
  return (
    <>
    <Navigation/>
    <div className='home__body'>
        <div  className='home__body-imageContainer'>
            <img src={potato} alt='image'/>
        </div>
        <div className='home__body-contents '>
            <h2 className='headtext'>
                About Us
            </h2>
            <p className='subtext'>
            A web-based system that can be accessed by the farmers and consumers and is managed and monitored by storehouse.
            </p>
            {/* <button className='custom__button'>
                View More
            </button> */}
        </div>
    </div>
    </>
  )
}

export default Home