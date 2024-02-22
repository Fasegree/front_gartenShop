const defaultState =  {category: '', 
                        products: [], 
                        count: 1,
                        from: 0,
                        to: Infinity,
                        isSale: false,
                        sortBy: 'default'
                        };

const FILTER_FROM = 'FILTER_FROM';
const FILTER_TO = 'FILTER_TO';
const FILTER_BY_SALE = 'FILTER_BY_SALE'

const FILTER_BY_DEFAULT = 'FILTER_BY_DEFAULT'
const FILTER_BY_NEWEST = 'FILTER_BY_NEWEST'
const FILTER_HIGH_LOW = 'FILTER_HIGH_LOW'
const FILTER_LOW_HIGH = 'FILTER_LOW_HIGH'

export const filterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FILTER_FROM:
            return {...action.payload};
        case FILTER_TO:
            return {...action.payload};
        case FILTER_BY_SALE:
            // const products = action.payload.slice().products.filter(prod => prod.discont);
            return {...action.payload};
        // peredaem c fetch
        case FILTER_BY_DEFAULT:
            return {...action.payload} ;
        case FILTER_BY_NEWEST:
            return {...action.payload};
        case FILTER_HIGH_LOW:
          return {...action.payload}
               case FILTER_LOW_HIGH:
                if (Array.isArray(action.payload.products)) {
                    console.log(action.payload.products);
                    return  action.payload.products.slice().sort((a, b) => a.price - b.price);
                } else {
                    console.error("Payload products is not an array:", action.payload.products);
                    return state;
                }
            
        default:
            return state;
    }
}

export const filterFromAction = (payload) => ({type: FILTER_FROM, payload})
export const filterToAction = (payload) => ({type: FILTER_TO, payload})
export const filterBySale = (payload) => ({type: FILTER_BY_SALE, payload})

export const filterByDefaultAction = (payload) => ({type: FILTER_BY_DEFAULT, payload})
export const filterNewestAction = (payload) => ({type: FILTER_BY_NEWEST, payload})
export const filterHighLowAction = (payload) => ({type: FILTER_HIGH_LOW,payload})
export const filterLowHighAction = (payload) => ({type: FILTER_LOW_HIGH, payload})