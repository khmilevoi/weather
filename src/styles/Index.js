import styled, { keyframes, css } from "styled-components";

export const Section = styled.div`
  width: 100%;
  padding: 0 15px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 0;
`;

export const SideButton = styled.button`
  width: 40px;
  height: 40px;
  color: #b0bec5;
  border: none;
  outline: none;
  padding: 0;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;

const animationRule = css`
  ${rotate} 1s linear infinite
`;

export const Rotate = styled.div`
  animation: ${({ rotating }) => (rotating ? animationRule : `none`)};
`;
