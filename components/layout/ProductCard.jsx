import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "../ThemeImage";

export default function ProductCard({ product }) {

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div >
          <Link href={`/products/${product._id}`} key={product._id} className="group">
            <Card className="flex flex-col overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="relative flex items-center justify-center aspect-video">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-90"
                />
              </div>
              <CardContent className="flex flex-col space-y-2">
                  <div>
                    <CardTitle className="text-base">{product.name}</CardTitle>
                    <CardDescription className="text-gray-500">{product.category}</CardDescription>
                    <p className="text-primary font-semibold mt-2">${product.price}</p>
                  </div>
                  <div>
                    <Button className="w-full mt-auto">View Details</Button>
                  </div>
              </CardContent>
            </Card>
          </Link>
      </div>
    </div>
  );
}
