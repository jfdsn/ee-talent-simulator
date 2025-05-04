import React from 'react';
import { Alert, Description, MaxLevel, Requirements, Title, TooltipContainer, TooltipText } from './style';


type Props = {
    children: React.ReactNode;
    data: TooltipData;
}

type TooltipData = {
    id: string;
    maxLevel: number;
    description: string;
    col: number;
    dependency?: {
        level: number;
        from: string;
        to: string;
    }
}

export const TooltipWrapper: React.FC<Props> = ({ children, data }) => {
    const points = 1; //TODO: Get this value from the state or props

    const minKP = (() => {
        switch (data.col) {
            case 4:
                return 15;
            case 5:
                return 20;
            case 6:
                return 25;
            case 7:
                return 30;
            case 8: 
                return 35; 
            default:
                return null;
        }
    })();

    return (
        <TooltipContainer>
            {children}
            <TooltipText>
                <Title>{data.id}</Title>
                <MaxLevel>Max Level {data.maxLevel}</MaxLevel>
                <Description>{data.description}</Description>
                {(data.dependency || minKP) && (
                    <Requirements>
                        <span>Requirements:</span>
                        {minKP && <span>Total Knowledge Points: {minKP}</span>}
                        {data.dependency && (
                            <span>
                            {data.dependency.to} LV {data.dependency.level}
                            </span>
                        )}
                    </Requirements>
                )}
                <Alert>
                    Learning the next knowledge level will cost you {points} Knowledge Points!
                </Alert>
            </TooltipText>
        </TooltipContainer>
    )
}