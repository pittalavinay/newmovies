
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies:[],
    shows:[],
    episode:[]
}

const Cardreducer=createSlice(
{
    name:"Cardreducer",
    initialState,
    reducers:{
        get:(state,action)=>{
           return {...state,movies:action.payload}},
           set:(state,action)=>{
            return {...state,shows:action.payload}
           },
           go:(state,action)=>{
            return {...state,episode:action.payload}
           }

        }
        })

export const {get}= Cardreducer.actions;
export const {set}= Cardreducer.actions;
export const { go }= Cardreducer.actions;
export default Cardreducer.reducer;