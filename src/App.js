import "./App.css";
import React from 'react';
import { NavBar,Main,Footer } from "./comps/index";

function App() {
  return (
    <React.Fragment className="App">

    <NavBar/>
 <Main/>
 <Footer/>
    </React.Fragment>
  );
}

export default App;
