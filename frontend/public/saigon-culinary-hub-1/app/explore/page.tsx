"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { Search, Star, MapPin, TrendingUp, Clock, Filter, Video, Heart, DollarSign, AlertCircle, X } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([])
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([])
  const [distance, setDistance] = useState([5])
  const [minRating, setMinRating] = useState([0])

  const filters = [
    { id: "all", label: "Tất cả", icon: Filter },
    { id: "trending", label: "Xu hướng", icon: TrendingUp },
    { id: "live", label: "Đang Live", icon: Video },
    { id: "new", label: "Mới", icon: Clock },
  ]

  const allergens = [
    { id: "gluten", label: "Gluten" },
    { id: "dairy", label: "Sữa" },
    { id: "nuts", label: "Hạt" },
    { id: "seafood", label: "Hải sản" },
    { id: "eggs", label: "Trứng" },
    { id: "soy", label: "Đậu nành" },
  ]

  const cuisines = [
    { id: "pho", label: "Phở" },
    { id: "banh-mi", label: "Bánh Mì" },
    { id: "com-tam", label: "Cơm Tấm" },
    { id: "bun", label: "Bún" },
    { id: "seafood", label: "Hải sản" },
    { id: "vegetarian", label: "Chay" },
  ]

  const categories = [
    { name: "Phở", count: 234, image: "/pho-bowl.jpg", color: "from-orange-500 to-red-500" },
    { name: "Bánh Mì", count: 189, image: "/banh-mi-sandwich.jpg", color: "from-yellow-500 to-orange-500" },
    { name: "Cơm Tấm", count: 156, image: "/com-tam-rice.jpg", color: "from-green-500 to-teal-500" },
    { name: "Bún", count: 142, image: "/bun-bo-hue.png", color: "from-blue-500 to-purple-500" },
  ]

  const featuredRestaurants = [
    {
      id: 1,
      name: "Phở Hòa Pasteur",
      cuisine: "Phở",
      rating: 4.8,
      reviews: 1234,
      distance: "1.2 km",
      priceRange: "$$",
      price: 65000,
      isLive: true,
      image: "/pho-bowl.jpg",
      tags: ["Phổ biến", "Giao nhanh"],
      allergens: ["gluten"],
    },
    {
      id: 2,
      name: "Bánh Mì Huỳnh Hoa",
      cuisine: "Bánh Mì",
      rating: 4.9,
      reviews: 2341,
      distance: "0.8 km",
      priceRange: "$",
      price: 25000,
      isLive: false,
      image: "/banh-mi-sandwich.jpg",
      tags: ["Bán chạy", "Giá tốt"],
      allergens: ["gluten", "eggs"],
    },
    {
      id: 3,
      name: "Cơm Tấm Mộc",
      cuisine: "Cơm Tấm",
      rating: 4.7,
      reviews: 876,
      distance: "2.1 km",
      priceRange: "$$",
      price: 45000,
      isLive: true,
      image: "/com-tam-rice.jpg",
      tags: ["Mới", "Đề xuất"],
      allergens: [],
    },
  ]

  const toggleAllergen = (allergenId: string) => {
    setSelectedAllergens((prev) =>
      prev.includes(allergenId) ? prev.filter((id) => id !== allergenId) : [...prev, allergenId],
    )
  }

  const toggleCuisine = (cuisineId: string) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisineId) ? prev.filter((id) => id !== cuisineId) : [...prev, cuisineId],
    )
  }

  const clearFilters = () => {
    setPriceRange([0, 1000000])
    setSelectedAllergens([])
    setSelectedCuisines([])
    setDistance([5])
    setMinRating([0])
  }

  const filteredRestaurants = featuredRestaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = restaurant.price >= priceRange[0] && restaurant.price <= priceRange[1]
    const matchesAllergens =
      selectedAllergens.length === 0 || !selectedAllergens.some((allergen) => restaurant.allergens.includes(allergen))
    const matchesCuisine =
      selectedCuisines.length === 0 ||
      selectedCuisines.some((cuisine) => restaurant.cuisine.toLowerCase().includes(cuisine))
    const matchesRating = restaurant.rating >= minRating[0]

    return matchesSearch && matchesPrice && matchesAllergens && matchesCuisine && matchesRating
  })

  const activeFiltersCount =
    (priceRange[0] !== 0 || priceRange[1] !== 1000000 ? 1 : 0) +
    selectedAllergens.length +
    selectedCuisines.length +
    (distance[0] !== 5 ? 1 : 0) +
    (minRating[0] !== 0 ? 1 : 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <Navigation />

      <main className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="mb-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Khám phá ẩm thực Sài Gòn
            </h1>
            <p className="text-muted-foreground">Tìm kiếm và khám phá hàng ngàn nhà hàng tuyệt vời</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Tìm kiếm món ăn, nhà hàng, khu vực..."
                  className="pl-12 h-14 text-lg border-2 shadow-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="lg" className="gap-2 border-2 relative bg-transparent">
                    <Filter className="h-5 w-5" />
                    Bộ lọc
                    {activeFiltersCount > 0 && (
                      <Badge
                        variant="destructive"
                        className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
                      >
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle className="text-2xl">Bộ lọc nâng cao</SheetTitle>
                    <SheetDescription>Tùy chỉnh tìm kiếm theo sở thích của bạn</SheetDescription>
                  </SheetHeader>

                  <div className="space-y-6 mt-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Bộ lọc đang áp dụng</h3>
                      {activeFiltersCount > 0 && (
                        <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-2">
                          <X className="h-4 w-4" />
                          Xóa tất cả
                        </Button>
                      )}
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <Label className="text-base font-semibold">Khoảng giá</Label>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>{priceRange[0].toLocaleString()}đ</span>
                          <span>{priceRange[1].toLocaleString()}đ</span>
                        </div>
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          min={0}
                          max={1000000}
                          step={10000}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <Label className="text-base font-semibold">Đánh giá tối thiểu</Label>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>{minRating[0].toFixed(1)} sao trở lên</span>
                        </div>
                        <Slider value={minRating} onValueChange={setMinRating} min={0} max={5} step={0.5} />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-blue-500" />
                        <Label className="text-base font-semibold">Khoảng cách</Label>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Trong vòng {distance[0]} km</span>
                        </div>
                        <Slider value={distance} onValueChange={setDistance} min={1} max={20} step={1} />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-orange-500" />
                        <Label className="text-base font-semibold">Loại trừ allergens</Label>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {allergens.map((allergen) => (
                          <div key={allergen.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={allergen.id}
                              checked={selectedAllergens.includes(allergen.id)}
                              onCheckedChange={() => toggleAllergen(allergen.id)}
                            />
                            <Label htmlFor={allergen.id} className="text-sm cursor-pointer">
                              {allergen.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Loại món ăn</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {cuisines.map((cuisine) => (
                          <div key={cuisine.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={cuisine.id}
                              checked={selectedCuisines.includes(cuisine.id)}
                              onCheckedChange={() => toggleCuisine(cuisine.id)}
                            />
                            <Label htmlFor={cuisine.id} className="text-sm cursor-pointer">
                              {cuisine.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="flex gap-2 justify-center mt-4 flex-wrap">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className="gap-2"
              >
                <filter.icon className="h-4 w-4" />
                {filter.label}
              </Button>
            ))}
          </div>

          {activeFiltersCount > 0 && (
            <div className="max-w-2xl mx-auto mt-4">
              <Card className="border-2 bg-primary/5">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">
                        {activeFiltersCount} bộ lọc đang áp dụng • {filteredRestaurants.length} kết quả
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Xóa bộ lọc
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Danh mục phổ biến</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="cursor-pointer hover:shadow-xl hover:scale-105 transition-all border-2 overflow-hidden group"
              >
                <CardContent className="p-0">
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60`} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                      <p className="text-sm">{category.count} nhà hàng</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">
              {filteredRestaurants.length === featuredRestaurants.length
                ? "Nhà hàng nổi bật"
                : `Kết quả tìm kiếm (${filteredRestaurants.length})`}
            </h2>
            <Button variant="ghost">Xem tất cả</Button>
          </div>

          {filteredRestaurants.length === 0 ? (
            <Card className="border-2 shadow-lg">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Search className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Không tìm thấy kết quả</h3>
                <p className="text-muted-foreground text-center mb-4">Thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm</p>
                <Button onClick={clearFilters}>Xóa bộ lọc</Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <Card
                  key={restaurant.id}
                  className="cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all border-2 overflow-hidden group"
                >
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={restaurant.image || "/placeholder.svg"}
                        alt={restaurant.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                      {restaurant.isLive && (
                        <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
                          <Video className="h-3 w-3 mr-1" />
                          LIVE
                        </Badge>
                      )}
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute top-3 left-3 backdrop-blur-md bg-white/20 hover:bg-white/30"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg truncate">{restaurant.name}</h3>
                          <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
                        </div>
                        <Badge variant="secondary">{restaurant.priceRange}</Badge>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{restaurant.rating}</span>
                          <span className="text-sm text-muted-foreground">({restaurant.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {restaurant.distance}
                        </div>
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        {restaurant.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
