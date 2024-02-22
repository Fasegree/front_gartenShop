const defaultState = {
    category: '',
    products: [],
    count: 1,
    from: 0,
    to: Infinity,
    isSale: true,
    sortBy: 'default',
    searchTitle: '',
    isShow: true
};

//=============================== GET DATA FROM SERVER=============================================
const ASYNC_PRODUCTS_ALL = 'ASYNC_PRODUCTS_ALL';
const ASYNC_PRODUCTS_CATEGORY = 'ASYNC_PRODUCTS_CATEGORY';
const ASYNC_CATEGORY_LIST = 'ASYNC_CATEGORY_LIST';
const ASYNC_PRODUCTS_OF_CATEGORY = 'ASYNC_PRODUCTS_OF_CATEGORY';
const ASYNC_PRODUCT_BY_ID = 'ASYNC_PRODUCT_BY_ID';
//=============================== REMOVE BY ID =============================================
const REMOVE_PRODUCT_BY_ID = 'REMOVE_PRODUCT_BY_ID';

const SORT_BY = 'SORT_BY';

const INCR_CONTROL_COUNT = 'INCR_CONTROL_COUNT';

const FILTER_ALL = 'FILTER_ALL';
const PRODUCTS_SALE = 'PRODUCTS_SALE';
// 



//============================================NEW FILTER BY =============================================
function filterAllWithTitle(el, from, to, isSale, searchTitle) {
     el ={...el, curent_price: el.discont_price ? el.discont_price : el.price};
    
    const isPriceInRange = isSale ? el.discont_price && el.discont_price > from && el.discont_price < to : el.curent_price > from && el.curent_price < to;
    const isTitleIncluded = el.title.toLowerCase().includes(searchTitle?.toLowerCase());

    const isShow = isPriceInRange && searchTitle===undefined ?  true : isTitleIncluded;
    return { ...el, isShow };
}

///////////////////////////////////////////////// REDUCER =============================================

export const productsReducer = (state = defaultState, action) => {
//============================================ GET DATA FROM SERVER =============================================
    switch (action.type) {
        case ASYNC_CATEGORY_LIST:
            return { ...action.payload, category: 'Categories' };
        case ASYNC_PRODUCTS_OF_CATEGORY:
            return { ...action.payload };
        case ASYNC_PRODUCTS_ALL:
            return { ...action.payload, category: 'All products' };
        case PRODUCTS_SALE:
            return { ...action.payload, category: 'Discounted items' };
        case ASYNC_PRODUCT_BY_ID:
            return {...action.payload};
       
//============================================ NEW FILTER BY =============================================
        case FILTER_ALL:
            
                let filterAll = action.payload.products.map(el => {
                    return filterAllWithTitle(el, action.payload.from, action.payload.to, action.payload.isSale, action.payload.searchTitle);
                })
            return {...action.payload, products: filterAll };


//============================================ SORT BY =============================================
            
        case SORT_BY:
            if(action.payload.sortBy === 'default'){
                const filterDefault = action.payload.products.slice().sort((a, b) => a.id - b.id);
                return { ...action.payload, products: filterDefault };
            } else
            if(action.payload.sortBy === 'newest'){
          
                const filterNewest = action.payload.products.slice().sort((a, b) => {
                  return new Date( b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
                });
                return {...action.payload, products: filterNewest };
            } else
            if(action.payload.sortBy === 'high_low'){
                const filterHighLow = action.payload.products.map(el => ({...el, curent_price: el.discont_price ?  el.discont_price : el.price}) ).sort((a, b) => b.curent_price - a.curent_price);
                return { ...action.payload, products: filterHighLow };
            }else
            if(action.payload.sortBy === 'low_high'){
                const filterLowHigh = action.payload.products.map(el => ({...el, curent_price: el.discont_price?  el.discont_price : el.price}) ).sort((a, b) => a.curent_price - b.curent_price);
                return {...action.payload, products: filterLowHigh };
            } else
            return state    
   

//============================================ INCREMENT CONTROL COUNT =============================================
        case INCR_CONTROL_COUNT:
        
                    return {...state, count: state.count + action.payload.count }
           
        default:
            return state;
    }
};
//////////////////////////////// GET DATA FROM SERVER =============================================
export const asyncProductsAllAction = (payload) => ({ type: ASYNC_PRODUCTS_ALL, payload });
export const asyncProductsCategoryAction = (payload) => ({ type: ASYNC_PRODUCTS_CATEGORY, payload });
export const async_categories_listAction = (payload) => ({ type: ASYNC_CATEGORY_LIST, payload });
export const asyncProductsOfCategoryAction = (payload) => ({ type: ASYNC_PRODUCTS_OF_CATEGORY, payload });
export const asyncProductByIdAction = (payload) => ({ type: ASYNC_PRODUCT_BY_ID, payload });

//============================================ REMOVE PRODUCT BY ID =============================================
export const removeProductByIdAction = (payload) => ({ type: REMOVE_PRODUCT_BY_ID, payload });


export const sortByAction = (payload) => ({ type: SORT_BY, payload });

export const incrControlCountAction = (payload) => ({ type: INCR_CONTROL_COUNT, payload });

export const products_sale_action = (payload) => ({ type: PRODUCTS_SALE, payload });
export const filterAllAction = (payload) => ({ type: FILTER_ALL, payload });

