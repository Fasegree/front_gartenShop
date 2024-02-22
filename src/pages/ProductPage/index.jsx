import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProductById } from "../../asyncActions/products"
import GridOneProduct from "../../components/Products/GridOneProdut"

export default function ProductPage() {
    const product = useSelector(store => store.products)
    const { category, product_id } = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
   
            window.scrollTo(0, 0);
    
        dispatch(fetchProductById(product_id));
    }, [ ])

    // const {id, title, description, price, image, count, discont_price } = product 
    // const productsInCart = useSelector(store => store.cart)



   
    return (
        <div className="container">
    
            <GridOneProduct prod={product}/>
        </div>
    )
}