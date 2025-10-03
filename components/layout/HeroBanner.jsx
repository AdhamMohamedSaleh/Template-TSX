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

export function HeroBanner({ products }) {
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
              <Card>
                <CardContent className="flex aspect-video max-h-[300px] md:max-h-[400px] lg:max-h-[500px] items-center justify-center p-6">
                    <Image src={p.image} alt={p.name} width={500} height={500} priority />
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