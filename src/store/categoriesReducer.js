// // import {createAction, createReducer} from "@reduxjs/toolkit";

// import { createSlice } from "@reduxjs/toolkit"


const defaultState = [];

const ASYNC_CATEGORIES_LIST = 'ASYNC_CATEGORIES_LIST';


export const categoriesReducer = ( state = defaultState, action ) => {
    switch (action.type) {
        case ASYNC_CATEGORIES_LIST:
            return action.payload;
        default:
            return [...state];
    }
}

export const asyncCategoriesListAction = (payload) => ({type: ASYNC_CATEGORIES_LIST, payload})

