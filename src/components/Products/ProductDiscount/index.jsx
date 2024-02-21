import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsAll, fetchProductsList } from "../../../asyncActions/products"
import { Link } from "react-router-dom"
import ProductItem from "../ProductItem"

export default function ProductDiscount({type}){

    const { category, products }  = useSelector(store => store.products)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProductsAll(type))
    }, [])

    return (
        <div>
        
            <div className="cardsList">

            {products?.map(prod => {
                return (
                    <div key={prod.id}>

                        <Link  to={`/categories/${prod.categoryId}/${prod.id}`}>
                    
                             <ProductItem prod={prod} />
                        </Link>
                    </div>
                    )
            })}
            </div>
            {/* <div >
                <BreadNavBtn title={'All Sales'} linkTo={'/discount'}/>
            </div> */}
        </div>
    )
}