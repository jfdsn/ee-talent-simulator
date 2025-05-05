import { useState } from "react";
import { TooltipWrapper } from "../Tooltip/Tooltip";
import { Btn, BtnContainer, Display, IconContainer, TalentContainer } from "./style";
import { usePoints } from "../../context/PointsContext";

type Props = {
    id: string;
    icon: string;
    row: number;
    col: number;
    maxLevel: number;
    description: string;
}

export const Talent: React.FC<Props> = ( props ) => {
    const { icon, row, col } = props;
    const talentMaxLevel = props.maxLevel;
    const talentMinLevel = 0;
    
    const [ talentLevel, setTalentLevel ] = useState(0);
    const { globalPoints, setPoints, globalMaxPoints } = usePoints();

   
    const isMaxLevel = talentLevel === talentMaxLevel;
    const isInserting = talentLevel > 0 && talentLevel < talentMaxLevel;
    const isTalentRequirement = checkTalentRequirements(col, globalPoints, globalMaxPoints);

    const increment = () => {
        if (isMaxLevel) return;
        
        if (talentLevel >= 15) {
            setTalentLevel(talentLevel + 1);
            setPoints(globalPoints - 3);         
        } else if (talentLevel >= 5) {
            setTalentLevel(talentLevel + 1);
            setPoints(globalPoints - 2);
        } else {
            setTalentLevel(talentLevel + 1);
            setPoints(globalPoints - 1);
        }
    }

    const decrement = () => {
        if (talentLevel === talentMinLevel) return;

        if (talentLevel > 15) {
            setTalentLevel(talentLevel - 1);
            setPoints(globalPoints + 3);
        } else if (talentLevel > 5) {
            setTalentLevel(talentLevel - 1);
            setPoints(globalPoints + 2);
        } else {
            setTalentLevel(talentLevel - 1);
            setPoints(globalPoints + 1);
        }
    }

    //Inform Tooltip how many points a talent costs based on current level
    const getLevel = () :number => {
        if (talentLevel >= 15) return 3
        if (talentLevel >= 5) return 2
        return 1
    }
    
    return (
        <TalentContainer style={{ gridColumn: col, gridRow: row }}>
            <TooltipWrapper data={props} getLevel={getLevel}>
                <IconContainer isTalentRequirements={isTalentRequirement} icon={icon}>
                    <Display isInserting={isInserting} isMaxLevel={isMaxLevel}>{talentLevel}</Display>
                </IconContainer>
            </TooltipWrapper>
            <BtnContainer>
                <Btn onClick={decrement} disabled={talentLevel == talentMinLevel || !isTalentRequirement}>-</Btn>
                <Btn onClick={increment} disabled={talentLevel == talentMaxLevel || !isTalentRequirement}>+</Btn>
            </BtnContainer>
            {globalPoints}
        </TalentContainer>
    )
}

const checkTalentRequirements = (col: number, points: number, maxPoints: number): boolean => {
    if (col <= 3) return true; // No requirements for first 3 columns
    
    const requiredPoints = maxPoints - points; 
    
    switch (col) {
        case 4:
            return requiredPoints >= 15;
        case 5:
            return requiredPoints >= 20;
        case 6:
            return requiredPoints >= 25;
        case 7:
            return requiredPoints >= 30;
        case 8:
            return requiredPoints >= 35;
        default:
            return false;
    }
}