import React, { useEffect, useState } from 'react';
import { useWeather } from '../../hooks/useWeather/useWeather';
import { TodaysWeather } from '../../hooks/useWeather/types';
import WeatherForecastView from '../../components/weatherForecastView';
import { SafeAreaView, View, Text } from 'react-native';
import CurrentDayWeatherSummary from '../../components/currentDayWeatherSummary/index';
import CurrentDayWeatherView from '../../components/currentDayWeatherView';




export const Home: React.FC = () => {
  const { getCurrentWeather } = useWeather();
  const [weatherData, setWeatherData] = useState<TodaysWeather | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weather = await getCurrentWeather();
        setWeatherData(weather);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchData();
  }, [getCurrentWeather]);

  return (
    <View>
     
      {weatherData && <CurrentDayWeatherView todaysWeather={weatherData} />}

      <CurrentDayWeatherSummary 
      backgroundColor={''} 
      minimumTemperature={minimumTemperature} 
      maximumTemperature={maximumTemperature} 
      currentTemperature={temperature}/>
      <WeatherForecastView />
      
      
    </View>
    
  );
};

export default Home;
