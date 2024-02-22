import { ROOT_URL, isPage } from "../App";
import { asyncCategoriesListAction } from "../store/categoriesReducer";
import { asyncProductByIdAction, asyncProductsAllAction, asyncProductsOfCategoryAction,  products_sale_action } from "../store/productsReducer"


function getDefaultState(arr) {
        if(Array.isArray(arr)) {
            return {category: '', 
                    products: arr.map(el => ({...el, isShow: true, count: 1, currentPrice: el.discont_price ?  el.discont_price : el.price})),                      
                    from: 0,
                    to: Infinity,
                    isSale: false,
                    sortBy: 'default'
                   }
        } else {
            return {category: arr.category.title, 
                    products: arr.data.map(el => ({...el, isShow: true, count: 1, currentPrice: el.discont_price ?  el.discont_price : el.price})),     
                    from: 0,
                    to: Infinity,
                    isSale: false,
                    sortBy: 'default'
                   }
        }

}
function sliceSale(arr) {
    return arr?.filter(el => el.discont_price).map(product => ({
        ...product,
        discountPercentage: ((product.price - product.discont_price) / product.price) * 100
    }))
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 4)
    
}
 
// discount productsAll
export function fetchProductsAll(type){
    return function(dispatch){
    try {
        
          fetch(ROOT_URL + '/products/all' )
          .then(res => res.json())
          .then(data =>{
           
              if(type === isPage.all){
                  dispatch(asyncProductsAllAction(getDefaultState(data)))
              }else if(type ===isPage.sale){
                  dispatch(products_sale_action(getDefaultState(data?.filter(el => el.discont_price))))
              }else if(type === isPage.home){
                  dispatch(asyncProductsAllAction(getDefaultState(sliceSale(data))) ) 
              }})
      } catch(err){
     
      }
    }
}
// product list
export function fetchProductsListByCategory(category){
    return function(dispatch){
        try{
            fetch(ROOT_URL + '/categories/' + category)
            
            .then(res => res.json())
            .then(data => dispatch(asyncProductsOfCategoryAction(getDefaultState(data))))
            console.log(' async fetch..... ok');
        }catch(err){
            console.log('error is');
        }
    }
}


// products/ productCard
export function fetchProductById(id){
    return function(dispatch){
        try{

            fetch(ROOT_URL + '/products/' + id)
                .then(res => res.json())
                .then(data =>  dispatch(asyncProductByIdAction({...data[0], count: 1})))  // function(data)
        }catch(err){
            console.log(err);
        }
    }
}
// products/ categories list
export function fetchCatigoriesList(type){
    return function(dispatch){
        try {
            fetch(ROOT_URL + '/categories/all')
            .then(res => res.json())
            .then(data => {
                if(type === isPage.home){
                    
                    (dispatch(asyncCategoriesListAction(data.slice(0, 4))))
                }else if(type === isPage.category){
                    (dispatch(asyncCategoriesListAction(data)))
                } })
        } catch(err){
            console.log(err);
        }
       
    }
}

