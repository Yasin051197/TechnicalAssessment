import React from "react";
import "./Products.css";
const Pagination = ({ data, paginate }) => {
  return (
    <div className="pagination">
      {data.map((_, index) => (
        <button key={index} onClick={() => paginate(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
