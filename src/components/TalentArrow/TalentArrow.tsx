import React from "react";


type Dependency = {
    from: string;
    to: string;
};

type Talent = {
    id: string;
    row: number;
    col: number;
    dependency?: Dependency;
};

type Props = {
    talentList: Talent[];
};

export const TalentArrow: React.FC<Props> = ({ talentList }) => {
  return (
    <svg
      width="100%"
      height="100%"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        overflow: "visible",
      }}
    >
      {talentList.map((talent, i) => {
        const { from, to } = talent.dependency ?? {};
        const fromTalent = talentList.find(t => t.id === from);
        const toTalent = talentList.find(t => t.id === to);
        if (!fromTalent || !toTalent) return null;

        const cellSize = 80;
        const gap = 10;
        const totalSize = cellSize + gap;

        const halfHeight = cellSize / 2;

        // Começa na borda direita do talento "from"
        const x1 = (fromTalent.col - 1) * totalSize + cellSize;
        // Termina na borda esquerda do talento "to"
        const x2 = (toTalent.col - 1) * totalSize;

        // Ambos na mesma linha
        const y = (fromTalent.row - 1) * totalSize + halfHeight;


        return (
          <g key={i}>
            <line x1={x1 + 2} y1={y} x2={x2 - 2} y2={y} stroke="gray" strokeWidth="2" />
            <polygon
            points={`${x2},${y} ${x2 - 6},${y - 4} ${x2 - 6},${y + 4}`}
            fill="gray"
            />
          </g>
        );
      })}
    </svg>
  );
};
