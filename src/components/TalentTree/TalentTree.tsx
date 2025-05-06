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

    const { resetObserver } = usePoints();

    useEffect(() => {
        setTalentLevel(() => Object.fromEntries(talents.map((talent) => [talent.id, 0]))); // Reset all talents to level 0 every time resetObserver changes
    }, [resetObserver]);

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