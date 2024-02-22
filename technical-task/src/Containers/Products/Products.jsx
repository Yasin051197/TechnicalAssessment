import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";
import "./Products.css";
import Pagination from "./Pagination";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = async (pageNumber) => {
    try {
      await fetch(
        `https://dummyjson.com/products?skip=${(pageNumber - 1) * 9}&limit=9`
      )
        .then((res) => res.json())
        .then((res) => setData(res.products));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(pageNumber);
  }, [pageNumber]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const paginate = (pageNumber) => setPageNumber(pageNumber);

  return (
    <>
      <div className="container">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            setData={setData}
            data={data}
          />
        ))}
      </div>
      <Pagination data={data} paginate={paginate} />
    </>
  );
};

export default Products;
