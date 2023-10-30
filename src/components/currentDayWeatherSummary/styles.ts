import styled from 'styled-components/native'
import { StyledCurrentDayWeatherSummaryProps } from './types'


const StyledCurrentDayWeatherSummary = styled.View<StyledCurrentDayWeatherSummaryProps>`
  height: 60px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 26px 0 20px;
  margin-top: -7px;
`;

const StyledForecastSummaryContainer = styled.View`
  align-items: center;
`;

export { StyledCurrentDayWeatherSummary, StyledForecastSummaryContainer };