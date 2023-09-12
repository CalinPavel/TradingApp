import React, { useState } from "react";

export function BlotterView() {
    var [counter, setCounter] = useState(0);


    const blotterData = [
        {
            dealId: '123-123',
            username: 'test user',
            ccy: 'USD/EUR',
            notional: '',
            tenor: '1M',
            transactionDate: '12-09-2023'
        },
        {
            dealId: '123-123',
            username: 'test user',
            ccy: 'USD/EUR',
            notional: '',
            tenor: '1M',
            transactionDate: '12-09-2023'
        },
        {
            dealId: '123-123',
            username: 'test user',
            ccy: 'USD/EUR',
            notional: '',
            tenor: '1M',
            transactionDate: '12-09-2023'
        },
        {
            dealId: '123-123',
            username: 'test user',
            ccy: 'USD/EUR',
            notional: '',
            tenor: '1M',
            transactionDate: '12-09-2023'
        }
    ];

    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Deal Id</th>
                        <th scope="col">UserName</th>
                        <th scope="col">CCY</th>
                        <th scope="col">Notional</th>
                        <th scope="col">Tenor</th>
                        <th scope="col">Transaction Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blotterData.map((row, index) => <tr>
                            <td>{index}</td>
                            <td>{row.dealId}</td>
                            <td>{row.username}</td>
                            <td>{row.ccy}</td>
                            <td>{row.notional}</td>
                            <td>{row.tenor}</td>
                            <td>{row.transactionDate}</td>
                        </tr>)
                    }


                </tbody>
            </table>
        </>
    );
}