import { TalentArrow } from "../TalentArrow/TalentArrow";
import { TalentBtn } from "../Talent/Talent";
import { TalentGrid, TreeContainer } from "./style";

const talents = [
    { id: "Strike", icon: "strike.jpg", row: 1, col: 1, dependency: {from:"Strike", to: "Power"} },
    { id: "Power", icon: "power.jpg", row: 1, col: 2 },
    { id: "Shield", icon: "shield.jpg", row: 1, col: 5 },
    { id: "Shield1", icon: "shield.jpg", row: 1, col: 6 },
    { id: "Shield2", icon: "shield.jpg", row: 2, col: 1 },
    { id: "Shield3", icon: "shield.jpg", row: 2, col: 2 },
    { id: "Shield4", icon: "shield.jpg", row: 2, col: 8 },
    { id: "Shield5", icon: "shield.jpg", row: 3, col: 3 },
    { id: "Shield6", icon: "shield.jpg", row: 3, col: 4 },
    { id: "Shield8", icon: "shield.jpg", row: 3, col: 5 },
]

export const TalentTree = () => {
    return (
        <>
            <h1>Talent Tree</h1>
            <TreeContainer>
                <TalentArrow talentList={talents} />
                <TalentGrid>
                        {talents.map((talent) => (
                            <TalentBtn key={talent.id} {...talent} />
                        ))}
                </TalentGrid>
            </TreeContainer>
        </>
    )
}