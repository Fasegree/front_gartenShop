
const defaultState =  [];

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const REMOVE_FROM_CART_POSITION = 'REMOVE_FROM_CART_POSITION'
const ADD_MANY_TO_CART = 'ADD_MANY_TO_CART'
const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART'

function checkProduct(state, id){
    return state.findIndex(prod => prod.id === id)
  
}
export const cartReducer = (state = defaultState, action) => {
   switch(action.type){
  
        case ADD_MANY_TO_CART:
          if(checkProduct(state, action.payload?.id) === -1){
            const newProduct = {
                ...action.payload,
                count: action.payload.count
            };
            return [...state, newProduct]
          }
            return  state.map(prod => {
                if (prod.id === action.payload.id) {   
                    if(prod?.count)   {
                        return {...prod, count: prod.count + action.payload.count}
                    }   else{
                      
                        return {...prod, count: action.payload.count}
                    }           
                   
                }  else {
                  
                    return prod
                }
                // return prod
            });
            
        case REMOVE_FROM_CART:            
       
            const index1 = state.findIndex(prod => prod.id === action.payload.id)
            // console.log(index1);
            if (state[index1].count === 1) {
                return state.filter(prod => prod.id !== action.payload.id)
            
            } else if(state[index1].count > 1){
                return state.map(prod => {
                   if (prod.id === action.payload.id) {                    
                    return {...prod, count: prod.count -1} 
                   }  else return prod
                });
            } if(index1 === -1){
                return [...state]
            }
            return [...state]
        
        case REMOVE_FROM_CART_POSITION:
            // console.log(action.payload);
            return state.filter(prod => prod.id !== action.payload.id);
            
        case REMOVE_ALL_FROM_CART:
            return []
            
        default:
            return [...state]

    }
}

// action.payload = product
export const addToCartAction = (payload) => ({type: ADD_TO_CART, payload})
export const removeFromCart = (payload) => ({type: REMOVE_FROM_CART, payload})
export const removeFromCartPositionAction = (payload) => ({type: REMOVE_FROM_CART_POSITION, payload})
export const addManyToCartAction = (payload) => ({type: ADD_MANY_TO_CART, payload})
export const removeAllFromCart = () => ({type: REMOVE_ALL_FROM_CART})
// function addToCartManyProducts(){

//     // const countInCart = productInCart.map(prod => prod.product_id === product_id ? {...prod, count: prod.count + 1 } : {...prod, count: 1   })
// }
    // const countInCart = productInCart.filter(prod => prod.id === product_id).count || 0;