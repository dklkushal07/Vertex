import React from 'react'
import "./Farmer.css"
import { Navigation,Product } from '../../Components'

const Farmer = ({producer,consumer}) => {
  return (
    <>
    <Navigation/>
    <Product producer={producer} consumer={consumer}/>
    </>
  )
}

export default Farmer