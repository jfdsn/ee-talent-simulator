import styled from "styled-components";

export const TalentSimulatorContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 900px;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    border: 6px solid transparent;
    border-image: url('/window-border.webp') 6 fill stretch;
    padding: 0.5rem;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        border: none;
    }
`
    
export const ReponsiveContainer = styled.div`
    flex: 1;
    padding-top: 1.5rem;
    overflow-x: auto;
    overflow-y: auto;
`