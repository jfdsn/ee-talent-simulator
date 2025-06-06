import { TooltipWrapper } from "../TalentTooltip/Tooltip";
import { Btn, BtnContainer, Display, IconContainer, TalentContainer } from "./style";
import { usePoints } from "../../context/PointsContext";
import { useEffect, useState } from "react";

type TalentProps = {
    id: string;
    icon: string;
    row: number;
    col: number;
    maxLevel: number;
    description: string;
    dependency?: {
        level: number;
        from: string;
        to: string;
    };
    talentLevel: number;
    setTalentLevel: (level: number) => void;
    getTalentLevel: (id: string) => number;
}

export const Talent: React.FC<TalentProps> = ( props ) => {
    const [isDesktop, setIsDesktop] = useState(false); // State to track if the device is desktop or not
    
    const { icon, row, col, talentLevel, setTalentLevel, getTalentLevel } = props;
    const talentMaxLevel = props.maxLevel;
    const talentMinLevel = 0;
    
    const { globalPoints, setPoints, globalMaxPoints } = usePoints();

    const isMaxLevel = talentLevel === talentMaxLevel;
    const isInserting = talentLevel > 0 && talentLevel < talentMaxLevel;
    const isTalentRequirement = checkGlobalRequirements(col, globalPoints, globalMaxPoints) 
        && checkDirectDependency(props.dependency ?? {level: 0, from: "", to: ""}, getTalentLevel);
    const isMaxPointsSpent = globalPoints === 0;
   
    
    const increment = () => {
        if (isMaxLevel) return;
        
        if (talentLevel >= 15) {
            if (globalPoints < 3) return; // Prevents from spending points if not enough
            setTalentLevel(talentLevel + 1);
            setPoints(globalPoints - 3);         
        } else if (talentLevel >= 5) {
            if (globalPoints < 2) return; // Prevents from spending points if not enough
            setTalentLevel(talentLevel + 1);
            setPoints(globalPoints - 2);
        } else {
            if(globalPoints < 1) return; // Prevents from spending points if not enough
            setTalentLevel(talentLevel + 1);
            setPoints(globalPoints - 1);
        }
    }

    const decrement = () => {
        if (talentLevel === talentMinLevel) return;

        if (talentLevel > 15) {
            setTalentLevel(talentLevel - 1);
            setPoints(globalPoints + 3);
        } else if (talentLevel > 5) {
            setTalentLevel(talentLevel - 1);
            setPoints(globalPoints + 2);
        } else {
            setTalentLevel(talentLevel - 1);
            setPoints(globalPoints + 1);
        }
    }

    useEffect(() => {
        const isHoverCapable = window.matchMedia("(hover: hover)").matches; // Check if the device is desktop via hover capability
        setIsDesktop(isHoverCapable);
    }, []);

    // Handle click events for desktop devices when user try to add or remove talent points clicking on the icon
    const handleDesktopClick = (e: React.MouseEvent) => {
        if (!isDesktop) return;
        e.preventDefault();
        if(!isTalentRequirement) return; // Prevents from clicking if talent is not available
        
        if (e.type === "click" && e.button === 0) {
            increment();
        } else if (e.type === "contextmenu") {
            decrement();
        }
    };

    //Inform Tooltip how many points a talent costs based on current level
    const getLevel = () :number => {
        if (isMaxLevel) return 0;
        if (talentLevel >= 15) return 3
        if (talentLevel >= 5) return 2
        return 1
    }

    return (
        <TalentContainer style={{ gridColumn: col, gridRow: row }}>
            <TooltipWrapper data={props} getLevel={getLevel}>
                <IconContainer $isTalentRequirements={isTalentRequirement} $icon={icon} onClick={handleDesktopClick} onContextMenu={handleDesktopClick}>
                    <Display $isInserting={isInserting} $isMaxLevel={isMaxLevel}>{talentLevel}</Display>
                </IconContainer>
            </TooltipWrapper>
            <BtnContainer>
                <Btn onClick={decrement} disabled={talentLevel == talentMinLevel || !isTalentRequirement}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" 
                    style={{fill: "rgba(255, 255, 255, 0.87)"}}>
                    <path d="M5 11h14v2H5z"></path></svg>
                </Btn>
                <Btn onClick={increment} disabled={talentLevel == talentMaxLevel || !isTalentRequirement || isMaxPointsSpent}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24   " 
                    style={{fill: "rgba(255, 255, 255, 0.87)"}}>
                    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                </Btn>
            </BtnContainer>
        </TalentContainer>
    )
}

const checkGlobalRequirements = (col: number, points: number, maxPoints: number): boolean => {
    if (col <= 3) return true; // No requirements for first 3 columns
    
    const requiredPoints = maxPoints - points; 
    
    switch (col) {
        case 4:
            return requiredPoints >= 15;
        case 5:
            return requiredPoints >= 20;
        case 6:
            return requiredPoints >= 25;
        case 7:
            return requiredPoints >= 30;
        case 8:
            return requiredPoints >= 35;
        default:
            return false;
    }
}

const checkDirectDependency = (dependency: {level: number, from: string, to: string}, getTalentLevel: (id: string) => number): boolean => {
    if(dependency.from === "") return true; // No dependency

    const fromLevel = getTalentLevel(dependency.from);

    return fromLevel >= dependency.level; 
}