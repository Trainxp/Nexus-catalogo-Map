import React from 'react'
import  "./ItemCssGeneral.css"

export const item = ({item}) => {
  return (
    <div className='card'  >
    <p className='nombreCard' >{item.name}</p>
    <p className='stock' > stock {item.stock}</p>
    <img src={item.img} alt=""   />
    <p className='precio'>precio ${item.price}</p>
</div>
  )
}

export default item;


