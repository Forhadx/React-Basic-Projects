import React, { useState, useEffect } from "react";
import "./RightTable.scss";
import { FiMoreVertical } from "react-icons/fi";
import axios from "axios";

const RightTable = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        var options = {
            method: "GET",
            url: "https://free-nba.p.rapidapi.com/players",
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
                //console.log(response.data);
                setPlayers(response.data.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <div className="right-table">
            <div className="right-table__header">
                <h2>Sell Order</h2>
                <div className="right-table__header-btn">
                    <FiMoreVertical />
                </div>
            </div>
            <div className="right-table__details">
                <div className="right-table__details-head">
                    <div className="right-table__details-head-row">
                        <h2>Name</h2>
                        <h2>Position</h2>
                        <h2>Team</h2>
                    </div>
                </div>
                <div className="right-table__details-body">
                    {" "}
                    {players &&
                        players.slice(0, 7).map((p) => (
                            <div
                                className="right-table__details-body-row"
                                key={p.id}
                            >
                                <p>{p.first_name}</p>
                                <p>{p.position}</p>
                                <p>{p.team.name}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default RightTable;

/*

// table is not work on my code: confused

<table>
    <thead>
        <tr>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>23</td>
            <td>23</td>
            <td>23</td>
        </tr>
        <tr>
            <td>23</td>
            <td>23</td>
            <td>23</td>
        </tr>
    </tbody>
</table>

*/
