import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Home from "./page/Home.jsx";
import DMJ from "./page/DMJ.jsx";
import OS from "./page/OS.jsx";
import SBD from "./page/SBD.jsx";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dmj" element={<DMJ />} />
        <Route path="/os" element={<OS />} />
        <Route path="/sbd" element={<SBD />} />
      </Routes>
    </Router>
  );
}