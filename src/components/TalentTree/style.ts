import styled from "styled-components";

export const TreeContainer = styled.div`
    position: relative;
    width: fit-content;
    margin: 0 auto;
    border: 6px solid transparent;
    border-image: url("/tree-border.webp") 6 fill stretch;
`;

export const TalentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 50px);
    grid-template-rows: repeat(3, 100px);
    column-gap: 24px;
    row-gap: 10px;
    padding: 16px;
`;