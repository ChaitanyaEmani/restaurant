import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Menu from './pages/Menu/Menu'
import Gallery from './pages/Gallery/Gallery'
import BookTable from './pages/BookTable/BookTable'

const App = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/booktable' element={<BookTable/>}/>
      </Routes>
      
    
  )
}

export default App