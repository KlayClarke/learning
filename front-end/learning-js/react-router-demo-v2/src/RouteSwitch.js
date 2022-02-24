import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import ShopItem from "./components/ShopItem";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ShopItem />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
