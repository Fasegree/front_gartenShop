import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import s from './Control.module.css'
import ButtonCard from '../BtnCard';
import { useParams } from 'react-router-dom';
import { addPayload, decr, incr } from './HelpFunctions';
import { isPage } from '../../../App';
import { btnTitles } from '../../../CONSTANTS';

export default function Control({ product, page }) {
    //================ for product page =================
    const productsInCart = useSelector(store => store.productsInCart);
    const dispatch = useDispatch()
    const {  product_id } = useParams()
    useEffect(()=>{
      const oneProductInCart = productsInCart?.filter(prod => prod.id === product_id)
  
    },[])
    
    const argumentsForFunctions = {
       product,
       page,
       productsInCart,
       dispatch
    }


    //================ for cart page =====================

  return (
    <div className={s.controlAll}>
    <div className={s.control}>
        <button onClick={() => decr(argumentsForFunctions)}>-</button>
        <p>{isPage.productPage ? product?.count : productsInCart.count}</p>
        <button onClick={() => incr(argumentsForFunctions)}>+</button>
    </div>
    {page==isPage.productPage && <ButtonCard type={isPage.productPage} title={btnTitles.productCardDefault}  action={() => addPayload(argumentsForFunctions)}/>}
</div> 
  )
}
