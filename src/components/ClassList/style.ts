import styled from "styled-components";

export const ClassListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    width: 220px;
    height: 440px;
    margin: 0 auto;
    padding: 1rem 0.5rem;
    border: 6px solid transparent;
    border-image: url("/tree-border.webp") 6 fill stretch;

    /* ===== WebKit (Chrome, Safari, Edge) ===== */
    &::-webkit-scrollbar {
        width: 6px; 
    }

    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.3); 
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.5);
    }

    /* ===== Firefox ===== */
    scrollbar-width: thin;                   
    scrollbar-color: rgba(255,255,255,0.3)   rgba(0,0,0,0.1);          

    @media (max-width: 768px) {
        flex-direction: row;
        overflow-x: auto;
        overflow-y: hidden;
        width: 100%;
        height: auto;
        padding: 0.5rem;
        gap: 2px;
    }
`;

export const ClassItem = styled.button<{ $active: string, $className: string }>`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    width: 180px;
    padding: 0.5rem;
    border: 6px solid transparent;
    border-image: url("/class-border.webp") 6 fill stretch;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
        opacity: 0.9;
        }
        
    span {
        text-transform: capitalize;
        margin-left: 10px;
        color: ${({ $active, $className }) => ($active === $className ? "#fff000" : "#fff")};

    }

    img {
        width: 36px;
        height: 36px;
    }

    @media (max-width: 768px) {
        min-width: fit-content;
        gap: 2px;

        transform: ${({ $active, $className }) => ($active === $className ? "scale(1.05)" : "scale(1)")};

        span {
            display: none;
        }
        
    }
`;