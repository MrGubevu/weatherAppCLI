import React, { useEffect, useState } from 'react';
import { useWeather } from '../../hooks/useWeather/useWeather';
import { TodaysWeather } from '../../hooks/useWeather/types';
import WeatherComponent from '../../components/weatherForecastView/index';
import  { View, Text, SafeAreaView } from "react-native";

function CurrentDayWeatherView({
  todaysWeather: {
    temperature,
    tempLow,
    tempMax,
    description,
  },
}: {
  todaysWeather: TodaysWeather;
}) {
  return (
    <SafeAreaView>
      <View>
        <Text>Today's Weather</Text>
      <Text>{temperature}°C</Text>
      <Text>Description: {description}</Text>
      <Text>Low Temperature: {tempLow}°C</Text>
      <Text>High Temperature: {tempMax}°C</Text>
      </View>
    </SafeAreaView>
  );
}

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
    <SafeAreaView>
      <View>
     
      {weatherData && <CurrentDayWeatherView todaysWeather={weatherData} />}
      <WeatherComponent />
      
      </View>
    </SafeAreaView>
  );
};

export default Home;
