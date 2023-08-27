import linkIcon from "../assets/icons/link.svg";

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

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="product">
      <div className="product-image-wrapper">
        <img src={product.image} alt="product-image" />
        <div className="external-link">
          <img src={linkIcon} alt="external-link-icon" />
        </div>
      </div>
      <div className="product-desc">
        <h2>
          {product.title.length > 30
            ? `${product.title.substring(0, 30)}...`
            : product.title}
        </h2>
        <p>
          {product.description.length > 100 &&
            `${product.description.substring(0, 100)}...`}
        </p>
        <p className="price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
