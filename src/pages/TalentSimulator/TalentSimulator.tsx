import { PointsProvider } from "../../context/PointsContext"
import { ClassList } from "../../components/ClassList/ClassList"
import { TalentToolBox } from "../../components/TalentToolBox/TalentToolBox"
import { TalentTree } from "../../components/TalentTree/TalentTree"
import { ReponsiveContainer, TalentSimulatorContainer } from "./style"
import { useState } from "react"
import { TalentsData, Talents } from "../../types/types"
import rawData from '../../data/talent-data.json'

export const TalentSimulator = () => {
    const data = rawData as TalentsData;
    const [talents, setTalents] = useState<Talents>(data.warrior); // Default to warrior talents
    const [classId, setClassId] = useState<string>("warrior");
    
    const setClassChange = (className: string) => {
        const newTalents = data[className as keyof TalentsData];
        if (newTalents) {
            setTalents(newTalents);
            setClassId(className);
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
                        <TalentTree talents={talents} classId={classId}/>
                        <TalentToolBox />
                    </div> 
                </TalentSimulatorContainer>
            </ReponsiveContainer>
        </PointsProvider>
    )
}