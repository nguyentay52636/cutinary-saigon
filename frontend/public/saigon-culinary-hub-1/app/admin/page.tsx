"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ChefHat,
  Users,
  Video,
  Star,
  TrendingUp,
  TrendingDown,
  MoreVertical,
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function AdminPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const stats = [
    { label: "Tổng nhà hàng", value: "1,234", change: "+12%", trend: "up", icon: ChefHat },
    { label: "Người dùng hoạt động", value: "45.2K", change: "+8%", trend: "up", icon: Users },
    { label: "Livestreams hôm nay", value: "89", change: "+23%", trend: "up", icon: Video },
    { label: "Đánh giá chờ duyệt", value: "47", change: "-5%", trend: "down", icon: Star },
  ]

  const restaurants = [
    {
      id: 1,
      name: "Phở Hòa Pasteur",
      owner: "Nguyễn Văn A",
      cuisine: "Phở",
      rating: 4.8,
      reviews: 1234,
      status: "active",
      verified: true,
    },
    {
      id: 2,
      name: "Bánh Mì Huỳnh Hoa",
      owner: "Trần Thị B",
      cuisine: "Bánh Mì",
      rating: 4.9,
      reviews: 2341,
      status: "active",
      verified: true,
    },
    {
      id: 3,
      name: "Cơm Tấm Mộc",
      owner: "Lê Văn C",
      cuisine: "Cơm Tấm",
      rating: 4.7,
      reviews: 876,
      status: "pending",
      verified: false,
    },
    {
      id: 4,
      name: "Bún Bò Huế Đông Ba",
      owner: "Phạm Thị D",
      cuisine: "Bún",
      rating: 4.6,
      reviews: 654,
      status: "active",
      verified: true,
    },
  ]

  const users = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@email.com",
      role: "owner",
      joinDate: "01/01/2024",
      status: "active",
    },
    {
      id: 2,
      name: "Trần Thị B",
      email: "tranthib@email.com",
      role: "user",
      joinDate: "15/01/2024",
      status: "active",
    },
    {
      id: 3,
      name: "Lê Văn C",
      email: "levanc@email.com",
      role: "owner",
      joinDate: "20/02/2024",
      status: "suspended",
    },
  ]

  const pendingReviews = [
    {
      id: 1,
      user: "Nguyễn Văn A",
      restaurant: "Phở Hòa Pasteur",
      rating: 5,
      comment: "Phở rất ngon, nước dùng đậm đà!",
      date: "2 giờ trước",
      status: "pending",
    },
    {
      id: 2,
      user: "Trần Thị B",
      restaurant: "Bánh Mì Huỳnh Hoa",
      rating: 4,
      comment: "Bánh mì ngon nhưng hơi đắt.",
      date: "5 giờ trước",
      status: "pending",
    },
  ]

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline"; label: string }> = {
      active: { variant: "default", label: "Hoạt động" },
      pending: { variant: "secondary", label: "Chờ duyệt" },
      suspended: { variant: "destructive", label: "Tạm khóa" },
    }
    const config = variants[status] || variants.active
    return <Badge variant={config.variant}>{config.label}</Badge>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tổng quan hệ thống</h1>
          <p className="text-muted-foreground">Quản lý và giám sát hoạt động của nền tảng</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm nhà hàng
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="h-5 w-5 text-muted-foreground" />
                <div
                  className={cn(
                    "flex items-center gap-1 text-sm",
                    stat.trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400",
                  )}
                >
                  {stat.trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="restaurants" className="space-y-4">
        <TabsList>
          <TabsTrigger value="restaurants">Nhà hàng</TabsTrigger>
          <TabsTrigger value="users">Người dùng</TabsTrigger>
          <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
          <TabsTrigger value="analytics">Thống kê</TabsTrigger>
        </TabsList>

        {/* Restaurants Tab */}
        <TabsContent value="restaurants">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Quản lý nhà hàng</CardTitle>
                  <CardDescription>Danh sách tất cả nhà hàng trong hệ thống</CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Tìm kiếm..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên nhà hàng</TableHead>
                    <TableHead>Chủ sở hữu</TableHead>
                    <TableHead>Loại hình</TableHead>
                    <TableHead>Đánh giá</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {restaurants.map((restaurant) => (
                    <TableRow key={restaurant.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{restaurant.name}</span>
                          {restaurant.verified && <CheckCircle className="h-4 w-4 text-primary" />}
                        </div>
                      </TableCell>
                      <TableCell>{restaurant.owner}</TableCell>
                      <TableCell>{restaurant.cuisine}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span>{restaurant.rating}</span>
                          <span className="text-muted-foreground text-sm">({restaurant.reviews})</span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(restaurant.status)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              Xem chi tiết
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Chỉnh sửa
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Xóa
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Users Tab */}
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Quản lý người dùng</CardTitle>
                  <CardDescription>Danh sách người dùng trong hệ thống</CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Tìm kiếm..." className="pl-10" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Vai trò</TableHead>
                    <TableHead>Ngày tham gia</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{user.role === "owner" ? "Chủ nhà hàng" : "Người dùng"}</Badge>
                      </TableCell>
                      <TableCell>{user.joinDate}</TableCell>
                      <TableCell>{getStatusBadge(user.status)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              Xem hồ sơ
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Chỉnh sửa
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <XCircle className="h-4 w-4 mr-2" />
                              Tạm khóa
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reviews Tab */}
        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>Đánh giá chờ duyệt</CardTitle>
              <CardDescription>Kiểm duyệt các đánh giá mới</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingReviews.map((review) => (
                  <div key={review.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{review.user}</span>
                          <span className="text-muted-foreground">→</span>
                          <span className="text-muted-foreground">{review.restaurant}</span>
                        </div>
                        <div className="flex items-center gap-1">
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
                    <p className="text-sm mb-4">{review.comment}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="default">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Phê duyệt
                      </Button>
                      <Button size="sm" variant="outline">
                        <XCircle className="h-4 w-4 mr-2" />
                        Từ chối
                      </Button>
                      <Button size="sm" variant="ghost">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Báo cáo
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Thống kê tổng quan</CardTitle>
                <CardDescription>Dữ liệu hoạt động 30 ngày qua</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground">Tổng lượt xem</p>
                      <p className="text-2xl font-bold">1.2M</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground">Người dùng mới</p>
                      <p className="text-2xl font-bold">3,456</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground">Nhà hàng mới</p>
                      <p className="text-2xl font-bold">89</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground">Tổng livestream</p>
                      <p className="text-2xl font-bold">234</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
