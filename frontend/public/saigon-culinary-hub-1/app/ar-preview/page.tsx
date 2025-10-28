"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import {
  Cable as Cube,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Eye,
  Info,
  MapPin,
  Star,
  ChefHat,
  Maximize2,
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ARPreviewPage() {
  const [selectedItem, setSelectedItem] = useState<"dish" | "restaurant">("dish")
  const [rotation, setRotation] = useState([0])
  const [zoom, setZoom] = useState([100])
  const [isFullscreen, setIsFullscreen] = useState(false)

  const dishes = [
    {
      id: 1,
      name: "Phở Bò",
      restaurant: "Phở Hòa Pasteur",
      image: "/pho-bowl.jpg",
      model: "/models/pho.glb",
      description: "Món phở bò truyền thống với nước dùng trong, thịt bò mềm",
      price: "65,000đ",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Bánh Mì",
      restaurant: "Bánh Mì Huỳnh Hoa",
      image: "/banh-mi-sandwich.jpg",
      model: "/models/banh-mi.glb",
      description: "Bánh mì thịt nguội đặc biệt với rau sống và pate",
      price: "25,000đ",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Cơm Tấm",
      restaurant: "Cơm Tấm Mộc",
      image: "/com-tam-rice.jpg",
      model: "/models/com-tam.glb",
      description: "Cơm tấm sườn bì chả với nước mắm đặc biệt",
      price: "45,000đ",
      rating: 4.6,
    },
  ]

  const restaurants = [
    {
      id: 1,
      name: "Phở Hòa Pasteur",
      address: "260C Pasteur, Q.3",
      image: "/restaurant-1.jpg",
      model: "/models/restaurant-1.glb",
      description: "Quán phở nổi tiếng với hơn 30 năm kinh nghiệm",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Bánh Mì Huỳnh Hoa",
      address: "26 Lê Thị Riêng, Q.1",
      image: "/restaurant-2.jpg",
      model: "/models/restaurant-2.glb",
      description: "Tiệm bánh mì nổi tiếng nhất Sài Gòn",
      rating: 4.9,
    },
  ]

  const currentDish = dishes[0]
  const currentRestaurant = restaurants[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg mb-4">
              <Cube className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              AR Preview 3D
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Xem trước món ăn và nhà hàng trong không gian 3D với khả năng xoay, phóng to và tương tác
            </p>
          </div>

          <Tabs value={selectedItem} onValueChange={(v) => setSelectedItem(v as "dish" | "restaurant")}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12">
              <TabsTrigger value="dish" className="text-base">
                <ChefHat className="h-4 w-4 mr-2" />
                Món ăn
              </TabsTrigger>
              <TabsTrigger value="restaurant" className="text-base">
                <MapPin className="h-4 w-4 mr-2" />
                Nhà hàng
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dish" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-2 shadow-xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Xem trước 3D</CardTitle>
                      <Button variant="outline" size="icon" onClick={() => setIsFullscreen(!isFullscreen)}>
                        <Maximize2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardDescription>Tương tác với mô hình 3D của món ăn</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div
                      className={`relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border-2 overflow-hidden ${
                        isFullscreen ? "aspect-square" : "aspect-video"
                      }`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="relative w-64 h-64 transition-transform duration-300"
                          style={{
                            transform: `rotate(${rotation[0]}deg) scale(${zoom[0] / 100})`,
                          }}
                        >
                          <img
                            src={currentDish.image || "/placeholder.svg"}
                            alt={currentDish.name}
                            className="w-full h-full object-contain drop-shadow-2xl"
                          />
                        </div>
                      </div>

                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">
                          <Eye className="h-3 w-3 mr-1" />
                          AR Mode
                        </Badge>
                      </div>

                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <Button
                          variant="secondary"
                          size="icon"
                          className="backdrop-blur-sm bg-background/80"
                          onClick={() => setRotation([rotation[0] - 45])}
                        >
                          <RotateCw className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="backdrop-blur-sm bg-background/80"
                          onClick={() => setZoom([Math.max(50, zoom[0] - 20)])}
                        >
                          <ZoomOut className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="backdrop-blur-sm bg-background/80"
                          onClick={() => setZoom([Math.min(200, zoom[0] + 20)])}
                        >
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium flex items-center gap-2">
                            <RotateCw className="h-4 w-4" />
                            Xoay: {rotation[0]}°
                          </label>
                        </div>
                        <Slider value={rotation} onValueChange={setRotation} max={360} step={1} />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium flex items-center gap-2">
                            <ZoomIn className="h-4 w-4" />
                            Phóng to: {zoom[0]}%
                          </label>
                        </div>
                        <Slider value={zoom} onValueChange={setZoom} min={50} max={200} step={10} />
                      </div>
                    </div>

                    <Alert className="mt-4">
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        Sử dụng các điều khiển để xoay và phóng to mô hình 3D. Trên thiết bị di động, bạn có thể sử dụng
                        cử chỉ chạm để tương tác.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="border-2 shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-2xl">{currentDish.name}</CardTitle>
                      <CardDescription className="text-base">{currentDish.restaurant}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{currentDish.description}</p>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-lg">{currentDish.rating}</span>
                        </div>
                        <Badge variant="secondary" className="text-base px-3 py-1">
                          {currentDish.price}
                        </Badge>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button className="flex-1">
                          <MapPin className="h-4 w-4 mr-2" />
                          Xem vị trí
                        </Button>
                        <Button variant="outline" className="flex-1 bg-transparent">
                          <ChefHat className="h-4 w-4 mr-2" />
                          Đặt món
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 shadow-xl">
                    <CardHeader>
                      <CardTitle>Món ăn khác</CardTitle>
                      <CardDescription>Khám phá thêm món ăn với AR Preview</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {dishes.slice(1).map((dish) => (
                          <Card key={dish.id} className="cursor-pointer hover:shadow-lg transition-all border">
                            <CardContent className="p-3">
                              <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-muted">
                                <img
                                  src={dish.image || "/placeholder.svg"}
                                  alt={dish.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <h4 className="font-semibold text-sm truncate">{dish.name}</h4>
                              <p className="text-xs text-muted-foreground truncate">{dish.restaurant}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="restaurant" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-2 shadow-xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Xem trước 3D</CardTitle>
                      <Button variant="outline" size="icon" onClick={() => setIsFullscreen(!isFullscreen)}>
                        <Maximize2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardDescription>Tương tác với mô hình 3D của nhà hàng</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div
                      className={`relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border-2 overflow-hidden ${
                        isFullscreen ? "aspect-square" : "aspect-video"
                      }`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="relative w-full h-full transition-transform duration-300"
                          style={{
                            transform: `rotate(${rotation[0]}deg) scale(${zoom[0] / 100})`,
                          }}
                        >
                          <img
                            src={currentRestaurant.image || "/placeholder.svg?height=400&width=600"}
                            alt={currentRestaurant.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">
                          <Eye className="h-3 w-3 mr-1" />
                          AR Mode
                        </Badge>
                      </div>

                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <Button
                          variant="secondary"
                          size="icon"
                          className="backdrop-blur-sm bg-background/80"
                          onClick={() => setRotation([rotation[0] - 45])}
                        >
                          <RotateCw className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="backdrop-blur-sm bg-background/80"
                          onClick={() => setZoom([Math.max(50, zoom[0] - 20)])}
                        >
                          <ZoomOut className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="backdrop-blur-sm bg-background/80"
                          onClick={() => setZoom([Math.min(200, zoom[0] + 20)])}
                        >
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium flex items-center gap-2">
                            <RotateCw className="h-4 w-4" />
                            Xoay: {rotation[0]}°
                          </label>
                        </div>
                        <Slider value={rotation} onValueChange={setRotation} max={360} step={1} />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium flex items-center gap-2">
                            <ZoomIn className="h-4 w-4" />
                            Phóng to: {zoom[0]}%
                          </label>
                        </div>
                        <Slider value={zoom} onValueChange={setZoom} min={50} max={200} step={10} />
                      </div>
                    </div>

                    <Alert className="mt-4">
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        Khám phá không gian nhà hàng trong 3D. Sử dụng các điều khiển để xem từ nhiều góc độ khác nhau.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="border-2 shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-2xl">{currentRestaurant.name}</CardTitle>
                      <CardDescription className="text-base flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {currentRestaurant.address}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{currentRestaurant.description}</p>

                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-lg">{currentRestaurant.rating}</span>
                        <span className="text-muted-foreground ml-2">(1,234 đánh giá)</span>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button className="flex-1">
                          <MapPin className="h-4 w-4 mr-2" />
                          Chỉ đường
                        </Button>
                        <Button variant="outline" className="flex-1 bg-transparent">
                          <Move className="h-4 w-4 mr-2" />
                          Đặt bàn
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 shadow-xl">
                    <CardHeader>
                      <CardTitle>Nhà hàng khác</CardTitle>
                      <CardDescription>Khám phá thêm nhà hàng với AR Preview</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {restaurants.slice(1).map((restaurant) => (
                          <Card key={restaurant.id} className="cursor-pointer hover:shadow-lg transition-all border">
                            <CardContent className="p-4">
                              <div className="flex gap-3">
                                <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                                  <img
                                    src={restaurant.image || "/placeholder.svg"}
                                    alt={restaurant.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold truncate">{restaurant.name}</h4>
                                  <p className="text-sm text-muted-foreground truncate">{restaurant.address}</p>
                                  <div className="flex items-center gap-1 mt-1">
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-semibold">{restaurant.rating}</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
