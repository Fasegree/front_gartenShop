import React, { useEffect } from 'react'
import { ROOT_URL } from '../../App'
import { useSelector } from 'react-redux'
import s from './PopUpAddedProd.module.css'

export default function PopUpAddedProd() {
    const isAddToCart = useSelector(state => state.isAdd)
    const products = useSelector(state => state.cart)
    const prod = products.slice().pop();

  return (
    
    <div className={`${s.addProductToCartDiv} ${isAddToCart && s.show}`}>


        <div className={s.cardWrapper} >
       

              <div className={s.img} style={{ backgroundImage: `url(${ROOT_URL}/${prod?.image})` }}></div>
        

            <div className={s.cardInfo}>
              <h4>Added in cart</h4>
              <div className={s.title}>{prod?.title}</div>

              <div className={s.controllAll}>


                <div className={s.cardPriceContainer}>
                  <div className={s.cardPrice}>
                    {prod?.discont_price ? <p className={s.currentPrice}> ${prod?.discont_price}</p> : <p className={s.currentPrice}> ${prod?.price}</p>}
                    {prod?.discont_price && <p className={s.oldPrice}>${prod?.price}</p>}
                     </div>
                </div>


              </div>

            </div>

          </div>
    </div>
  )
}
