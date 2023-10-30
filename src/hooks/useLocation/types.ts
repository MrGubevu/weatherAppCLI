
interface CurrentCoordinates {
    latitude: number
    longitude: number
  }

  interface GeolocationError {
    code: number;
    message: string
  }

  interface Location {
    latitude: number;
    longitude: number;
}

  export type {
    CurrentCoordinates,
    GeolocationError,
    Location
  }