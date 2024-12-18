import './App.css';
import Header from './components/Header.jsx';
import "./css/reset.css";
import "./css/main.css";
import Galerey from "./components/Galerey.jsx";
import React from "react";
import About_skate from "./components/About_skate.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage.jsx";
import PriceWinter from './Pages/PriceW/Price.jsx';
import PriceSummer from './Pages/PriceS/Price.jsx';

function App() {
  return (
    <>
    <header>
      <Header />
    </header>
        <Router>
            <Routes>
                <Route path='/GeraSki01/' element={<MainPage />} />
                <Route path='/GeraSki01/price-winter' element={<PriceWinter />} />
                <Route path='/GeraSki01/price-summer' element={<PriceSummer />} />
                <Route path='/GeraSki01/galerey' element={<Galerey />} />
            </Routes>
        </Router>
     <footer>
        <Footer />
     </footer>
    </>
  )
}

export default App