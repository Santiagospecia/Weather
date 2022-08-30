import axios from "axios";
import { API_KEY } from "./config";

export function getCity(inputCity) {
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&limit=1&appid=${API_KEY}`;
  return axios.get(url);
}
