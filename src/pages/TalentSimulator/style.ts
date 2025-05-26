import styled from "styled-components";

export const TalentSimulatorContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 900px;
    margin-top: 3.5rem;
    margin-left: auto;
    margin-right: auto;
    border: 6px solid transparent;
    border-image: url('/window-border.webp') 6 fill stretch;
    padding: 0.5rem;

    @media (max-width: 1048px) {
        flex-direction: column;
        gap: 1rem;
    }

    @media (max-width: 768px) {
        border: none;
    }
`
    
export const ReponsiveContainer = styled.div`
    flex: 1;
    padding-top: 5vw;
    overflow-x: auto;
    overflow-y: auto;
`