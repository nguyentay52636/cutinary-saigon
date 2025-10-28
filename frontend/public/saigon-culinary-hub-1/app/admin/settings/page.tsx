"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Cài đặt hệ thống</h1>
        <p className="text-muted-foreground">Quản lý cấu hình và tùy chọn hệ thống</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Chung</TabsTrigger>
          <TabsTrigger value="notifications">Thông báo</TabsTrigger>
          <TabsTrigger value="security">Bảo mật</TabsTrigger>
          <TabsTrigger value="integrations">Tích hợp</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Cài đặt chung</CardTitle>
              <CardDescription>Cấu hình cơ bản của hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="site-name">Tên website</Label>
                <Input id="site-name" defaultValue="Sài Gòn Culinary Hub" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-description">Mô tả</Label>
                <Input id="site-description" defaultValue="Khám phá ẩm thực Sài Gòn" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Chế độ bảo trì</Label>
                  <p className="text-sm text-muted-foreground">Tạm thời tắt website cho người dùng</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Cho phép đăng ký mới</Label>
                  <p className="text-sm text-muted-foreground">Người dùng có thể tạo tài khoản mới</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Lưu thay đổi
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Cài đặt thông báo</CardTitle>
              <CardDescription>Quản lý thông báo email và push</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email thông báo đăng ký mới</Label>
                  <p className="text-sm text-muted-foreground">Nhận email khi có người dùng mới</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email thông báo nhà hàng mới</Label>
                  <p className="text-sm text-muted-foreground">Nhận email khi có nhà hàng đăng ký</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email thông báo đánh giá mới</Label>
                  <p className="text-sm text-muted-foreground">Nhận email khi có đánh giá cần duyệt</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Lưu thay đổi
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Cài đặt bảo mật</CardTitle>
              <CardDescription>Quản lý bảo mật và quyền truy cập</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Xác thực hai yếu tố</Label>
                  <p className="text-sm text-muted-foreground">Yêu cầu 2FA cho admin</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Tự động đăng xuất</Label>
                  <p className="text-sm text-muted-foreground">Đăng xuất sau 30 phút không hoạt động</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Thời gian timeout (phút)</Label>
                <Input id="session-timeout" type="number" defaultValue="30" />
              </div>
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Lưu thay đổi
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>Tích hợp API</CardTitle>
              <CardDescription>Cấu hình các dịch vụ bên thứ ba</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="google-api">Google Cloud Vision API Key</Label>
                <Input id="google-api" type="password" placeholder="••••••••••••••••" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weather-api">Open-Meteo API Key</Label>
                <Input id="weather-api" type="password" placeholder="••••••••••••••••" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maps-api">Google Maps API Key</Label>
                <Input id="maps-api" type="password" placeholder="••••••••••••••••" />
              </div>
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Lưu thay đổi
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
