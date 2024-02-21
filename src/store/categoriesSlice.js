import { createSlice } from "@reduxjs/toolkit"





const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: []
    },
    reducers: {
       async_categories_list(state, action) {
            state.categories = [...action.payload]
        }
    }
})

export default categoriesSlice.reducer
export const { async_categories_list } = categoriesSlice.actions