import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RatesView } from './components/RatesView';

function App() {
  return (
      <>
        {/* <Login></Login> */}
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login/>}></Route>
            <Route path="register" element={<Register/>}></Route>
            <Route path="fxTrades" element={<RatesView/>}></Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
