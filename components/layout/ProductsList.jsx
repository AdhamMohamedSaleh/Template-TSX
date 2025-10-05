import { products } from "@/MockData";
import ProductCard from "./ProductCard";
function ProductsList() {

  
  return (
    <div className="flex flex-col max-w-7xl mx-auto p-4 space-y-10">
      



      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
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