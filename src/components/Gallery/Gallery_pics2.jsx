import React from 'react'
import Gallery2 from '../../assets/gallery/Gallery2'

const Gallery_pics2 = () => {
  return (
    <div className='container'>
        <div className="card-list-3">            
            {Gallery2.map((card,index)=>{
                return <div className="card-3" key={index}>
                    <img src={card.image} alt="" />
                </div>
            })}
        </div>
    </div>
  )
}

export default Gallery_pics2