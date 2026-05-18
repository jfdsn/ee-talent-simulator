import { usePoints } from "../../context/PointsContext";

export const CapLevelSelector: React.FC = () => {
    const { globalMaxPoints, setMaxPoints, resetPoints } = usePoints();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setMaxPoints(Number(selectedValue));
        resetPoints();
    }
    
    return (
        <select id="cap-level-select" value={globalMaxPoints} onChange={handleChange}>
            <option value="65">65</option>
            <option value="70">70</option>
            <option value="75">75</option>
            <option value="80">80</option>
            <option value="85">85</option>
            <option value="90">90</option>
            <option value="95">95</option>
            <option value="100">100</option>
        </select>
    );
}
