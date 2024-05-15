import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 12, "#8744e1"], // RGB value
  ["Silver", 19, "#fe718e"], // English color name
  ["BTC", 34, "#8744e1"],
  ["bnb", 22, "#fe718e"],
  ["green", 30, "#8744e1"],
  ["doge", 50, "#fe718e"],
  ["front", 100, "#8744e1"],
  ["shib", 90, "#fe718e"],
  ["ux", 38, "#8744e1"],
  ["tron", 95, "#fe718e"],
  ["renzo", 45, "#8744e1"],
  ["Gold", 73, "#fe718e"],
  ["Platinum", 80, "color: #8744e1"], // CSS-style declaration
];

export function App() {
    const chartOptions = {
        backgroundColor: "#000",
      };
  return (
    <Chart chartType="ColumnChart" data={data} options={chartOptions}/>
  );
}
