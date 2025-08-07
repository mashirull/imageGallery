import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from './slices/imageSlice';

const store  =  configureStore({
    reducer :{
        image : imagesReducer
    }
})

export default store;   