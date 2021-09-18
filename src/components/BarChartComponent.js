import React, { Component, PureComponent, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, LabelList, Cell } from "recharts";
import "../App.css";

const COLORS = ["#7030a0", "#00b050", "#ffc000", "#0070c0"];

const BarChartComponent = ({ scores }) => {
  return (
    <BarChart
      width={230}
      height={150}
      data={scores}
      barCategoryGap={3}
      layout="vertical"
    >
      <XAxis type="number" />
      <YAxis
        type="category"
        width={10}
        padding={{ left: 20 }}
        dataKey="name"
        hide
      />
      <Bar width={20} name="name" dataKey="value">
        {scores.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % 20]} />
        ))}
        <LabelList dataKey="name" position="inside" style={{ fill: "#fff" }} />
      </Bar>
    </BarChart>
  );
};

export default BarChartComponent;
