import { PointsProvider } from "../../context/PointsContext"
import { ClassList } from "../ClassList/ClassList"
import { TalentToolBox } from "../TalentToolBox/TalentToolBox"
import { TalentTree } from "../TalentTree/TalentTree"
import { ReponsiveContainer, TalentSimulatorContainer } from "./style"
import { useState } from "react"
import { TalentsData, Talents } from "../../types/types"
import rawData from '../../data/talent-data.json'

export const TalentSimulator = () => {
    const data = rawData as TalentsData;
    const [talents, setTalents] = useState<Talents>(data.warrior); // Default to warrior talents
    
    const setClassChange = (className: string) => {
        const newTalents = data[className as keyof TalentsData];
        if (newTalents) {
            setTalents(newTalents);
        } else {
            console.error(`Class ${className} not found in data.`);
        }
    }
    
    return (
        <PointsProvider>
            <ReponsiveContainer>
                <h1 style={{marginTop: "2rem"}}>Talent Simulator</h1>
                <TalentSimulatorContainer>
                    <ClassList onClassChange={setClassChange} />
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <TalentTree talents={talents}/>
                        <TalentToolBox />
                    </div> 
                </TalentSimulatorContainer>
            </ReponsiveContainer>
        </PointsProvider>
    )
}