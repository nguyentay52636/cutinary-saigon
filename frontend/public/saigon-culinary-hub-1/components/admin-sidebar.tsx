"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  ChefHat,
  LayoutDashboard,
  Users,
  MapPin,
  Video,
  Star,
  Calendar,
  Settings,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface AdminSidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export function AdminSidebar({ collapsed, onToggle }: AdminSidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    { icon: LayoutDashboard, label: "Tổng quan", href: "/admin" },
    { icon: ChefHat, label: "Nhà hàng", href: "/admin/restaurants" },
    { icon: MapPin, label: "Địa điểm", href: "/admin/locations" },
    { icon: Users, label: "Người dùng", href: "/admin/users" },
    { icon: Star, label: "Đánh giá", href: "/admin/reviews" },
    { icon: Video, label: "Livestreams", href: "/admin/livestreams" },
    { icon: Calendar, label: "Sự kiện", href: "/admin/events" },
    { icon: BarChart3, label: "Thống kê", href: "/admin/analytics" },
    { icon: Settings, label: "Cài đặt", href: "/admin/settings" },
  ]

  return (
    <div className={cn("relative h-screen border-r bg-card transition-all duration-300", collapsed ? "w-16" : "w-64")}>
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!collapsed && (
          <Link href="/admin" className="flex items-center gap-2">
            <ChefHat className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Admin</span>
          </Link>
        )}
        <Button variant="ghost" size="icon" onClick={onToggle} className={cn("ml-auto", collapsed && "mx-auto")}>
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-1 px-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3",
                    collapsed && "justify-center px-2",
                    isActive && "bg-primary/10 text-primary hover:bg-primary/20",
                  )}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </Button>
              </Link>
            )
          })}
        </nav>
      </ScrollArea>

      {/* Footer */}
      {!collapsed && (
        <div className="border-t p-4">
          <div className="text-xs text-muted-foreground">
            <p className="font-semibold mb-1">Sài Gòn Culinary Hub</p>
            <p>Admin Dashboard v1.0</p>
          </div>
        </div>
      )}
    </div>
  )
}
