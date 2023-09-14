import React, { useEffect, useState } from "react";
import axios from "axios";

export function BlotterView() {
    var [counter, setCounter] = useState(0);

    const [trades, setTrades] = useState([]);

    // let trades =  [
    //     {
    //       "id": 999,
    //       "username": "Catalin Popescu",
    //       "primaryCcy": "USD",
    //       "secondaryCcy": "EUR",
    //       "rate": "0.86",
    //       "action": "SELL",
    //       "notional": 1000000,
    //       "tenor": "1M",
    //       "date": 1537511800526
    //     },
    //     {
    //       "id": 212,
    //       "username": "Bogdan Pascu",
    //       "primaryCcy": "USD",
    //       "secondaryCcy": "EUR",
    //       "rate": "0.15",
    //       "action": "BUY",
    //       "notional": 1000000,
    //       "tenor": "1M",
    //       "date": 1536560103000
    //     },
    //     {
    //       "id": 34,
    //       "username": "George Popescu",
    //       "primaryCcy": "EUR",
    //       "secondaryCcy": "USD",
    //       "rate": "0.63",
    //       "action": "SELL",
    //       "notional": 1000000,
    //       "tenor": "3M",
    //       "date": 1537511800526
    //     },
    //     {
    //       "id": 455,
    //       "username": "Andrei Nare",
    //       "primaryCcy": "USD",
    //       "secondaryCcy": "EUR",
    //       "rate": "1.11",
    //       "action": "SELL",
    //       "notional": 1000000,
    //       "tenor": "1M",
    //       "date": 1537511800526
    //     }]

    async function getallTrades() {
        try {
            const response = await axios.get("http://localhost:8210/transactions");
            setTrades(response.data.slice(0,4));
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getallTrades()
    }, []);


    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Deal Id</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Primary CCY</th>
                        <th scope="col">Secondary CCY</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Action</th>
                        <th scope="col">Notional</th>
                        <th scope="col">Tenor</th>
                        <th scope="col">Transaction Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trades.map((row, index) => <tr>
                            <td>{index}</td>
                            <td>{row.id}</td>
                            <td>{row.username}</td>
                            <td>{row.primaryCcy}</td>
                            <td>{row.secondaryCcy}</td>
                            <td>{row.rate}</td>
                            <td>{row.action}</td>
                            <td>{row.notional}</td>
                            <td>{row.tenor}</td>
                            <td>({new Date(row.date).toDateString()})</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    );
}