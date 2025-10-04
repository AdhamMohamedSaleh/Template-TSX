"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import {products} from "../../MockData"

export function HeroBanner() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  return (
    <Carousel
    plugins={[plugin.current]}
    className="w-full mx-auto relative"
    onMouseEnter={() => plugin.current?.stop()}
    onMouseLeave={() => plugin.current?.play()}
    >
      <CarouselContent>
        {products.map((p) => (
          <CarouselItem key={p._id} className="basis-full">
            <div className="p-1">
              <Card className="overflow-hidden rounded-lg relative border-gray-300">
                <CardContent className="grid grid-cols-2 aspect-video max-h-[300px] md:max-h-[400px] lg:max-h-[500px] items-center justify-center p-12">
                    <div className="p-4 items-center justify-center inline-flex">
                      <Image src={p.image} alt={p.name} width={500} height={500} priority className="transition-opacity duration-500 ease-in-out" />
                    </div>
                    <div className="p-4 space-y-2">
                    <h2 className="">{p.name}</h2>
                    <h3 className="">{p.category}</h3>
                    <p className="font-bold">$ {p.price}</p>
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
  )
}

export default HeroBanner;