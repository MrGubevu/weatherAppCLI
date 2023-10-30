// import useLocation from "../../hooks/useLocation/useLocation"
// import { useWeather } from '../../hooks/useWeather/useWeather';
// import { View, Text, FlatList, SafeAreaView } from "react-native";
import { useTheme } from 'styled-components/native'
import React from 'react';
import { TodaysWeather } from '../../hooks/useWeather/types';
import TemperatureInDegrees from '../temperatureInDegrees';
import {
  StyledCurrentDayWeatherView,
  StyledCurrentDayWeatherViewContainer,
  StyledTemperature,
} from './styles';
import { StyledText } from '../common';
import CurrentDayWeatherSummary from '../currentDayWeatherSummary';


function CurrentDayWeatherView({
  todaysWeather: {
    temperature,
    minimumTempreture,
    maximumTempreture,
    description,
  },
}: {
  todaysWeather: TodaysWeather;
}) {
  return (
  
    <StyledCurrentDayWeatherViewContainer>

        <StyledCurrentDayWeatherView>

          <StyledTemperature>
          <TemperatureInDegrees
          temperature={temperature}
          fontWeight={800}
          fontSize={30}
          isUpperCase
          />

          </StyledTemperature>
      
          <StyledText>
              <p >Description: {description}</p>
          </StyledText>
      </StyledCurrentDayWeatherView>

        <CurrentDayWeatherSummary 
        minimumTemperature={minimumTempreture}
        maximumTemperature={maximumTempreture}
        currentTemperature={temperature} 
        backgroundColor={'remember to create switch statement for the background'}        />

       

    </StyledCurrentDayWeatherViewContainer>
    
  );
}

export default CurrentDayWeatherView