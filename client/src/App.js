import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import CartsPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<CartsPage />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
