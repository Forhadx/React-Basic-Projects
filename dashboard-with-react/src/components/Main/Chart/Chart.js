import React, { useEffect, useState } from "react";
import "./Chart.scss";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import axios from "axios";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`v_run: ${payload[0].value}`}</p>
                <p>{label}</p>
            </div>
        );
    }

    return null;
};

const Chart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        var options = {
            method: "GET",
            url: "https://free-nba.p.rapidapi.com/games",
            params: { page: "0", per_page: "25" },
            headers: {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key":
                    "efaf33db4fmsh1f1b9be103d289ep109e99jsn000efa239766",
            },
        };

        axios
            .request(options)
            .then(function (response) {
                // console.log(response.data);
                let updateArray = [];
                for (let d of response.data.data) {
                    let stat = {
                        home_run: d.home_team_score,
                        visitor_run: d.visitor_team_score,
                        id: "Id: " + d.id.toString(),
                    };
                    updateArray.push(stat);
                }
                // console.log(updateArray);
                setData(updateArray.slice(0, 10));
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <div className="chart">
            <div className="chart__heading">
                <div className="chart__heading--headers">
                    <h2>Market Overview</h2>
                    <p>Prices value updates</p>
                </div>
                <div className="chart__heading--option">
                    <span>Weekly (2020)</span>
                </div>
            </div>
            <div className="chart__graph">
                <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart
                        width={100}
                        height={100}
                        data={data}
                        margin={{
                            top: 25,
                            right: 25,
                            left: 25,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            horizontal="2"
                            vertical=""
                        />
                        <XAxis dataKey="id" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                            type="monotone"
                            dataKey="visitor_run"
                            stroke="#7b7b7b"
                            dot={{
                                fill: "#14121e",
                                r: 8,
                                stroke: "#e2e9f5",
                                strokeWidth: 4,
                            }}
                            activeDot={{
                                fill: "#14121e",
                                r: 8,
                                stroke: "#e2e9f5",
                                strokeWidth: 4,
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;
