import { createContext, useContext, useState, ReactNode } from "react";

type PointsContextType = {
    points: number; // Current points available
    setPoints: (points: number) => void;
    maxPoints: number; // Maximum points available
    setMaxPoints: (maxPoints: number) => void;
    resetPoints: () => void;
    resetCounter: number;
};

const PointsContext = createContext<PointsContextType | undefined>(undefined);

export const PointsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [maxPoints, setMaxPoints] = useState(65);
    const [points, setPoints] = useState(maxPoints); // Initialize points with maxPoints value
    const [resetCounter, setResetCounter] = useState(0); // State to help all Talents to re-render when resetPoints is called

    const resetPoints = () => {
        setPoints(maxPoints);
        setResetCounter((prev) => prev + 1);
    };

    return (
        <PointsContext.Provider value={{ points, setPoints, resetPoints, maxPoints, setMaxPoints, resetCounter }}>
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