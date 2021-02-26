import React from "react";
import { CompareTable, ProductList } from "../../components";
import results from "../../data/products.json";

const Home = () => {
  const [nameSearch, setNameSearch] = React.useState()
  const [products, setProducts] = React.useState(results.products)

  const handleChange = (event) => {
    setNameSearch(event.target.value)
  };

  const compare = (id) => {
    setProducts((value) => {
      return value.map((product) =>
        product.id === id
          ? { ...product, compare: !product.compare }
          : product
    )})
  };

  const compareProducts = products.filter(
    (product) => product.compare
  );

  return (
    <div className="home mt-5">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-3">Compare Products</h2>
          <input
            type="number"
            placeholder="Search by price"
            value={nameSearch !== undefined ? nameSearch : ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <ProductList
        products={products}
        nameSearch={nameSearch}
        compare={compare}
      />
      {compareProducts.length >= 1 && (
        <CompareTable products={compareProducts} />
      )}
    </div>
  );
}

export default Home;
