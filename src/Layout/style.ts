import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    margin-bottom: 20px;
    color: white;
    z-index: 10;
    background-color: transparent;
`;

export const Logo = styled.img`
    width: 140px;
    height: auto;

    @media (max-width: 768px) {
        width: 100px;
    }
`;