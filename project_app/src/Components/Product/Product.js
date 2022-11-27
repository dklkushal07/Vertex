import React,{useState} from 'react'
import "./Product.css"
const Product = ({producer,consumer}) => {

  const [weight,setWeight] = useState({
    weightSell:0,
    weightStore:0
  })

  const handleChange = name => e =>{
    console.log("c")
    if(name == "weightStore"){
      setWeight({...weight,weightStore:e.target.value})
    }else{
      setWeight({...weight,weightSell:e.target.value})
    }
  }

  const sendStock = async () => {
    const f_id = JSON.parse( window.localStorage.getItem("user"))
    // console.log();
    const url = "http://localhost:1337/api/upload/stock"

    const response = await fetch(url,{
      method:"POST",
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        weightSell:weight.weightSell,
        weightStore:weight.weightStore,
        farmer:f_id._id
      })
    })

    const data = await response.json()
  }

  return (
    <div className='app__prod_container section__padding'>
      {
        producer && (
          <>
            <div className='app__prod_container-Store'>
                <h2 className='headtext'>How much to store</h2>
                <label className='subtext'>Weight in kilos</label><br/>
                <input className='p_input' type={"number"} value={weight.weightStore} onChange={handleChange("weightStore")} required autoFocus max={"50"}/>
            </div>
            <div className='separator'/>
            <div className='app__prod_container-Sell'>
                <h2 className='headtext'>How much to sell</h2>
                <label className='subtext'>Weight in kilos</label><br/>
                <input className='p_input' type={"number"} value={weight.weightSell} onChange={handleChange("weightSell")} required autoFocus max={"50"}/>
            </div>
            <button type='button' className='custom__button f_btn' onClick={sendStock}>Confirm</button>
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
          <button type='button' className='custom__button f_btn' >Confirm</button>
          </>
        )
      }
      
    </div>
  )
}

export default Product