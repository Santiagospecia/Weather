import axios from 'axios'


export function getLocation(){
    let url = `http://ip-api.com/json/`;
    return axios.get(url);
}