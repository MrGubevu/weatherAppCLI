import React from 'react'
import {StyledText} from '../common/index'
import { StyledDegreeSymbol, StyledTempretureInDegrees } from './styles'
import { TempretureInDegreesProps } from './types'

function  TemperatureInDegrees ({
    temperature,
    fontWeight,
    fontSize,
    symbolSize,
    degreeOffset,
    isUpperCase,
}: TempretureInDegreesProps) : JSX.Element {
    return (
        <StyledTempretureInDegrees>
            <StyledText
                fontWeight={fontWeight}
                fontSize={fontSize}
                isUpperCase={isUpperCase}
            >
                {temperature}
            </StyledText>
            <StyledDegreeSymbol symbolSize={symbolSize}  degreeOffset={degreeOffset} />
        </StyledTempretureInDegrees>
    );
}

export default TemperatureInDegrees

