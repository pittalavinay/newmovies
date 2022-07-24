import { configureStore } from "@reduxjs/toolkit";
import Cardreducer from "./Cardreducer";
export const store=configureStore({
    reducer:
   {Cardreducer:Cardreducer}}
)