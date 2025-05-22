import styled from "styled-components";


export const ComboContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 0;

    .cert {
        width: 45px;
        height: 45px;   
        border: none;
        border-radius: 4px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        overflow: hidden;
    }

    .icon {
        width: 25px;
        height: 25px;
        border: none;
        border-radius: 2px;
    }
`;