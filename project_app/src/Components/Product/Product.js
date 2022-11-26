import React from 'react'
import "./Product.css"
const Product = ({producer,consumer}) => {
  return (
    <div className='app__prod_container section__padding'>
      {
        producer && (
          <>
            <div className='app__prod_container-Store'>
                <h2 className='headtext'>How much to store</h2>
                <label className='subtext'>Weight in kilos</label><br/>
                <input className='p_input' type={"number"} required autoFocus max={"50"}/>
            </div>
            <div className='separator'/>
            <div className='app__prod_container-Sell'>
                <h2 className='headtext'>How much to sell</h2>
                <label className='subtext'>Weight in kilos</label><br/>
                <input className='p_input' type={"number"} required autoFocus max={"50"}/>
            </div>
          </>
        )
      }
      {
        consumer && (
          <>
          <div className='app__prod_retailer-Buy'>
            <h2 className='headtext'>Amount you want to buy</h2>
            <label className='subtext'>Weight in kilos</label><br/>
            <input type={"number"} autoFocus required max={"50"}/>
          </div>
          </>
        )
      }

        <button type='button' className='custom__button f_btn'>Confirm</button>
    </div>
  )
}

export default Product