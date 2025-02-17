import React from 'react'
import Noodles from '../../assets/noodles/Noodles'

const Noodles_card = () => {
  return (
    <div className='container'>
        <h1>Noodles</h1>
        <div className="card-list">            
            {Noodles.map((card,index)=>{
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

export default Noodles_card