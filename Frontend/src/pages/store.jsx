import { configureStore } from "@reduxjs/toolkit";
import  {userDetailReducer}  from "./reducer";

const store = configureStore({
  reducer: {
    user: userDetailReducer
  }
})


export {store}