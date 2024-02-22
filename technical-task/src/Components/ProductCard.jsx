import React, { useState } from "react";
import "../Containers/Products/Products.css";
import {
  productDeleteMessage,
  productUpdateMessage,
} from "../Constants/Constants";

const ProductCard = ({ item, setData }) => {
  const [isEdit, setEdit] = useState(false);
  const [productDetails, setProductDetails] = useState({
    title: item.title,
    price: item.price,
  });

  const updateProduct = (item) => {
    setEdit(true);
    setProductDetails(item);
  };

  const handleChange = (e) => {
    let value = e.target.value;

    if (e.target.name === "price") {
      value = Number(value);
    }
    console.log(productDetails);
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: value,
    }));
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    console.log(productDetails);
    setData((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, title: productDetails.title, price: productDetails.price }
          : p
      )
    );
    setEdit(false);
    alert(productUpdateMessage);
  };

  const deleteProduct = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
    alert(productDeleteMessage);
  };

  return (
    <div className="item">
      <h2> Title : {item.title}</h2>
      <img className="image" src={item.thumbnail} alt={item.title} />
      <h3>
        Discounted Price :{" "}
        {item.price - (item.discountPercentage * item.price) / 100}
      </h3>
      <button onClick={() => updateProduct(item)}>Edit</button>
      <button onClick={() => deleteProduct(item.id)}>Delete</button>
      <>
        {isEdit && (
          <form onSubmit={(e) => handleUpdate(e, item.id)} key={item.id}>
            <div style={{display:"flex"}}>
            <input
              type="text"
              name="title"
              value={productDetails.title}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              value={productDetails.price}
              onChange={handleChange}
            />
            </div>
            <button type="submit">Submit</button>
            <button onClick={() => setEdit(false)}>Cancel</button>
          </form>
        )}
      </>
    </div>
  );
};

export default ProductCard;
