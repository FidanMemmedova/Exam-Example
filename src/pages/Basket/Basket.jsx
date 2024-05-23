import React, { useEffect, useState } from "react";
import style from "./Basket.module.scss";
import axios from "axios";
import BasketCard from "../../components/BasketCard/BasketCard";

const Basket = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("https://6576bb5f424e2adad5b48bb1.mockapi.io/basket")
      .then((res) => {
        setData(res.data);
      });
  };
  const removeItem = (id) => {
    axios.delete(`https://6576bb5f424e2adad5b48bb1.mockapi.io/basket/${id}`);
    setTimeout(() => {
      getData();
    }, 500);
  };
  return (
    <div className={style.basketItems}>
      {data &&
        data.map((item) => (
          <BasketCard
            item={item}
            buttonText={"sil"}
            removeItem={() => removeItem(item.id)}
          />
        ))}
    </div>
  );
};

export default Basket;
