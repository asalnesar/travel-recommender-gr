import React, { Component, PureComponent, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  Cell,
  ResponsiveContainer,
} from "recharts";
import "../App.css";

const COLORS = ["#14B1B2", "#FF910B", "#04A2DF", "#F05E67"];

const BarChartComponent = ({ scores }) => {
  return (
    <BarChart
      width={250}
      height={150}
      data={scores}
      barCategoryGap={5}
      layout="vertical"
    >
      <XAxis type="number" fontSize="small" />
      <YAxis
        type="category"
        width={85}
        dataKey="name"
        minTickGap={1}
        fontSize="small"
      />
      <Bar name="name" dataKey="value">
        {scores.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % 20]} />
        ))}
        <LabelList
          dataKey="value"
          position="inside"
          style={{ fill: "#fff", fontSize: "small" }}
        />
      </Bar>
    </BarChart>
  );
};

export default BarChartComponent;
