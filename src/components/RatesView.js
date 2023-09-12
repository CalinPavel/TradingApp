import React, { useState } from "react";
import { Trade } from "./Trade";
import { BlotterView } from "./BlotterView";

export function RatesView() {
    var [counter, setCounter] = useState(0);

    return (
        <>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-sm">
                        <Trade currencyFrom='EUR' currencyTo='RON' />
                        <Trade currencyFrom='EUR' currencyTo='GBP' />
                    </div>
                    <div class="col-sm">
                        <BlotterView></BlotterView>
                    </div>
                </div>
            </div>
        </>
    );
}