import { useState } from "react";
import { Btn, BtnContainer, Display, IconContainer, TalentContainer } from "./style";

type Props = {
    id: string;
    icon: string;
    row: number;
    col: number;
}

export const Talent: React.FC<Props> = (props) => {
    const { id, icon, row, col } = props;
    let [ talentLevel, setTalentLevel ] = useState(0);
    const maxLevel = 10;
    const minLevel = 0;

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
            <IconContainer style={{backgroundImage: `url("/assets/${icon}")`}}>
                <Display>{talentLevel}</Display>
            </IconContainer>
            <BtnContainer>
                <Btn onClick={decrement} disabled={talentLevel == minLevel}>-</Btn>
                <Btn onClick={increment} disabled={talentLevel == maxLevel}>+</Btn>
            </BtnContainer>
        </TalentContainer>
    )
}