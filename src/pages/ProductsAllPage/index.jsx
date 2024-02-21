import { useEffect } from "react";
import ProductList from "../../components/Products/ProductList";

export default function ProductsAllPage({type}){
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return (
        <div >

            <ProductList type={type}/>
        </div>
        
    )
}
  
    
