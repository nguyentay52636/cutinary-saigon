"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import {
  Star,
  MapPin,
  Phone,
  Clock,
  DollarSign,
  Heart,
  Share2,
  NavigationIcon,
  Video,
  ArrowLeft,
  ChefHat,
  Users,
  Award,
  TrendingUp,
} from "lucide-react"

export default function RestaurantDetailPage() {
  const [isFavorite, setIsFavorite] = useState(false)

  const restaurant = {
    id: 1,
    name: "Phở Hòa Pasteur",
    cuisine: "Phở",
    rating: 4.8,
    reviews: 1234,
    address: "260C Pasteur, Phường 8, Quận 3, TP. Hồ Chí Minh",
    phone: "028 3829 7943",
    hours: "6:00 - 22:00",
    priceRange: "50,000 - 100,000 VNĐ",
    description:
      "Phở Hòa Pasteur là một trong những quán phở lâu đời và nổi tiếng nhất tại Sài Gòn. Với hơn 50 năm kinh nghiệm, chúng tôi tự hào mang đến cho thực khách hương vị phở truyền thống Bắc với nước dùng trong, thơm và đậm đà.",
    isLive: true,
    images: ["/pho-bowl.jpg", "/banh-mi-sandwich.jpg", "/com-tam-rice.jpg"],
  }

  const stats = [
    { label: "Đánh giá", value: "4.8/5", icon: Star, color: "text-yellow-500" },
    { label: "Lượt xem", value: "12.5K", icon: Users, color: "text-blue-500" },
    { label: "Yêu thích", value: "2.3K", icon: Heart, color: "text-red-500" },
    { label: "Xu hướng", value: "#3", icon: TrendingUp, color: "text-green-500" },
  ]

  const popularDishes = [
    { name: "Phở Bò Tái", price: "65,000 VNĐ", rating: 4.9, image: "/pho-bowl.jpg" },
    { name: "Phở Gà", price: "60,000 VNĐ", rating: 4.7, image: "/pho-bowl.jpg" },
    { name: "Phở Đặc Biệt", price: "85,000 VNĐ", rating: 4.8, image: "/pho-bowl.jpg" },
  ]

  const reviews = [
    {
      id: 1,
      user: "Nguyễn Văn A",
      rating: 5,
      comment: "Phở rất ngon, nước dùng đậm đà. Sẽ quay lại!",
      date: "2 ngày trước",
      helpful: 24,
    },
    {
      id: 2,
      user: "Trần Thị B",
      rating: 5,
      comment: "Quán sạch sẽ, phục vụ nhanh. Giá cả hợp lý.",
      date: "1 tuần trước",
      helpful: 18,
    },
    {
      id: 3,
      user: "Lê Văn C",
      rating: 4,
      comment: "Phở ngon nhưng đông khách nên phải chờ lâu.",
      date: "2 tuần trước",
      helpful: 12,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={restaurant.images[0] || "/placeholder.svg"}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Back Button */}
        <Button
          asChild
          variant="secondary"
          size="icon"
          className="absolute top-4 left-4 backdrop-blur-md bg-white/20 hover:bg-white/30"
        >
          <Link href="/map">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            variant="secondary"
            size="icon"
            className="backdrop-blur-md bg-white/20 hover:bg-white/30"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
          <Button variant="secondary" size="icon" className="backdrop-blur-md bg-white/20 hover:bg-white/30">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>

        {/* Restaurant Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold text-white">{restaurant.name}</h1>
                  {restaurant.isLive && (
                    <Badge className="bg-destructive text-destructive-foreground">
                      <Video className="h-3 w-3 mr-1" />
                      LIVE
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-4 text-white/90">
                  <Badge variant="secondary" className="bg-white/20 backdrop-blur-md">
                    <ChefHat className="h-3 w-3 mr-1" />
                    {restaurant.cuisine}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{restaurant.rating}</span>
                    <span className="text-sm">({restaurant.reviews} đánh giá)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-all">
                  <CardContent className="p-4 text-center">
                    <stat.icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tabs */}
            <Tabs defaultValue="about" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-sm border-2">
                <TabsTrigger value="about">Giới thiệu</TabsTrigger>
                <TabsTrigger value="menu">Thực đơn</TabsTrigger>
                <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
              </TabsList>

              <TabsContent value="about">
                <Card className="border-2 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Về nhà hàng</h3>
                    <p className="text-muted-foreground leading-relaxed">{restaurant.description}</p>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <Award className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold">Giải thưởng</p>
                          <p className="text-sm text-muted-foreground">Top 10 Phở ngon nhất Sài Gòn 2024</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold">Sức chứa</p>
                          <p className="text-sm text-muted-foreground">50-80 khách</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="menu">
                <Card className="border-2 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Món ăn phổ biến</h3>
                    <div className="space-y-4">
                      {popularDishes.map((dish, index) => (
                        <div key={index} className="flex gap-4 p-4 rounded-lg border-2 hover:shadow-md transition-all">
                          <img
                            src={dish.image || "/placeholder.svg"}
                            alt={dish.name}
                            className="w-24 h-24 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg">{dish.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{dish.rating}</span>
                            </div>
                            <p className="text-primary font-bold mt-2">{dish.price}</p>
                          </div>
                          <Button>Đặt món</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card className="border-2 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold">Đánh giá từ khách hàng</h3>
                      <Button>Viết đánh giá</Button>
                    </div>
                    <div className="space-y-4">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b pb-4 last:border-0">
                          <div className="flex items-start gap-3">
                            <Avatar>
                              <AvatarFallback>{review.user[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <p className="font-semibold">{review.user}</p>
                                  <div className="flex items-center gap-2 mt-1">
                                    <div className="flex items-center gap-1">
                                      {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                          key={i}
                                          className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                                        />
                                      ))}
                                    </div>
                                    <span className="text-sm text-muted-foreground">{review.date}</span>
                                  </div>
                                </div>
                              </div>
                              <p className="text-sm mb-2">{review.comment}</p>
                              <Button variant="ghost" size="sm" className="text-muted-foreground">
                                <Heart className="h-4 w-4 mr-1" />
                                Hữu ích ({review.helpful})
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="border-2 shadow-lg sticky top-4">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Thông tin liên hệ</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Địa chỉ</p>
                      <p className="text-sm text-muted-foreground">{restaurant.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-sm">Điện thoại</p>
                      <p className="text-sm text-muted-foreground">{restaurant.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-sm">Giờ mở cửa</p>
                      <p className="text-sm text-muted-foreground">{restaurant.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-sm">Giá</p>
                      <p className="text-sm text-muted-foreground">{restaurant.priceRange}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <Button className="w-full" size="lg">
                    <NavigationIcon className="h-4 w-4 mr-2" />
                    Chỉ đường
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    <Phone className="h-4 w-4 mr-2" />
                    Gọi điện
                  </Button>
                  {restaurant.isLive && (
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-destructive text-destructive"
                      size="lg"
                    >
                      <Video className="h-4 w-4 mr-2" />
                      Xem Livestream
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
