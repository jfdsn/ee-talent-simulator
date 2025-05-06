import { PointsProvider } from "../../context/PointsContext"
import { TalentToolBox } from "../TalentToolBox/TalentToolBox"
import { TalentTree } from "../TalentTree/TalentTree"
import { ReponsiveContainer, TalentSimulatorContainer } from "./style"


export const TalentSimulator = () => {
    return (
        <PointsProvider>
            <ReponsiveContainer>
                <TalentSimulatorContainer>
                    <h1 style={{marginBottom: "1rem"}}>Talent Simulator</h1>
                    <TalentTree />
                    <TalentToolBox />
                </TalentSimulatorContainer>
            </ReponsiveContainer>
        </PointsProvider>
    )
}