import "./style.css";
import React, { useEffect, useState } from "react";
import {GeoAlt} from 'react-bootstrap-icons';
import { useSelector } from "react-redux";
export default function Header({ title, subtitle }) {
  const {list} = useSelector(state => state.weather);
  const [weather, setWeather] = useState([]);

  useEffect(()=>{
    if(list.cod === '200'){
      setWeather(list.city.name);
    }
    else{ 
      setWeather();
    }
  },[list])


  return (
    <div className={"container"}>
      <div className={"navbar"}>
        <div>
          <div>
            <span className={"texto"}>{title}</span> <br />
            {subtitle }
          </div>
        </div>
        <div>
          <img className={"logo"} src="/img/cielo-1.png" alt="logo" /><br />
          <spam><GeoAlt/>{weather}</spam>
        </div>
      </div>
    </div>
  );
}
