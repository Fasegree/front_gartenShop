import React, { useEffect, useState } from 'react';
import s from './Coupon.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { isPage } from '../../App';
import postData from '../../asyncActions/postData';
import { hideModalAction, isGetCouponAction, isShowModalAction, showModalAction } from '../../store/isAddReducer';
import Modal from '../Modal';
import { btnTitles } from '../../CONSTANTS';
import { removeAllFromCart } from '../../store/cartReducer';

export default function InputCoupon({ page, action }) {
  const  {isGetCoupon, isShowModal}  = useSelector(store => store.isAdd)
  const {productsInCart} = useSelector(store => store.cart)
  const [user, setUser] = useState({name: ''})
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm();


  useEffect(() => {
  },[isGetCoupon])


  const onSubmit = async (data) => {
    try {
      const success = await postData(data); // Вызвать функцию postData с данными из формы
      // console.log(success);
      if (success) {
        setUser(data)
        action && action();
        // reset();
      if(page === isPage.home)
      dispatch(isGetCouponAction());

        dispatch(showModalAction());
        // dispatch(removeAllFromCart());
      setTimeout(()=>{
        dispatch(hideModalAction());
        console.log('asdsad');
      },5000)
      } else {
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
      alert('Произошла ошибка при отправке запроса!');
    }
  };
  const text = ['Your order has been successfully placed on the website.', 'A manager will contact you shortly to confirm your order.11111111111111']
  return (
    <div>
      {/* {isShowModal && (
      <Modal modalTxt={text} onClose={() =>dispatch(hideModalAction())}>
       
        </Modal>)} */}
      <form className={`${s.discount_form} ${page === isPage.cart ? s.blackPlaceholder : s.discountInput}`} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={s.discountInput}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        
          {...register('name', {
            // required: 'Поле обязательно к заполнению',
            minLength: {
              // value: 3,
              message: ''
            }
          })}
        />
        <input
          className={s.discountInput}
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone number"
        
          {...register('phone', {
            // required: 'Поле обязательно к заполнению',
          })}
        />
        <input
          className={s.discountInput}
          type="email"
          id="email"
          name="email"
          placeholder="Email"

          {...register('email', {
            // required: 'Поле обязательно к заполнению',
          })}
        />
        {page === isPage.cart ? (
          <button className={isShowModal ?  s.disabledBtn: s.btn}  disabled={isShowModal} type="submit">
            {isShowModal ? btnTitles.cartOrderProductsGetted : btnTitles.cartOrderProductsDefault}
          </button>
        ) : (
          <button className={isGetCoupon ?  s.disabledBtn: s.couponBtn}  disabled={isGetCoupon} type="submit">
            {isGetCoupon ? btnTitles.couponDiscountGeted : btnTitles.couponDiscountDefault}
          </button>
        )}
      </form>
    </div>
  );
}
