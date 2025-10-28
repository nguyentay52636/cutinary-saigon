"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Navigation } from "@/components/navigation"
import { Mail, Phone, MapPin, Calendar, Star, Heart, MessageCircle, Settings, Camera } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Nguyễn Văn A",
    email: "nguyenvana@email.com",
    phone: "0901 234 567",
    location: "Quận 1, TP. Hồ Chí Minh",
    bio: "Yêu thích khám phá ẩm thực Sài Gòn. Đặc biệt thích phở và bánh mì.",
    joinDate: "Tháng 1, 2024",
  })

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    livestream: true,
    reviews: false,
  })

  const stats = [
    { label: "Đánh giá", value: 42, icon: Star },
    { label: "Yêu thích", value: 28, icon: Heart },
    { label: "Bình luận", value: 156, icon: MessageCircle },
  ]

  const favoriteRestaurants = [
    {
      id: 1,
      name: "Phở Hòa Pasteur",
      cuisine: "Phở",
      rating: 4.8,
      image: "/pho-bowl.jpg",
    },
    {
      id: 2,
      name: "Bánh Mì Huỳnh Hoa",
      cuisine: "Bánh Mì",
      rating: 4.9,
      image: "/banh-mi-sandwich.jpg",
    },
    {
      id: 3,
      name: "Cơm Tấm Mộc",
      cuisine: "Cơm Tấm",
      rating: 4.7,
      image: "/com-tam-rice.jpg",
    },
  ]

  const recentReviews = [
    {
      id: 1,
      restaurant: "Phở Hòa Pasteur",
      rating: 5,
      comment: "Phở rất ngon, nước dùng đậm đà. Sẽ quay lại!",
      date: "2 ngày trước",
    },
    {
      id: 2,
      restaurant: "Bánh Mì Huỳnh Hoa",
      rating: 5,
      comment: "Bánh mì đầy đặn, giá hợp lý. Rất đáng thử!",
      date: "1 tuần trước",
    },
    {
      id: 3,
      restaurant: "Cơm Tấm Mộc",
      rating: 4,
      comment: "Cơm tấm ngon, sườn mềm. Không gian thoải mái.",
      date: "2 tuần trước",
    },
  ]

  const handleSave = () => {
    console.log("[v0] Saving profile:", profile)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <Navigation />

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <Card className="mb-6 border-2 shadow-lg bg-gradient-to-br from-card via-card to-primary/5">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="/diverse-user-avatars.png" />
                  <AvatarFallback className="text-2xl">NV</AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button size="icon" className="absolute bottom-0 right-0 rounded-full" variant="secondary">
                    <Camera className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <div className="flex-1">
                {!isEditing ? (
                  <>
                    <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
                    <p className="text-muted-foreground mb-4">{profile.bio}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{profile.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{profile.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{profile.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Tham gia {profile.joinDate}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Họ và tên</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Giới thiệu</Label>
                      <Textarea
                        id="bio"
                        value={profile.bio}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Số điện thoại</Label>
                        <Input
                          id="phone"
                          value={profile.phone}
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="favorites" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-sm border-2">
            <TabsTrigger value="favorites">Yêu thích</TabsTrigger>
            <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
            <TabsTrigger value="settings">Cài đặt</TabsTrigger>
          </TabsList>

          <TabsContent value="favorites">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle>Nhà hàng yêu thích</CardTitle>
                <CardDescription>Các địa điểm bạn đã lưu</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {favoriteRestaurants.map((restaurant) => (
                    <Card
                      key={restaurant.id}
                      className="cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all border-2"
                    >
                      <CardContent className="p-0">
                        <img
                          src={restaurant.image || "/placeholder.svg"}
                          alt={restaurant.name}
                          className="w-full aspect-video object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold truncate">{restaurant.name}</h3>
                          <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
                          <div className="flex items-center gap-1 mt-2">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-medium">{restaurant.rating}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Đánh giá của bạn</CardTitle>
                <CardDescription>Các đánh giá bạn đã viết</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 last:border-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{review.restaurant}</h4>
                          <div className="flex items-center gap-1 mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle>Cài đặt thông báo</CardTitle>
                <CardDescription>Quản lý cách bạn nhận thông báo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notif">Thông báo Email</Label>
                    <p className="text-sm text-muted-foreground">Nhận thông báo qua email</p>
                  </div>
                  <Switch
                    id="email-notif"
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notif">Thông báo đẩy</Label>
                    <p className="text-sm text-muted-foreground">Nhận thông báo trên thiết bị</p>
                  </div>
                  <Switch
                    id="push-notif"
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="livestream-notif">Livestream mới</Label>
                    <p className="text-sm text-muted-foreground">Thông báo khi có livestream mới</p>
                  </div>
                  <Switch
                    id="livestream-notif"
                    checked={notifications.livestream}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, livestream: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="reviews-notif">Đánh giá mới</Label>
                    <p className="text-sm text-muted-foreground">Thông báo về đánh giá mới</p>
                  </div>
                  <Switch
                    id="reviews-notif"
                    checked={notifications.reviews}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, reviews: checked })}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4 border-2 shadow-lg">
              <CardHeader>
                <CardTitle>Tài khoản</CardTitle>
                <CardDescription>Quản lý tài khoản của bạn</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Settings className="h-4 w-4 mr-2" />
                  Đổi mật khẩu
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-destructive hover:text-destructive bg-transparent"
                >
                  Xóa tài khoản
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
