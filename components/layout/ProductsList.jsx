import { products } from "@/MockData";
import ProductCard from "./ProductCard";
function ProductsList() {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search products..." />
      </div>

      <ul>
        {products.map((product, key) => (
          <li key={key}>
            <ProductCard product={product} />
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;