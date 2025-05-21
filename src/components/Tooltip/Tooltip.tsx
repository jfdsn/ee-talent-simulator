import React from 'react';
import { Alert, Description, MaxLevel, Requirements, Title, TooltipContainer, TooltipText } from './style';


type Props = {
    children: React.ReactNode;
    data: TooltipData;
    getLevel: () => number;
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

export const TooltipWrapper: React.FC<Props> = ({ children, data, getLevel }) => {
    const minKP = data.col > 3 ? (5 * (data.col - 3)) + 10 : null;

    const talentPointsAlert = getLevel();

    const talentName = data.id;

    return (
        <TooltipContainer>
            {children}
            <TooltipText>
                <Title>{talentName}</Title>
                <MaxLevel>Max Level {data.maxLevel}</MaxLevel>
                <Description>{data.description}</Description>
                {(data.dependency || minKP) && (
                    <Requirements>
                        <span>Requirements:</span>
                        {minKP && <span>Total Knowledge Points: {minKP}</span>}
                        {data.dependency && (
                            <span>
                            {data.dependency.from} LV {data.dependency.level}
                            </span>
                        )}
                    </Requirements>
                )}
                <Alert>
                    {(talentPointsAlert > 0) && (
                        <>
                            Learning the next knowledge level will cost you {talentPointsAlert} Knowledge Points!
                        </>
                    )}
                </Alert>
            </TooltipText>
        </TooltipContainer>
    )
}