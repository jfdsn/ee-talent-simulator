import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0.5rem;
    border: 4px solid transparent;
    border-image: url("/tree-border.webp") 6 fill stretch;
`

export const ClassBanner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    border: 4px solid transparent;
    border-image: url("/class-border.webp") 6 fill stretch;
    border-radius: 4px;

    h2 {
        font-size: 1.4rem;
        margin-right: auto;
        margin-left: auto;
    }

    img {
        height: 40px;
        width: 40px;
        object-fit: contain;
    }
`

export const ComboSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
    margin-right: auto;
    margin-left: auto;
    padding
`;