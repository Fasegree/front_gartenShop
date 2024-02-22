import CategoriesList from "../../components/Products/CategoriesList";

export default function CategoriesPage({type}){
    
    return(
        <div className="container">
        
         
            <CategoriesList type={type}/>
        </div>
    )
}