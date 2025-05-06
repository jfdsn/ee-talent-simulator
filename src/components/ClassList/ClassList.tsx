import { usePoints } from "../../context/PointsContext";
import { ClassItem, ClassListContainer } from "./style";

const classes = [
    { id: 1, name: 'warrior', icon: 'assets/warrior/warrior-icon.webp' },
    { id: 2, name: 'knight', icon: 'assets/knight/knight-icon.webp' },
    { id: 3, name: 'templar', icon: 'assets/templar/templar-icon.webp' },
    { id: 4, name: 'dragon knight', icon: 'assets/dk/dk-icon.webp' },
    { id: 5, name: 'thief', icon: 'assets/thief/thief-icon.webp' },
    { id: 6, name: 'martial artist', icon: 'assets/martial/martial-icon.webp' },
    { id: 7, name: 'blade dancer', icon: 'assets/blade/blade-icon.webp' },
    { id: 8, name: 'samurai', icon: 'assets/samurai/samurai-icon.webp' },
    { id: 9, name: 'hunter', icon: 'assets/hunter/hunter-icon.webp' },
    { id: 10, name: 'engineer', icon: 'assets/engineer/engineer-icon.webp' },
    { id: 11, name: 'ranger', icon: 'assets/ranger/ranger-icon.webp' },
    { id: 12, name: 'inquisitor', icon: 'assets/inquisitor/inquisitor-icon.webp' },
    { id: 13, name: 'cleric', icon: 'assets/cleric/cleric-icon.webp' },
    { id: 14, name: 'bard', icon: 'assets/bard/bard-icon.webp' },
    { id: 15, name: 'shaman', icon: 'assets/shaman/shaman-icon.webp'},
    { id: 16, name: 'sage', icon: 'assets/sage/sage-icon.webp' },
    { id: 17, name: 'magician', icon: 'assets/magician/magician-icon.webp' },
    { id: 18, name: 'illusionist', icon: 'assets/illusionist/illusionist-icon.webp' },
    { id: 19, name: 'warlock', icon: 'assets/warlock/warlock-icon.webp' },
    { id: 20, name: 'luminary', icon: 'assets/luminary/luminary-icon.webp' },

];  

type Props = {
    onClassChange: (className: string) => void;
};

export const ClassList: React.FC<Props> = ({onClassChange}) => {
    const { resetPoints } = usePoints();

    const handleClassChange = (className: string) => {
        onClassChange(className);
        resetPoints();
    }
    return (
        <ClassListContainer>
            {classes.map((classItem) => (
                <ClassItem key={classItem.id} onClick={() => handleClassChange(classItem.name)}>
                    <img src={classItem.icon} alt={classItem.name} />
                    <span>{classItem.name}</span>
                </ClassItem>
            ))}
        </ClassListContainer>
    );
}