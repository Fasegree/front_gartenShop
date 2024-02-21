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
const SEARCH_TITLE = 'SEARCH_TITLE';
const INCR_CONTROL_COUNT = 'INCR_CONTROL_COUNT';

//=============================== OLD VARIABLE  =============================================
const FILTER_ALL = 'FILTER_ALL';
const PRODUCTS_SALE = 'PRODUCTS_SALE';
const FILTER_BY_DEFAULT = 'FILTER_BY_DEFAULT';
const FILTER_BY_NEWEST = 'FILTER_BY_NEWEST';
const FILTER_HIGH_LOW = 'FILTER_HIGH_LOW';
const FILTER_LOW_HIGH = 'FILTER_LOW_HIGH';
//=============================== OLD LOGICK FILTER BY FROM TO ISSALE=============================================
function getFilterFrom(el, from) {
   
    if(el.discont_price && el.discont_price > from){        
        return {...el, isShowFrom: true }
    } 
     if(!el.discont_price && el.price > from){
        return {...el, isShowFrom: true }
    } else return {...el, isShowFrom: false }
    
}

function getFilterTo(el, to) {
    if(el.discont_price && el.discont_price < to){
        return {...el, isShowTo: true }
    } else if(!el.discont_price && el.price < to){
        return {...el, isShowTo: true }
    } else return {...el, isShowTo: false }
}

function getSale(el, isSale) {
    // Show only discounted items ?
    el.isShow=true;
    if(isSale) {
        if(el.discont_price){
            return {...el, isShowSale: true }
        } else {
            return {...el, isShowSale: false}
        }
    } else {        
            return {...el, isShowSale: true }        
    }
}
//---------------------------- old logic filter by =============================================
function filterAll_(el, from, to, isSale) {
    // console.log(isSale);
    if(isSale){
        if(el.discont_price){
            if(el.discont_price > from && el.discont_price < to){
                return {...el, isShow: true }
            } else {
                return {...el, isShow: false }
            }
        } else {
            return {...el, isShow: false }
        }
    } else {
        if(el.discont_price){
            if(el.discont_price > from && el.discont_price < to){
                return {...el, isShow: true }
            } else {
                return {...el, isShow: false }
            }
        }else {
            if(el.price > from && el.price < to){
                return {...el, isShow: true }
            } else {
                return {...el, isShow: false }
            }
        }
    }
    
}
//============================================ OLD LOGICK CHECK TITLE
function checkTitle(el, searchTitle){
    console.log('wqe');
return el.title.toLowerCase().includes(searchTitle.toLowerCase()) ? {...el, isShow: true } : {...el, isShow: false };
}


//============================================NEW FILTER BY =============================================
function filterAllWithTitle(el, from, to, isSale, searchTitle) {
     el ={...el, curent_price: el.discont_price ? el.discont_price : el.price};
    
    const isPriceInRange = isSale ? el.discont_price && el.discont_price > from && el.discont_price < to : el.curent_price > from && el.curent_price < to;
    const isTitleIncluded = el.title.toLowerCase().includes(searchTitle?.toLowerCase());
    // console.log(isTitleIncluded);
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
            // console.log(action.payload + ' dwsdsadsaction payload');
            return { ...action.payload };
        case ASYNC_PRODUCTS_ALL:
            return { ...action.payload, category: 'All products' };
        case PRODUCTS_SALE:
            return { ...action.payload, category: 'Discounted items' };
        case ASYNC_PRODUCT_BY_ID:
            console.log({...action.payload });
            return {...action.payload};
       
//============================================ OLD FILTER BY =============================================
        case FILTER_ALL:
            
                let filterAll = action.payload.products.map(el => {
                    // el = getFilterFrom(el, action.payload.from);
                    // el = getFilterTo(el, action.payload.to);
                    // el = getSale(el, action.payload.isSale);
                    // console.log(el, action.payload.from, action.payload.to, action.payload.isSale);
                    // el = filterAll_(el, action.payload.from, action.payload.to, action.payload.isSale)
                    return filterAllWithTitle(el, action.payload.from, action.payload.to, action.payload.isSale, action.payload.searchTitle);
                })
            return {...action.payload, products: filterAll };
//============================================ OLD SEARCH TITLE =============================================
case SEARCH_TITLE: 
    // let {action.payload.from, to, isSale} = state;
    let from = action.payload.from;
    let to = action.payload.to;
    let isSale = action.payload.isSale;
    // console.log(from, to, isSale, action.payload);
    let filteredAll = action.payload.products.map(el => {
        const isPriceInRange = isSale ? el.discont_price && el.discont_price > from && el.discont_price < to : el.price > from && el.price < to;
        if(action.payload.searchTitle === ''){}
        const isTitleIncluded = el.title.toLowerCase().includes(action.payload.searchTitle.toLowerCase());
        const isShow = isPriceInRange && isTitleIncluded;
        return { ...el, isShow };
    });
    return { ...action.payload, products: filteredAll };
break;

//============================================ SORT BY =============================================
            
        case SORT_BY:
            if(action.payload.sortBy === 'default'){
                const filterDefault = action.payload.products.slice().sort((a, b) => a.id - b.id);
                return { ...action.payload, products: filterDefault };
            } else
            if(action.payload.sortBy === 'newest'){
                //!!!!!
                const filterNewest = action.payload.products.slice().sort((a, b) => b.updatedAt - a.updatedAt);
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
   
//========================== OLD SORT ============================================
        case FILTER_BY_DEFAULT:
            const filterDefault = action.payload.products.slice().sort((a, b) => a.id - b.id);
            return { ...action.payload, products: filterDefault };
        case FILTER_BY_NEWEST:
            const filterNewest = action.payload.products.slice().sort((a, b) => b.updatedAt - a.updatedAt);
            return { ...action.payload, products: filterNewest };
        case FILTER_HIGH_LOW:
            const filterHighLow = action.payload.products.map(el => ({...el, curent_price: el.discont_price ?  el.discont_price : el.price}) ).sort((a, b) => b.curent_price - a.curent_price);
            return { ...action.payload, products: filterHighLow };
        case FILTER_LOW_HIGH:
            const filterLowHigh = action.payload.products.map(el => ({...el, curent_price: el.discont_price ?  el.discont_price : el.price}) ).sort((a, b) => a.curent_price - b.curent_price);
            return { ...action.payload, products: filterLowHigh };
//============================================ =============================================         
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
//============================================ OLD ACTIONS  =============================================
// export const filterByDefaultAction = (payload) => ({ type: FILTER_BY_DEFAULT, payload });
// export const filterNewestAction = (payload) => ({ type: FILTER_BY_NEWEST, payload });
// export const filterHighLowAction = (payload) => ({ type: FILTER_HIGH_LOW, payload });
// export const filterLowHighAction = (payload) => ({ type: FILTER_LOW_HIGH, payload });
// export const searchTitleAction = (payload) => ({ type: SEARCH_TITLE, payload });
