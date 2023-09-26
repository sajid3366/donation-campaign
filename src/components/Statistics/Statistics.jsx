import { Chart } from "react-google-charts";
import React, { useEffect, useState } from "react";

const data =[
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Watch TV", 2],
]




const Statistics = () => {

    const [chart, setChart]= useState([]);
    const ChartLength =parseInt(chart.length)
    console.log(ChartLength);
    const array =[
        ["Task", "Hours per Day"],
        ["Work", {ChartLength}],
        ["Watch TV", 2],
    ]
    console.log(chart.length);

    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setChart(data))
    },[])
    console.log(chart);

    return (
        <div className="my-12">
            <Chart
                chartType="PieChart"
                // data={data}
                array={array}
                
                width={"100%"}
                height={"400px"}
            />

            <div>
                <h1>My Daily Activities</h1>
            </div>
        </div>
    );
};

export default Statistics;