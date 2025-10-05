import HeroBanner from "@/components/layout/HeroBanner";
import HeroCarousel from "@/components/layout/HeroCarousel";
import { Button } from "@/components/ui/button";
import Image from "@/components/ThemeImage";
import Link from "next/link";
import { Card } from "@/components/ui/card";

function Page() {

  return (
    <div>
      <section id="hero" className="rounded-md py-8">
        <Card className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-12 px-8 sm:px-16">
          <div className="max-w-md space-y-4">
            <h1 className="text-left whitespace-nowrap">Welcome to MySite</h1>
            <p className="">Discover the latest products at the best prices.</p>
            <div className="flex justify-center md:justify-start">
              <Button asChild variant="default" className="inline-flex items-center justify-center rounded-full px-6 py-3">
              <Link href="/products" className="inline-flex items-center justify-center rounded-full px-6 py-3">Browse All Products</Link>
            </Button>
            </div>
            </div>
            <div>
              <Image 
              src="/next.svg"
              alt="Banner Image"
              width={300}
              height={300}
              className="rounded"
            />
            </div>
        </Card>
      </section>
      <section id="featured" className="py-4 grid grid-rows-2">
        <div className="space-y-8 max-w-xl lg:max-w-7xl w-full mx-auto">
        <HeroBanner />
        <HeroCarousel />
        </div>
        </section>
    </div>
  );
};

export default Page;