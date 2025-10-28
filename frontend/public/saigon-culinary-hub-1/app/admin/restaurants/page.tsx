"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Plus, Eye, Edit, Trash2, CheckCircle, Star, MoreVertical } from "lucide-react"

export default function RestaurantsPage() {
  const [searchQuery, setSearchQuery] = useState("")

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
    {
      id: 5,
      name: "Gỏi Cuốn Sài Gòn",
      owner: "Hoàng Văn E",
      cuisine: "Gỏi Cuốn",
      rating: 4.5,
      reviews: 432,
      status: "active",
      verified: true,
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Quản lý nhà hàng</h1>
          <p className="text-muted-foreground">Danh sách tất cả nhà hàng trong hệ thống</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm nhà hàng
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Danh sách nhà hàng</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm nhà hàng..."
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
    </div>
  )
}
