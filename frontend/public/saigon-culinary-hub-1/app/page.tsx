"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ChefHat,
  MapPin,
  ArrowRight,
  Star,
  Clock,
  Users,
  Search,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPinned,
  Heart,
  MessageCircle,
  Share2,
  Tag,
  Calendar,
  Gift,
  BookOpen,
  Shield,
  CloudRain,
  Wind,
  Droplets,
  Navigation,
  Video,
  Globe,
} from "lucide-react"
import { useLocationStore } from "@/lib/stores/location-store"
import { useWeatherStore } from "@/lib/stores/weather-store"
import { useUserStore } from "@/lib/stores/user-store"
import { useEffect } from "react"
import HeroCarousel from "@/components/carousel/hero-carousel"

export default function HomePage() {
  const { userLocation, nearbyRestaurants, requestLocation, isLoadingLocation } = useLocationStore()
  const { weather, fetchWeather, isLoading: isLoadingWeather } = useWeatherStore()
  const { favorites, toggleFavorite } = useUserStore()

  useEffect(() => {
    const initializeData = async () => {
      await requestLocation()
      if (userLocation) {
        await fetchWeather(userLocation.latitude, userLocation.longitude)
      } else {
        // Default to Saigon coordinates
        await fetchWeather(10.8231, 106.6297)
      }
    }
    initializeData()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const heroImages = [
    { src: "/pho-bowl.jpg", alt: "Phở Bò", rotation: -8 },
    { src: "/banh-mi-sandwich.jpg", alt: "Bánh Mì", rotation: 5 },
    { src: "/com-tam-rice.jpg", alt: "Cơm Tấm", rotation: -3 },
    { src: "/bun-bo-hue.png", alt: "Bún Bò Huế", rotation: 7 },
    { src: "/hu-tieu.jpg", alt: "Hủ Tiếu", rotation: -6 },
    { src: "/mi-quang.jpg", alt: "Mì Quảng", rotation: 4 },
    { src: "/pho-bowl.jpg", alt: "Gỏi Cuốn", rotation: -5 },
    { src: "/banh-mi-sandwich.jpg", alt: "Bánh Xèo", rotation: 6 },
  ]

  const featuredDishes = [
    {
      id: "1",
      name: "Phở Bò Hà Nội",
      location: "Phở Hòa Pasteur, Quận 1",
      price: "45.000đ",
      rating: 4.8,
      reviews: 234,
      image: "/pho-bowl.jpg",
      category: "Món chính",
    },
    {
      id: "2",
      name: "Bánh Mì Thịt Nướng",
      location: "Bánh Mì Huỳnh Hoa, Quận 1",
      price: "25.000đ",
      rating: 4.9,
      reviews: 456,
      image: "/banh-mi-sandwich.jpg",
      category: "Ăn vặt",
    },
    {
      id: "3",
      name: "Cơm Tấm Sườn Bì",
      location: "Cơm Tấm Mộc, Quận 3",
      price: "35.000đ",
      rating: 4.7,
      reviews: 189,
      image: "/com-tam-rice.jpg",
      category: "Món chính",
    },
    {
      id: "4",
      name: "Bún Bò Huế",
      location: "Bún Bò Huế 3A3, Quận 10",
      price: "40.000đ",
      rating: 4.8,
      reviews: 312,
      image: "/bun-bo-hue.png",
      category: "Món chính",
    },
    {
      id: "5",
      name: "Hủ Tiếu Nam Vang",
      location: "Hủ Tiếu Mỹ Tho, Quận 5",
      price: "38.000đ",
      rating: 4.6,
      reviews: 167,
      image: "/hu-tieu.jpg",
      category: "Món chính",
    },
    {
      id: "6",
      name: "Mì Quảng",
      location: "Mì Quảng 1A, Quận 3",
      price: "42.000đ",
      rating: 4.7,
      reviews: 203,
      image: "/mi-quang.jpg",
      category: "Món chính",
    },
  ]

  const popularPlaces = [
    {
      name: "Chợ Bến Thành",
      district: "Quận 1",
      description: "Trung tâm ẩm thực đường phố nổi tiếng",
      restaurants: 150,
      image: "/restaurant-1.jpg",
    },
    {
      name: "Phố Ẩm Thực Nguyễn Trãi",
      district: "Quận 5",
      description: "Thiên đường ẩm thực Hoa",
      restaurants: 89,
      image: "/restaurant-2.jpg",
    },
    {
      name: "Khu Phố Tây Bùi Viện",
      district: "Quận 1",
      description: "Ẩm thực quốc tế đa dạng",
      restaurants: 120,
      image: "/restaurant-1.jpg",
    },
  ]

  const blogPosts = [
    {
      title: "10 Món Ăn Sáng Không Thể Bỏ Qua Ở Sài Gòn",
      excerpt: "Khám phá những món ăn sáng đặc trưng và ngon nhất của Sài Gòn...",
      author: "Minh Anh",
      date: "15/01/2025",
      readTime: "5 phút",
      image: "/pho-bowl.jpg",
    },
    {
      title: "Hành Trình Khám Phá Ẩm Thực Quận 5",
      excerpt: "Chuyến đi qua các con phố ẩm thực Hoa nổi tiếng nhất Sài Gòn...",
      author: "Văn Bình",
      date: "12/01/2025",
      readTime: "8 phút",
      image: "/hu-tieu.jpg",
    },
    {
      title: "Bí Quyết Chọn Quán Ăn Ngon Như Người Địa Phương",
      excerpt: "Những mẹo nhỏ giúp bạn tìm được những quán ăn ngon và chất lượng...",
      author: "Thị Cẩm",
      date: "10/01/2025",
      readTime: "6 phút",
      image: "/banh-mi-sandwich.jpg",
    },
  ]

  const deals = [
    {
      title: "Giảm 30% Tất Cả Món Ăn",
      restaurant: "Nhà Hàng Ngon 138",
      validUntil: "31/01/2025",
      discount: "30%",
      type: "Giảm giá",
    },
    {
      title: "Combo 2 Người Chỉ 199K",
      restaurant: "Quán Ăn Gia Đình",
      validUntil: "28/01/2025",
      discount: "199K",
      type: "Combo",
    },
    {
      title: "Lễ Hội Ẩm Thực Đường Phố",
      restaurant: "Công Viên 23/9",
      validUntil: "20/01/2025",
      discount: "Miễn phí",
      type: "Sự kiện",
    },
  ]

  const communityReviews = [
    {
      user: "Nguyễn Minh Anh",
      avatar: "NMA",
      rating: 5,
      comment: "Phở ở đây ngon tuyệt vời! Nước dùng đậm đà, thịt bò mềm. Sẽ quay lại!",
      dish: "Phở Bò",
      restaurant: "Phở Hòa Pasteur",
      likes: 45,
      time: "2 giờ trước",
    },
    {
      user: "Trần Văn Bình",
      avatar: "TVB",
      rating: 5,
      comment: "Bánh mì giòn rụm, nhân đầy đặn. Giá cả hợp lý. Highly recommended!",
      dish: "Bánh Mì Thịt",
      restaurant: "Bánh Mì Huỳnh Hoa",
      likes: 32,
      time: "5 giờ trước",
    },
    {
      user: "Lê Thị Cẩm",
      avatar: "LTC",
      rating: 4,
      comment: "Cơm tấm ngon, sườn nướng thơm. Không gian thoáng mát, phục vụ nhanh.",
      dish: "Cơm Tấm Sườn",
      restaurant: "Cơm Tấm Mộc",
      likes: 28,
      time: "1 ngày trước",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                <ChefHat className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold leading-tight">Sài Gòn Culinary Hub</h1>
                <p className="text-xs text-muted-foreground">Khám phá ẩm thực</p>
              </div>
            </Link>

            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Tìm món ăn, địa điểm, bài viết..."
                  className="pl-10 h-12 bg-muted/50 border-2 focus:border-primary"
                />
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-2">
              <Button asChild variant="ghost" size="sm">
                <Link href="#featured">Món nổi bật</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href="#places">Địa điểm</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href="#events">Sự kiện</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href="#blog">Blog</Link>
              </Button>
            </nav>

            <div className="flex items-center gap-2">
              <Button asChild variant="outline">
                <Link href="/login">Đăng nhập</Link>
              </Button>
              <Button asChild className="hidden sm:flex">
                <Link href="/login">Đăng ký</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <HeroCarousel />

      <section className="py-16 bg-gradient-to-b from-muted/30 to-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Weather Widget */}
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Thời tiết hôm nay</h3>
                    <p className="text-sm text-muted-foreground">Thành phố Hồ Chí Minh</p>
                  </div>
                  {weather && <div className="text-5xl">{weather.icon}</div>}
                </div>

                {isLoadingWeather ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                  </div>
                ) : weather ? (
                  <>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-6xl font-bold">{weather.temperature}°</span>
                      <span className="text-2xl text-muted-foreground">C</span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <CloudRain className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Độ ẩm</p>
                          <p className="font-semibold">{weather.humidity}%</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wind className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Gió</p>
                          <p className="font-semibold">{weather.windSpeed} km/h</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Droplets className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Điều kiện</p>
                          <p className="font-semibold text-sm">{weather.condition}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm font-semibold mb-3">Dự báo 4 giờ tới</p>
                      <div className="grid grid-cols-4 gap-2">
                        {weather.forecast.map((item, index) => (
                          <div key={index} className="text-center">
                            <p className="text-xs text-muted-foreground mb-1">{item.time}</p>
                            <div className="text-2xl mb-1">{item.icon}</div>
                            <p className="text-sm font-semibold">{item.temperature}°</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-center text-muted-foreground">Không thể tải thông tin thời tiết</p>
                )}
              </CardContent>
            </Card>

            {/* Location Widget */}
            <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Quán ăn gần bạn</h3>
                    <p className="text-sm text-muted-foreground">Dựa trên vị trí của bạn</p>
                  </div>
                  <Navigation className="h-8 w-8 text-primary" />
                </div>

                {isLoadingLocation ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                  </div>
                ) : nearbyRestaurants.length > 0 ? (
                  <div className="space-y-4">
                    {nearbyRestaurants.slice(0, 3).map((restaurant) => (
                      <div
                        key={restaurant.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background transition-colors"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{restaurant.name}</h4>
                          <p className="text-sm text-muted-foreground">{restaurant.address}</p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-semibold">{restaurant.rating}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{restaurant.distance} km</p>
                        </div>
                      </div>
                    ))}
                    <Button asChild className="w-full mt-4">
                      <Link href="/map">
                        Xem tất cả trên bản đồ
                        <MapPin className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">Cho phép truy cập vị trí để xem quán ăn gần bạn</p>
                    <Button onClick={requestLocation}>
                      <Navigation className="mr-2 h-4 w-4" />
                      Bật định vị
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="featured" className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Star className="w-4 h-4 mr-2 fill-primary text-primary" />
              Món ăn nổi bật
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Món ăn được yêu thích nhất</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Khám phá những món ăn đặc trưng và được đánh giá cao nhất tại Sài Gòn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4">{dish.category}</Badge>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 right-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => toggleFavorite(dish.id)}
                  >
                    <Heart className={`h-4 w-4 ${favorites.includes(dish.id) ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{dish.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{dish.location}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-semibold">{dish.rating}</span>
                      <span className="text-sm text-muted-foreground">({dish.reviews})</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{dish.price}</span>
                  </div>
                  <Button asChild className="w-full bg-transparent" variant="outline">
                    <Link href={`/restaurant/${dish.id}`}>Xem chi tiết</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/explore">
                Xem tất cả món ăn
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="places" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <MapPinned className="w-4 h-4 mr-2" />
              Địa điểm ẩm thực
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Khu vực ẩm thực nổi tiếng</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Những địa điểm tập trung ẩm thực đường phố và nhà hàng nổi tiếng nhất Sài Gòn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {popularPlaces.map((place, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={place.image || "/placeholder.svg"}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{place.name}</h3>
                    <p className="text-sm opacity-90">{place.district}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{place.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <ChefHat className="h-4 w-4 text-primary" />
                      <span className="font-semibold">{place.restaurants} nhà hàng</span>
                    </div>
                    <Button asChild size="sm" variant="ghost">
                      <Link href="/map">
                        Xem bản đồ
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2">
            <CardContent className="p-8 text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Khám phá trên bản đồ</h3>
              <p className="text-muted-foreground mb-6">
                Xem tất cả nhà hàng và quán ăn trên bản đồ tương tác với thông tin chi tiết
              </p>
              <Button asChild size="lg">
                <Link href="/map">
                  Mở bản đồ
                  <MapPin className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="blog" className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <BookOpen className="w-4 h-4 mr-2" />
              Bài viết mới
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Khám phá thêm về ẩm thực</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mẹo hay, câu chuyện thú vị và kiến thức về văn hóa ẩm thực Sài Gòn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button asChild size="sm" variant="ghost">
                      <Link href={`/blog/${index}`}>
                        Xem thêm
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Gift className="w-4 h-4 mr-2" />
              Ưu đãi & Sự kiện
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Chương trình đặc biệt</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Đừng bỏ lỡ các ưu đãi hấp dẫn và sự kiện ẩm thực sắp diễn ra
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deals.map((deal, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={deal.type === "Sự kiện" ? "default" : "secondary"} className="text-sm">
                      {deal.type}
                    </Badge>
                    <div className="text-3xl font-bold text-primary">{deal.discount}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{deal.title}</h3>
                  <p className="text-muted-foreground mb-4">{deal.restaurant}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Calendar className="h-4 w-4" />
                    <span>Đến {deal.validUntil}</span>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/events">Xem chi tiết</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/events">
                Xem tất cả ưu đãi
                <Tag className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Users className="w-4 h-4 mr-2" />
              Cộng đồng ẩm thực
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Người dùng nói gì?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hàng nghìn đánh giá chân thực từ cộng đồng yêu ẩm thực Sài Gòn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {communityReviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center font-bold text-primary">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{review.user}</div>
                      <div className="text-sm text-muted-foreground">{review.time}</div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{review.comment}"</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <ChefHat className="h-4 w-4" />
                    <span className="font-medium">{review.dish}</span>
                    <span>•</span>
                    <span>{review.restaurant}</span>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <Button size="sm" variant="ghost" className="gap-2">
                      <Heart className="h-4 w-4" />
                      <span>{review.likes}</span>
                    </Button>
                    <Button size="sm" variant="ghost" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>Trả lời</span>
                    </Button>
                    <Button size="sm" variant="ghost" className="gap-2">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/login">
                Tham gia cộng đồng
                <Users className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
            <CardContent className="p-12 text-center">
              <Mail className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Đăng ký nhận tin</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nhận thông tin về món ăn mới, ưu đãi đặc biệt và sự kiện ẩm thực hấp dẫn
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input placeholder="Nhập email của bạn..." className="h-12 flex-1" type="email" />
                <Button size="lg" className="h-12 px-8">
                  Đăng ký ngay
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                  <ChefHat className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Sài Gòn Culinary Hub</h3>
                  <p className="text-sm text-muted-foreground">Khám phá ẩm thực Sài Gòn</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nền tảng chuyển đổi số hàng đầu cho du lịch ẩm thực địa phương tại Thành phố Hồ Chí Minh. Kết nối người
                yêu ẩm thực với hàng nghìn nhà hàng và quán ăn đặc sắc.
              </p>
              <div className="flex items-center gap-4">
                <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Khám phá</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="/map" className="hover:text-foreground transition-colors flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Bản đồ nhà hàng
                  </Link>
                </li>
                <li>
                  <Link href="/livestream" className="hover:text-foreground transition-colors flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    Livestream
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-foreground transition-colors flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Sự kiện
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="hover:text-foreground transition-colors flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Khám phá
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Liên hệ</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPinned className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>123 Nguyễn Huệ, Quận 1, TP.HCM</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>(028) 1234 5678</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>hello@sgculinary.vn</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>© 2025 Sài Gòn Culinary Hub. Được phát triển cho Hackathon Chuyển đổi số Du lịch.</p>
              <div className="flex items-center gap-6">
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Chính sách bảo mật
                </Link>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Điều khoản sử dụng
                </Link>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Bảo mật SSL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
