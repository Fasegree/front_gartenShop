import React from 'react'
import s from './BreadNavBtn.module.css'
import { Link } from 'react-router-dom'
export default function BreadNavBtn({title, linkTo, size360}) {
  return (
    <Link to={linkTo}>
    <div  className={s.allCategoriesBotomBtn}>
        <button className={size360 ? s.bottomBtn : s.breadNavBtn}>{title}</button>
    </div>
    </Link>
  )
}
