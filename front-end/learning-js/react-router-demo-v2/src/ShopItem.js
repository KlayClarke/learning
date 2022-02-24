import { useState, useEffect } from "react";

const ShopItem = () => {
  const [item, setItem] = useState({});

  const fetchItem = async () => {};

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
};

export default ShopItem;
