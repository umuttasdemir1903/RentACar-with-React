import React from 'react'
import { CarList } from '../helper/CarList'
function Car() {
  return (
    <div className='cars'>
      <h1 className='carTitle'>Our Cars</h1>
      <div className='carList' >
        {CarList.map((carItem,key)=>{
          return <div className='carItem'>
            <div> <img src={carItem.image}  /> </div>
            <h3>{carItem.name}</h3>
            <p>{carItem.price}</p>
            <button className='btn'>Rent Now</button>
          </div> 
        })}
      </div>
    </div>
  )
}

export default Car
