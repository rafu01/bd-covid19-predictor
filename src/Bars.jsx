import React, {useState, useEffect} from "react";
import { Bar } from "react-chartjs-2";
import "./Charts.css";
import axios from "axios";
const Bars = () => {
  let confirmedData = [];
  let area =[];
  let color=[];
  axios
    .get("https://cors-anywhere.herokuapp.com/https://covid19bangladesh.pythonanywhere.com/dhaka")
    .then(res => {
      for(let item of res.data){
        confirmedData.push(parseInt(item.confirmed));
        area.push(item.name);
        color.push('rgba(90,187,181)');
        color.push('rgba(144,209,205)');
      }
      confirmedData = confirmedData.slice(0,30);
      area = area.slice(0,30);
      color = color.slice(0,30);
      setChartData({
        labels: area,
        datasets: [
          {
            label: "Confirmed Cases",
            data: confirmedData,
            backgroundColor: color
          },
          
        ]
      })
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
        <Bar
          data={chartData}
        />
      </div>
    </div>
  );
};
export default Bars;
