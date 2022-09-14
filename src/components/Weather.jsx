import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Input from './Input';
import './Weather.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Weather() {
   AOS.init()

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
    });
  }, [])
   const API_KEY = '897427fd7116940f03453b5a5250a2fc'

   const [degrees, setDegrees] = useState(null)
   const [location, setLocation] = useState("")
   const [userLocation, setuserLocation] = useState("")
   const [description, setDescription] = useState("")
   const [icon, setIcon] = useState("")
   const [humidity, setHumidity] = useState(null)
   const [wind, setWind] = useState(null)
   const [country, setCountry] = useState("")
   const [dataFetched, setDataFetched] = useState(false)
 
 
 const fetchData = async (e) => {
   e.preventDefault()
 
   try{
     const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${API_KEY}&units=metric`)
     const data = await res.data
 
     setDegrees(data.main.temp)
     setLocation(data.name)
     setDescription(data.weather[0].description)
     setIcon(data.weather[0].icon)
     setHumidity(data.main.humidity)
     setWind(data.wind.speed)
     setCountry(data.sys.country)
     setDataFetched(true)
     
   }catch(err){
     console.log(err)
     alert("Please enter a valid location")
   }
   
 
 }
 
 const defaultDataFetched = async () =>{
   if(!dataFetched){
     const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=${API_KEY}&units=metric`)
     const data = await res.data
   
     setDegrees(data.main.temp)
     setLocation(data.name)
     setDescription(data.weather[0].description)
     setIcon(data.weather[0].icon)
     setHumidity(data.main.humidity)
     setWind(data.wind.speed)
     setCountry(data.sys.country)
   }
 
 }
 
 useEffect(() => {
   defaultDataFetched()
 }, [])
 
   return (
     <div className="App">
         <div className='weather' data-aos="fade-left" >
             <Input 
               text={(e) => setuserLocation(e.target.value)}
               submit={fetchData}
               func={fetchData}
             />
 
             <div className='weather_display'>
             <h3 className='weather_location' data-aos="fade-up">Weather in {location}</h3>
 
             <div>
               <h1 className='weather_degrees' data-aos="fade-up"><small>Temperature: </small>{degrees} °C</h1>
             </div>
 
             <div className='weather_description'>
               <div >
                 <div className='weather_description_head' data-aos="zoom-in">
                     <span className='weather_icon'>
                       <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon" />
                     </span>
                     <h3 data-aos="zoom-in" style={{textTransform: "capitalize"}}>{description}</h3>
                 </div>
 
                 <h3 data-aos="fade-up">Humidity: {humidity}%</h3>
                 <h3 data-aos="fade-up">Wind speed: {wind}m/s</h3>
               </div>
 
               <div className='weather_country'>
                 <h3>{country}</h3>
                 <h2 className='weather_date'>4/30/2022, 2:05:24 PM</h2>
               </div>
             </div>
 
         </div>
 
         </div>
     </div>
   );
 }
 


export default Weather