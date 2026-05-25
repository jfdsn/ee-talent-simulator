import styled from 'styled-components';

export const TooltipContainer = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;

    &:hover span {
        visibility: visible;
        opacity: 1;
    }
`;

export const TooltipText = styled.span`
    display: flex;
    flex-direction: column;
    visibility: hidden;
    width: 280px;
    text-align: start;
    border: 4px solid transparent;
    border-image: url('/tooltip-border.webp') 4 fill stretch;
    padding: 10px;
    
    position: absolute;
    z-index: 999;
    top: 100px;
    right: auto;
    left: auto;
    
    opacity: 0;
    transition: opacity 0.2s;

    @media (max-width: 460px) {
        position: fixed;
        top: 50%;
        left: 50%;
        bottom: auto;
        right: auto;
        transform: translate(-50%, -50%);
    }
`;

export const Title = styled.span`
    font-size: 15px;
    color: #fff;
`;

export const MaxLevel = styled.span`
    font-size: 14px;
    color: #9ACDF7;
`;

export const Description = styled.span`
    font-size: 14px;
    color: #BBE477;
`;

export const Requirements = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-top: 5px;
    color: #F57A7C;
`;

export const Alert = styled.span`
    font-size: 14px;
    margin-top: 5px;
    color: #FF0000;
`;