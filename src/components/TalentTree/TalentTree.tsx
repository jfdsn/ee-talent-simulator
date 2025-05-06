import { TalentArrow } from "../TalentArrow/TalentArrow";
import { Talent } from "../Talent/Talent";
import { TalentGrid, TreeContainer } from "./style";
import { useEffect, useState } from "react";
import { usePoints } from "../../context/PointsContext";

const talents = [
    { id: "Strike", icon: "knight/placeholder.webp", row: 1, col: 1, maxLevel: 5, description: "For each level up, apenas testando +5%."},
    { id: "Power", icon: "knight/placeholder.webp", row: 1, col: 2 , maxLevel: 5, description: "For each level up, apenas testando +5%.", dependency: {level: 5, from:"Strike", to: "Power"} },
    { id: "Shield", icon: "knight/placeholder.webp", row: 1, col: 3, maxLevel: 5, description: "For each level up, apenas testando +5%.", dependency: {level: 10, from:"Power", to: "Shield"}  },
    { id: "Shield1", icon: "knight/placeholder.webp", row: 1, col: 6, maxLevel: 20, description: "For each level up, apenas testando +5%." },
    { id: "Shield2", icon: "knight/placeholder.webp", row: 2, col: 1, maxLevel: 5, description: "For each level up, apenas testando +5%." },
    { id: "Shield3", icon: "knight/placeholder.webp", row: 2, col: 2, maxLevel: 10, description: "For each level up, apenas testando +5%."},
    { id: "Shiel", icon: "knight/placeholder.webp", row: 2, col: 4, maxLevel: 5, description: "For each level up, apenas testando +5%.", dependency: {level: 3, from: "Shield3", to: "Shiel"}},
    { id: "Shield4", icon: "knight/placeholder.webp", row: 2, col: 8, maxLevel: 5, description: "For each level up, apenas testando +5%." },
    { id: "Shield5", icon: "knight/placeholder.webp", row: 3, col: 3, maxLevel: 5, description: "For each level up, apenas testando +5%."},
    { id: "Shield6", icon: "knight/placeholder.webp", row: 3, col: 4, maxLevel: 5, description: "For each level up, apenas testando +5%.", dependency: {level: 6, from: "Shield5", to: "Shield6"}  },
    { id: "Shield8", icon: "knight/placeholder.webp", row: 3, col: 5, maxLevel: 5, description: "For each level up, apenas testando +5%."},
    { id: "Shield9", icon: "knight/placeholder.webp", row: 3, col: 7, maxLevel: 5, description: "For each level up, apenas testando +5%.", dependency: {level: 2, from: "Shield8", to: "Shield9"} },
]

export const TalentTree = () => {
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