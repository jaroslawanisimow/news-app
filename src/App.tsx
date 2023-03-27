import "./App.css";
import { Main } from "./pages/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SideMenu } from "./components/SideMenu/SideMenu";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/country/:country" element={<Main />} />
      </Routes>
      <SideMenu  />
    </Router>
  );
}

export default App;
