import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

import blackStar from "../assets/icons/blackStar.svg";
import arrowLeft from "../assets/icons/arrowLeft.svg";
import arrowRight from "../assets/icons/arrowRight.svg";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const Products = () => {
  const [slideValue, setSlideValue] = useState(0);

  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [activeProducts, setActiveProducts] = useState([]);

  const evaluateActiveProducts = () => {
    const products = productData.filter(
      (product: Product) => product.category === activeCategory
    );
    setActiveProducts(products);
  };

  const handleNextItem = () => {
    setSlideValue((prev) => prev - 440);
  };
  const handlePreviousItem = () => {
    setSlideValue(0);
  };

  useEffect(() => {
    const productDataFetch = async () => {
      const data = await (
        await fetch("https://fakestoreapi.com/products")
      ).json();
      setProductData(data);
    };
    const categoryDataFetch = async () => {
      const data = await (
        await fetch("https://fakestoreapi.com/products/categories")
      ).json();
      setCategoryData(data);
      setActiveCategory(data[0]);
    };
    productDataFetch();
    categoryDataFetch();
  }, []);

  useEffect(() => {
    if (activeCategory) {
      evaluateActiveProducts();
    }
  }, [activeCategory]);

  return (
    <section className="products">
      {/* Product Heading */}
      <div className="products-title">
        <h2>New products</h2>
        <div className="star-wrapper">
          <span className="black-star">
            <img src={blackStar} alt="start-icon" />
          </span>
          <div className="star-line"></div>
        </div>
      </div>

      {/* Arrows */}
      <div className="arrows">
        <div className="left" onClick={handlePreviousItem}>
          <img src={arrowLeft} alt="arrow-left" />
        </div>
        <div
          className={`right ${
            slideValue === (activeProducts.length - 1) * -440 && "disable"
          }`}
          onClick={handleNextItem}
        >
          <img src={arrowRight} alt="arrow-right" />
        </div>
      </div>

      {/* Product Gallery */}
      <div className="product-wrapper">
        <ul className="product-menu">
          {categoryData.map((category: string, index) => {
            return (
              <li
                key={index}
                className={`capitalize ${
                  activeCategory === category && "active"
                }`}
                onClick={() => {
                  setSlideValue(0);
                  setActiveCategory(category);
                }}
              >
                {category}
              </li>
            );
          })}
        </ul>

        <section className="product-carousel">
          <div
            className="slider"
            style={{ transform: `translateX(${slideValue}px)` }}
          >
            {activeProducts.map((product: Product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Products;
