import React, {
  Component,
  PureComponent,
  useState,
  useRef,
  useEffect,
} from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
  LabelList,
} from "recharts";
import "../App.css";
import { Col, Row, Card, Overlay } from "react-bootstrap";

import ScoreDetails from "./ScoreDetails";

const COLORS = ["#7030a0", "#00b050", "#ffc000", "#0070c0"];

const Donut = ({ country, isMapChart, donutClicked, label }) => {
  const [donutState, setDonutState] = useState({
    innerRadius: 30,
    outerRadius: 50,
  });

  const target = useRef(null);
  useEffect(() => {
    if (country) {
      let score = country.overallScore;
      if (isMapChart) {
        calculateDonutSize(score);
      }
    }
  }, [country, isMapChart]);

  const centerLabel = !isMapChart ? (
    <text
      x={donutState.outerRadius + 10}
      y={donutState.outerRadius}
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ fontWeight: "bold" }}
      fontSize={20}
    >
      {label}
    </text>
  ) : null;

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
    if (isMapChart) {
      donutClicked(country.id);
    }
  }
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        className="footer-note"
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <>
      <PieChart
        className={isMapChart ? "map-donut-container" : null}
        width={
          isMapChart
            ? donutState.outerRadius * 2
            : (donutState.outerRadius + 10) * 2
        }
        height={donutState.outerRadius * 2}
        onClick={handleClick}
        style={
          isMapChart
            ? { left: -donutState.outerRadius, top: -donutState.outerRadius }
            : null
        }
        ref={target}
      >
        {centerLabel}
        <Pie
          data={country.scores}
          innerRadius={donutState.innerRadius}
          outerRadius={donutState.outerRadius}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label={!isMapChart && renderCustomizedLabel}
          labelLine={false}
          isAnimationActive={isMapChart}
        >
          {country.scores.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <Overlay target={target.current} show={true} placement="left">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: "rgba(255, 100, 100, 0.85)",
              padding: "2px 10px",
              color: "white",
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
    </>
  );
};

export default Donut;
