
import { useDispatch } from "react-redux";
import { addManyToCartAction } from "../../../store/cartReducer";
import s from './ProductItem.module.css'
import ButtonCard from "../../../ui/Btns/BtnCard";
import { ROOT_URL } from "../../../App";
import { btnTitles } from "../../../CONSTANTS";
import { isAddToCartAction } from "../../../store/isAddReducer";

export default function ProductItem({ prod }) {
    const dispatch = useDispatch()

    const { id, title, price, discont_price, description, image, categoryId } = prod



    const addToCart = () => {
      // После 2 секунд изменяем состояние isVisible
      // App.js
      dispatch(addManyToCartAction(prod));
      dispatch(isAddToCartAction(true))
      setTimeout(() => {
        dispatch(isAddToCartAction(false))
      }, 2000);
    };
    return (
        <div className={s.productCard}>
            {discont_price &&
            <div className={s.discount}>{`-${Math.round(100 - discont_price * 100 / price)}%`}</div>}
            <div className={s.imageBtn}>
                <div className={s.productsImg} style={{ backgroundImage: `url(${ROOT_URL}/${image})` }} ></div>

                <div className={s.btnAdd}>
                    <ButtonCard
                        title={btnTitles.productCardDefault}
                        action={addToCart }
                    />

                </div>

               
            </div>
            <div className={s.cardInfo}>
                <p className={s.cardTitle}>{title}</p>
                <div className={s.cardPrice}>
                    {discont_price ? <p className={s.currentPrice}> ${discont_price}</p> : <p className={s.currentPrice}> ${price}</p>}
                    {discont_price && <p className={s.oldPrice}>${price}</p>}

                </div>

            </div>
        </div>
    )
}