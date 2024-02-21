import s from './DiscountOrderForm.module.css'
import discountImg from './media/image.png'
import InputCoupon from '../Coupon'
import { useDispatch, useSelector } from 'react-redux'
import { isGetCouponAction } from '../../store/isAddReducer'
import { useEffect } from 'react'

export default function DiscountOrderForm(){
    const { isGetCoupon } = useSelector(store => store.isAdd)
    const dispatch = useDispatch()
    function getCoupon(){
        const newStateCoupon ={isGetCoupon: true}
        dispatch(isGetCouponAction(newStateCoupon))
    }
    useEffect(() =>{

    }, [isGetCoupon])
    return (
        <div>
            <div className={s.dicountOrderForm}> 
                    <h2> 5% off on the first order</h2>
                    <div>
                        <div className={s.handsImg}>
                         <img src={discountImg} alt="dicount"/>
                        </div>
                        <div className={s.form}>
                    
                        <InputCoupon action={getCoupon} />
                        </div>
                    </div>   
            </div>
        </div>
    )
}