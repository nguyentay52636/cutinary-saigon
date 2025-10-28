"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export interface CardSliderItemProps {
  image: { src: string; alt: string }
  index: number
  currentIndex: number
  totalCards: number
  onClick: () => void
  onDragEnd: (e: MouseEvent | TouchEvent | PointerEvent, info: any) => void
}

export default function CardSliderItem({
  image,
  index,
  currentIndex,
  totalCards,
  onClick,
  onDragEnd,
}: CardSliderItemProps) {
  const offset = index - currentIndex
  const normalizedOffset =
    offset > totalCards / 2 ? offset - totalCards : offset < -totalCards / 2 ? offset + totalCards : offset

  const absOffset = Math.abs(normalizedOffset)

  // Calculate angle for arc positioning (in radians)
  const maxAngle = Math.PI / 3 // 60 degrees spread
  const angle = (normalizedOffset / (totalCards / 2)) * maxAngle

  // Arc radius - larger radius creates wider arc
  const arcRadius = 600

  // Calculate x position along the arc using sine
  const arcX = Math.sin(angle) * arcRadius

  // Calculate z position (depth) using cosine - center card goes back, side cards come forward
  const arcZ = (1 - Math.cos(angle)) * arcRadius - 200

  // Rotation to face toward center of arc
  const rotation = -angle * (180 / Math.PI) * 0.8

  const zIndex = totalCards - absOffset

  // Scale: center card is smaller (recedes), side cards are larger
  const scale = Math.max(0.75, 1 - absOffset * 0.08)

  // Opacity: center card is more visible
  const opacity = Math.max(0.5, 1 - absOffset * 0.12)

  // Shadow intensity increases for cards further back
  const shadowIntensity = Math.max(0.8, 1.5 - absOffset * 0.15)

  return (
    <div className="mx-auto" key={`card-${index}`}>
      <motion.div
        layout
        initial={false}
        className="absolute cursor-grab active:cursor-grabbing"
        style={{
          left: `calc(50% + ${arcX}px)`,
          transform: "translateX(-50%)",
          transformStyle: "preserve-3d",
          zIndex,
        }}
        whileHover={{
          rotateY: rotation * 0.5,
          scale: scale * 1.12,
          z: arcZ + 60,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 25,
          },
        }}
        animate={{
          rotateY: rotation,
          scale: scale,
          opacity: opacity,
          z: arcZ,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 1,
          duration: 0.8,
        }}
        onClick={onClick}
        drag="x"
        dragConstraints={{ left: -300, right: 300 }}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
        onDragEnd={onDragEnd}
      >
        <Card
          className="overflow-hidden rounded-[30px] border-0 bg-white"
          style={{
            width: "260px",
            height: "400px",
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
              borderRadius: "36px",
            }}
          />
          {/* Highlight effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: "36px",
              background: `radial-gradient(ellipse at top, rgba(255,255,255,${0.3 * shadowIntensity}) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)`,
            }}
          />
        </Card>
      </motion.div>
    </div>
  )
}
