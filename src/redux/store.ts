import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/Auth/authSlice/authSlice";
export const store = configureStore({
    reducer: {
        auth: userReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;