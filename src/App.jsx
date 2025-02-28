import React from 'react'
const Home = React.lazy(()=>import('./pages/Home/Home'));
// import Home from ''
const Menu = React.lazy(()=>import('./pages/Menu/Menu'));
const Gallery = React.lazy(()=>import('./pages/Gallery/Gallery'));
const BookTable = React.lazy(()=>import('./pages/BookTable/BookTable'));
import { Routes, Route } from 'react-router-dom'


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