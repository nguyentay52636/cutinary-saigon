"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Loader2, MapPin, Star, AlertCircle, Leaf, Flame, Droplets } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function FoodRecognitionPage() {
  const [imageUrl, setImageUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleAnalyze = async () => {
    if (!imageUrl) return

    setIsAnalyzing(true)
    // Simulate API call to Google Cloud Vision
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock result
    setResult({
      dishName: "Phở Bò",
      confidence: 95,
      description: "Món phở bò truyền thống Việt Nam với nước dùng trong, thịt bò mềm và rau thơm",
      nutrition: {
        calories: 450,
        protein: 25,
        carbs: 55,
        fat: 12,
      },
      allergens: ["Gluten", "MSG (có thể có)"],
      restaurants: [
        {
          id: 1,
          name: "Phở Hòa Pasteur",
          address: "260C Pasteur, Q.3",
          rating: 4.8,
          distance: "1.2 km",
          price: "50,000 - 80,000đ",
        },
        {
          id: 2,
          name: "Phở Lệ",
          address: "413-415 Nguyễn Trãi, Q.5",
          rating: 4.7,
          distance: "2.5 km",
          price: "45,000 - 75,000đ",
        },
        {
          id: 3,
          name: "Phở Quỳnh",
          address: "323 Phan Văn Trị, Gò Vấp",
          rating: 4.6,
          distance: "3.8 km",
          price: "40,000 - 70,000đ",
        },
      ],
      similarDishes: [
        { name: "Bún Bò Huế", image: "/bun-bo-hue.png" },
        { name: "Hủ Tiếu Nam Vang", image: "/hu-tieu.jpg" },
        { name: "Mì Quảng", image: "/mi-quang.jpg" },
      ],
    })

    setIsAnalyzing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg mb-4">
              <Camera className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Nhận Diện Món Ăn
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nhập URL ảnh món ăn để nhận diện và khám phá thông tin dinh dưỡng, allergens, và gợi ý quán ăn phù hợp
            </p>
          </div>

          {/* Input Section */}
          <Card className="border-2 shadow-xl">
            <CardHeader>
              <CardTitle>Tải ảnh món ăn</CardTitle>
              <CardDescription>Nhập URL ảnh món ăn bạn muốn nhận diện</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <Input
                  placeholder="https://example.com/food-image.jpg"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="h-12 text-base"
                />
                <Button onClick={handleAnalyze} disabled={!imageUrl || isAnalyzing} size="lg" className="px-8">
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Đang phân tích...
                    </>
                  ) : (
                    <>
                      <Camera className="mr-2 h-5 w-5" />
                      Nhận diện
                    </>
                  )}
                </Button>
              </div>

              {imageUrl && (
                <div className="relative aspect-video rounded-lg overflow-hidden border-2 bg-muted">
                  <img src={imageUrl || "/placeholder.svg"} alt="Food preview" className="w-full h-full object-cover" />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results */}
          {result && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Recognition Result */}
              <Card className="border-2 shadow-xl bg-gradient-to-br from-card to-primary/5">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-3xl">{result.dishName}</CardTitle>
                      <CardDescription className="text-base mt-2">{result.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      {result.confidence}% chính xác
                    </Badge>
                  </div>
                </CardHeader>
              </Card>

              <Tabs defaultValue="nutrition" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-12">
                  <TabsTrigger value="nutrition" className="text-base">
                    Dinh dưỡng
                  </TabsTrigger>
                  <TabsTrigger value="restaurants" className="text-base">
                    Quán ăn
                  </TabsTrigger>
                  <TabsTrigger value="similar" className="text-base">
                    Món tương tự
                  </TabsTrigger>
                </TabsList>

                {/* Nutrition Tab */}
                <TabsContent value="nutrition" className="space-y-4 mt-6">
                  <Card className="border-2 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Flame className="h-5 w-5 text-orange-500" />
                        Thông tin dinh dưỡng (1 phần)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-lg border">
                          <Flame className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                          <div className="text-2xl font-bold">{result.nutrition.calories}</div>
                          <div className="text-sm text-muted-foreground">Calories</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg border">
                          <Droplets className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                          <div className="text-2xl font-bold">{result.nutrition.protein}g</div>
                          <div className="text-sm text-muted-foreground">Protein</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg border">
                          <Leaf className="h-8 w-8 mx-auto mb-2 text-green-500" />
                          <div className="text-2xl font-bold">{result.nutrition.carbs}g</div>
                          <div className="text-sm text-muted-foreground">Carbs</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 rounded-lg border">
                          <Droplets className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                          <div className="text-2xl font-bold">{result.nutrition.fat}g</div>
                          <div className="text-sm text-muted-foreground">Fat</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Alert className="border-2">
                    <AlertCircle className="h-5 w-5" />
                    <AlertDescription className="text-base">
                      <strong>Allergens:</strong> {result.allergens.join(", ")}
                    </AlertDescription>
                  </Alert>
                </TabsContent>

                {/* Restaurants Tab */}
                <TabsContent value="restaurants" className="space-y-4 mt-6">
                  <div className="grid gap-4">
                    {result.restaurants.map((restaurant: any) => (
                      <Card
                        key={restaurant.id}
                        className="border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/50"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 space-y-2">
                              <h3 className="text-xl font-bold">{restaurant.name}</h3>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{restaurant.address}</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  <span className="font-semibold">{restaurant.rating}</span>
                                </div>
                                <Badge variant="outline">{restaurant.distance}</Badge>
                                <Badge variant="secondary">{restaurant.price}</Badge>
                              </div>
                            </div>
                            <Button>Xem chi tiết</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Similar Dishes Tab */}
                <TabsContent value="similar" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {result.similarDishes.map((dish: any, index: number) => (
                      <Card
                        key={index}
                        className="border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/50 cursor-pointer"
                      >
                        <CardContent className="p-4">
                          <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                            <img
                              src={dish.image || "/placeholder.svg"}
                              alt={dish.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-lg font-semibold text-center">{dish.name}</h3>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
