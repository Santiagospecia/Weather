import React, {useEffect, useState} from "react";
import "./style.css";
import {Form, Button} from "react-bootstrap"; // En este caso usaremos boostrap para los estilos
import swal from 'sweetalert';
import { getCity } from "../../api/city";
import {useDispatch, useSelector} from "react-redux"
import { fetchWeather } from "../../store/slices/weather";
export default function BuscarCiudad() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputCity = e.currentTarget.inputCity.value;
        if (inputCity != ''){
            getCity(inputCity).then((response) => {
         
              if(response.data.length > 0 ){
                dispatch(fetchWeather(response.data[0].lat, response.data[0].lon));
              }
              else{
                swal("Lo sentimos, no encontramos resultados para tu busqueda!");
              }
             
            })
            .catch((error) => {
              console.log(error);
            });
        }
        else{
            swal("Para buscar debes completar el campo!");
        }
    }


  return (
    <div >
      <Form className="flex-container" onSubmitCapture={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Ej: Santa Rosa de Calamuchita"
            className="input-flex"
            name="inputCity"
           
          />
          
        </Form.Group>
        <Button  variant="primary" type="submit">
          Buscar
        </Button>
      </Form>
    </div>
  );
}
