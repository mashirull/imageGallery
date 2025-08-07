import { createSlice } from "@reduxjs/toolkit";
import useGetdata from "../../hooks/useGetData";

const imageSlice =  createSlice({
    name : "image",
    initialState : {
        images : []
    },
    reducers : {
        setImages : (state , action) => {
           
            
        }
    }
})

export const {setImages} =  imageSlice.actions;
export default imageSlice.reducer;
