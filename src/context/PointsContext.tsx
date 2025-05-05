import { createContext, useContext, useState, ReactNode } from "react";

type PointsContextType = {
    globalPoints: number; // Current points available
    setPoints: (points: number) => void;
    globalMaxPoints: number; // Maximum points available
    setMaxPoints: (maxPoints: number) => void;
    resetPoints: () => void;
    resetObserver: number;
};

const PointsContext = createContext<PointsContextType | undefined>(undefined);

export const PointsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [globalMaxPoints, setMaxPoints] = useState(65);
    const [globalPoints, setPoints] = useState(globalMaxPoints); // Initialize points with maxPoints value
    const [resetObserver, setResetCounter] = useState(0); // State to help all Talents to re-render when resetPoints is called

    const resetPoints = () => {
        setPoints(globalMaxPoints);
        setResetCounter((prev) => prev + 1);
    };

    return (
        <PointsContext.Provider value={{ globalPoints, setPoints, resetPoints, globalMaxPoints, setMaxPoints, resetObserver }}>
            {children}
        </PointsContext.Provider>
    );
};

export const usePoints = () => {
    const context = useContext(PointsContext);
    if (!context) {
        throw new Error("usePoints must be used within a PointsProvider");
    }
    return context;
}