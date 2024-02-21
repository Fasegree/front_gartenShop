import React, { useState } from 'react';
import s from './Burger.module.css'
import { Link } from 'react-router-dom';
import { isPage } from '../../../CONSTANTS';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (e) => {
    !e.target.className.includes('menu') &&  setIsOpen(!isOpen); 
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={isOpen ? s.burgermenuOpen : s.burgermenu}>
      <div className={`${s.burgericon} ${isOpen ? `${s.open}` : ''}`} onClick={toggleMenu}>
        <div className={s.barLine}></div>
        <div className={s.barLine}></div>
        <div className={s.barLine}></div>
      </div>
      {isOpen && (
        
        <div onClick={toggleMenu} className={s.wrapper}>
          
          <div className={s.menu}>
            <ul className={s.nav}>
              <li onClick={closeMenu}><Link to={'/'}>Main Page</Link></li>
              <li onClick={closeMenu}><Link to={'/category/all'} type={isPage.all}>Categories</Link></li>
              <li onClick={closeMenu}><Link to={'/products/all'} type={isPage.all}>All products</Link></li>
              <li onClick={closeMenu}><Link to={'/discount'}>All sales</Link></li>                   
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
