import React from "react";
import PropTypes from "prop-types";

import { Slide, CircularProgress } from "@material-ui/core";

import { parseDt } from "api/WeatherAPI";
import { Chart } from "./Chart";

import * as s from "styles/HourlyForecast";

export const HourlyForecast = ({ list, isLoading }) => {
  return (
    <s.HourlyForecast>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Slide direction="up" in={true} timeout={400}>
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
          </Slide>
          <Slide direction="up" in={true} timeout={500}>
            <s.ChartWrapper>
              <Chart
                dots={list}
                getY={item => item.main.temp}
                getLabelY={item => `${Math.floor(item.main.temp)}°`}
                params={{
                  ellipseColor: "#757575",
                  lineColor: "rgba(0, 0, 0, 0.05)",
                  textColor: "#757575"
                }}
              ></Chart>
            </s.ChartWrapper>
          </Slide>
        </>
      )}
    </s.HourlyForecast>
  );
};

HourlyForecast.propTypes = {
  list: PropTypes.array.isRequired
};
