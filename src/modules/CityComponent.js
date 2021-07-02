import styled from 'styled-components' ;
const WeatherLogo=styled.img`
width: 350px;
height: 200px;
margin: 20px auto;
`
const ChooseCityLabel=styled.span`
color:black;
font-size:18px;
font-weight:bold;
margin:5px auto;
`
const Searchbox=styled.form`
display:flex;
flex-direction:row;
color:black;
font-size:18px;
font-weight:bold;
margin:20px auto;
border:black solid 1px;
border-radius:2px;
&input{
    padding:10px;
    font-size:14px;
    border:none;
    outline:none;
    font-weight:bold;
}
&button{
    background-color:black;
    padding:10px;
    font-size:14px;
    border:none;
    outline:none;
    font-weight:bold;
    color:black;
    cursor:pointer;
}
`
const CityComponent=(props)=>{
    const {updateCity,fetchWeather}=props;
    return (
    <>
    <WeatherLogo src="/icons/weather.jpg"/> 
    <ChooseCityLabel > Check Weather of your city</ChooseCityLabel>
    
    <Searchbox onSubmit={fetchWeather}>
        <input placeholder="City name" onChange={ (e)=>updateCity (e.target.value)}/> 
        <button type="Submit">Search </button>
    </Searchbox>
    </>
); 
}
export default CityComponent;