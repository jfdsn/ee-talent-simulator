import { usePoints } from "../../context/PointsContext";

export const CapLevelSelector: React.FC = () => {
    const { setMaxPoints, resetPoints } = usePoints();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setMaxPoints(Number(selectedValue));
        resetPoints();
    }
    
    return (
        <select onChange={handleChange}>
            <option value="65">65</option>
            <option value="70">70</option>
            <option value="75">75</option>
            <option value="80">80</option>
        </select>
    );
}
