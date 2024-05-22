import React, {useEffect, useState} from 'react';
import {showError} from "../../utils/alert/alert";
import Card from '../../components/card/card';
import Input from '../../components/input/input';
import './weather.css'
import { Helmet } from 'react-helmet';
import axios from "axios";
import CircularIndeterminate from '../../components/Loading/loading';

const Weather = () => {

    const [isLoading, setIsLoading] = useState( false)
    const [weather, setWeather] = useState([])
    console.log(weather)
    const [isInput, setIsInput] = useState('')
    const [bishkek, setBishkek] = useState([])
  
  
    async function GetWeather() {
      try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=ff8e32f41f674212a14110750241603&q=${isInput}&aqi=no`)
      setWeather(response.data)
      } catch (error) {
        if(error.response?.status === 400){
          showError('Ошибка кода' , 'Введите существующий город')
        } else {
          showError('Ошибка выполнения кода', 'Повторите попытку позже')
        }
      }
    }
    
    async function GetBishkek() {
      setIsLoading(true)
      try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=ff8e32f41f674212a14110750241603&q=Bishkek&aqi=no`)
      setBishkek(response.data)
      } catch (error) {
        showError('Ошибка выполнения кода', 'Повторите попытку позже')
      }
      finally{
        setIsLoading(false)
      }
    }
  
    useEffect(()=> {
      GetBishkek()
    }, [])
  
  return (
    <div className="weather">
      <Helmet>
        <title>Прогноз погоды</title>
      </Helmet>
      {isLoading? 
      <CircularIndeterminate/>
      : 
      <div className='incard'>
      <Input
      setisinput={setIsInput}
      getweather={GetWeather}
      setweather={setWeather}
      />
      <Card
      weather={weather}
      bishkek={bishkek}
      />
        </div>}
    </div>
  )
}

export default Weather;