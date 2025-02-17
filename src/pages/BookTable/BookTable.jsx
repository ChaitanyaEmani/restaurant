import React from 'react'
import './BookTable.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const BookTable = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <h1 className='heading'>Book a Table</h1>
            <form className='book-table'>
               <label>Your name</label>
               <input type='text' name='name' placeholder='Enter your name' required/>
               <label>Your email</label>
               <input type='email' name='email' placeholder='Enter your email' required/>
               <label>Mobile Number</label>
               <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
               <label>Time</label>
               <input  type='text' name='time' placeholder='Enter time' required/>
               <label>Number of Persons</label>
               <input type='number' name='number' placeholder='Enter the no. of persons' required/>
               <label>Special Requests</label>
               <textarea name='requests' rows="6" placeholder='Enter your requests' required/>
               <button type='submit' className='btn'>Submit now</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default BookTable