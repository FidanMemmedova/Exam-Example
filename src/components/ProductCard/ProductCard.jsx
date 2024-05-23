import React from "react";
import style from "./ProductCard.module.scss";
import Button from "../btns/Button";
const ProductCard = ({ item, addToCart, addToWishlist }) => {
  return (
    <div className={style.productCard}>
      <img src={item.thumbnail} alt="" />
      <p>{item.title}</p>
      <p className={style.description}>{item.description}</p>
      <p>{item.price} $</p>
      <Button onclick={addToCart} buttonText={"add to cart"} />
      <Button onclick={addToWishlist} buttonText={"add to wishlit"} />
    </div>
  );
};

export default ProductCard;
