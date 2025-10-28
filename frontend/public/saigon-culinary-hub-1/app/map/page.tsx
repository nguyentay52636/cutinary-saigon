"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { ChefHat, MapPin, Star, NavigationIcon, Search, X, Phone, Clock, Video, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MapPage() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ["Tất cả", "Phở", "Bánh Mì", "Cơm Tấm", "Bún", "Hải sản", "Lẩu"]

  const restaurants = [
    {
      id: 1,
      name: "Phở Hòa Pasteur",
      cuisine: "Phở",
      rating: 4.8,
      reviews: 1234,
      address: "260C Pasteur, Phường 8, Quận 3",
      phone: "028 3829 7943",
      hours: "6:00 - 22:00",
      priceRange: "$$",
      lat: 10.7769,
      lng: 106.6951,
      isLive: true,
      image: "/pho-bowl.jpg",
    },
    {
      id: 2,
      name: "Bánh Mì Huỳnh Hoa",
      cuisine: "Bánh Mì",
      rating: 4.9,
      reviews: 2341,
      address: "26 Lê Thị Riêng, Phường Bến Thành, Quận 1",
      phone: "028 3925 3389",
      hours: "15:00 - 23:00",
      priceRange: "$",
      lat: 10.7707,
      lng: 106.6983,
      isLive: false,
      image: "/banh-mi-sandwich.jpg",
    },
    {
      id: 3,
      name: "Cơm Tấm Mộc",
      cuisine: "Cơm Tấm",
      rating: 4.7,
      reviews: 876,
      address: "6B Trần Quang Diệu, Phường 14, Quận 3",
      phone: "028 3930 5897",
      hours: "10:00 - 21:00",
      priceRange: "$$",
      lat: 10.7823,
      lng: 106.6919,
      isLive: true,
      image: "/com-tam-rice.jpg",
    },
    {
      id: 4,
      name: "Bún Bò Huế Đông Ba",
      cuisine: "Bún",
      rating: 4.6,
      reviews: 654,
      address: "48 Trần Hưng Đạo, Phường Cầu Ông Lãnh, Quận 1",
      phone: "028 3836 7279",
      hours: "7:00 - 20:00",
      priceRange: "$",
      lat: 10.7642,
      lng: 106.6917,
      isLive: false,
      image: "/bun-bo-hue.png",
    },
  ]

  const filteredRestaurants = restaurants.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || selectedCategory === "Tất cả" || r.cuisine === selectedCategory
    return matchesSearch && matchesCategory
  })

  const selected = restaurants.find((r) => r.id === selectedRestaurant)

  return (
    <div className="h-screen flex flex-col bg-background">
      <Navigation />

      <header className="border-b bg-gradient-to-r from-primary/5 via-background to-primary/5 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button asChild variant="ghost" size="icon">
                <Link href="/dashboard">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h1 className="text-lg font-bold">Bản đồ nhà hàng</h1>
              </div>
            </div>
            <Button size="sm" variant="outline">
              <NavigationIcon className="h-4 w-4 mr-2" />
              Vị trí của tôi
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-full md:w-96 flex flex-col border-r bg-card/50 backdrop-blur-sm overflow-hidden">
          {/* Search */}
          <div className="p-4 border-b space-y-3 bg-card/80 backdrop-blur-sm">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm nhà hàng..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category === "Tất cả" ? null : category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Restaurant List */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-3">
              {filteredRestaurants.map((restaurant) => (
                <Card
                  key={restaurant.id}
                  className={cn(
                    "cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] border-2",
                    selectedRestaurant === restaurant.id && "ring-2 ring-primary shadow-lg border-primary/50",
                  )}
                  onClick={() => setSelectedRestaurant(restaurant.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <div className="relative">
                        <img
                          src={restaurant.image || "/placeholder.svg"}
                          alt={restaurant.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        {restaurant.isLive && (
                          <Badge className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs">
                            <Video className="h-3 w-3 mr-1" />
                            LIVE
                          </Badge>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{restaurant.name}</h3>
                        <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-primary text-primary" />
                            <span className="text-sm font-medium">{restaurant.rating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">({restaurant.reviews})</span>
                          <Badge variant="secondary" className="text-xs">
                            {restaurant.priceRange}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span className="truncate">{restaurant.address}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative bg-gradient-to-br from-muted via-background to-muted/50">
          {/* Placeholder Map */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Bản đồ tương tác sẽ hiển thị ở đây</p>
              <p className="text-sm text-muted-foreground mt-2">Tích hợp Google Maps hoặc Mapbox</p>
            </div>
          </div>

          {/* Map Markers Simulation */}
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="absolute"
              style={{
                left: `${((restaurant.lng - 106.69) / 0.01) * 50 + 30}%`,
                top: `${((10.78 - restaurant.lat) / 0.02) * 50 + 30}%`,
              }}
            >
              <Button
                size="icon"
                variant={selectedRestaurant === restaurant.id ? "default" : "secondary"}
                className={cn(
                  "rounded-full shadow-lg",
                  selectedRestaurant === restaurant.id && "ring-4 ring-primary/20",
                )}
                onClick={() => setSelectedRestaurant(restaurant.id)}
              >
                <ChefHat className="h-4 w-4" />
              </Button>
            </div>
          ))}

          {selected && (
            <Card className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 shadow-2xl border-2 backdrop-blur-md bg-card/95">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={selected.image || "/placeholder.svg"}
                    alt={selected.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {selected.isLive && (
                    <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
                      <Video className="h-3 w-3 mr-1" />
                      LIVE
                    </Badge>
                  )}
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-3 left-3"
                    onClick={() => setSelectedRestaurant(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold">{selected.name}</h3>
                    <p className="text-sm text-muted-foreground">{selected.cuisine}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-semibold">{selected.rating}</span>
                      <span className="text-sm text-muted-foreground">({selected.reviews} đánh giá)</span>
                    </div>
                    <Badge variant="secondary">{selected.priceRange}</Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>{selected.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{selected.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{selected.hours}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">Chỉ đường</Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Chi tiết
                    </Button>
                    {selected.isLive && (
                      <Button variant="outline" size="icon">
                        <Video className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
