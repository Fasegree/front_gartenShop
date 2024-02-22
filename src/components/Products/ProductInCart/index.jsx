import React from 'react'
import s from './ProductInCart.module.css'
import { ROOT_URL, isPage } from '../../../App'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {  removeFromCartPositionAction } from '../../../store/cartReducer';
import Control from '../../../ui/Btns/Control';



export default function ProductInCart({ productsCart }) {

  const dispatch = useDispatch()
  // const { id } = useParams();


  return (
    <div className={s.cardsWrapper}>
      {productsCart?.map(prod => {
        
        return (
          <div key={prod.id} className={s.cardWrapper} >
            <button className={s.close} onClick={() => dispatch(removeFromCartPositionAction(prod))}>
            x</button>
            <Link to={`/categories/${prod.categoryId}/${prod.id}`}>

              <div className={s.img} style={{ backgroundImage: `url(${ROOT_URL}/${prod.image})` }}></div>
            </Link>

            <div className={s.cardInfo}>
              <div className={s.title}>{prod.title}</div>

              <div className={s.controllAll}>
                <Control product={prod} page={isPage.cart} />


                <div className={s.cardPriceContainer}>
                  <div className={s.cardPrice}>
                    {prod.discont_price ? <p className={s.currentPrice}> ${prod.discont_price}</p> : <p className={s.currentPrice}> ${prod.price}</p>}
                    {prod.discont_price && <p className={s.oldPrice}>${prod.price}</p>}
                    {/* {prod.discont_price && <div className={s.discount}>{`-${Math.round(100 - prod.discont_price * 100 / prod.price)}%`}</div>} */}
                  </div>
                </div>


              </div>

            </div>

          </div>




        )
      })}



    </div>
  )
}
