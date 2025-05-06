import styled from "styled-components";

export const TalentSimulatorContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 900px;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`
    
export const ReponsiveContainer = styled.div`
    flex: 1;
    overflow-x: auto;
    overflow-y: auto;
`