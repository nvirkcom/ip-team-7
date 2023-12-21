import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CallToAction from "./pages/CallToAction/CallToAction";
import Info from "./pages/Info/Info";
import Home from "./pages/Home/Home";
import Location from "./pages/Location/Location";

function App() {
  const [info, setInfo] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigate to="/home" />} path="/" />

        <Route element={<CallToAction info={info} />} path="/calltoaction" />
        <Route element={<Info info={info} setInfo={setInfo} />} path="/info" />
        <Route element={<Home />} path="/home" />
        <Route element={<Location setInfo={setInfo} />} path="/location" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
