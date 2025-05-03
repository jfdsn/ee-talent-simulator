import styled from "styled-components";

export const TreeContainer = styled.div`
    position: relative;
    background-color: #f0f0f0;
`;

export const TalentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 50px);
    grid-template-rows: repeat(3, 100px);
    column-gap: 24px;
    row-gap: 10px;
    padding: 16px;
`;