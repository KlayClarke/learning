import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Shop from "./Shop";
import App from "./App";
import Nav from "./Nav";
import ShopItem from "./ShopItem";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:itemId" element={<ShopItem />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
