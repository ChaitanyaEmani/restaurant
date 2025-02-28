import React from 'react'
import './Home.css'
const Navbar = React.lazy(()=>import('../../components/Navbar/Navbar'));
const Explore_more = React.lazy(()=>import('../../components/Explore/Explore_more'));
const TodaySpecial = React.lazy(()=>import('../../components/TodaySpecial/TodaySpecial'));
const Most_liked = React.lazy(()=>import('../../components/Most_liked/Most_liked'));
const Footer = React.lazy(()=>import('../../components/Footer/Footer'));


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