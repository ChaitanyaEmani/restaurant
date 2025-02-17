import React from 'react'
import Gallery3 from '../../assets/gallery/Gallery3'

const Gallery_pics3 = () => {
  return (
    <div className='container'>
        <div className="card-list-3">            
            {Gallery3.map((card,index)=>{
                return <div className="card-3" key={index}>
                    <img src={card.image} alt="" />
                </div>
            })}
        </div>
    </div>
  )
}

export default Gallery_pics3