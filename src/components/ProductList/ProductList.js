import React from "react";
import { Product } from "..";

const ProductList = ({ products, compare, nameSearch }) => {
  const renderProducts = () => {
    if (nameSearch === undefined) return products

    return products.filter(product => {
      const price = parseFloat(product.price.substring(1))
      return price < nameSearch
    })
  };

  return (
    <div className="row mt-3">
      {renderProducts().map((product) => (
        <Product key={product.id} product={product} compare={compare} />
      ))}
    </div>
  );
};

export default ProductList;
