import s from './DiscountOrderForm.module.css'
import discountImg from './media/image.png'
import InputCoupon from '../Coupon'
import { useDispatch, useSelector } from 'react-redux'
import { isGetCouponAction, showModalAction } from '../../store/isAddReducer'
import { useEffect } from 'react'
import Modal from '../Modal'

export default function DiscountOrderForm(){
    const { isGetCoupon, isShowModal } = useSelector(store => store.isAdd)
    const dispatch = useDispatch()
    function getCoupon(){
        const newStateCoupon ={isGetCoupon: true}
        dispatch(isGetCouponAction(newStateCoupon))
        dispatch(showModalAction())
    }
    useEffect(() =>{

    }, [isGetCoupon])
    const modalText = ['Your sale coupon was successfully sended']
    return (
        <div>
            {isShowModal && <Modal modalTxt={modalText}/>}
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