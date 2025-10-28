"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Navigation } from "@/components/navigation"
import {
  ChefHat,
  Video,
  Star,
  MapPin,
  Calendar,
  Utensils,
  Coffee,
  IceCream,
  Soup,
  Pizza,
  Cake,
  Search,
  Filter,
  Clock,
  Sun,
  Wind,
  Droplets,
  CloudRain,
  Cloud,
  TrendingUp,
  Eye,
  Heart,
  NavigationIcon,
  Sparkles,
  Box,
  Play,
  Users,
  ArrowRight,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [weather, setWeather] = useState({
    temp: 32,
    condition: "Nắng",
    humidity: 65,
    windSpeed: 12,
    forecast: [
      { time: "12:00", temp: 32, condition: "sunny" },
      { time: "15:00", temp: 34, condition: "sunny" },
      { time: "18:00", temp: 30, condition: "cloudy" },
      { time: "21:00", temp: 28, condition: "rain" },
    ],
  })

  useEffect(() => {
    const fetchWeather = async () => {
      console.log("[v0] Fetching weather data...")
    }
    fetchWeather()
  }, [])

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-5 w-5 text-yellow-500" />
      case "cloudy":
        return <Cloud className="h-5 w-5 text-gray-500" />
      case "rain":
        return <CloudRain className="h-5 w-5 text-blue-500" />
      default:
        return <Cloud className="h-5 w-5 text-gray-400" />
    }
  }

  const categories = [
    { id: "all", name: "Tất cả", icon: Utensils, color: "from-purple-500 to-pink-500" },
    { id: "pho", name: "Phở", icon: Soup, color: "from-green-500 to-emerald-500" },
    { id: "banh-mi", name: "Bánh Mì", icon: Pizza, color: "from-orange-500 to-amber-500" },
    { id: "com-tam", name: "Cơm Tấm", icon: ChefHat, color: "from-blue-500 to-cyan-500" },
    { id: "coffee", name: "Cà Phê", icon: Coffee, color: "from-amber-700 to-yellow-600" },
    { id: "dessert", name: "Tráng Miệng", icon: IceCream, color: "from-pink-500 to-rose-500" },
    { id: "cake", name: "Bánh Ngọt", icon: Cake, color: "from-red-500 to-pink-500" },
  ]

  const recommendedRoutes = [
    {
      id: 1,
      name: "Tour Ẩm Thực Quận 1",
      duration: "3 giờ",
      stops: 5,
      distance: "2.5 km",
      rating: 4.9,
      image: "/pho-bowl.jpg",
      highlights: ["Phở Hòa", "Bánh Mì Huỳnh Hoa", "Cà Phê Apartment"],
      price: "Miễn phí",
    },
    {
      id: 2,
      name: "Khám Phá Món Bún",
      duration: "2 giờ",
      stops: 4,
      distance: "1.8 km",
      rating: 4.7,
      image: "/bun-bo-hue.png",
      highlights: ["Bún Bò Huế", "Bún Riêu", "Bún Thịt Nướng"],
      price: "Miễn phí",
    },
    {
      id: 3,
      name: "Chợ Đêm Ẩm Thực",
      duration: "4 giờ",
      stops: 8,
      distance: "3.2 km",
      rating: 4.8,
      image: "/com-tam-rice.jpg",
      highlights: ["Cơm Tấm", "Bánh Xèo", "Chè", "Ốc"],
      price: "Miễn phí",
    },
  ]

  const featuredRestaurants = [
    {
      id: 1,
      name: "Phở Hòa Pasteur",
      cuisine: "Phở",
      rating: 4.8,
      reviews: 1234,
      image: "/pho-bowl.jpg",
      district: "Quận 1",
      distance: "0.5 km",
      priceRange: "50-80k",
      isOpen: true,
      hasLive: true,
      hasAR: true,
    },
    {
      id: 2,
      name: "Bánh Mì Huỳnh Hoa",
      cuisine: "Bánh Mì",
      rating: 4.9,
      reviews: 2341,
      image: "/banh-mi-sandwich.jpg",
      district: "Quận 1",
      distance: "1.2 km",
      priceRange: "30-50k",
      isOpen: true,
      hasLive: false,
      hasAR: true,
    },
    {
      id: 3,
      name: "Cơm Tấm Mộc",
      cuisine: "Cơm Tấm",
      rating: 4.7,
      reviews: 876,
      image: "/com-tam-rice.jpg",
      district: "Quận 3",
      distance: "2.1 km",
      priceRange: "40-70k",
      isOpen: true,
      hasLive: true,
      hasAR: false,
    },
    {
      id: 4,
      name: "Bún Bò Huế Đông Ba",
      cuisine: "Bún",
      rating: 4.6,
      reviews: 654,
      image: "/bun-bo-hue.png",
      district: "Quận 5",
      distance: "3.5 km",
      priceRange: "45-65k",
      isOpen: false,
      hasLive: false,
      hasAR: true,
    },
  ]

  const liveStreams = [
    {
      id: 1,
      title: "Nấu Phở Bò Truyền Thống",
      chef: "Chef Minh",
      viewers: 1234,
      thumbnail: "/pho-bowl.jpg",
      restaurant: "Phở Hòa Pasteur",
    },
    {
      id: 2,
      title: "Làm Bánh Mì Thập Cẩm",
      chef: "Chef Lan",
      viewers: 856,
      thumbnail: "/banh-mi-sandwich.jpg",
      restaurant: "Bánh Mì Huỳnh Hoa",
    },
    {
      id: 3,
      title: "Cơm Tấm Sườn Bì Chả",
      chef: "Chef Tuấn",
      viewers: 642,
      thumbnail: "/com-tam-rice.jpg",
      restaurant: "Cơm Tấm Mộc",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Lớp Nấu Ăn: Phở Bò",
      date: "15/11/2024",
      time: "14:00",
      location: "Quận 1",
      participants: 12,
      maxParticipants: 20,
      price: "500k",
    },
    {
      id: 2,
      title: "Tour Ẩm Thực Đường Phố",
      date: "18/11/2024",
      time: "18:00",
      location: "Quận 5",
      participants: 8,
      maxParticipants: 15,
      price: "Miễn phí",
    },
    {
      id: 3,
      title: "Festival Bánh Mì Sài Gòn",
      date: "20/11/2024",
      time: "10:00",
      location: "Công viên 23/9",
      participants: 156,
      maxParticipants: 500,
      price: "50k",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Chào mừng đến Sài Gòn! 👋
            </h1>
            <p className="text-muted-foreground text-lg">Khám phá ẩm thực đặc sắc của thành phố</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              <Heart className="h-5 w-5" />
              Yêu thích
            </Button>
            <Button size="lg" className="gap-2 shadow-lg">
              <NavigationIcon className="h-5 w-5" />
              Lộ trình của tôi
            </Button>
          </div>
        </div>

        {/* Weather Widget */}
        <Card className="border-2 shadow-xl bg-gradient-to-br from-blue-500/10 via-card to-cyan-500/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <Sun className="h-10 w-10 text-yellow-500" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold">{weather.temp}°C</span>
                    <span className="text-xl text-muted-foreground">{weather.condition}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Sài Gòn, Việt Nam</p>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span>{weather.humidity}%</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Wind className="h-4 w-4 text-gray-500" />
                      <span>{weather.windSpeed} km/h</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                {weather.forecast.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background/50 backdrop-blur-sm border min-w-[80px]"
                  >
                    <span className="text-xs font-medium text-muted-foreground">{item.time}</span>
                    {getWeatherIcon(item.condition)}
                    <span className="text-sm font-bold">{item.temp}°C</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 max-w-xs">
                <p className="text-sm font-semibold text-primary mb-1">Gợi ý hôm nay</p>
                <p className="text-xs text-muted-foreground">
                  Thời tiết nắng đẹp, phù hợp cho các quán ăn ngoài trời và tour ẩm thực đường phố
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Utensils className="h-6 w-6 text-primary" />
            Danh mục món ăn
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  selectedCategory === category.id ? "ring-2 ring-primary shadow-xl" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="font-semibold text-center text-sm">{category.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <Card className="border-2 shadow-lg bg-gradient-to-r from-card via-card to-primary/5">
          <CardContent className="p-6">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Tìm kiếm nhà hàng, món ăn..."
                  className="pl-12 h-14 text-base border-2 focus:border-primary bg-background/50 backdrop-blur-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Link href="/explore">
                <Button variant="outline" size="lg" className="px-8 border-2 bg-background/50 backdrop-blur-sm h-14">
                  <Filter className="h-5 w-5 mr-2" />
                  Lọc nâng cao
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Lộ trình gợi ý cho bạn
            </h2>
            <Link href="/map">
              <Button variant="ghost" className="gap-2">
                Xem bản đồ
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedRoutes.map((route) => (
              <Card
                key={route.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 cursor-pointer group"
              >
                <div className="relative h-48">
                  <img
                    src={route.image || "/placeholder.svg"}
                    alt={route.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-lg">
                    {route.price}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl mb-2">{route.name}</h3>
                    <div className="flex items-center gap-3 text-white/90 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {route.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {route.stops} điểm
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {route.rating}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-3">Điểm nổi bật:</p>
                  <div className="flex flex-wrap gap-2">
                    {route.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full mt-4 gap-2">
                    <NavigationIcon className="h-4 w-4" />
                    Bắt đầu lộ trình
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="restaurants" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 h-14">
            <TabsTrigger value="restaurants" className="text-base gap-2">
              <ChefHat className="h-5 w-5" />
              Nhà hàng
            </TabsTrigger>
            <TabsTrigger value="livestream" className="text-base gap-2">
              <Video className="h-5 w-5" />
              Livestream
            </TabsTrigger>
            <TabsTrigger value="ar" className="text-base gap-2">
              <Box className="h-5 w-5" />
              AR Preview
            </TabsTrigger>
            <TabsTrigger value="events" className="text-base gap-2">
              <Calendar className="h-5 w-5" />
              Sự kiện
            </TabsTrigger>
          </TabsList>

          <TabsContent value="restaurants" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Nhà hàng nổi bật</h3>
              <Link href="/explore">
                <Button variant="ghost" className="gap-2">
                  Xem tất cả
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredRestaurants.map((restaurant) => (
                <Card
                  key={restaurant.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 cursor-pointer group"
                >
                  <div className="flex gap-4 p-4">
                    <div className="relative flex-shrink-0">
                      <img
                        src={restaurant.image || "/placeholder.svg"}
                        alt={restaurant.name}
                        className="w-32 h-32 rounded-xl object-cover shadow-lg group-hover:shadow-2xl transition-shadow"
                      />
                      {restaurant.isOpen ? (
                        <Badge className="absolute -top-2 -right-2 bg-green-500 text-white shadow-lg">Đang mở</Badge>
                      ) : (
                        <Badge className="absolute -top-2 -right-2 bg-gray-500 text-white shadow-lg">Đã đóng</Badge>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg truncate group-hover:text-primary transition-colors mb-1">
                        {restaurant.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{restaurant.cuisine}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-bold">{restaurant.rating}</span>
                          <span className="text-xs text-muted-foreground">({restaurant.reviews})</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {restaurant.district} • {restaurant.distance}
                        </div>
                        <div className="text-sm font-semibold text-primary">{restaurant.priceRange}</div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        {restaurant.hasLive && (
                          <Badge variant="destructive" className="text-xs gap-1">
                            <Video className="h-3 w-3" />
                            Live
                          </Badge>
                        )}
                        {restaurant.hasAR && (
                          <Badge variant="secondary" className="text-xs gap-1">
                            <Box className="h-3 w-3" />
                            AR
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-4 flex gap-2">
                    <Link href={`/restaurant/${restaurant.id}`} className="flex-1">
                      <Button className="w-full" size="sm">
                        Chi tiết
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="livestream" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Video className="h-5 w-5 text-destructive animate-pulse" />
                Đang phát trực tiếp
              </h3>
              <Link href="/livestream">
                <Button variant="ghost" className="gap-2">
                  Xem tất cả
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {liveStreams.map((stream) => (
                <Card
                  key={stream.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-destructive/30 cursor-pointer group"
                >
                  <div className="relative h-48">
                    <img
                      src={stream.thumbnail || "/placeholder.svg"}
                      alt={stream.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="h-8 w-8 text-destructive ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-destructive text-white shadow-lg animate-pulse gap-1">
                      <Video className="h-3 w-3" />
                      LIVE
                    </Badge>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {stream.viewers}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {stream.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/20 text-primary text-xs">
                          {stream.chef.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold">{stream.chef}</p>
                        <p className="text-xs text-muted-foreground">{stream.restaurant}</p>
                      </div>
                    </div>
                    <Link href="/livestream">
                      <Button className="w-full gap-2 bg-destructive hover:bg-destructive/90">
                        <Play className="h-4 w-4" />
                        Xem ngay
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ar" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Box className="h-5 w-5 text-primary" />
                Xem trước 3D
              </h3>
              <Link href="/ar-preview">
                <Button variant="ghost" className="gap-2">
                  Xem tất cả
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredRestaurants
                .filter((r) => r.hasAR)
                .map((restaurant) => (
                  <Card
                    key={restaurant.id}
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 cursor-pointer group"
                  >
                    <div className="relative h-48">
                      <img
                        src={restaurant.image || "/placeholder.svg"}
                        alt={restaurant.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-lg gap-1">
                        <Box className="h-3 w-3" />
                        3D
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{restaurant.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{restaurant.cuisine}</p>
                      <Link href="/ar-preview">
                        <Button className="w-full gap-2">
                          <Box className="h-4 w-4" />
                          Xem 3D
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Sự kiện sắp diễn ra
              </h3>
              <Link href="/events">
                <Button variant="ghost" className="gap-2">
                  Xem tất cả
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date} • {event.time}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {event.participants}/{event.maxParticipants} người tham gia
                      </div>
                      <div className="text-lg font-bold text-primary">{event.price}</div>
                    </div>
                    <Link href="/events">
                      <Button className="w-full gap-2">
                        <Calendar className="h-4 w-4" />
                        Đăng ký ngay
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card className="border-2 shadow-xl bg-gradient-to-br from-primary/5 via-card to-secondary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Truy cập nhanh</CardTitle>
            <CardDescription>Các tính năng hữu ích cho bạn</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/food-recognition">
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/30 group">
                  <CardContent className="p-6 flex flex-col items-center gap-3 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Search className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Nhận diện món ăn</h3>
                      <p className="text-xs text-muted-foreground">Tìm món ăn qua hình ảnh</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/map">
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/30 group">
                  <CardContent className="p-6 flex flex-col items-center gap-3 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Bản đồ</h3>
                      <p className="text-xs text-muted-foreground">Khám phá quán ăn gần bạn</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/profile">
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/30 group">
                  <CardContent className="p-6 flex flex-col items-center gap-3 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Yêu thích</h3>
                      <p className="text-xs text-muted-foreground">Quản lý món ăn yêu thích</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/explore">
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/30 group">
                  <CardContent className="p-6 flex flex-col items-center gap-3 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Khám phá</h3>
                      <p className="text-xs text-muted-foreground">Tìm kiếm nâng cao</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
