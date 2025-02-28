

import React from 'react'
const Navbar = React.lazy(()=>import('../../components/Navbar/Navbar'));
import './Gallery.css';
const Gallery_pics1 = React.lazy(()=>import('../../components/Gallery/Gallery_pics1'));
const Gallery_pics2 = React.lazy(()=>import('../../components/Gallery/Gallery_pics2'));
const Gallery_pics3 = React.lazy(()=>import('../../components/Gallery/Gallery_pics3'));
const Gallery_pics4 = React.lazy(()=>import('../../components/Gallery/Gallery_pics4'));
const Footer = React.lazy(()=>import('../../components/Footer/Footer'));

const Gallery = () => {
  return (
    <div>
    <Navbar/>
    <div className="gallery container">
        <div className="gallery-caption">          
            <h2>Gallery</h2>
        </div>
    </div>
    <Gallery_pics1/>
    <Gallery_pics2/>
    <Gallery_pics3/>
    <Gallery_pics4/>
    <Footer/>
    </div>
  )
}

export default Gallery