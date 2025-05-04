import styled from "styled-components";

export const TreeContainer = styled.div`
    position: relative;
    border: 6px solid transparent;
    border-image: url("/tree-border.webp") 6 fill stretch;
    background-color: rgb(246, 242, 234);
`;

export const TalentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 50px);
    grid-template-rows: repeat(3, 100px);
    column-gap: 24px;
    row-gap: 10px;
    padding: 16px;
`;