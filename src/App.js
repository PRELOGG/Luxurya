import React from 'react'
import { Header } from './components/Header'

import { Route, Routes } from 'react-router-dom'
import { Enquirey } from './components/Enquirey'
import { NotFoundPage } from './components/NotFoundPage'

export const App = () => {
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Header/>}></Route>
        <Route path='/enquiry' element={<Enquirey/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>

      </Routes>
      
    </div>
  )
}
