import { createSlice, configureStore } from '@reduxjs/toolkit'
import weather from "./slices/weather"
export default configureStore({
    reducer: {
        weather,
    }
})