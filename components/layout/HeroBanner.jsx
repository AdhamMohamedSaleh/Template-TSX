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
              <Card className="shadow-md rounded-lg relative border-gray-300">
                <CardContent className="flex aspect-video max-h-[300px] md:max-h-[400px] lg:max-h-[500px] items-center justify-center p-6">
                    <Image src={p.image} alt={p.name} width={500} height={500} priority className="transition-opacity duration-500 ease-in-out" />
                    <p className="text-3xl font-bold text-white mb-2">{p.name}</p>
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