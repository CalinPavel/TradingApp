import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import {Loading} from './components/Loading'
import React, { Suspense } from 'react';

function App() {

  const Login = React.lazy(() => import("./components/Login"));
  const Register = React.lazy(() => import("./components/Register"));
  const Trades = React.lazy(() => import("./components/RatesView"));


  return (
      <>
        {/* <Login></Login> */}
        <Suspense fallback={<Loading/>}>
        <BrowserRouter>
          <Dashboard/>
          <Routes>
            <Route path="login" element={<Login/>}></Route>
            <Route path="register" element={<Register/>}></Route>
            <Route path="fxTrades" element={<Trades/>}></Route>
          </Routes>
        </BrowserRouter>
        </Suspense>
      </>
  );
}

export default App;
