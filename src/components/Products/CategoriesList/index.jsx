import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCatigoriesList } from '../../../asyncActions/products';
import { ROOT_URL, isPage } from '../../../App';
import s from './CategoriesList.module.css'
export default function CategoriesList({ type }) {
    let categories = useSelector(store => store.categories);
  const dispatch = useDispatch();
  // !!!=======
  const { id } = useParams();
useEffect(() => {
  window.scrollTo(0, 0);
            dispatch(fetchCatigoriesList(type))
  }, [id, type, dispatch]);

  return (
   <div >
    {type!==isPage.home && <h2 className='wrapper'>Categories</h2>}
      <div className={type===isPage.home ?  `${s.catContentHome} wrapper` : `${s.catContentCategoires} wrapper` }>
     
            {categories?.map(cat => {
              
                
             
                return <div key={cat.id}>
                         <Link to={`/categories/${cat.id}`}>
                        {/* <div  style={{backgroundImage: `url('${ROOT_URL+cat.image}')`}} className={s.categoryImg} key={cat.id}> */}
                        
                          <img className={s.categoryImg} src={ROOT_URL+cat.image} alt="category" />
                       
                        <div className={s.categoryTxt}>{cat.title}</div>
                        </Link> 
                    </div>
            })}
       </div>
   </div>


  );
}

