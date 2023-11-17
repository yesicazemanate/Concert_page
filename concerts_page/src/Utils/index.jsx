import React from 'react'

import { useParams } from 'react-router-dom';
import { fetchData } from '../components/hooks/fetchData';
const apiData = fetchData('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Concert/')
const SelectConcert = () => {
    const data = apiData.read();
    const id = useParams();  // el id es el del artistaseleccionado
    let concert = {};
    const idd = id.id;
    var concerts = []
    for (let i = 0; i < data.length; i++) { 
        if (data[i].id_artist.id == idd) {
            concert = data[i];
            concerts.push(concert);
        }
    }
    console.log(concerts)
  return concert
}
export default SelectConcert;

