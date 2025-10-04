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
          <CarouselItem key={p._id} className="basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="shadow-sm overflow-hidden transition transform hover:-translate-y-1">
                <CardContent className="flex flex-col aspect-square  text-left justify-center p-6">
                    <div className="h-2/3 items-center justify-center inline-flex">
                      <Image src={p.image} alt={p.name} width={150} height={150} className="object-cover mb-4" />
                    </div>
                    <div className="h-1/3">
                      <h3>{p.name}</h3>
                    <CardDescription className="text-sm mt-2 text-gray-500">{p.category}</CardDescription>
                    <CardDescription className="text-primary font-bold mt-6">$ {p.price}</CardDescription>
                    </div>
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
