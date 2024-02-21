import React from 'react'
import { useForm } from 'react-hook-form';
import { filterAllAction, searchTitleAction } from '../../store/productsReducer';
import { useDispatch } from 'react-redux';

export default function LiveSearch({ products }) {
    // const products = useSelector(store => store.products);
    // const {register,reset,} = useForm()
    const dispatch = useDispatch()
    function liveserch(e, products) {
        // const search = products.map(prod => ({prod.id, title: title.toLowerCase()}))
        // const searhInput = search.includes(e.value.toLowerCase())
        // console.log(products);
        dispatch(filterAllAction({ ...products, searchTitle: e.target.value}))
    }
  return (
    <div>
        {/* <input onChange={liveserch} type="text" /> */}
        <input onChange={(e) => liveserch(e, products)}  name="title" placeholder="Title" />
    </div>
  )
}
