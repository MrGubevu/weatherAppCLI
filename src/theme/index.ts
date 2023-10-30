import { Dimensions } from 'react-native'
import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
    colors: {
        white: '#ffffff',
        white50: '#ffffff80',
        sunny: '#4a90e2',
        cloudy: '#628594',
        rainy: '#686868',

    }, 

    dimensions: {
        screenWidth: Dimensions.get('window').width,
        screenHeight: Dimensions.get('window').height
    },
}