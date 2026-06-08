import { useState } from "react";
import { usePoints } from "../../context/PointsContext";
import { ClassItem, ClassListContainer, ComponentWrapper, TabContainer, TabButton } from "./style";

const classes = [
    { id: 1, name: 'warrior', icon: 'assets/warrior/warrior-icon.webp', type: 'classic' },
    { id: 2, name: 'knight', icon: 'assets/knight/knight-icon.webp', type: 'classic' },
    { id: 3, name: 'templar', icon: 'assets/templar/templar-icon.webp', type: 'classic' },
    { id: 4, name: 'dragon knight', icon: 'assets/dk/dk-icon.webp', type: 'classic' },
    { id: 5, name: 'thief', icon: 'assets/thief/thief-icon.webp', type: 'classic' },
    { id: 6, name: 'martial artist', icon: 'assets/martial/martial-icon.webp', type: 'classic' },
    { id: 7, name: 'blade dancer', icon: 'assets/blade/blade-icon.webp', type: 'classic' },
    { id: 8, name: 'samurai', icon: 'assets/samurai/samurai-icon.webp', type: 'classic' },
    { id: 9, name: 'hunter', icon: 'assets/hunter/hunter-icon.webp', type: 'classic' },
    { id: 10, name: 'engineer', icon: 'assets/engineer/engineer-icon.webp', type: 'classic' },
    { id: 11, name: 'ranger', icon: 'assets/ranger/ranger-icon.webp', type: 'classic' },
    { id: 12, name: 'inquisitor', icon: 'assets/inquisitor/inquisitor-icon.webp', type: 'classic' },
    { id: 13, name: 'cleric', icon: 'assets/cleric/cleric-icon.webp', type: 'classic' },
    { id: 14, name: 'bard', icon: 'assets/bard/bard-icon.webp', type: 'classic' },
    { id: 15, name: 'shaman', icon: 'assets/shaman/shaman-icon.webp', type: 'classic'},
    { id: 16, name: 'sage', icon: 'assets/sage/sage-icon.webp', type: 'classic' },
    { id: 17, name: 'magician', icon: 'assets/magician/magician-icon.webp', type: 'classic' },
    { id: 18, name: 'illusionist', icon: 'assets/illusionist/illusionist-icon.webp', type: 'classic' },
    { id: 19, name: 'warlock', icon: 'assets/warlock/warlock-icon.webp', type: 'classic' },
    { id: 20, name: 'luminary', icon: 'assets/luminary/luminary-icon.webp', type: 'classic' },
    
    // Awaken List
    { id: 21, name: 'shielder', icon: 'assets/warrior/shielder-icon.webp', type: 'awakened'},
    { id: 22, name: 'rakshasa', icon: 'assets/martial/rakshasa-icon.webp', type: 'awakened' },
    { id: 23, name: 'reaver', icon: 'assets/inquisitor/reaver-icon.webp', type: 'awakened' },
    { id: 24, name: 'druid', icon: 'assets/shaman/druid-icon.webp', type: 'awakened' },
    { id: 25, name: 'life worshipper', icon: 'assets/bard/life-worshipper-icon.webp', type: 'awakened' },
    { id: 26, name: 'stormcaster', icon: 'assets/magician/stormcaster-icon.webp', type: 'awakened' },

];  

type Props = {
    onClassChange: (className: string) => void;
};

export const ClassList: React.FC<Props> = ({onClassChange}) => {
    const { resetPoints } = usePoints();

    const [active, setActive] = useState<string>('warrior');
    const [currentTab, setCurrentTab] = useState<'classic' | 'awakened'>('classic');

    const handleClassChange = (className: string) => {
        onClassChange(className);
        resetPoints();
        setActive(className);
    }

    const filteredClasses = classes.filter(c => c.type === currentTab);

    return (
        <ComponentWrapper>
            <TabContainer>
                <TabButton 
                    $isActive={currentTab === 'classic'} 
                    onClick={() => setCurrentTab('classic')}
                >
                    Classic
                </TabButton>
                <TabButton 
                    $isActive={currentTab === 'awakened'} 
                    onClick={() => setCurrentTab('awakened')}
                >
                    Reforged
                </TabButton>
            </TabContainer>
            <ClassListContainer>
                {filteredClasses.map((classItem) => (
                    <ClassItem key={classItem.id} $active={active} $className={classItem.name} 
                    onClick={() => handleClassChange(classItem.name)}>
                        <img src={classItem.icon} alt={classItem.name} />
                        <span>{classItem.name}</span>
                    </ClassItem>
                ))}
            </ClassListContainer>
        </ComponentWrapper>
    );
}