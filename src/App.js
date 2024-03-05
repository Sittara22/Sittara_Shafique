import React from "react";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Works from "./components/Works/works"
import ContactMe from "./components/Contact_me/contact_me";
import Footer from "./components/Footer/footer"

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Intro/>
          <About/>
          <Works/>
          <ContactMe/>
          <Footer/>
    </div>
  );
}

export default App;
