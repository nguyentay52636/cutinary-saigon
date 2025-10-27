"use client";
import { usePathname } from "next/navigation";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import { HeaderAuth } from "@/shared/components/HeaderAuth/HeaderAuth";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAuthPage = pathname?.startsWith("/auth/") ?? false;
    const isAdminPage = pathname?.startsWith("/admin") ?? false;

    return (
        <>
            {!isAuthPage && !isAdminPage && <HeaderAuth />}
            {children}
            {!isAuthPage && !isAdminPage && <Footer />}
        </>
    );
}