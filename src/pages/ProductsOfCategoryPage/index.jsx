import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  fetchProductsListByCategory } from "../../asyncActions/products"
import { useParams } from "react-router-dom"
import ProductList from "../../components/Products/ProductList"

export default function ProductsOfCategoryPage(){
    const  {categoryID} = useParams()
    const  { category, products } = useSelector((store) => store.products)
    console.log('categoryID ' + products, categoryID);
    const dispatch = useDispatch()
   

    useEffect(() => {
        dispatch(fetchProductsListByCategory(categoryID))
    console.log('...fetchProductsListByCategory OK');
            window.scrollTo(0, 0);
       
  
    },[dispatch])
    console.log( products)
    return(
        <div className="container">         
            <ProductList />
         <div className="cardsList wrapper">

         </div>

        </div>
    )
}