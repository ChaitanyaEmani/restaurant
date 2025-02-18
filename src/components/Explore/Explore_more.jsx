import React from 'react'
import './Explore_more.css'
import Explore from '../../assets/explore/Explore'


const Explore_more = () => {
  return (
    <div className='container'>
        <h1>Explore More</h1>
        <div className="explore">     
            {Explore.map((card,index)=>{
                return <div className="card-1" key={index}>
                    <img src={card.image} alt="" />
                    <p>{card.name}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Explore_more