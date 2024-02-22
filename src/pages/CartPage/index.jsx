import { useDispatch, useSelector } from "react-redux"
import ProductInCart from "../../components/Products/ProductInCart"
import s from "./CartPage.module.css"
import InputCoupon from "../../components/Coupon"
import Title from "../../components/Title"
import { useEffect, useState } from "react"
import ButtonCard from "../../ui/Btns/BtnCard"
import Modal from "../../components/Modal"
import { isShowModalAction } from "../../store/isAddReducer"
import { isPage } from "../../App"
import { btnTitles } from "../../CONSTANTS"

export default function CartPage() {
    const productsCart = useSelector(store => store.cart)
    const {isShowModal} = useSelector(store => store.isAdd)
    // const dispatch = useDispatch()
    useEffect(() => {
      window.scrollTo(0, 0)
    },[ getTotalPrice()===0, isShowModal ])

    function getTotalPrice() {
     
    let  totalPrice = productsCart.reduce((acc, el) => {
          if(el.discont_price){
              return  acc + (el.count * el.discont_price)
          }else {
              return acc + (el.count * el.price)
          }
      }, 0) 
        return  (Math.round(totalPrice * 100)/100).toFixed(2)
      
     
  }

  const [isModalVisible, setModalVisible] = useState(false);



  const handleOrderClick = () => {
 
      setModalVisible(true);
  }
  const modalTxt = ['Your order has been successfully placed on the website.', 'A manager will contact you shortly to confirm your order.']
// console.log(modalTxt);
      return (
          <div className="container">
            {isModalVisible && (
                <Modal   onClose={() => setModalVisible(false)} modalTxt={modalTxt}/>
            )}
        <div className="wrapper">
            <Title titleText={'Shopping cart'} btnText={'Back to the store'} btnLink={'/products/all'}/>
            {productsCart.length !==0 ? (
                <div className={`${s.orderContainer} `}>
                    <ProductInCart productsCart={productsCart}/>
                    <div>
                    <div className={s.orderDetiles}>
                        <h3>Order details</h3>
                        <div>
                            <p>{productsCart.length} items</p>
                            <div className={s.totalPrice}>
                                <p>Total</p>
                                <h2>${getTotalPrice()}</h2>
                            </div>
                        </div>
                        <InputCoupon page={isPage.cart}  isModalVisible={isModalVisible} action={handleOrderClick}/>
                    </div>
                    </div>             
                   
                </div>
            ) : (
                <div >
                    <p className={s.textEmptyCart}>Looks like you have no items in your basket currently.</p>
                   <div className={s.btnBackToShop}>
                    <ButtonCard title={btnTitles.cartContinueShopping} btnLink={'/products/all'}/>
                   </div>
                </div>
            )}
        </div>
        </div>
    );
  }

  