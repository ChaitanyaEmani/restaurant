import React from 'react'
import Cake from '../../assets/cakes/Cakes'

const Cake_card = () => {
  return (
    <div className='container'>
        <h1>Cakes</h1>
        <div className="card-list">            
            {Cake.map((card,index)=>{
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

export default Cake_card 