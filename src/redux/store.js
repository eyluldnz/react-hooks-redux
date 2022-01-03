import {configureStore} from "@reduxjs/toolkit";
import todosSlice from "./dataSlice/todosSlice";

export const store=configureStore({
    reducer:{
        todos:todosSlice
    }
})