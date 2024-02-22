import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import { Link, useParams } from "react-router-dom";
import s from './ProductList.module.css';
import FilterPanel from "../../FilterPanel";
import { fetchProductsAll, fetchProductsListByCategory } from "../../../asyncActions/products";
import { isPage } from "../../../App";


export default function ProductList({type}) {
    const { category, products } = useSelector((store) => store.products);
    const dispatch = useDispatch();
    const { id } = useParams();
    const { categoryID } = useParams();

    useEffect(() => {
                if(type === isPage.prodOfCategory){
                    dispatch(fetchProductsListByCategory(categoryID))
                } else
                dispatch(fetchProductsAll(type));
                
        
    }, [type, id, dispatch]);


    return (
        <div className='container'>    
            <h2 className={`${s.titleCategory} wrapper`}>{category}</h2>
            <FilterPanel type={category === 'Discounted items' ? isPage.sale : isPage.all}/>
            <div className={s.cardsContainer} >
            <div>

                <div className="cardsList wrapper">

                {products?.length > 0 && products.map(prod => (

                    prod?.isShow && 
                       
                            <Link  key={prod.id} to={`/categories/${category}/${prod.id}`}>
                                <ProductItem prod={prod} />
                            </Link>
                       
                ))}
                </div>
                </div>
               
            </div>
        </div>
    );
}
