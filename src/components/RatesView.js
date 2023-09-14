import React, { useState } from "react";
import { Trade } from "./Trade";
import { BlotterView } from "./BlotterView";
import { Dashboard } from './Dashboard';


export default function RatesView() {
    var [counter, setCounter] = useState(0);
    let trades =  [
        {
          "id": 999,
          "username": "Catalin Popescu",
          "primaryCcy": "USD",
          "secondaryCcy": "EUR",
          "rate": "0.86",
          "action": "SELL",
          "notional": 1000000,
          "tenor": "1M",
          "date": 1537511800526
        },
        {
          "id": 212,
          "username": "Bogdan Pascu",
          "primaryCcy": "USD",
          "secondaryCcy": "EUR",
          "rate": "0.15",
          "action": "BUY",
          "notional": 1000000,
          "tenor": "1M",
          "date": 1536560103000
        },
        {
          "id": 34,
          "username": "George Popescu",
          "primaryCcy": "EUR",
          "secondaryCcy": "USD",
          "rate": "0.63",
          "action": "SELL",
          "notional": 1000000,
          "tenor": "3M",
          "date": 1537511800526
        },
        {
          "id": 455,
          "username": "Andrei Nare",
          "primaryCcy": "USD",
          "secondaryCcy": "EUR",
          "rate": "1.11",
          "action": "SELL",
          "notional": 1000000,
          "tenor": "1M",
          "date": 1537511800526
        }]

    return (
        <>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-sm">
                    {
                        trades.map((row, index) => 
                        <Trade currencyFrom={row.primaryCcy} currencyTo={row.secondaryCcy} />
                    )}
                        {/* <Trade currencyFrom='EUR' currencyTo='RON' />
                        <Trade currencyFrom='EUR' currencyTo='GBP' /> */}
                    </div>
                    <div class="col-sm">
                        <BlotterView></BlotterView>
                    </div>
                </div>
            </div>
        </>
    );
}