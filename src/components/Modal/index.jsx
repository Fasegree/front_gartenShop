// Modal.js
import React from 'react';
import s from './Modal.module.css';
import close from './media/closeWhite.png'

const Modal = ({ onClose, modalTxt }) => {
    // console.log(modalTxt);
    return (
        <div className={s.modalOverlay}>
            <div className={s.modalContent}>
            <button className={s.closeButton} onClick={onClose}>
                    {/* &times; */}
                    <img src={close} alt="close" />
                </button>
            
                <div className={s.childrenTxt}>
                <div className={s.modalTxt}>

                    <h3 className={s.congratulations}>Congratulations!</h3>
                    {modalTxt.map((el, i) =>  <p key={i} >{el}</p> )}
                    {/* <p>Your order has been successfully placed on the website.</p>
                    <p>A manager will contact you shortly to confirm your order.</p> */}
                </div>
                 
                
                </div>
            </div>
        </div>
    );
};

export default Modal;