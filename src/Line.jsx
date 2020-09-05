import React from "react";
import { Bar } from "react-chartjs-2";
import "./Charts.css";
function Line  (confirmedTillNow) {
// let test =[12000,12500,13000,10500,9000,13500,14500,14700,13200,12568,13250,8800,14100,11350,12890,8970,12500,13000,10000,7800,13500,14500,14700,13200,12568,13250,13999,14100,11350,12890];
let dayspast = [];
let confirm = [];
let data = {};
let dates=[], colors=[];
let positive =0;
function createBar(){
  for(let i=0;i<30;i++){
    dayspast.push(i+111);
    colors.push('rgba(222, 90, 89)');
    colors.push('rgba(245, 125, 124)');
  }
  if(confirmedTillNow.confirmedTillNow!=null)
    positive = confirmedTillNow.confirmedTillNow.value;
    for(let i=0;i<30;i++){
        let today = -17.7911*dayspast[i]+5133.02;
        let tomorrow = new Date();
        tomorrow.setDate(new Date().getDate()+i);
        dates.push(tomorrow.toDateString());
        if(i===0){
            confirm.push(positive+Math.round(today));
            continue;
        }
        confirm.push(Math.round(confirm[i-1]+today));
    }
    // console.log(dates);
    data ={
        labels: dates,
        datasets: [
        {
            label: "Total Predicited Cases",
            data: confirm,
            backgroundColor: colors,
        },
        ]
    };
}
createBar();
  return (
    <div>
      <div className="chart">
        <Bar
          data={data}
        />
      </div>
    </div>
  );
};
export default Line;
