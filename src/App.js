import React from "react";
import "./App.css";
import Home from "./Components/home/Home";
import Middle from "./Components/Middle/Middle";
import QuickSearch from "./Components/QuickSearches/QuickSearch";
import FirstStep from "./Components/HowItsWork/FirstStep";
import SecondStep from "./Components/SecondStep/SecondStep";
import ThirdStep from "./Components/ThirdStep/ThirdStep";
import ChooseUs from "./Components/Why Choose/ChooseUs";
import Footer from "./Components/Footer/Footer";
import End from "./Components/End/End";

function App() {
  return (
    <div className="App">
      <Home />
      <Middle />
      <QuickSearch />
      <FirstStep />
      <SecondStep />
      <ThirdStep />
      <ChooseUs />
      <Footer />
      <End />
    </div>
  );
}

export default App;
