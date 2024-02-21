import s from './Header.module.css'
import { Link } from 'react-router-dom'


import logo from './media/logo.svg'
import cart from './media/cart.svg'
import BurgerMenu from './Burger'
import { useDispatch, useSelector } from 'react-redux'
import { isPage } from '../../App'
// import Burger_v2 from './Burger_v2'

export default function Header(){
    // проверка корзины и добавление countInCart useEffect(()=>{ fetch(cart)},[state.cart])

   const productInCart = useSelector(state => state.cart)
 
     const countInCart = productInCart.reduce((acc,el) =>acc + el.count,0)



    
    return(
        <div className='container '>

        <header className={`${s.header} wrapper `}>
            <Link to={'/'}>

            <div className={s.logo}><img src={logo} alt='logo'/></div>
            </Link>
            <div className={s.navMenu}>
                <ul className={s.nav}>
                    <Link to={'/'}><li>Main Page</li></Link>
                   
                    <Link to={'/category/all'} type={isPage.all}><li>Categories</li></Link>
                    <Link to={'/products/all'} type={isPage.all}><li>All products</li></Link>
                    
                    <Link to={'/discount'}> <li>All sales</li></Link>                   
                </ul>
            </div>
            <div className={s.cartArea}>
            <Link to={'/cart'}> 
            <div className={s.cart}>
                { countInCart !==0 && <div className={s.countInCart}>{countInCart}</div>}
                <img src={cart} alt="cart"/>
                
            </div>
            </Link>
                <BurgerMenu className={s.BurgerMenu}/>
            </div>
        </header>
        {/* <Breadcrumbs/> */}
        </div>
    )
}