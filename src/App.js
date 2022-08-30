import './App.css';
import Header from './components/header/header';
import SearchCity from './components/input/input';
import WeatherCard from './components/card';
import React, { useEffect } from "react";
import {useDispatch} from "react-redux"
import { fetchWeather } from './store/slices/weather';
import { getLocation } from './api/location';
function App() {
  const dispatch = useDispatch();

 
  useEffect(()=>{
    getLocation().then((response) => {
        dispatch(fetchWeather(response.data.lat, response.data.lon));
      })
      .catch((error) => {
        console.log(error);
      });
  
  },[])


  return (
    <div className="App">

      <Header title={"Weather Test  "} subtitle={"Pronóstico extendido"}></Header>
      <SearchCity></SearchCity>
      <WeatherCard></WeatherCard>
    </div>
  );
}


export default App;
