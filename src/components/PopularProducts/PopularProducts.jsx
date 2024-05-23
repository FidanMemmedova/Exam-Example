import React, { useEffect, useState } from "react";
import style from "./PopularProducts.module.scss";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
const PopularProducts = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  const getData = () =>
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });

  const addToCart = (product) => {
    axios
      .get("https://6576bb5f424e2adad5b48bb1.mockapi.io/basket")
      .then((res) => {
        const db = res.data;
        const existingData = db.find((item) => item.id == product.id);
        if (existingData) {
          axios.put(
            `https://6576bb5f424e2adad5b48bb1.mockapi.io/basket/${existingData.id}`,
            {
              ...existingData,
              count: existingData.count + 1,
            }
          );
        } else {
          axios.post(`https://6576bb5f424e2adad5b48bb1.mockapi.io/basket`, {
            ...product,
            count: 1,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addToWishlist = (product) => {
    axios
      .get("https://6576bb5f424e2adad5b48bb1.mockapi.io/wishlist")
      .then((res) => {
        const db = res.data;
        const existingProduct = db.find((item) => item.id == product.id);
        if (existingProduct) {
          alert("Mehsul artiq wishlistde movcuddur");
        } else {
          axios.post(
            "https://6576bb5f424e2adad5b48bb1.mockapi.io/wishlist",
            product
          );
        }
      });
  };

  return (
    <div className={style.popularProducts}>
      <div className={style.popularProductsContainer}>
        <h1>Popular Products</h1>
        <div className={style.popularProductsItems}>
          {data &&
            data.map((item) => (
              <ProductCard
                item={item}
                addToCart={() => addToCart(item)}
                addToWishlist={() => addToWishlist(item)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
