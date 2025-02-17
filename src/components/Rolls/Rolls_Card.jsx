import React from 'react'
import Roll from '../../assets/rolls/Roll'

const Rolls_card = () => {
  return (
    <div className='container'>
        <h1>Rolls</h1>
        <div className="card-list">            
            {Roll.map((card,index)=>{
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

export default Rolls_card