import React, {useState} from 'react';
import {useLazyQuery} from "@apollo/client";
import {GET_WEATHER_QUERY} from "./Queries.js";


function OtherWeather(){

  const [citySearched, setCitySearched] = useState("")
  const [getWeather, {loading, error, data}] = useLazyQuery(
     GET_WEATHER_QUERY )

  return(
    <div className="weather">

      <input 
        type="text" 
        placeholder="City e.g. Toronto"
        value={citySearched}
      
        onChange={(event) => {
          setCitySearched(event.target.value)
        }}
      />

        <button onClick={() => {
          getWeather({variables: {name: citySearched}});
        }}>Click to get Weather in {citySearched}</button>
      <br/>
      <br/>
        <span>Preset Cities: </span>

        <button onClick={() => {
          getWeather({variables: {name: "Toronto"}})
        }
      } >Get Toronto Weather</button>
      <button onClick={() => {
          getWeather({variables: {name: "Milan"}})
       }
     } >Get Milan Weather</button>

      <div className="results">
     
     {loading && <p>loading</p>}
     {data && 
       <>
         <p>City: {data.getCityByName.name}, {data.getCityByName.country}</p>
         <p>Weather: {data.getCityByName.weather.summary.description}</p>
         <p>Temp: {(data.getCityByName.weather.temperature.actual - 273).toFixed(1)} C (Feels like {(data.getCityByName.weather.temperature.feelsLike - 273).toFixed(1)} C)</p>
         <p>Wind: {(data.getCityByName.weather.wind.speed * 3.6).toFixed(2)} km/h</p>          
       </>
     }

   </div>


    </div>
  )
}
     

export default OtherWeather;