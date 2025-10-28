"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/shared/ui/button"
import { Shield } from "lucide-react"
import { cn } from "@/shared/lib/utils"
import { navItems } from "./routes"

export function DesktopNav() {
    const pathname = usePathname()

    return (
        <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                    <Button
                        key={item.href}
                        asChild
                        variant={isActive ? "default" : "ghost"}
                        className={cn(
                            "gap-2 h-10 px-4 transition-all duration-300",
                            isActive && "shadow-lg"
                        )}
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
                    "shadow-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                )}
                size="sm"
            >
                <Link href="/admin">
                    <Shield className="h-4 w-4" />
                    <span className="font-medium text-sm">Quản trị</span>
                </Link>
            </Button>
        </nav>
    )
}

