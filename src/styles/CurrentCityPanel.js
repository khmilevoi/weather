import styled from "styled-components";

import { Time as T, Temperature as Temp, Icon as I } from "styles/Widget";

export const CityName = styled.div`
  text-align: center;
  word-break: break-word;
  font-size: 30px;
`;

export const Time = styled(T)`
  font-size: 15px;
  display: block;
  text-align: center;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Temperature = styled(Temp)`
  font-size: 70px;
`;

export const Icon = styled(I)`
  height: 150px;
  transform: translateX(-5%);
`;

export const MinMax = styled.div`
  & > * {
    font-size: 20px;
    margin: 0 5px;
  }

  font-size: 20px;
  color: #757575;
  display: flex;
  justify-content: center;
  align-items: center;
`;
