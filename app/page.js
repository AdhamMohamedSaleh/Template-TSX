import HeroBanner from "@/components/layout/HeroBanner";
import HeroCarousel from "@/components/layout/HeroCarousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import clientPromise from "@/lib/mongodb";
// // lib/mock/products.ts
// // page.tsx

export const products = [
  {
    _id: "1",
    name: "Wireless Headphones",
    price: 129.99,
    image: "/next.svg",
    category: "Electronics",
  },
  {
    _id: "2",
    name: "Smartwatch Pro",
    price: 199.99,
    image: "/next.svg",
    category: "Wearables",
  },
  {
    _id: "3",
    name: "Gaming Mouse",
    price: 59.99,
    image: "/next.svg",
    category: "Accessories",
  },
  {
    _id: "4",
    name: "4K Ultra HD Monitor",
    price: 349.99,
    image: "/next.svg",
    category: "Electronics",
  },
  {
    _id: "5",
    name: "Ergonomic Chair",
    price: 229.99,
    image: "/next.svg",
    category: "Furniture",
  },
]

// async function getProducts {
//   const client = await clientPromise
//   const db = client.db("myEcommerceDB")

//   // Convert MongoDB _id -> string
//   const products = await db.collection("products").find({}).toArray()
//   return products.map((p) => ({
//     _id: p._id.toString(),
//     name: p.name,
//     price: p.price,
//     image: p.image,
//     category: p.category,
//   }))
// }

async function Page() {
  const client = await clientPromise;
  const db = client.db("ecommerce01");
  const products = await db.collection("products").find({}).toArray();

    const formattedProducts = products.map(p => ({
    ...p,
    _id: p._id.toString(),
  }));

  return (
    <div className="">
      <section id="hero" className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 px-8 sm:px-16">
          <div className="max-w-md space-y-4">
            <h2 className="txt-3xl font-bold tracking-tight md:text-4xl">Welcome to E-Commerce</h2>
            <p className="text-neutral-600">Discover the latest products at the best prices.</p>
            <Button asChild variant="default" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white">
              <Link href="/products" className="inline-flex items-center justify-center rounded-full px-6 py-3">Browse All Products</Link>
            </Button>
            </div>
            <Image 
              src="/next.svg"
              alt="Banner Image"
              width={450}
              height={450}
              className="rounded"
            />
        </div>
      </section>
      <section id="featured" className="py-4 grid grid-rows-2">
        <div className="space-y-8">
        <HeroBanner products={formattedProducts} />
        <HeroCarousel products={formattedProducts} />
        </div>
        </section>
    </div>
  );
};

export default Page;