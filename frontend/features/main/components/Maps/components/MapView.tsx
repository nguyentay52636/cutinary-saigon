"use client"

import { motion } from "framer-motion"
import { Button } from "@/shared/ui/button"
import { MapPin, ChefHat } from "lucide-react"
import { cn } from "@/shared/lib/utils"

interface Restaurant {
    id: number
    name: string
    lat: number
    lng: number
    isLive: boolean
}

interface MapViewProps {
    restaurants: Restaurant[]
    selectedRestaurant: number | null
    onRestaurantClick: (id: number) => void
}

export default function MapView({ restaurants, selectedRestaurant, onRestaurantClick }: MapViewProps) {
    return (
        <div className="flex-1 relative bg-gradient-to-br from-muted/30 via-background to-secondary/10 overflow-hidden">
            {/* Decorative grid pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                    }}
                />
            </div>

            {/* Placeholder Map */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 shadow-xl">
                        <MapPin className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Bản đồ tương tác</h3>
                    <p className="text-muted-foreground max-w-md">Khám phá các nhà hàng xung quanh bạn trên bản đồ</p>
                    <p className="text-sm text-muted-foreground mt-2">Tích hợp Google Maps hoặc Mapbox</p>
                </motion.div>
            </div>

            {/* Restaurant Pins */}
            {restaurants.map((restaurant) => (
                <motion.div
                    key={restaurant.id}
                    className="absolute"
                    style={{
                        left: `${((restaurant.lng - 106.69) / 0.01) * 50 + 30}%`,
                        top: `${((10.78 - restaurant.lat) / 0.02) * 50 + 30}%`,
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Button
                        size="icon"
                        variant={selectedRestaurant === restaurant.id ? "default" : "secondary"}
                        className={cn(
                            "rounded-full shadow-2xl transition-all duration-300 relative",
                            selectedRestaurant === restaurant.id ? "ring-4 ring-primary/30 bg-primary scale-125" : "hover:scale-110"
                        )}
                        onClick={() => onRestaurantClick(restaurant.id)}
                    >
                        <ChefHat className="h-5 w-5" />
                        {restaurant.isLive && (
                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                        )}
                    </Button>
                </motion.div>
            ))}
        </div>
    )
}

