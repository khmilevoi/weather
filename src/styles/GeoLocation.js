import styled from "styled-components";
import {
  Widget,
  CityName as Name,
  Time as T,
  Temperature as Temp,
  Icon as I
} from "./Widget";

export const GeoLocation = styled(Widget)`
  max-height: none;
`;

export const CityName = styled(Name)`
  text-align: right;
`;

export const Time = styled(T)`
  text-align: right;
`;

export const Temperature = styled(Temp)`
  display: flex;
  align-items: center;
`;

export const Icon = styled(I)`
  height: 120px;
  transform: none;
`;
