// import { useDispatch, useSelector } from "react-redux";
// import { filterAllAction, filterByDefaultAction } from "../../store/productsReducer";
// import { useEffect } from "react";
// import { filterHighLowAction, filterLowHighAction, filterNewestAction } from "../../store/FilterReducer";

// import s from "./FilterPanel.module.css"
// import { isPage } from "../../App";
// export default function FilterPanel({  type = 'default'}) {
   
//     const dispatch = useDispatch()
//     const products = useSelector(store => store.products);
//     const filteredProducts = useSelector(store => store.filter);

  
//     useEffect(() => {
      
//     }, [products])

//     function handleOnChange(e) {
//         const value = e.target.value;

//         console.log(value);
//         if (value >=0 && e.target.name === "from") {
//             dispatch(filterAllAction({...products, from: value ? value : 0}))  
//         }
//         if (value !==Number.MAX_SAFE_INTEGER && e.target.name === "to") {

//                 dispatch(filterAllAction({...products, to: value ? value : Number.MAX_SAFE_INTEGER }))
           
//         }
//         if (e.target.name === "checkSale") {
//             const updatedProducts = {
//                 ...products,
//                 isSale: e.target.checked 
//             };
//             dispatch(filterAllAction(updatedProducts))
//         }
        
        
//         switch (value) {
//             case 'default':
//                 console.log(value);
//                 dispatch(filterByDefaultAction({...products, sortBy: value }))
//                 break;
//             case 'newest':
//                 console.log(value);
//                 dispatch(filterNewestAction({...products, sortBy: value }))
//                 break;
//             case 'high':
//                 console.log(value);
//                 dispatch(filterHighLowAction({...products, sortBy: value }))
//                 break;
//             case 'low':
//                 console.log(value);
//                 dispatch(filterLowHighAction({...products, sortBy: value }))
//                 break;
//             default:
//                 console.log('..oops');
//                 break;
//         }
//     }
  
//     return (
//         <div>
//             <form className={s.filterPanel} onChange={handleOnChange}>
//             <div className={s.price_filter}>
//                 <span>Price</span>
//                 <input name="from" placeholder="from" />
//                 <input name="to" placeholder="to" />
//             </div>
//             {type !== isPage.sale && 
//              <div className={s.discount_filter}>

//             <label className={s.labelCheck}>
//                 <p>Discounted items</p>
                
//                 <input className={s.check_Box} name="checkSale" type="checkbox" id="" />  

//             </label>
//             </div>
//             }

//             <div className={s.sorted_filter}>
//             <span>Sorted</span>
//             <select className={s.select_drop_down} name='filter_by' >
//                 <option value="default">by default</option>
//                 <option value="newest">newest</option>
//                 <option value="high">price: high-low</option>
//                 <option value="low">price: low-high</option>
//             </select>
//             </div>
//             </form>
//         </div>
//     )
// }