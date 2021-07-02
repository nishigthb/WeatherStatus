import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import axios from "axios";
import React, { useState } from "react";

const   API_KEY="509f1ecb5de744404e335e27ffc0d243"
const Container=styled.div`
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow:0 3px 6px 0 #555;
padding:20px 10px;
border-radius:4px;width:380px;
background:white;
font-family:  'Slabo 27px', serif;

`;
export const WeatherIcons = {
  "01d":"/icons/01d.png",
  "01n":"/icons/01n.png",
  "02d":"/icons/02d.png",
  "02n":"/icons/02n.png",
  "03d":"/icons/03d.png",
  "03n":"/icons/03n.svg",
  "04d":"/icons/04d.png",
  "04n":"/icons/04n.png",
  "09d":"/icons/09d.png",
  "09n":"/icons/09n.png",
  "10d":"/icons/10d.png",
  "10n":"/icons/10n.png",
  "11d":"/icons/11d.png",
  "11n":"/icons/11n.png",    
  "50d":"/icons/50d.png",
  "50n":"/icons/50n.png",
};

const AppLabel=styled.span`
colr:black;
font-size:18px;
font-weight:bold;
`;



function App() {
  const [city,updateCity]=useState();
  const [weather,updateWeather]=useState();

  const fetchWeather= async(e)=>{
    e.preventDefault();
    const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
   updateWeather(response.data);
  }; 

  return (
    <Container>
      <AppLabel> Weather App</AppLabel>
       {weather ?(
       <WeatherComponent weather={weather}/>

       ):(<CityComponent updateCity={updateCity} fetchWeather={fetchWeather} /> )}
    </Container>
  );
}

export default App;