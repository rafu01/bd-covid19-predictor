import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./Charts.css";
import axios from "axios";
const Charts = () => {
  let confirmedData = [];
  let dates = [];
  let deathsData = [];
  let recoveredData = [];
  axios
    .get("https://api.covid19api.com/dayone/country/bangladesh")
    .then(res => {
      for (const key of Object.keys(res)) {
        if (key === "data") {
          for (const k of res[key]) {
            confirmedData.push(parseInt(k.Confirmed));
            deathsData.push(parseInt(k.Deaths));
            recoveredData.push(parseInt(k.Recovered));
            dates.push(new Date(k.Date).toDateString());
          }
        }
      }
      confirmedData = confirmedData.slice(confirmedData.length-14);
      deathsData = deathsData.slice(deathsData.length-14);
      recoveredData = recoveredData.slice(recoveredData.length-14);
      dates = dates.slice(dates.length-14);
      setChartData({
        labels: dates,
        datasets: [
          {
            label: "confirmed",
            data: confirmedData,
            borderColor: "#5a809e"
            // backgroundColor: "#5a809e"
          },
          {
            label: "deaths",
            data: deathsData,
            borderColor: "#f57d7c"
            // backgroundColor: "#f57d7c"
          },
          {
            label: "recovered",
            data: recoveredData,
            borderColor: "#6cc2bd"
            // backgroundColor: "#6cc2bd"
          }
          
        ]
      });
    })
    .catch(error => {
      console.log(error);
    });

  const [chartData, setChartData] = useState({});
  const lineChart = () => {};
  useEffect(() => {
    lineChart();
  }, []);
  return (
    <div>
      <div className="chart">
        <Line
          data={chartData}
          options={{
            responsive: true
          }}
        />
      </div>
    </div>
  );
};
export default Charts;
