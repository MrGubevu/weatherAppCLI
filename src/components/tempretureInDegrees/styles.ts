import styled from 'styled-components/native'
import { StyledDegreesSymbholProps } from './types'

const StyledTempretureInDegrees = styled.View`
position: relative;
`;

const StyledDegreeSymbol = styled.View<StyledDegreesSymbholProps>`
  position: absolute;
  top: 0;
  right: ${({ degreeOffset }) => degreeOffset || -25}px;
  height: ${({ symbolSize }) => symbolSize || 15}px;
  width: ${({ symbolSize }) => symbolSize || 15}px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
`;

export { StyledTempretureInDegrees, StyledDegreeSymbol }
