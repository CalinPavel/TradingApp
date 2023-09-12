import React, { useState } from "react";


export function Trade(props) {
    return (
        <>
            <div className="card border-dark mb-3 mt-5 " style={{ maxWidth: '18rem', marginLeft: '2rem' }}>
                <div className="card-header">{props.currencyFrom} / {props.currencyTo} </div>
                <div className="card-body text-dark">
                    <input type="email" class="form-control" placeholder="Enter Amount"></input>
                    <br></br>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select</option>
                        <option value="1M">1M</option>
                        <option value="2M">2M</option>
                        <option value="3M">3M</option>
                    </select>
                    <br></br>
                    
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <button type="button" class="btn btn-success">Sell</button>
                            </div>
                            <div class="col-sm">
                            <button type="button" class="btn btn-primary">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}