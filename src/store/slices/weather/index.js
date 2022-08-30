import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {API_KEY} from '../../../api/config'

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        list : [],
        listFive:[]
    },
    reducers:{
        setWeatherList: (state, action) =>{
            state.list = action.payload;
        }
    },
});
export const  {setWeatherList} = weatherSlice.actions;

export default weatherSlice.reducer;



  
  
  export const fetchWeather = (lat, lon) => {
  return (dispatch) => {
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=6&units=metric&lang=es&appid=${API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      dispatch(setWeatherList(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  };
  };

