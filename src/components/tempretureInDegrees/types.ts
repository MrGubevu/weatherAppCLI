interface TempretureInDegreesProps {
    temperature: number;
    fontWeight: number;
    fontSize: number;
    symbolSize: number;
    degreeOffset: number;
    isUpperCase: boolean;
}

interface StyledDegreesSymbholProps {
    symbolSize: number;
    degreeOffset? : number;
}

export type {
    TempretureInDegreesProps,
    StyledDegreesSymbholProps
}