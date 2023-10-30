import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { useForecastData } from "../../hooks/useWeather/useWeatherForecast";
import { WeatherForecast } from "../../hooks/useWeather/types";
import { renderForecastItem } from "./forecastItemRenderer";
import { StyledDayEnclosure, StyledIcon, StyledForercastView, StyledForecastEnclosure, StyledWeatherForecastViewContainer, StyledTempretureInDegreees} from "./styles";
import { useTheme } from 'styled-components/native'
import { WeatherForecastViewProps } from "./types";
import { WeatherCondition} from '../currentDayWeatherView/enums'
import icons from '../../assets/icons'
import TemperatureInDegrees from "../tempretureInDegrees/index";
import { colors } from './colors'





  const getIconByType = (type: string) => {
    switch (type) {
      case WeatherCondition.Sunny:
        return icons.sunnyIcon;
      case WeatherCondition.Cloudy:
        return icons.cloudyIcon;
      case WeatherCondition.Rainy:
        return icons.rainyIcon;
      default:
        return icons.sunnyIcon;
    }
  };


  const getBackgroundColorByType = (type: WeatherCondition) => {
    switch (type) {
      case WeatherCondition.Sunny:
        return colors.sunny;
      case WeatherCondition.Cloudy:
        return colors.cloudy;
      case WeatherCondition.Rainy:
        return colors.rainy;
      default:
        return colors.sunny;
    }
  };

  const WeatherForecastView: React.FC = () => {
    const { forecastData, isLoading } = useForecastData();
    const type = WeatherCondition.Sunny;
  
    return (
      <>
      <StyledWeatherForecastViewContainer 
        backgroundColor={getBackgroundColorByType(type)}
      >
        
          {isLoading ? (
            <Text>Loading forecast data...</Text>
          ) : (
            <FlatList<WeatherForecast> data={forecastData} renderItem={renderForecastItem} />
          )}
  
      
  
      <StyledIcon source={getIconByType(type)}/>

              <StyledTempretureInDegreees>
                <TemperatureInDegrees 
                temperature={} 
                fontWeight={700} 
                fontSize={18} 
                symbolSize={10} 
                degreeOffset={-12} 
                isUpperCase={false} />

              </StyledTempretureInDegreees>
  
      </StyledWeatherForecastViewContainer>
      </>
    );
  };

export default WeatherForecastView;
