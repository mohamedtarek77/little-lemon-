import "./App.css";
import React from "react";
import { Home, BookingPage, NavBar } from "./comps/index";
import { Route, Routes } from "react-router-dom";

import { TimesProvider } from "./UpdateTimes";

function App() {
  return (
      <React.Fragment className="App">
          <TimesProvider>

        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookingPage" element={<BookingPage />} />
        </Routes>
        </TimesProvider>

      </React.Fragment>
  );
}

export default App;
