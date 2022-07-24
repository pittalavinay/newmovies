
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies:[]
}

const Cardreducer=createSlice(
{
    name:"Cardreducer",
    initialState,
    reducers:{
        get:(state,action)=>{
           return {...state,movies:action.payload}}
        }})

export const {get}= Cardreducer.actions;
export default Cardreducer.reducer;