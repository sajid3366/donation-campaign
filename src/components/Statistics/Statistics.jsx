import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";


const Statistics = () => {

    const donateItem = JSON.parse(localStorage.getItem('card'));
    const [charts, setChart] = useState([]);

    const array = [
        ["Task", "Hours per Day"],
        ['Total Donation', charts.length],
        ['Donation You Made', donateItem.length]
    ]

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])

    return (
        <Chart
            chartType="PieChart"
            data={array}

            width={"100%"}
            height={"400px"}
        />
    );
};

export default Statistics;