import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import * as bootstrap from "bootstrap";
import CallToAction from "./pages/CallToAction/CallToAction";
//import Data from "./Data/Data";
import Info from "./pages/Info/Info";
import Home from "./pages/Home/Home";
import Location from "./pages/Location/Location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigate to="/home" />} path="/" />

        <Route element={<CallToAction />} path="/calltoaction" />
        {/* <Route element={<Data />} path="/data" /> */}
        <Route element={<Info />} path="/info" />
        <Route element={<Home />} path="/home" />
        <Route element={<Location />} path="/location" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
