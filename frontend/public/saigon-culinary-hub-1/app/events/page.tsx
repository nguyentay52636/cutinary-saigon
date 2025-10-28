"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Clock, Users, ChefHat, Search, Filter, Star, Check } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([])

  const categories = [
    { id: "all", label: "Tất cả", count: 12 },
    { id: "workshop", label: "Workshop", count: 5 },
    { id: "cooking-class", label: "Lớp nấu ăn", count: 4 },
    { id: "food-tour", label: "Tour ẩm thực", count: 3 },
  ]

  const events = [
    {
      id: 1,
      title: "Workshop: Làm Phở Bò Truyền Thống",
      category: "workshop",
      date: "15/01/2025",
      time: "14:00 - 17:00",
      location: "Phở Hòa Pasteur, Q.3",
      host: "Chef Minh Nguyễn",
      participants: 24,
      maxParticipants: 30,
      price: "500,000đ",
      image: "/pho-bowl.jpg",
      description: "Học cách nấu phở bò chính gốc từ chef có hơn 20 năm kinh nghiệm. Bao gồm nguyên liệu và dụng cụ.",
      rating: 4.9,
      level: "Trung cấp",
    },
    {
      id: 2,
      title: "Lớp học: Bánh Mì Sài Gòn",
      category: "cooking-class",
      date: "18/01/2025",
      time: "09:00 - 12:00",
      location: "Bánh Mì Huỳnh Hoa, Q.1",
      host: "Chef Hoa Trần",
      participants: 18,
      maxParticipants: 20,
      price: "350,000đ",
      image: "/banh-mi-sandwich.jpg",
      description: "Khám phá bí quyết làm bánh mì Sài Gòn ngon với nhân đa dạng và bánh giòn tan.",
      rating: 4.8,
      level: "Cơ bản",
    },
    {
      id: 3,
      title: "Tour Ẩm Thực: Chợ Bến Thành",
      category: "food-tour",
      date: "20/01/2025",
      time: "17:00 - 21:00",
      location: "Chợ Bến Thành, Q.1",
      host: "Guide Lan Phạm",
      participants: 12,
      maxParticipants: 15,
      price: "450,000đ",
      image: "/com-tam-rice.jpg",
      description: "Khám phá ẩm thực đường phố Sài Gòn với hướng dẫn viên địa phương. Thưởng thức 8+ món ăn.",
      rating: 5.0,
      level: "Tất cả",
    },
    {
      id: 4,
      title: "Workshop: Bún Bò Huế Chuẩn Vị",
      category: "workshop",
      date: "22/01/2025",
      time: "10:00 - 13:00",
      location: "Bún Bò Huế 3A3, Q.10",
      host: "Chef Tuấn Lê",
      participants: 15,
      maxParticipants: 25,
      price: "480,000đ",
      image: "/bun-bo-hue.png",
      description: "Học cách nấu bún bò Huế với nước dùng đậm đà và cách chế biến các loại nhân.",
      rating: 4.7,
      level: "Trung cấp",
    },
    {
      id: 5,
      title: "Lớp học: Cơm Tấm Sườn Bì Chả",
      category: "cooking-class",
      date: "25/01/2025",
      time: "15:00 - 18:00",
      location: "Cơm Tấm Mộc, Q.Bình Thạnh",
      host: "Chef Mộc Nguyễn",
      participants: 20,
      maxParticipants: 25,
      price: "400,000đ",
      image: "/com-tam-rice.jpg",
      description: "Khám phá bí quyết làm cơm tấm ngon với sườn nướng, bì và chả trứng đặc biệt.",
      rating: 4.6,
      level: "Cơ bản",
    },
    {
      id: 6,
      title: "Tour Ẩm Thực: Quận 5 - Chợ Lớn",
      category: "food-tour",
      date: "28/01/2025",
      time: "18:00 - 22:00",
      location: "Quận 5, TP.HCM",
      host: "Guide Hùng Võ",
      participants: 8,
      maxParticipants: 12,
      price: "520,000đ",
      image: "/pho-bowl.jpg",
      description: "Khám phá ẩm thực Hoa - Việt tại Chợ Lớn với các món ăn đặc sắc và câu chuyện văn hóa.",
      rating: 4.9,
      level: "Tất cả",
    },
  ]

  const filteredEvents = events.filter((event) => {
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleRegister = (eventId: number) => {
    if (registeredEvents.includes(eventId)) {
      setRegisteredEvents(registeredEvents.filter((id) => id !== eventId))
    } else {
      setRegisteredEvents([...registeredEvents, eventId])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg mb-4">
              <Calendar className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Sự Kiện Ẩm Thực
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tham gia các workshop, lớp nấu ăn và tour ẩm thực để khám phá văn hóa ẩm thực Sài Gòn
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm sự kiện..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              <Filter className="h-5 w-5" />
              Bộ lọc
            </Button>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-4 h-12">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-base">
                  {category.label}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/50 overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                        {event.category === "workshop"
                          ? "Workshop"
                          : event.category === "cooking-class"
                            ? "Lớp học"
                            : "Tour"}
                      </Badge>
                      <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{event.rating}</span>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                      <CardDescription className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ChefHat className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{event.host}</span>
                        </div>
                        <Badge variant="outline">{event.level}</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>
                            {event.participants}/{event.maxParticipants} người
                          </span>
                        </div>
                        <span className="text-lg font-bold text-primary">{event.price}</span>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="w-full"
                            variant={registeredEvents.includes(event.id) ? "secondary" : "default"}
                          >
                            {registeredEvents.includes(event.id) ? (
                              <>
                                <Check className="h-4 w-4 mr-2" />
                                Đã đăng ký
                              </>
                            ) : (
                              "Đăng ký ngay"
                            )}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{event.title}</DialogTitle>
                            <DialogDescription>{event.description}</DialogDescription>
                          </DialogHeader>

                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  Ngày
                                </Label>
                                <p className="text-sm font-medium">{event.date}</p>
                              </div>
                              <div className="space-y-2">
                                <Label className="flex items-center gap-2">
                                  <Clock className="h-4 w-4" />
                                  Thời gian
                                </Label>
                                <p className="text-sm font-medium">{event.time}</p>
                              </div>
                              <div className="space-y-2">
                                <Label className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  Địa điểm
                                </Label>
                                <p className="text-sm font-medium">{event.location}</p>
                              </div>
                              <div className="space-y-2">
                                <Label className="flex items-center gap-2">
                                  <ChefHat className="h-4 w-4" />
                                  Người hướng dẫn
                                </Label>
                                <p className="text-sm font-medium">{event.host}</p>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="name">Họ và tên</Label>
                              <Input id="name" placeholder="Nhập họ và tên của bạn" />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" placeholder="email@example.com" />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="phone">Số điện thoại</Label>
                              <Input id="phone" placeholder="0123456789" />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="note">Ghi chú (tùy chọn)</Label>
                              <Textarea id="note" placeholder="Yêu cầu đặc biệt hoặc câu hỏi..." />
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t">
                              <div>
                                <p className="text-sm text-muted-foreground">Tổng thanh toán</p>
                                <p className="text-2xl font-bold text-primary">{event.price}</p>
                              </div>
                              <Button size="lg" onClick={() => handleRegister(event.id)}>
                                Xác nhận đăng ký
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredEvents.length === 0 && (
            <Card className="border-2 shadow-lg">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Calendar className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Không tìm thấy sự kiện</h3>
                <p className="text-muted-foreground text-center">
                  Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm để xem thêm sự kiện
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
