"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length)
      }, 4000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

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
              onMouseEnter={() => { }}
            >
              <Link href="/explore">
                Khám phá ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-8 relative"
          variants={itemVariants}
        >


          <div
            className="w-full relative h-[500px] md:h-[450px] overflow-visible"
            style={{
              perspective: '1500px',
              perspectiveOrigin: 'center center',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="w-full h-full relative">
              {heroImages.map((image, index) => {
                const offset = index - currentIndex
                const distance = Math.abs(offset)
                const normalizedOffset = offset > heroImages.length / 2
                  ? offset - heroImages.length
                  : offset < -heroImages.length / 2
                    ? offset + heroImages.length
                    : offset

                const absOffset = Math.abs(normalizedOffset)

                // BrandLyft-style fan-out calculation với khoảng cách và độ cong nhiều hơn
                const rotation = normalizedOffset * 8 // Tăng góc xoay lên ±32°
                const leftOffset = normalizedOffset * 100 // Tăng khoảng cách lên 100px
                const zIndex = heroImages.length - absOffset

                // Scale và opacity - điều chỉnh để tạo vòng cung cong hơn
                const scale = Math.max(0.7, 1 - absOffset * 0.06)
                const opacity = Math.max(0.6, 1 - absOffset * 0.12)

                // Enhanced shadow for center items
                const shadowIntensity = Math.max(0.5, 1 - absOffset * 0.2)

                return (
                  <div className="">
                    <motion.div
                      key={index}
                      className="absolute cursor-grab active:cursor-grabbing"
                      style={{
                        left: `calc(40% + ${leftOffset}px)`,
                        transform: `translateX(-50%) rotateY(${rotation}deg) scale(${scale})`,
                        transformStyle: 'preserve-3d',
                        zIndex,
                        opacity,
                      }}
                      whileHover={{
                        rotateY: 0,
                        scale: 1.12,
                        z: 60,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                      animate={{
                        rotateY: rotation,
                        scale: scale,
                        opacity: opacity,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                      onClick={() => setCurrentIndex(index)}
                      onDragEnd={(e, info) => {
                        const dragDelta = info.offset.x
                        if (Math.abs(dragDelta) > 50) {
                          if (dragDelta > 0) {
                            // Drag right = go to next
                            setCurrentIndex((prev) => (prev + 1) % heroImages.length)
                          } else {
                            // Drag left = go to previous
                            setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
                          }
                        }
                      }}
                      drag="x"
                      dragConstraints={{ left: -200, right: 200 }}
                      dragElastic={0.3}
                    >
                      <Card
                        className=" overflow-hidden rounded-[30px] border-0 bg-white"
                        style={{
                          width: '260px',
                          height: '400px',
                          boxShadow: `
                          0 ${12 * shadowIntensity}px ${40 * shadowIntensity}px rgba(0,0,0,${0.25 * shadowIntensity}),
                          0 ${6 * shadowIntensity}px ${20 * shadowIntensity}px rgba(0,0,0,${0.15 * shadowIntensity}),
                          inset 0 1px 0 rgba(255,255,255,0.5)
                        `,
                        }}
                      >
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                          loading={absOffset <= 2 ? "eager" : "lazy"}
                          style={{
                            borderRadius: '36px',
                          }}
                        />
                        {/* Highlight effect */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            borderRadius: '36px',
                            background: `radial-gradient(ellipse at top, rgba(255,255,255,${0.3 * shadowIntensity}) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)`,
                          }}
                        />
                      </Card>
                    </motion.div>
                  </div>
                )
              })}
            </div>
            <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto px-4">
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <div className="flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-300'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % heroImages.length)}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#C9482B' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl" style={{ backgroundColor: '#C9482B' }} />
    </section>
  )
}
