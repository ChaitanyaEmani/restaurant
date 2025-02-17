import React from 'react'
import './TodaySpecial.css'
import Today_special from '../../assets/today_special/Today_special'

const TodaySpecial = () => {
  return (
    <div className='container'>
    <h1>Today's Special</h1>
    <div className="card-list">            
        {Today_special.map((card,index)=>{
            return <div className="card-2" key={index}>
                <img src={card.image} alt="" />
                <div className="caption-2">
                <p>{card.name}</p>
                </div>
                
            </div>
        })}
    </div>
   </div>
  )
}

export default TodaySpecial