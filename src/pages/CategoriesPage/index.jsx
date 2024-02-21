import FilterPanel from "../../components/FilterPanelOld";
import CategoriesList from "../../components/Products/CategoriesList";
import ProductList from "../../components/Products/ProductList";

export default function CategoriesPage({type}){
    
    return(
        <div className="container">
        
         
            <CategoriesList type={type}/>
        </div>
    )
}