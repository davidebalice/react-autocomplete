import React from "react";
import "./App.css";
import Header from "./common/Header";
import Wrapper from "./common/Wrapper";
import Footer from "./common/Footer";
import Autocomplete from "./components/Autocomplete";
import brands from "./data/brands";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Autocomplete options={brands} />
      </Wrapper>
      <Footer />
    </div>
  );
};

export default App;
