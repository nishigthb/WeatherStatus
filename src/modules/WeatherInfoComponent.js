import React from "react";
import styled from "styled-components";
import {WeatherIcons} from "../App";

export const WeatherInfoIcons = {
    sunset:"/icons/temp.png",
    sunrise:"/icons/temp.png",
    Humidity:"/icons/humidity.jpg",
    Wind:"/icons/wind.png",
    Pressure:"/icons/pressure.jpg",
    Min_temp:"/icons/min_temp.jpg",
    Max_temp:"/icons/max_temp.jpg",
};


const WeatherCondition=styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:100%;
justify-content:space-between;
margin:15px auto;
`;
const Condition=styled.span`
margin:20px auto;
font-weight:bold;
font-size:14px;
& span{
    font-size:28px;
}
`;
const Location=styled.span`
font-size:24px;
font-weight:bold;
`;



const WeatherInfoLabel =styled.span`
font-size:14px;
font-weight:bold;
margin:20px 30px 10px;
text-align:start;
width:100%;
`;

const WeatherLogo=styled.img`
width: 100px;
height: 100px;
margin: 5px auto;
`
const WeatherInfoContainer=styled.div`
display:flex;
flex-direction:row;
width:90%;
justify-content:space-evenly;
align-items:center;
flex-wrap:wrap;
`;
const InfoContainer=styled.div`
display:flex;
margin:5px 10px;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
`;

const InfoIcon=styled.img`
width:36px;
height:36px;
`;
const InfoLabel=styled.div`
display:flex;
flex-direction:column;
margin:20px;
font-size:14px;
& span {
    font-size:12px;
    font-trasnform:capatalize;
}
`;

const WeatherInfoComponent=(props)=> {
    const {name,value}=props;

    return (
        <InfoContainer>
        <InfoIcon src={WeatherInfoIcons[name]} />
        <InfoLabel>
            {value}
            <span> {name}</span>
        </InfoLabel>
        </InfoContainer>
    )
}

const WeatherComponent=(props)=>{ 
    const{weather}=props;
    const isDay=weather?.weather[0].icon?.includes('d')
    const getTime=(TimeStamp)=>{
        return `${new Date(TimeStamp*1000).getHours()} :${new Date(TimeStamp*1000).getMinutes()}`
    }
    return (
        
    <>
    <WeatherCondition> 
        <Condition>
             <span>{`${Math.floor(weather?.main?.temp-273)}°C`} </span> 
             {`| ${weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}/>
    </WeatherCondition>
    <Location>{`${weather?.name},${weather?.sys?.country}   `}</Location>
    <WeatherInfoLabel>Weather Information</WeatherInfoLabel>
    <WeatherInfoContainer>
    

        <WeatherInfoComponent name={isDay? "sunset":"sunrise" }
        value={`${getTime(weather?.sys[isDay? "sunset":"sunrise"] )}`}
        />
        <WeatherInfoComponent name={"Humidity"} value={weather?.main?.humidity}/>
        <WeatherInfoComponent name={"Wind"} value={weather?.wind?.speed}/>
        <WeatherInfoComponent name={"Pressure"} value={weather?.main?.pressure}/>
        
        <WeatherInfoComponent name={"Min_temp"} value={(weather?.main?.temp_min-273).toFixed(2)}/>
    <WeatherInfoComponent name={"Max_temp"} value={(weather?.main?.temp_max-273).toFixed(2)}/>
         </WeatherInfoContainer>
    </>
    );
    
    };
export default WeatherComponent;