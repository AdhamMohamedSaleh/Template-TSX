import ProductsList from "@/components/layout/ProductsList";
import SearchInput from "@/components/layout/SearchInput";

function Page() {
  return (
    <div className="space-y-4 mt-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        <h1>All Products</h1>
           <div>
           <SearchInput />
           </div>
      </div>
      <ProductsList />
    </div>
  );
};

export default Page;