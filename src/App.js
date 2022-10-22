import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Page/Home";
import ProductItem from "./Page/ProductItem";

import "./App.scss";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductItem />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
