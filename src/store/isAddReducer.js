const defaultState = {
    isAddToCart: false,
    isGetCoupon: false,
    isShowModal: false,
   
}
const IS_ADD_TO_CART = 'IS_ADD_TO_CART'
const IS_SHOW_MODAL = 'IS_SHOW_MODAL'
const IS_GET_COUPON = 'IS_GET_COUPON'
const SHOW_MODAL = 'SHOW_MODAL'
const HIDE_MODAL = 'HIDE_MODAL'


export const isAddReducer = (state = defaultState, action) => {
    switch (action.type) {
        case IS_ADD_TO_CART:
            return state = action.payload;
        case SHOW_MODAL:
            return {...state, isShowModal: true};
        case HIDE_MODAL:
            return {...state, isShowModal: false};

        case IS_GET_COUPON:
            return state = {...state, isGetCoupon: true};
        case IS_SHOW_MODAL:
            return state = {...state, ...action.payload};
        default:
            return state;
    }
}



export const isAddToCartAction = (payload) => ({type: IS_ADD_TO_CART, payload})
export const isGetCouponAction = (payload) => ({type: IS_GET_COUPON,payload})
export const isShowModalAction = (payload) => ({type: IS_SHOW_MODAL, payload})

export const showModalAction = () => ({type: SHOW_MODAL })
export const hideModalAction = () => ({type: HIDE_MODAL })