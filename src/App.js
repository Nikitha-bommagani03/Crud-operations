import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GetUsers from './Pages/GetUsers'
import Add from './Pages/AddUsers'
import UpdateUsers from './Pages/UpdateUsers'

const App = () => {
  return (
    <BrowserRouter>
   <Routes>
   <Route path='/' element={<GetUsers/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/edit/:id' element={<UpdateUsers/>}/>
   </Routes>
    </BrowserRouter>
  )
}
export default App
