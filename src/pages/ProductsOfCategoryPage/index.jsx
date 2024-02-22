import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  fetchProductsListByCategory } from "../../asyncActions/products"
import { useParams } from "react-router-dom"
import ProductList from "../../components/Products/ProductList"
import { isPage } from "../../CONSTANTS"

export default function ProductsOfCategoryPage({type}){
   

    useEffect(() => {
            window.scrollTo(0, 0);
       
  
    },[])
    return(
        <div className="container">         
            <ProductList type={type}/>
       

        </div>
    )
}