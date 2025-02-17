import React from 'react'
import Gallery4 from '../../assets/gallery/Gallery4'

const Gallery_pics4 = () => {
  return (
    <div className='container'>
        <div className="card-list-3">            
            {Gallery4.map((card,index)=>{
                return <div className="card-3" key={index}>
                    <img src={card.image} alt="" />
                </div>
            })}
        </div>
    </div>
  )
}

export default Gallery_pics4