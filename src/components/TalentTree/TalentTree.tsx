import { TalentArrow } from "../TalentArrow/TalentArrow";
import { Talent } from "../Talent/Talent";
import { TalentGrid, TreeContainer } from "./style";

const talents = [
    { id: "Strike", icon: "knight/placeholder.webp", row: 1, col: 1, dependency: {from:"Strike", to: "Power"} },
    { id: "Power", icon: "knight/placeholder.webp", row: 1, col: 2 , dependency: {from:"Power", to: "Shield"} },
    { id: "Shield", icon: "knight/placeholder.webp", row: 1, col: 3 },
    { id: "Shield1", icon: "knight/placeholder.webp", row: 1, col: 6 },
    { id: "Shield2", icon: "knight/placeholder.webp", row: 2, col: 1 },
    { id: "Shield3", icon: "knight/placeholder.webp", row: 2, col: 2, dependency: {from: "Shield3", to: "Shiel"} },
    { id: "Shiel", icon: "knight/placeholder.webp", row: 2, col: 4 },
    { id: "Shield4", icon: "knight/placeholder.webp", row: 2, col: 8 },
    { id: "Shield5", icon: "knight/placeholder.webp", row: 3, col: 3, dependency: {from: "Shield5", to: "Shield6"} },
    { id: "Shield6", icon: "knight/placeholder.webp", row: 3, col: 4 },
    { id: "Shield8", icon: "knight/placeholder.webp", row: 3, col: 5, dependency: {from: "Shield8", to: "Shield9"} },
    { id: "Shield9", icon: "knight/placeholder.webp", row: 3, col: 7 },
]

export const TalentTree = () => {
    return (
        <>
            <h1>Talent Tree</h1>
            <TreeContainer>
                <TalentArrow talentList={talents} />
                <TalentGrid>
                        {talents.map((talent) => (
                            <Talent key={talent.id} {...talent} />
                        ))}
                </TalentGrid>
            </TreeContainer>
        </>
    )
}