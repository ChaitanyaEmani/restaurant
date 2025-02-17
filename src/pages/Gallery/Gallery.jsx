

import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Gallery.css';
import Gallery_pics1 from '../../components/Gallery/Gallery_pics1';
import Gallery_pics2 from '../../components/Gallery/Gallery_pics2';
import Gallery_pics3 from '../../components/Gallery/Gallery_pics3';
import Gallery_pics4 from '../../components/Gallery/Gallery_pics4';
import Footer from '../../components/Footer/Footer';

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