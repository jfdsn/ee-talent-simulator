import styled from "styled-components";


export const TalentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
`;

export const IconContainer = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    background-size: cover;
`;

export const Display = styled.span`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    font-size: 13px;
    border-radius: 5px;
    background-color: rgba(60, 60, 60, 0.9);
    color: #fff;
    shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
    height: auto;
`;

export	const Btn = styled.button`
    width: 22px;
    height: 22px;
    background-color: #222;
    color: #fff;
    border: 1px solid #444;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    margin: 0 4px;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;

    &:hover {
        background-color: #222;
    }

    &:disabled {
        background-color: #555;
        color: #aaa;
        border-color: #666;
        box-shadow: none;
        cursor: not-allowed;
    }
`;
