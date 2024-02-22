import React, { useState } from "react";
import s from "./BtnCard.module.css";
import { Link } from "react-router-dom";
import { isPage } from "../../../App";
import { btnTitles } from "../../../CONSTANTS";


export default function ButtonCard({action, title, btnLink ='', type}) {
  const [newTitle, setNewTitle] = useState(title);
 
  function changeStyle(e){   
    !btnLink && e.preventDefault();
    action && action();
    let oldTitle = title
    if (action && title === btnTitles.productCardDefault ) {
      setNewTitle(btnTitles.productCardAdded)
    }
    if (action && title === btnTitles.cartOrderProductsDefault){
      setNewTitle(btnTitles.cartOrderProductsGetted)
    }
    setTimeout(() => {
    setNewTitle(oldTitle)
    }, 1000);
  }
let style=''
  if(title === btnTitles.homePageBanner) {
    style = s.homePageBanner;
  } else if (newTitle === btnTitles.productCardAdded) {
    style = s.btnAdded
  } else if (title === btnTitles.productCardDefault){
    style = `${s.btn} ${s.width90per}`
  } 
  else  if (title === btnTitles.productCardDefault && type === isPage.productPage){
    style = `${s.btn} ${s.width100per}`
  }
  else if (newTitle === btnTitles.cartOrderProductsDefault) {
    style = s.orderDefault
  }else if (newTitle === btnTitles.cartOrderProductsGetted) {
    style = s.orderGetted
  } else if (newTitle === btnTitles.cartContinueShopping){
    style = `${s.btn} ${s.maxWidth313}`
  } else if(newTitle === btnTitles.notFoundGoHome){
    style = s.homePageBanner
  }


  
    // console.log(action);
    return (
      <div>
        <Link to={btnLink}>
        <button className={ style } onClick={(e) => {changeStyle(e)} }   type="submit"> 
          { newTitle } 
        </button>
        </Link>
      </div>
    );
}