import {applyMiddleware, combineReducers, configureStore, createStore } from '@reduxjs/toolkit'


import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';

import { thunk } from 'redux-thunk';
import { persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import categoriesSlice from './categoriesSlice';
import { isAddReducer } from './isAddReducer';
import { filterReducer } from './FilterReducer';
import modalSlice from './modalSlice';
import { categoriesReducer } from './categoriesReducer';



const persistingConfig = {
    key: 'localStorage',
    storage,
    whitelist: ['cart'],
    // blacklist: ['_persist']

}


const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    isAdd: isAddReducer,
    filter: filterReducer,
    // modal: modalSlice

});

const persistedReducer = persistReducer(persistingConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk)); 
export const persistor = persistStore(store);