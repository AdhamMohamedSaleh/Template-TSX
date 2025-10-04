import * as React from "react"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import {products} from "../../MockData"

export default function HeroCarousel() {
  console.log("Products:", products);

    return (
    <div className="flex justify-center">
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-6xl"
    >
      <CarouselContent>
        {products.map((p) => (
          <CarouselItem key={p._id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="shadow-sm overflow-hidden transition transform hover:-translate-y-1">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <Image src={p.image} alt={p.name} width={150} height={150} className="object-cover rounded-md mb-4" />
                    <h3>{p.name}</h3>
                    <CardDescription className="text-sm text-gray-500">{p.category}</CardDescription>
                    <CardDescription className="text-primary font-bold mt-2">{p.price}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
</div>
  )
}
