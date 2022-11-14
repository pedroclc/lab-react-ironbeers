import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage/HomePage";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import Beers from "./components/Pages/Beers/Beers";
import RandomBeer from "./components/Pages/RandomBeer/RandomBeer";
import NewBeer from "./components/Pages/NewBeer/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
