import React from 'react'
import {Home,Login,Farmer,Profile} from "./Pages/index"
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/signup' element={<Login signup={true}/>}/>
        <Route path='/signin' element={<Login signin={true}/>}/>
        <Route path="/farmer" element={<Farmer producer={true}/>}/>
        <Route path="/retailer" element={<Farmer consumer={true}/>}/>
        <Route path="/profile/consumer" element={<Profile consumer={true}/>}/>
        <Route path="/profile/producer" element={<Profile producer={true}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App