import React from 'react'
import { Navigation,Product } from '../../Components'

const Retailer = ({producer,consumer}) => {
    return (
      <>
      <Navigation/>
      <Product producer={producer} consumer={consumer}/>
      </>
    )
  }
  
  export default Retailer