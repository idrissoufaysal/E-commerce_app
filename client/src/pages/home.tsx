import React, { useEffect } from "react";
import useProductStore from "../context/ProductStore";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { products, fetchPoducts } = useProductStore();
  //console.log(products);
  //fetchPoducts()

  //Affihcher tous les categorie
  const fetchCategories = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const cat = await res.json();
    console.log(cat);
    console.table(cat);
  };

  useEffect(() => {
    fetchPoducts();
    fetchCategories();
  }, []);

  const filtererdProducts = products.filter((item) => {
    return (
      item.category === "women's clothing" || item.category === "men's clothing"
    );
  });
  console.table(filtererdProducts);

  return (
    <div className="home">
      <div className="products">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
