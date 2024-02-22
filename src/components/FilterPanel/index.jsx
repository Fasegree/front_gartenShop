import React from 'react'
import s from './FilterPanel.module.css'
import { isPage } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { filterAllAction, searchTitleAction, sortByAction } from '../../store/productsReducer';
import LiveSearch from './LiveSearch/LiveSearch';



export default function FilterPanel({type, id}) {
const dispatch = useDispatch()
const products = useSelector(store => store.products);
const handleOnChange = (e) => { 
        let form_data = new FormData(e.target.parentElement.parentElement)
        let data = Object.fromEntries(form_data)
        data = { from: data.from ?  +data.from: 0, to: data.to ?  +data.to: Infinity}
        dispatch(filterAllAction({...products, ...data }))    
   
}
const checkIsSale = (e) => {
    dispatch(filterAllAction({...products, isSale: e.target.checked }))
}
 
const handleSort = (e) => {
    dispatch(sortByAction({...products, sortBy: e.target.value }))
}


  return (
  <div className='wrapper'>
    <div className={`${s.filterPanel }`}>
            <LiveSearch products={products}/>
            <form onChange={handleOnChange}>
            <div className={s.price_filter}>
                <p>Price</p>
                <input name="from" placeholder="from" />
                <input name="to" placeholder="to" />
            </div>
            </form>
            {type !== isPage.sale && 
             <div className={s.discount_filter} >

            <label className={s.labelCheck}>
                <p>Discounted items</p>
                
                <input onClick={checkIsSale} className={s.check_Box} name="checkSale" type="checkbox" id="" />  

            </label>
            </div>
            }

            <div className={s.sorted_filter}>
            <p>Sorted</p>
            <select onChange={handleSort} className={s.select_drop_down} name='filter_by' >
                <option value="default">by default</option>
                <option value="newest">newest</option>
                <option value="high_low">price: high-low</option>
                <option value="low_high">price: low-high</option>
            </select>
            </div>
    </div>
          
        </div>
 )
}
