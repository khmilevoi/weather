import styled, { css } from "styled-components";

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
