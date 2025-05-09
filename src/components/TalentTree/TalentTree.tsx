import { TalentArrow } from "../TalentArrow/TalentArrow";
import { Talent } from "../Talent/Talent";
import { TalentGrid, TreeContainer } from "./style";
import { useEffect, useState } from "react";
import { usePoints } from "../../context/PointsContext";

import { Talents } from "../../types/types";

type Props = {
    talents: Talents;
}

export const TalentTree: React.FC<Props> =  ({talents}) => {
    const [talentLevel, setTalentLevel] = useState<Record<string, number>>(
        () => Object.fromEntries(talents.map((talent) => [talent.id, 0])) // Initialize all talents to level 0
    );

    const { resetObserver, setPoints, globalPoints, globalMaxPoints } = usePoints();

    useEffect(() => {
        // Reset all talents to level 0 every time resetObserver changes
        setTalentLevel(() => Object.fromEntries(talents.map((talent) => [talent.id, 0]))); 
    }, [resetObserver]);

    useEffect(() => {
        const newTalentLevels = { ...talentLevel };
        let refundedTotal = 0;
    
        talents.forEach((talent) => {
            // Verifica dependência direta
            if (talent.dependency) {
                const { from, level: requiredLevel, to } = talent.dependency;
                const currentFromLevel = newTalentLevels[from];
                const currentToLevel = newTalentLevels[to];
    
                if (currentFromLevel < requiredLevel && currentToLevel > 0) {
                    newTalentLevels[to] = 0;
    
                    if (currentToLevel > 15) {
                        refundedTotal += (currentToLevel - 15) * 3 + 10 * 2 + 5 * 1;
                    } else if (currentToLevel > 5) {
                        refundedTotal += (currentToLevel - 5) * 2 + 5 * 1;
                    } else {
                        refundedTotal += currentToLevel * 1;
                    }
                }
            }
    
            // Verifica requisito global de pontos gastos
            if (talent.col > 3) {
                const colGlobalRequisite = (5 * (talent.col - 3)) + 10;
                const currentSpentPoints = globalMaxPoints - (globalPoints + refundedTotal);
                const currentTalentLevel = newTalentLevels[talent.id];
    
                if (currentSpentPoints < colGlobalRequisite && currentTalentLevel > 0) {
                    newTalentLevels[talent.id] = 0;
    
                    if (currentTalentLevel > 15) {
                        refundedTotal += (currentTalentLevel - 15) * 3 + 10 * 2 + 5 * 1;
                    } else if (currentTalentLevel > 5) {
                        refundedTotal += (currentTalentLevel - 5) * 2 + 5 * 1;
                    } else {
                        refundedTotal += currentTalentLevel * 1;
                    }
                }
            }
        });
    
        // Aplica as mudanças só se houver alterações
        if (refundedTotal > 0) {
            setPoints(globalPoints + refundedTotal);
            setTalentLevel(newTalentLevels);
        }
    }, [talentLevel]);

    return (
        <TreeContainer>
            <TalentArrow talentList={talents} />
            <TalentGrid>
                    {talents.map((talent) => (
                        <Talent 
                            key={talent.id}
                            {...talent} 
                            talentLevel={talentLevel[talent.id]}
                            setTalentLevel={(newLevel: number) => {setTalentLevel(prev => ({ ...prev, [talent.id]: newLevel }));}}
                            getTalentLevel={(id: string) => talentLevel[id] ?? 0}
                        />
                    ))}
            </TalentGrid>
        </TreeContainer>
    )
}