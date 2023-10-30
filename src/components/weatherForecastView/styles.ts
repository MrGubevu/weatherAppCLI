import styled from 'styled-components/native';
import { StyleWeatherForecastViewProps } from './types';
import { StyleWeatherForecatContainerViewProps } from './types';

const StyledWeatherForecastViewContainer = styled.ScrollView<StyleWeatherForecatContainerViewProps>`
  flex: 1;
  margin-top: 1px;
  background-color: ${({ backgroundColor}) => backgroundColor};
  padding: 20px 25px 0 20px;
`;


const StyledForercastView = styled.View<StyleWeatherForecastViewProps>`
flex-direction: row;
justify-content: space-between;
align-items: center;
hieght: 40px; 
margin-bottom: ${({ isLastItem }) => (isLastItem ? 0 : 20)}px;
`;

const StyledForecastEnclosure = styled.View`
  flex-direction: row;
  justify-content: space-between;
  `;

const StyledIcon = styled.Image`
height: 30px;
width: 30px;
`;

const StyledDayEnclosure = styled.View`
width: 90px;
padding-right: 5px;
flex-direction: row;
justify-content: flex-end;
;`

const StyledTempretureInDegreees = styled.View`
width: 90px;
flex-direction: row;
justify-content: flex-end;
padding-right: 5px;
`;


export {
  StyledDayEnclosure,
  StyledIcon,
  StyledForercastView,
  StyledWeatherForecastViewContainer,
  StyledForecastEnclosure,
  StyledTempretureInDegreees,

}
