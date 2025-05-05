import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  height: 100%;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #f0f0f0;
`;

export const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    
    &:hover {
        background-color: #0056b3;
    }
`;

export const Display = styled.span`
    margin: 0 10px;
    font-size: 16px;
    color: #333;
`;