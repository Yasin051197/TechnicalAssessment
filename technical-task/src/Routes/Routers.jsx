import React from 'react'
import Products from '../Containers/Products/Products'
import {BrowserRouter, Routes, Route} from "react-router-dom"

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers