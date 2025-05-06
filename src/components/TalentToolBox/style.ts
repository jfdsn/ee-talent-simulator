import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    height: 100%;
    margin: 1rem auto;
    padding: 1rem;
    border: 6px solid transparent;
    border-image: url("/tree-border.webp") 6 fill stretch;
    background-color: rgb(246, 242, 234);
`;

export const Button = styled.button`
    color: #000;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 16px;
    border: 6px solid transparent;
    border-image: url("/button-border.webp") 6 fill stretch;
    
    &:hover {
        background-color: #0056b3;
    }
`;

export const Display = styled.span`
    margin: 0 10px;
    font-size: 16px;
    min-width: 100px;
    color: #000;
    border: 6px solid transparent;
    border-image: url("/span-border.webp") 6 fill stretch;
`;