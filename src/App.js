import "./App.css";
import React from "react";
import { Home, BookingPage } from "./comps/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/booking" element={<BookingPage />}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
