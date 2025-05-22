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
    width: 260px;
    text-align: start;
    border: 4px solid transparent;
    border-image: url('/tooltip-border.webp') 4 fill stretch;
    padding: 5px;
    position: absolute;
    z-index: 99;
    bottom: 80%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;

    @media (max-width: 460px) {
        width: 200px;
        top: -80%;
        left: 50%;
        bottom: auto;
        margin-left: 0;
        transform: translate(-50%, -50%);
    }
`;

export const Title = styled.span`
    font-size: 15px;
    color: #fff;
`;

export const Description = styled.span`
    font-size: 14px;
    color: #BBE477;
`;

