import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/shared/ui/card"
import { Search, MapPin, Heart, TrendingUp } from "lucide-react"

export function QuickAccessGrid() {
    return (
        <Card className="border-2 shadow-xl bg-gradient-to-br from-primary/5 via-card to-secondary/5">
            <CardHeader>
                <CardTitle className="text-2xl">Truy cập nhanh</CardTitle>
                <CardDescription>Các tính năng hữu ích cho bạn</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link href="/food-recognition">
                        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/30 group">
                            <CardContent className="p-6 flex flex-col items-center gap-3 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Search className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Nhận diện món ăn</h3>
                                    <p className="text-xs text-muted-foreground">Tìm món ăn qua hình ảnh</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/map">
                        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/30 group">
                            <CardContent className="p-6 flex flex-col items-center gap-3 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <MapPin className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Bản đồ</h3>
                                    <p className="text-xs text-muted-foreground">Khám phá quán ăn gần bạn</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/profile">
                        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/30 group">
                            <CardContent className="p-6 flex flex-col items-center gap-3 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Heart className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Yêu thích</h3>
                                    <p className="text-xs text-muted-foreground">Quản lý món ăn yêu thích</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/explore">
                        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/30 group">
                            <CardContent className="p-6 flex flex-col items-center gap-3 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <TrendingUp className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Khám phá</h3>
                                    <p className="text-xs text-muted-foreground">Tìm kiếm nâng cao</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}


