"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'

export default function HeroCarousel() {
  const [isHovered, setIsHovered] = useState(false)

  const heroImages = [
    { src: "/img/pho-bowl.jpg", alt: "Phở Bò" },
    { src: "/img/banh-mi-sandwich.jpg", alt: "Bánh Mì" },
    { src: "/img/com-tam-rice.jpg", alt: "Cơm Tấm" },
    { src: "/img/bun-bo-hue.png", alt: "Bún Bò Huế" },
    { src: "/img/hu-tieu.jpg", alt: "Hủ Tiếu" },
    { src: "/img/mi-quang.jpg", alt: "Mì Quảng" },
    { src: "/img/restaurant-1.jpg", alt: "Nhà hàng Sài Gòn" },
    { src: "/img/restaurant-2.jpg", alt: "Quán ăn vỉa hè" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: '#F8F4ED' }}
    >
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        {/* Hero Text Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
            variants={itemVariants}
          >
            Khám phá Hương Vị <span style={{ color: '#C9482B' }}>Sài Gòn</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#4a4a4a', fontFamily: 'Inter, sans-serif' }}
            variants={itemVariants}
          >
            Hành trình ẩm thực sống động — từ quán vỉa hè đến món ngon 5 sao
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button
              asChild
              size="lg"
              className="text-base md:text-lg h-12 md:h-14 px-8 md:px-12 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                backgroundColor: '#C9482B',
                color: 'white'
              }}
              onMouseEnter={() => { }} // Prevent any default hover styles
            >
              <Link href="/explore">
                Khám phá ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          className="mb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          variants={itemVariants}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: isHovered,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[...heroImages, ...heroImages].map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-auto">
                  <motion.div
                    className="relative rounded-[24px] overflow-hidden shadow-md transition-all duration-300 hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{
                      width: '280px',
                      height: '380px',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading={index < 8 ? "eager" : "lazy"}
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#C9482B' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl" style={{ backgroundColor: '#C9482B' }} />
    </section>
  )
}
