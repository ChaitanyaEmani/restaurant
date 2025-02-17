import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Explore_more from '../../components/Explore/Explore_more'
import TodaySpecial from '../../components/TodaySpecial/TodaySpecial'
import Most_liked from '../../components/Most_liked/Most_liked'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="hero container">
            <div className="hero-caption">          
                <ul>
                    <li>Good Food</li>
                    <li>Good Mood</li>
                    <li>Great Memories</li>
                </ul>
            </div>
            
        </div>
        <div className="tags">
        <Explore_more/>
        <TodaySpecial/>
        <Most_liked/>
        <Footer/>
        </div>
        
    </div>
  )
}

export default Home