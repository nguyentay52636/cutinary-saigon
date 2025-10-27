import React from 'react'

export default function Stats() {
    const stats = [
        { value: "1,234+", label: "Nhà hàng" },
        { value: "45K+", label: "Người dùng" },
        { value: "12K+", label: "Đánh giá" },
        { value: "89", label: "Livestreams" },
    ]
    return (
        <section className="py-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold from-primarybg-clip-text text-primary mb-3 group-hover:scale-110 transition-transform">
                            {stat.value}
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}
