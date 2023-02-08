import "./App.css";
import React from 'react';
import { NavBar,Footer, Hero,Specials } from "./comps/index";

function App() {
  return (
    <React.Fragment className="App">

    <NavBar/>
 <Hero/>
 <Specials/>
 <Footer/>
    </React.Fragment>
  );
}

export default App;
