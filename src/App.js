import React from 'react'
import { Header } from './components/Header'

import { Route, Routes } from 'react-router-dom'
import { Enquirey } from './components/Enquirey'

export const App = () => {
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Header/>}></Route>
        <Route path='/enquiry' element={<Enquirey/>}></Route>

      </Routes>
      
    </div>
  )
}
