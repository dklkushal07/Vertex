import React from 'react'
import {Home,Login} from "./Pages/index"
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
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App