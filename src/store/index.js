import { configureStore } from "@reduxjs/toolkit";
import postList from '../slices/slicePostList'

const store = configureStore({
    reducer: {postList},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store