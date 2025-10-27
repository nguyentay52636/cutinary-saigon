"use client";
import { usePathname } from "next/navigation";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";

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
            {!isAuthPage && !isAdminPage && <Header />}
            {children}
            {!isAuthPage && !isAdminPage && <Footer />}
        </>
    );
}