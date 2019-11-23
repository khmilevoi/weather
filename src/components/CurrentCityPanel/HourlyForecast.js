import React from "react";
import PropTypes from "prop-types";

import { parseDt } from "api/WeatherAPI";
import { Chart } from "./Chart";

import * as s from "styles/HourlyForecast";

export const HourlyForecast = ({ list }) => {
  return (
    <s.HourlyForecast>
      <s.InformationList>
        {list.map(item => {
          const { dt } = item;
          const date = parseDt(dt);

          const [weather] = item.weather;

          return (
            <s.InformationColumn key={dt}>
              <s.Inner>
                <s.Time>{`${date.hours}:${date.minutes}`}</s.Time>
                <s.Icon name={weather.icon}></s.Icon>
              </s.Inner>
            </s.InformationColumn>
          );
        })}
      </s.InformationList>
      <s.ChartWrapper>
        <Chart
          dots={list}
          getY={item => item.main.temp}
          getLabelY={item => item.main.temp}
          labelComponent={<s.Temperature></s.Temperature>}
          params={{
            ellipseColor: "#757575",
            lineColor: "rgba(0, 0, 0, 0.05)"
          }}
        ></Chart>
      </s.ChartWrapper>
    </s.HourlyForecast>
  );
};

HourlyForecast.propTypes = {
  list: PropTypes.array.isRequired
};
