// This is where I will be defining the types for the weatherForecastView component

//import the type from the useWeather hook

import { WeatherForecast } from "../../hooks/useWeather/types";

interface WeatherForecastViewProps { 
    weatherForecast: WeatherForecast[];
    weatherCondition : string;
    // onAddToFavorites: (weather: string) => void;
}

// now define the style for the component

interface StyleWeatherForecatContainerViewProps {
    backgroundColor: string;
}

interface StyleWeatherForecastViewProps {
    isLastItem: boolean;
}

interface colors {
    sunny: string;
    cloudy: string;
    rainy: string;
}


export type {
    WeatherForecastViewProps,
    StyleWeatherForecatContainerViewProps,
    StyleWeatherForecastViewProps,
    colors

}