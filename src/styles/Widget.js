import styled, { css } from "styled-components";

export const Widget = styled.div`
  width: 100%;
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
