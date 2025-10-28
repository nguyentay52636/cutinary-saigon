import Link from "next/link"

export function Logo() {
    return (
        <Link
            href="/dashboard"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
        >
            <img src="/logo.png" alt="logo" className="w-12 h-12 z-10" />
            <div className="hidden sm:block">
                <h1 className="text-xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    SaigonTaste
                </h1>
                <p className="text-md text-muted-foreground font-medium">
                    Ẩm thực Việt Nam 🇻🇳
                </p>

            </div>
        </Link>
    )
}

