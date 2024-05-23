import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import axios from "axios";

const Home = () => {

  return (
    <>
      <Header />
      <PopularProducts />
    </>
  );
};

export default Home;
