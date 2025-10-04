import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import {products} from "../../MockData"

function ProductCard({ product }) {
  return (
    <Link href={`/products/${product._id}`}>
      <Card>
        <Image src={product.image} alt={product.name} width={500} height={500} priority className="transition-opacity duration-500 ease-in-out" />
        <CardHeader>
           <CardTitle>{product.name}</CardTitle>
           <CardContent>{product.price}</CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default ProductCard;