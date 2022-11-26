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
                DELICIOUS POTATO
            </h2>
            <p className='subtext'>
                Lorem ipsum dolor sit amet adipisicing elit. Itaque ex impedit, quisquam porro obcaecati nihil? Consectetur, libero neque dolores eligendi asperiores expedita rem. Quae laboriosam dignissimos recusandae ipsam.
            </p>
            <button className='custom__button'>
                View More
            </button>
        </div>
    </div>
    </>
  )
}

export default Home