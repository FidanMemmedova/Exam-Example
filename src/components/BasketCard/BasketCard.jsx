import React from "react";
import style from "./BasketCard.module.scss";
import Button from "../btns/Button";
const BasketCard = ({ item, removeItem, buttonText }) => {
  return (
    <div className={style.productCard}>
      <img src={item.thumbnail} alt="" />
      <p>{item.title}</p>
      <p className={style.description}>{item.description}</p>
      <p>{item.price} $</p>
      <p>{item.count} </p>
      <Button onclick={removeItem} buttonText={buttonText} />
    </div>
  );
};

export default BasketCard;
