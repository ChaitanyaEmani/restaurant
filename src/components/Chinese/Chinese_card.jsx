import React from 'react'
import Chinese from '../../assets/chinese/Chinese'

const Chinese_card = () => {
  return (
    <div className='container'>
        <h1>Chinese</h1>
        <div className="card-list">            
            {Chinese.map((card,index)=>{
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

export default Chinese_card 