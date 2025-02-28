import React from 'react'
import './Menu.css'
const Navbar = React.lazy(()=>import('../../components/Navbar/Navbar'));
const Biryani_card = React.lazy(()=>import('../../components/Biryani/Biryani_card'));
const Chinese_card = React.lazy(()=>import('../../components/Chinese/Chinese_card'));
const Footer = React.lazy(()=>import('../../components/Footer/Footer'));
const Cake_card = React.lazy(()=>import('../../components/Cakes/Cake_card'));
const Noodles_card = React.lazy(()=>import('../../components/Noodles/Noodles_card'));

import Rolls_card from '../../components/Rolls/Rolls_Card';
import Starters_card from '../../components/Starters/Starters_Card';

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