interface TodaysWeather {
    temperature: number;
    description: string;
    minimumTempreture: number;
    maximumTempreture: number;
  }

  interface WeatherApiResponse {
    ok: boolean;
    result: unknown;
    error: unknown;
  }

  interface WeatherForecastData {
    main: {
      temp: number
    }
    dt: number;
    type: string;
    temperature: number;
    day: string;
    
  }

  interface WeatherForecast {
    type: string;
    temperature: number;
    day: string;
  }


export type {
    TodaysWeather,
    WeatherApiResponse,
    WeatherForecastData,
    WeatherForecast
}
