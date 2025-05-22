import styled from "styled-components";

export const MainContentContainer = styled.div `
    padding-top: 5vw;

    h1{
        padding-top: 3rem;
    }
`

export const CardsContainer = styled.div <{$classColor: string}>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 1rem auto;
    max-width: 1400px;
    overflow-x: hidden;
    
    background-color: ${({ $classColor }) => colorMap[$classColor as keyof typeof colorMap]}22;
    border-left: 4px solid ${({ $classColor }) => colorMap[$classColor as keyof typeof colorMap]};
    padding: 0.5rem;
    border-radius: 6px;
`

const colorMap = {
    "yellow": "#f1c40f",
    "orange": "#e67e22",
    "green": "#2ecc71",
    "blue": "#3498db",
    "purple": "#9b59b6",
};