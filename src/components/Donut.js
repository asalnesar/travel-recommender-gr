import React, { Component, PureComponent, useState, useEffect } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import "../App.css";

const COLORS = ["#7030a0", "#00b050", "#ffc000", "#0070c0"];

const Donut = ({ scores, isMapChart }) => {
  const [donutState, setDonutState] = useState({
    innerRadius: 40,
    outerRadius: 60,
  });

  const [showLabels, setShowLabels] = useState(false);

  useEffect(() => {
    let score = calculateOverallScore();
    if (isMapChart) {
      calculateDonutSize(score);
    }
  }, [scores]);

  function calculateOverallScore() {
    let sum = 0;
    scores.forEach((item) => {
      sum += item.value;
    });
    sum = sum / 4;
    return sum;
  }

  function calculateDonutSize(score) {
    if (score <= 25) {
      setDonutState({
        innerRadius: 5,
        outerRadius: 15,
      });
    } else if (score > 25 && score <= 50) {
      setDonutState({
        innerRadius: 15,
        outerRadius: 25,
      });
    } else if (score > 50 && score <= 75) {
      setDonutState({
        innerRadius: 25,
        outerRadius: 35,
      });
    } else {
      // 75 < score <= 100
      setDonutState({
        innerRadius: 35,
        outerRadius: 45,
      });
    }
  }
  function handleClick() {
    if (!showLabels) {
      setShowLabels(true);
    } else {
      setShowLabels(false);
    }
  }
  return (
    <PieChart
      className={isMapChart ? "map-donut-container" : null}
      width={isMapChart ? 120 : 200}
      height={isMapChart ? 120 : 200}
    >
      <Pie
        data={scores}
        cx={isMapChart ? 55 : 90}
        cy={isMapChart ? 55 : 90}
        innerRadius={donutState.innerRadius}
        outerRadius={donutState.outerRadius}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        label={true}
        onClick={handleClick}
        isAnimationActive={isMapChart}
      >
        {scores.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Donut;
