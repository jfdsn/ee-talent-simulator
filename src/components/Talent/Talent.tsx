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
    const maxLevel = props.maxLevel;
    const minLevel = 0;
    
    const [ talentLevel, setTalentLevel ] = useState(0);
   
    const isMaxLevel = talentLevel === maxLevel;
    const isInserting = talentLevel > 0 && talentLevel < maxLevel;

    const { points, setPoints } = usePoints();

    const increment = () => {
        if (isMaxLevel) return;
        
        if (talentLevel >= 15) {
            setTalentLevel(talentLevel + 1);
            setPoints(points - 3);         
        } else if (talentLevel >= 5) {
            setTalentLevel(talentLevel + 1);
            setPoints(points - 2);
        } else {
            setTalentLevel(talentLevel + 1);
            setPoints(points - 1);
        }
    }

    const decrement = () => {
        if (talentLevel === minLevel) return;

        if (talentLevel > 15) {
            setTalentLevel(talentLevel - 1);
            setPoints(points + 3);
        } else if (talentLevel > 5) {
            setTalentLevel(talentLevel - 1);
            setPoints(points + 2);
        } else {
            setTalentLevel(talentLevel - 1);
            setPoints(points + 1);
        }
    }

    //Informe Tooltip how many points a talent costs based on current level
    const getLevel = () :number => {
        if (talentLevel >= 15) return 3
        if (talentLevel >= 5) return 2
        return 1
    }
    
    return (
        <TalentContainer style={{ gridColumn: col, gridRow: row }}>
            <TooltipWrapper data={props} getLevel={getLevel}>
                <IconContainer style={{backgroundImage: `url("/assets/${icon}")`}}>
                    <Display isInserting={isInserting} isMaxLevel={isMaxLevel}>{talentLevel}</Display>
                </IconContainer>
            </TooltipWrapper>
            <BtnContainer>
                <Btn onClick={decrement} disabled={talentLevel == minLevel}>-</Btn>
                <Btn onClick={increment} disabled={talentLevel == maxLevel}>+</Btn>
            </BtnContainer>
            {points}
        </TalentContainer>
    )
}