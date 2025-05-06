export interface Talent {
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
}

export type Talents = Talent[];
export type TalentsData = Record<string, Talents>;  