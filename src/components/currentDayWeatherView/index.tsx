import React, { useEffect, useState } from 'react';
import { useLocation } from '../../hooks/useLocation/useLocation';
import { useWeather } from '../../hooks/useWeather/useWeather';
import { TodaysWeather } from '../../hooks/useWeather/types';
import TemperatureInDegrees from '../temperatureInDegrees';
import { View, Text, SafeAreaView } from "react-native";

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
    //remember to style
    <SafeAreaView >
        <View >
        <TemperatureInDegrees
        temperature={temperature}
        fontWeight={800}
        fontSize={30}
        isUpperCase
        />
          <View>
              <Text >Description: {description}</Text>
          </View>
          </View>
          <View>
              <Text>Low Temperature: {tempLow}°C</Text>
              <Text>High Temperature: {tempMax}°C</Text>
              <Text>Current Tempreture: {temperature}°C</Text>
          </View>

    </SafeAreaView>
    
  );
}

export const CurrentWeatherView: React.FC = () => {
  const { getCurrentLocation } = useLocation();
  const { getCurrentWeather } = useWeather();
  const [currentLocation, setCurrentLocation] = useState({ latitude: 0, longitude: 0 });
  const [weatherData, setWeatherData] = useState<TodaysWeather | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const location = await getCurrentLocation();
        setCurrentLocation(location);
        const weather = await getCurrentWeather();
        setWeatherData(weather);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [getCurrentLocation, getCurrentWeather]);

  return (
    <div>
      <h1>Current Weather</h1>
      <p>Latitude: {currentLocation.latitude}</p>
      <p>Longitude: {currentLocation.longitude}</p>
      {weatherData && <CurrentDayWeatherView todaysWeather={weatherData} />}
    </div>
  );
};
