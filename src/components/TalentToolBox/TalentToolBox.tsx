import { usePoints } from "../../context/PointsContext";
import { CapLevelSelector } from "../CapLevelSelector/CapLevelSelector";
import { Container, Button, Display } from "./style";

export const TalentToolBox: React.FC = () => {
    const { globalPoints, globalMaxPoints, resetPoints  } = usePoints();
    
    const handleReset = () => {
        resetPoints();
    };
   
    return (
        <Container>
            <Display>{globalPoints} KPs Remain</Display>
            <Display>{globalMaxPoints - globalPoints} KPs Entered</Display>
            <Button onClick={handleReset}>
                Refresh
            </Button>
                <CapLevelSelector />
        </Container>
    );
}