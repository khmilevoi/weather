import styled, { css, keyframes } from "styled-components";

export const Widget = styled.div`
  max-height: 155px;
`;

export const Row = styled.div`
  width: 100%;
  padding: 10px;

  ${({ column }) =>
    column
      ? css`
          display: block;
        `
      : css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        `}

  &:first-of-type {
    padding-top: 15px;
  }

  &:last-of-type {
    padding-bottom: 15px;
  }
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
  animation: ${({ rotating }) => (rotating ? animationRule : `none`)};
`;

export const Temperature = styled.div`
  font-size: 60px;
  color: #757575;
  padding-right: 20px;
  position: relative;
  line-height: 1;

  &:after {
    content: "°C";
    font-size: 20px;
    position: absolute;
    top: 0;
  }
`;

const createImgSrc = name => `${process.env.PUBLIC_URL}/img/${name}.png`;

export const Icon = styled.img.attrs(({ name }) => ({
  src: createImgSrc(name)
}))`
  height: 60px;
  transform: scale(2) translateX(10%);
`;
