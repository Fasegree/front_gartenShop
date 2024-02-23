import React from 'react'
import { ROOT_URL } from '../../App'
import { useSelector } from 'react-redux'

export default function PopUpAddedProd({prod}) {
    const isAddToCart = useSelector(state => state.isAddToCart)
  return (
    
    <div className={`addProductToCartDiv ${isAddToCart && "show"}`}>
        <div>
            <img src={`${ROOT_URL}/${prod.image}`}/>
        </div>
        <p>
            {prod.title}
        </p>
        <p>
            {prod.currentPrice}
        </p>
    </div>
  )
}
