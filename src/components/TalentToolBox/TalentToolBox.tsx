import { usePoints } from "../../context/PointsContext";
import { Container, Button, Display } from "./style";

export const TalentToolBox: React.FC = () => {
    const { globalPoints, globalMaxPoints, resetPoints  } = usePoints();
    
    const handleReset = () => {
        resetPoints();
    };
   
    return (
        <Container>
            <Button onClick={handleReset}>
                Reset
            </Button>
            <Display>
                Points: {globalMaxPoints - globalPoints}
            </Display>
            <Display>
                Max Points: {globalMaxPoints}
            </Display>
        </Container>
    );
}