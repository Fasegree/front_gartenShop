import './App.css';
import { Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import ProductsAllPage from './pages/ProductsAllPage';
import ProductsOfCategoryPage from './pages/ProductsOfCategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/CategoriesPage';
import { useDispatch, useSelector } from 'react-redux';
import { isAddToCartAction } from './store/isAddReducer';
import { useEffect } from 'react';
import Modal from './components/Modal';
import CategoriesPage from './pages/CategoriesPage';
import ScrollToTopButton from './ui/Btns/ScrollToUp';

// export const ROOT_URL = 'http://localhost:3333'
export const ROOT_URL = 'https://back-shopgarten.onrender.com/'
export const isPage = {
  home: 'home',
  all: 'all',
  sale:'sale',
  category: 'category',
  cart: 'cart',
  productPage: 'productPage',
  prodOfCategory: 'prodOfCategory'
}
function App() {
  const isAddToCart = useSelector((state) => state.isAdd) ?? false;
  // useEffect(() => {

  // },[isAddToCart])

console.log(isAddToCart);

  

  return (
    <div className='app'>
      <ScrollToTopButton/>
      {<div className={`addProductToCartDiv ${isAddToCart && "show"}`}>ADD TO CART</div>}
      {/* <Modal /> */}
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
       <Route path='/products/all'  element={<ProductsAllPage type={isPage.all} />}/>
       {/* <Route path='/products'  element={<ProductsAllPage type='all' />}/> */}
        <Route path='/discount' element={<ProductsAllPage type={isPage.sale}/>}/> 
      
        <Route path='/category/:id' element={<CategoriesPage type={isPage.category} />}/>
        {/* <Route path='/category/' element={<CategoriesPage type='category' />}/> */}
        <Route path='/categories/:categoryID' element={<ProductsOfCategoryPage type={isPage.prodOfCategory} />}/>
        <Route path='/categories/:categoryID/:product_id' element={<ProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;