import React from 'react'
import Biryani from '../../assets/biryanis/Biryani'

const Biryani_card = () => {
  return (
    <div className='container'>
        <h1>Biryani</h1>
        <div className="card-list">            
            {Biryani.map((card,index)=>{
                return <div className="card" key={index}>
                    <img src={card.image} alt="" />
                    <p>{card.name}</p>
                    <p>{card.price}</p>
                    <button className='btn btn-1'>Order now</button>
                </div>
            })}
        </div>
    </div>
  )
}

export default Biryani_card