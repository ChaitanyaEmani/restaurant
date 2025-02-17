import React from 'react'
import Most_liked1 from '../../assets/most_liked_items/Most_liked1'


const Most_liked = () => {
  return (
    <div className='container'>
    <h1>Most liked Items</h1>
    <div className="card-list">            
        {Most_liked1.map((card,index)=>{
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

export default Most_liked