"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ChefHat,
  Menu,
  MapPin,
  Video,
  User,
  Bell,
  LogOut,
  Home,
  Compass,
  Camera,
  Cable as Cube,
  Calendar,
  Shield,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const navItems = [
  { href: "/dashboard", label: "Trang chủ", icon: Home },
  { href: "/explore", label: "Khám phá", icon: Compass },
  { href: "/food-recognition", label: "Nhận diện món", icon: Camera },
  { href: "/map", label: "Bản đồ", icon: MapPin },
  { href: "/livestream", label: "Livestream", icon: Video },
  { href: "/ar-preview", label: "AR Preview", icon: Cube },
  { href: "/events", label: "Sự kiện", icon: Calendar },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow group-hover:scale-105 transform duration-300">
              <ChefHat className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Sài Gòn Culinary Hub
              </h1>
              <p className="text-xs text-muted-foreground font-medium">Nền tảng ẩm thực chuyên nghiệp</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Button
                  key={item.href}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  className={cn("gap-2 h-10 px-4 transition-all duration-300", isActive && "shadow-lg")}
                  size="sm"
                >
                  <Link href={item.href}>
                    <Icon className="h-4 w-4" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </Link>
                </Button>
              )
            })}
            <Button
              asChild
              variant={pathname?.startsWith("/admin") ? "default" : "ghost"}
              className={cn(
                "gap-2 h-10 px-4 transition-all duration-300 ml-2 border-l",
                pathname?.startsWith("/admin") &&
                  "shadow-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600",
              )}
              size="sm"
            >
              <Link href="/admin">
                <Shield className="h-4 w-4" />
                <span className="font-medium text-sm">Quản trị</span>
              </Link>
            </Button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative h-11 w-11 hover:bg-accent">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">3</Badge>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-11 w-11 rounded-full hover:ring-2 hover:ring-primary/20 transition-all"
                >
                  <Avatar className="h-11 w-11 ring-2 ring-border">
                    <AvatarImage src="/diverse-user-avatars.png" alt="User" />
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20 text-primary font-bold text-lg">
                      NV
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-2 p-2">
                    <p className="text-base font-semibold leading-none">Nguyễn Văn A</p>
                    <p className="text-sm leading-none text-muted-foreground">nguyenvana@email.com</p>
                    <Badge variant="secondary" className="w-fit">
                      Quản trị viên
                    </Badge>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer py-3">
                    <User className="mr-3 h-5 w-5" />
                    <span className="text-base">Hồ sơ</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin" className="cursor-pointer py-3">
                    <Shield className="mr-3 h-5 w-5" />
                    <span className="text-base">Quản trị</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/login" className="cursor-pointer text-destructive py-3">
                    <LogOut className="mr-3 h-5 w-5" />
                    <span className="text-base">Đăng xuất</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="h-11 w-11">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Button
                        key={item.href}
                        asChild
                        variant={isActive ? "default" : "ghost"}
                        className={cn("justify-start gap-3 h-14 text-base", isActive && "shadow-lg")}
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href={item.href}>
                          <Icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </Link>
                      </Button>
                    )
                  })}
                  <div className="border-t pt-4 mt-4">
                    <Button
                      asChild
                      variant={pathname?.startsWith("/admin") ? "default" : "ghost"}
                      className={cn(
                        "justify-start gap-3 h-14 w-full text-base",
                        pathname?.startsWith("/admin") && "bg-gradient-to-r from-orange-500 to-red-500",
                      )}
                    >
                      <Link href="/admin" onClick={() => setIsOpen(false)}>
                        <Shield className="h-5 w-5" />
                        <span>Quản trị</span>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      className="justify-start gap-3 h-14 w-full text-destructive text-base"
                    >
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        <LogOut className="h-5 w-5" />
                        <span>Đăng xuất</span>
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
