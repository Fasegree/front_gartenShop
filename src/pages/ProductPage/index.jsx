import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProductById } from "../../asyncActions/products"
import GridOneProduct from "../../components/Products/GridOneProdut"

export default function ProductPage() {
    const product = useSelector(store => store.products)
    const { category, product_id } = useParams()
    const dispatch = useDispatch()

    // const [currentCount, setCurrentCount] = useState(1);

    useEffect(() => {
   
            window.scrollTo(0, 0);
    
        dispatch(fetchProductById(product_id));
        // setCurrentCount(1);
    }, [ ])

//    console.log(product);
    // костыль !! 
    const {id, title, description, price, image, count, discont_price } = product 
    const productsInCart = useSelector(store => store.cart)
  
  
    // не открывает по ссылке ?? надо предать id товара




   
    return (
        <div className="container">
    
            {/* <div className={s.productCard}>

                <div><img src={`${ROOT_URL}/${image}`} alt="" /></div>
                <div className={s.cardInfo}>

                <div className={s.description}>
                    <h3>{title}</h3>

                    <div className={s.cardPrice}>
                        {discont_price ? <p className={s.currentPrice}> ${discont_price}</p> : <p className={s.currentPrice}> ${price}</p>}
                        {discont_price && <p className={s.oldPrice}>${price}</p>}
                      
                        {discont_price && <div className={s.discount}>{`-${Math.round(100 - discont_price * 100 / price)}%`}</div>}
          
                    </div>

                    <div className={s.controlBtn}>
                        
                        <Control product={product} type={isPage.productPage} page={isPage.productPage}/>

                    </div>

                    <ShowDescription description={description}/>
                    
                </div>
    
                <div className={s.cardPriceContainer}>
                </div>

                </div>
             
            </div> */}

            <GridOneProduct prod={product}/>
        </div>
    )
}