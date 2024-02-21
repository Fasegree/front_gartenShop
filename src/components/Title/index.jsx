import { Link } from 'react-router-dom'
import s from './Title.module.css'
import BreadNavBtn from '../../ui/Btns/BreadNavBtn'

export default function Title({titleText, btnText, btnLink}){
    return (
        <div className={` ${s.title}`}>
            <h2> {titleText} </h2>
           
            <div className={s.btnLineNav}>
            {/* <Link to={btnLink}> */}

            {/* <button> {btnText} </button> */}

            <BreadNavBtn linkTo={btnLink} title={btnText}/>
            {/* </Link> */}
            </div>
            <div className={s.lineContainer}>
                {/* <div className={s.line}></div> */}
            </div>
        </div> 
    )
}