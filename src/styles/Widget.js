import styled, { css, keyframes } from "styled-components";

export const Widget = styled.div`
  max-height: 155px;
`;

export const CityName = styled.div`
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Time = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
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
  transition: 0.1s;

  &:hover {
    color: ${({ hoverColor }) => hoverColor || "#000"};
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
  display: inline;
  line-height: 1;
  animation: ${({ rotating }) => (rotating ? animationRule : `none`)};
`;

export const Temperature = styled.div`
  font-size: 60px;
  color: #757575;
  display: flex;
  position: relative;
  line-height: 1;

  &:after {
    content: "°C";
    font-size: 50%;
  }
`;

const createImgSrc = name => `${process.env.PUBLIC_URL}/img/${name}.png`;

export const Icon = styled.img.attrs(({ name = "01d" }) => ({
  src: createImgSrc(name)
}))`
  height: 60px;
  transform: scale(2) translateX(10%);
`;
