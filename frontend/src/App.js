

import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import React from "react";
import Navbar from "./components/header/Header";
import webfont from "webfontloader"
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import "./App.css"

function App() {
  React.useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

  }, []);
  return (
    <Router>
<Navbar/>
<Routes>
  <Route  path="/" element={<Home/>} />
</Routes>
<Footer/>
    
    </Router>
 
  );
}

export default App;
