import React from "react";
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import "./style.css"
export default function WeatherCard() {
  const {list} = useSelector(state => state.weather);


  
  return (
    <div className="div-weather">
        {list.list !== undefined ? list.list.map((element, index) => (
        
        <Card key={index} className="card-weather" style={{ width: "18rem", padding: "1rem" }}>
          <img style={{ margin: "center" }} src="/img/clima1.png" alt="logo" />
          <Card.Body>
            <Card.Title className="title-weather">{element.weather[0].description}</Card.Title>
            <Card.Text >Temperatura: {element.main.temp}°</Card.Text>
            <Card.Text>Temperatura min: {element.main.temp_min}°</Card.Text>
            <Card.Text>Temperatura max: {element.main.temp_max}°</Card.Text>
          </Card.Body>
        </Card>
       
      )): '' } 
    </div>
  );
}
