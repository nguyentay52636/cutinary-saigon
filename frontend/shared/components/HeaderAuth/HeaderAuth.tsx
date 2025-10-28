"use client"

import { Logo, DesktopNav, UserMenu, NotificationButton, MobileMenu, LanguageSwitcher } from "./components"

export function HeaderAuth() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-400 dark:border-white/30 dark:z-50! dark:bg-black! bg-white!">
            <div className="container mx-auto px-4">
                <div className="flex h-20 items-center justify-between">
                    <Logo />
                    <DesktopNav />
                    <div className="flex items-center gap-3">
                        <LanguageSwitcher />
                        <NotificationButton />
                        <UserMenu />
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}
