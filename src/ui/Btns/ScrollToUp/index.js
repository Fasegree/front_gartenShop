import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styles from './Button.module.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // window.addEventListener('scroll', toggleVisibility);

    // // Cleanup function to remove the event listener when component unmounts
    // return () => {
    //   window.removeEventListener('scroll', toggleVisibility);
    // };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`${styles.scrollToTopButton} ${isVisible ? styles.showButton : ''}`}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp />
    </button>
  );
};

export default ScrollToTopButton;
