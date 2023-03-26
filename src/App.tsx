import React, { useState } from "react";
import "./App.css";
import { Main } from "./pages/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SideMenu } from "./components/SideMenu/SideMenu";

function App() {
  const [country, setCountry] = useState("pl");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main country={country} />} />
        <Route path="/country/:country" element={<Main country={country} />} />
      </Routes>
      <SideMenu onSelectCountry={setCountry} />
    </Router>
  );
}

export default App;
