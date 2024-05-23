import React, { useEffect, useState } from "react";
import style from "./Dashboard.module.scss";
import Header from "../../components/Header/Header";
import axios from "axios";
import DashCard from "../../components/DashCard";
import { useFormik } from "formik";
import ProductCard from "../../components/ProductCard/ProductCard";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getData = () => {
    axios
      .get("https://6576bb5f424e2adad5b48bb1.mockapi.io/basket")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const axtar = () => {
    axios
      .get("https://6576bb5f424e2adad5b48bb1.mockapi.io/basket")
      .then((res) => {
        const db = res.data
        setFilteredData(db.filter(item => item.title.toLowerCase().includes(searchedTerm.toLowerCase())))
      });
  };

  const sil = (id) => {
    axios.delete(`https://6576bb5f424e2adad5b48bb1.mockapi.io/basket/${id}`);
    setTimeout(() => {
      getData();
    }, 1000);
  };

  const formik = useFormik({
    initialValues: {
      thumbnail: "",
      title: "",
      description: "",
      price: "",
    },
    onSubmit: (values) => {
      axios.post("https://6576bb5f424e2adad5b48bb1.mockapi.io/basket", values);
      setTimeout(() => {
        getData();
      }, 1000);
    },
  });

  return (
    <div>
      <Header />
      <div>
        Axtar
        <input
          type="text"
          name=""
          id=""
          value={searchedTerm}
          onChange={(e) => setSearchedTerm(e.target.value)}
        />
        <button onClick={axtar}>Axtar</button>
        {filteredData && filteredData.map(item => <p>{item.title}</p>)}
      </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <input
            id="firstName"
            name="thumbnail"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.thumbnail}
          />
          <input
            id="lastName"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <input
            id="email"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <input
            id="email"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {data &&
          data.map((item) => (
            <DashCard item={item} onclick={() => sil(item.id)} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
