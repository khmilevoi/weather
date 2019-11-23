import styled from "styled-components";

import { Icon as I } from "styles/Widget";

export const HourlyForecast = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;

export const InformationList = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  z-index: 10;
`;

export const InformationColumn = styled.div`
  width: 100%;
  height: 100%;
  border-right: 1px rgba(0, 0, 0, 0.05) solid;

  &:last-child {
    border-right: none;
  }
`;

export const Inner = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const Time = styled.div`
  margin-bottom: 5px;
`;

export const Icon = styled(I)`
  height: 20px;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 50%;
  top: 50%;
  position: absolute;
  z-index: 0;
`;
