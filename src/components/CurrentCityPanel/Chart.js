import React from "react";
import PropTypes from "prop-types";

import * as s from "styles/Chart";

const map = (x, l1, h1, l2, h2) => ((h2 - l2) * (x - l1)) / (h1 - l1) + l2;

const findRange = dots =>
  dots.reduce(
    (prev, curr) => {
      let [min, max] = prev;

      if (curr < min) min = curr;
      if (curr > max) max = curr;

      return [min, max, max - min];
    },
    [Infinity, -Infinity, 0]
  );

export const Chart = ({
  dots,
  getY,
  getLabelY,
  labelComponent,
  params = {}
}) => {
  const {
    radius = 5,
    ellipseColor = "black",
    lineColor = "black",
    lineWidth = 3
  } = params;

  const sizeX = 100 / dots.length;
  const startY = sizeX / 2;
  const [min, max] = findRange(dots.map(item => getY(item)));

  return (
    <s.Chart>
      {dots.map((item, index) => {
        const x1 = startY + sizeX * (index - 1);
        const y1 = index > 0 && map(getY(dots[index - 1]), min, max, 10, 90);

        const x = startY + sizeX * index;
        const y = map(getY(item), min, max, 10, 90);

        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <line
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x}%`}
                y2={`${y}%`}
                stroke={lineColor}
                strokeWidth={lineWidth}
              ></line>
            )}
            <ellipse
              fill={ellipseColor}
              cx={`${x}%`}
              cy={`${y}%`}
              rx={radius}
              ry={radius}
            ></ellipse>
          </React.Fragment>
        );
      })}
    </s.Chart>
  );
};

Chart.propTypes = {
  dots: PropTypes.array.isRequired,
  getY: PropTypes.func.isRequired,
  getLabelY: PropTypes.func.isRequired,
  labelComponent: PropTypes.element.isRequired,
  params: PropTypes.shape({
    radius: PropTypes.number,
    ellipseColor: PropTypes.string,
    lineColor: PropTypes.string,
    lineWidth: PropTypes.number
  })
};
