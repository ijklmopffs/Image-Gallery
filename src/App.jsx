import "./App.css";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
