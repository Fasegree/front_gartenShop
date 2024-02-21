import React from 'react'
import s from './style.module.css'
import { ROOT_URL } from '../../../App'
import Control from '../../../ui/Btns/Control';
import ShowDescription from '../../ShowDescription';
import { isPage } from '../../../CONSTANTS';

export default function GridOneProduct({ prod }) {
  console.log(prod);

  const { id, title, description, price, image, count, discont_price } = prod
  return (
    <div className={`${s.cardContainer} wrapper`}>
      <div className={s.title}>
        <h3>

          {title}
        </h3>
      </div>
      <div className={s.img}>
        <img src={`${ROOT_URL}/${image}`} alt="" />
      </div>
      <div className={s.control}>

        <Control product={prod} type={isPage.productPage} page={isPage.productPage} />

      </div>
      <div className={s.price}>
        <div className={s.cardPrice}>
          {discont_price ? <h2 className={s.currentPrice}> ${discont_price}</h2> : <h2 className={s.currentPrice}> ${price}</h2>}
          {discont_price && <h3 className={s.oldPrice}>${price}</h3>}

          {discont_price && <div className={s.discount}>{`-${Math.round(100 - discont_price * 100 / price)}%`}</div>}

        </div>
      </div>
      <div className={s.description}>
        <ShowDescription description={description} />
      </div>
    </div>
  )
}
