import React from 'react'
import Gallery1 from '../../assets/gallery/Gallery1'
// import './Gallery_pics.css'

const Gallery_pics1 = () => {
  return (
    <div className='container'>
        <div className="card-list-3">            
            {Gallery1.map((card,index)=>{
                return <div className="card-3" key={index}>
                    <img src={card.image} alt="" />
                </div>
            })}
        </div>
    </div>
  )
}

export default Gallery_pics1