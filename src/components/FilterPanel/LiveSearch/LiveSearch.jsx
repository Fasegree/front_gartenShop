import React from 'react'
import { filterAllAction } from '../../../store/productsReducer';
import { useDispatch } from 'react-redux';
import s from './liveSearch.module.css'

export default function LiveSearch({ products }) {
    const dispatch = useDispatch()
    function liveserch(e, products) {
        dispatch(filterAllAction({ ...products, searchTitle: e.target.value}))
    }
  return (
    <div className={s.liveSearch}>
        <p>Title</p>
        <input onChange={(e) => liveserch(e, products)}  name="title" placeholder="Title" />
    </div>
  )
}
