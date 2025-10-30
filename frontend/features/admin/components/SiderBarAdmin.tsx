"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/shared/ui/button"
import { ScrollArea } from "@/shared/ui/scroll-area"
import { useLanguageStore } from "@/stores/language-store"
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
import { cn } from "@/shared/lib/utils"
import { useAdminLanguage } from "../i18n"

interface AdminSidebarProps {
    collapsed: boolean
    onToggle: () => void
}

export default function SiderBarAdmin({ collapsed, onToggle }: AdminSidebarProps) {
    const pathname = usePathname()
    const { t } = useAdminLanguage()
    const { language, setLanguage } = useLanguageStore()

    const menuItems = [
        { icon: LayoutDashboard, label: t("overview"), href: "/admin" },
        { icon: ChefHat, label: t("restaurants"), href: "/admin/restaurants" },
        { icon: MapPin, label: t("locations"), href: "/admin/locations" },
        { icon: Users, label: t("users"), href: "/admin/users" },
        { icon: Star, label: t("reviews"), href: "/admin/reviews" },
        { icon: Video, label: t("livestreams"), href: "/admin/livestreams" },
        { icon: Calendar, label: t("events"), href: "/admin/events" },
        { icon: BarChart3, label: t("analytics"), href: "/admin/analytics" },
        { icon: Settings, label: t("settings"), href: "/admin/settings" },
    ]

    return (
        <div
            className={cn(
                "relative h-screen border-r transition-all duration-300",
                "bg-gradient-to-b from-background via-background to-muted/20",
                "shadow-lg",
                collapsed ? "w-16" : "w-64",
            )}
        >
            <div className="flex h-16 items-center justify-between border-b bg-gradient-to-r from-primary/5 to-primary/10 px-4 backdrop-blur-sm">
                {!collapsed && (
                    <Link href="/admin" className="flex items-center gap-2 group">
                        <div className="rounded-lg bg-primary/10 p-1.5 group-hover:bg-primary/20 transition-colors">
                            <ChefHat className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <span className="font-bold text-base block leading-tight">{t("adminDashboard")}</span>
                            <span className="text-[10px] text-muted-foreground">Sài Gòn Culinary Hub</span>
                        </div>
                    </Link>
                )}
                <div className="flex items-center gap-1">
                    {!collapsed && (
                        <Button variant="ghost" size="sm" className="hover:bg-primary/10"
                            onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                        >
                            {language === 'vi' ? 'EN' : 'VI'}
                        </Button>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onToggle}
                        className={cn("ml-auto hover:bg-primary/10 hover:text-primary transition-all", collapsed && "mx-auto")}
                    >
                        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                    </Button>
                </div>
            </div>

            <ScrollArea className="flex-1 py-6">
                <nav className="space-y-2 px-3">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link key={item.href} href={item.href}>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "w-full justify-start gap-3 h-11 transition-all duration-200",
                                        collapsed && "justify-center px-2",
                                        isActive
                                            ? "bg-gradient-to-r from-primary/15 to-primary/5 text-primary border-l-4 border-primary shadow-sm hover:from-primary/20 hover:to-primary/10"
                                            : "hover:bg-muted/50 hover:translate-x-1 border-l-4 border-transparent",
                                    )}
                                >
                                    <div className={cn("rounded-lg p-1.5 transition-colors", isActive ? "bg-primary/10" : "bg-muted/50")}>
                                        <item.icon className="h-4 w-4 shrink-0" />
                                    </div>
                                    {!collapsed && <span className="font-medium text-sm">{item.label}</span>}
                                </Button>
                            </Link>
                        )
                    })}
                </nav>
            </ScrollArea>

            {!collapsed && (
                <div className="border-t bg-gradient-to-r from-muted/30 to-muted/10 p-4 backdrop-blur-sm">
                    <div className="rounded-lg bg-card/50 p-3 border">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <p className="font-semibold text-xs">{t("adminDashboard")}</p>
                        </div>
                        <p className="text-[10px] text-muted-foreground">{t("version")}</p>
                        <div className="mt-2 flex gap-1">
                            <div className="h-1 flex-1 rounded-full bg-primary/20" />
                            <div className="h-1 flex-1 rounded-full bg-primary/40" />
                            <div className="h-1 flex-1 rounded-full bg-primary/60" />
                            <div className="h-1 flex-1 rounded-full bg-primary" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
