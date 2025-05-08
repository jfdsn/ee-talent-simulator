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

export const IconContainer = styled.div<{ $isTalentRequirements: boolean; $icon: string }>`
    position: relative;
    width: 50px;
    height: 50px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background-image: ${({ $icon }) => `url("/assets/${$icon}")`};
    background-size: cover;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ $isTalentRequirements }) => $isTalentRequirements ? "transparent" : "rgba(0, 0, 0, 0.5)"};
        border-radius: 4px;
    }
`;

export const Display = styled.span<{ $isInserting: boolean; $isMaxLevel: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 22px;
    height: 22px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 4px;
    background-color: rgba(50, 50, 50, 0.6);
    border: 0.5px solid rgba(240, 240, 240, 1);
    color: ${({ $isInserting, $isMaxLevel }) =>
    $isMaxLevel ? '#FFD700' : $isInserting ? '#32CD32' : '#FFF'};
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
