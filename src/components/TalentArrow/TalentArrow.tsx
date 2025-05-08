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
  const cellW = 50, cellH = 100, colGap = 24, rowGap = 10;
  const totalX = cellW + colGap, totalY = cellH + rowGap;

  return (
    <>
      {talentList.map((t) => {
        if (!t.dependency) return null;
        const { from, to } = t.dependency;
        const fromTalent = talentList.find(x => x.id === from)!;
        const toTalent = talentList.find(x => x.id === to)!;
        
        if (!fromTalent || !toTalent) return null;

        const xStart = (fromTalent.col - 1) * totalX + cellW;   // borda direita de “from”
        const xEnd   = (toTalent.col - 1) * totalX;           // borda esquerda de “to”
        const y      = (fromTalent.row - 1) * totalY + cellH/2; // centro vertical

        const delta = toTalent.col - fromTalent.col;

        // Escolhe a imagem e define width fixo
        const isShort = delta === 1;
        const imgSrc  = isShort ? "/arrow-short.webp" : "/arrow-long.webp";
        const imgW    = isShort ? 24 : cellW + colGap + 36;  // largura fixa da seta pequena ou grande
        const imgH    = 24;   // altura fixa da seta

        const leftPos = isShort
          ? xEnd - imgW / 2
          : xStart;
        
        return (
          <img
            key={`${from}->${to}`}
            src={imgSrc}
            alt=""
            style={{
              position: "absolute",
              top:  y - imgH/2,
              left: leftPos, 
              width:  imgW,
              height: imgH,
              pointerEvents: "none",
            }}
          />
        );
      })}
    </>
  );
};
