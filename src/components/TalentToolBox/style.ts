import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 480px;
    height: 100%;
    margin: 1rem auto;
    padding: 1rem;
    border: 6px solid transparent;
    border-image: url("/tree-border.webp") 6 fill stretch;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

export const Button = styled.button`
    color: #000;
    padding: 2px 12px;
    cursor: pointer;
    font-size: 16px;
    border: 6px solid transparent;
    border-image: url("/button-border.webp") 6 fill stretch;
    
    &:hover {
        opacity: 0.7;
    }
`;

export const Display = styled.span`
    margin: 0 10px;
    font-size: 16px;
    min-width: 120px;
    color: #000;
    border: 6px solid transparent;
    border-image: url("/span-border.webp") 6 fill stretch;
`;