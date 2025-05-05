import { useState } from "react";
import { TooltipWrapper } from "../Tooltip/Tooltip";
import { Btn, BtnContainer, Display, IconContainer, TalentContainer } from "./style";

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

    const increment = () => {
        if (talentLevel < maxLevel) {
            setTalentLevel(talentLevel + 1);
        }
    }

    const decrement = () => {
        if (talentLevel > minLevel) {
            setTalentLevel(talentLevel - 1);
        }
    }

    
    return (
        <TalentContainer style={{ gridColumn: col, gridRow: row }}>
            <TooltipWrapper data={props}>
                <IconContainer style={{backgroundImage: `url("/assets/${icon}")`}}>
                    <Display isInserting={isInserting} isMaxLevel={isMaxLevel}>{talentLevel}</Display>
                </IconContainer>
            </TooltipWrapper>
            <BtnContainer>
                <Btn onClick={decrement} disabled={talentLevel == minLevel}>-</Btn>
                <Btn onClick={increment} disabled={talentLevel == maxLevel}>+</Btn>
            </BtnContainer>
        </TalentContainer>
    )
}