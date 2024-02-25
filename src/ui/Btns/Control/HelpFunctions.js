import { isPage } from "../../../App";
import { addManyToCartAction, removeFromCart } from "../../../store/cartReducer";
import { isAddToCartAction } from "../../../store/isAddReducer";
import { incrControlCountAction } from "../../../store/productsReducer";

 //================ for product page =================
export function incr({  product,
                        page,
                        productsInCart,
                        dispatch
                    })
                             {
    if (product.count < 10 && page === isPage.productPage) {
            dispatch(incrControlCountAction({ count: 1}));
    } else if(page === isPage.cart){
            dispatch(addManyToCartAction({...product, count: 1}))
    }
   
        
}
export function decr({  product,
                        page,
                        productsInCart,
                        dispatch
                    }) {
    if (product.count > 1 && page == isPage.productPage) {
        // console.log(isPage.productPage);
        dispatch(incrControlCountAction({ count: -1 }))
    } else if(page === isPage.cart){
        dispatch(removeFromCart(product))
    } 
}
export function addPayload({    product,
                                page,
                                productsInCart,
                                dispatch
                            }) {
                             
    dispatch(addManyToCartAction(product))
    dispatch(isAddToCartAction(true))
    setTimeout(() => {
        dispatch(isAddToCartAction(false))
    }, 2000);
}

//====================================================