"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/shared/ui/button"
import SiderBarAdmin from "./components/SiderBarAdmin"
import { Moon, Sun, Bell, User, ArrowLeft } from "lucide-react"
import { useAdminLanguage } from "./i18n"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import { LanguageSwitcher } from "@/shared/components/HeaderAuth/components"
import { ModeTogger } from "@/shared/ui/ModeTogger"

export default function AdminPages({
    children,
}: {
    children: React.ReactNode
}) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const { t } = useAdminLanguage()

    useEffect(() => {
        const isDark = localStorage.getItem("darkMode") === "true"
        setDarkMode(isDark)
        if (isDark) {
            document.documentElement.classList.add("dark")
        }
    }, [])

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode
        setDarkMode(newDarkMode)
        localStorage.setItem("darkMode", String(newDarkMode))
        if (newDarkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }

    return (
        <div className="flex h-screen overflow-hidden bg-background">
            {/* Sidebar */}
            <SiderBarAdmin collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Top Header */}
                <header className="flex h-16 items-center justify-between border-b bg-card px-6">
                    <div className="flex items-center gap-4">
                        <Button asChild variant="ghost" size="sm">
                            <Link href="/dashboard">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                {t("backToHome")}
                            </Link>
                        </Button>
                    </div>

                    <div className="flex items-center gap-2">
                        <LanguageSwitcher />
                        <ModeTogger />
                        {/* Notifications */}
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5" />
                        </Button>

                        {/* User Menu */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <User className="h-5 w-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>
                                    <div>
                                        <p className="font-semibold">Admin User</p>
                                        <p className="text-xs text-muted-foreground">admin@saigonculinary.com</p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <User className="h-4 w-4 mr-2" />
                                    {t("profile")}
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Bell className="h-4 w-4 mr-2" />
                                    {t("notifications")}
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">{t("logout")}</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-6">{children}</main>
            </div>
        </div>
    )
}
