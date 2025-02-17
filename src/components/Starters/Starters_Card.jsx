import React from 'react'
import Starters from '../../assets/starters/Starters'

const Starters_card = () => {
  return (
    <div className='container'>
        <h1>Starters</h1>
        <div className="card-list">            
            {Starters.map((card,index)=>{
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

export default Starters_card 