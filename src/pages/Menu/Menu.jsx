import React from 'react'
import './Menu.css'
import Navbar from '../../components/Navbar/Navbar'
import Biryani_card from '../../components/Biryani/Biryani_card'
import Chinese_card from '../../components/Chinese/Chinese_card'
import Footer from '../../components/Footer/Footer'
import Cake_card from '../../components/Cakes/Cake_card'
import Noodles_card from '../../components/Noodles/Noodles_card'
import Rolls_card from '../../components/Rolls/Rolls_Card'
import Starters_card from '../../components/Starters/Starters_Card'

const Menu = () => {
  return (
    <div>
        <Navbar/>
        <div className="menu container">
            <div className="menu-caption">          
                <h2>Menu</h2>
            </div>
        </div>
        <Biryani_card/>
        <Cake_card/>
        <Noodles_card/>
        <Rolls_card/>
        <Starters_card/>
        <Chinese_card/>
        <Footer/>
    </div>
  )
}

export default Menu 