import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChefHat,
  MapPin,
  Video,
  Smartphone,
  TrendingUp,
  Globe,
  ArrowRight,
  Zap,
  Shield,
  Star,
  Clock,
  Award,
  Users,
} from "lucide-react"

export default function LandingPage() {
  const features = [
    {
      icon: MapPin,
      title: "Bản đồ tương tác",
      description: "Khám phá hàng ngàn nhà hàng trên bản đồ Sài Gòn với thông tin chi tiết",
    },
    {
      icon: Video,
      title: "Livestream ẩm thực",
      description: "Xem trực tiếp các đầu bếp nấu ăn và tương tác với cộng đồng",
    },
    {
      icon: Smartphone,
      title: "Nhận diện món ăn",
      description: "Chụp ảnh món ăn để nhận thông tin dinh dưỡng và công thức",
    },
    {
      icon: TrendingUp,
      title: "Gợi ý thông minh",
      description: "Nhận đề xuất nhà hàng dựa trên sở thích và thời tiết",
    },
    {
      icon: Globe,
      title: "Du lịch ẩm thực",
      description: "Lộ trình khám phá ẩm thực Sài Gòn được cá nhân hóa",
    },
    {
      icon: Shield,
      title: "Đánh giá tin cậy",
      description: "Hệ thống đánh giá minh bạch từ cộng đồng người dùng",
    },
  ]

  const stats = [
    { value: "1,234+", label: "Nhà hàng" },
    { value: "45K+", label: "Người dùng" },
    { value: "12K+", label: "Đánh giá" },
    { value: "89", label: "Livestreams" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-6 py-2.5 shadow-lg animate-fade-in-up" variant="secondary">
              <Zap className="w-4 h-4 mr-2" />
              Nền tảng chuyển đổi số du lịch ẩm thực
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight animate-fade-in-up animation-delay-100">
              Khám phá ẩm thực Sài Gòn theo cách{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                hiện đại nhất
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 text-pretty max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Trải nghiệm du lịch ẩm thực thông minh với công nghệ AI, bản đồ tương tác, livestream và gợi ý cá nhân hóa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
              <Button asChild size="lg" className="text-lg h-14 px-10 shadow-xl hover:shadow-2xl transition-all">
                <Link href="/login">
                  Bắt đầu ngay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg h-14 px-10 bg-card/50 backdrop-blur-sm hover:bg-card shadow-lg"
              >
                <Link href="/map">
                  <MapPin className="mr-2 h-5 w-5" />
                  Khám phá bản đồ
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y bg-gradient-to-r from-card/30 via-card/50 to-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 text-sm px-4 py-2" variant="outline">
              Tính năng
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Công nghệ hiện đại cho trải nghiệm tốt nhất
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Ứng dụng chuyển đổi số toàn diện cho du lịch ẩm thực địa phương
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6" variant="outline">
              <Star className="w-4 h-4 mr-2 fill-primary text-primary" />
              Đánh giá từ người dùng
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Được tin dùng bởi hàng nghìn người</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Nguyễn Minh Anh",
                role: "Food Blogger",
                content: "Ứng dụng tuyệt vời giúp tôi khám phá nhiều quán ăn mới. Tính năng livestream rất hữu ích!",
                rating: 5,
              },
              {
                name: "Trần Văn Bình",
                role: "Du khách",
                content: "Bản đồ tương tác và gợi ý thông minh giúp chuyến du lịch của tôi trở nên hoàn hảo.",
                rating: 5,
              },
              {
                name: "Lê Thị Cẩm",
                role: "Chủ nhà hàng",
                content: "Nền tảng tuyệt vời để quảng bá nhà hàng. Tôi đã có thêm nhiều khách hàng mới!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <Card className="max-w-5xl mx-auto border-2 shadow-2xl bg-card/80 backdrop-blur-sm">
            <CardContent className="p-12 md:p-16 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <ChefHat className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Sẵn sàng khám phá ẩm thực Sài Gòn?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
                Tham gia cộng đồng hàng chục nghìn người yêu ẩm thực và bắt đầu hành trình khám phá của bạn ngay hôm nay
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg h-14 px-10 shadow-xl hover:shadow-2xl transition-all">
                  <Link href="/login">
                    Đăng ký miễn phí
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg h-14 px-10 bg-card/50 backdrop-blur-sm hover:bg-card shadow-lg"
                >
                  <Link href="/livestream">
                    <Video className="mr-2 h-5 w-5" />
                    Xem livestream
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Miễn phí mãi mãi</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  <span>Bảo mật tuyệt đối</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4" />
                  <span>45K+ người dùng</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold">Sài Gòn Culinary Hub</h3>
                  <p className="text-xs text-muted-foreground">Khám phá ẩm thực</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 text-pretty">
                Nền tảng chuyển đổi số hàng đầu cho du lịch ẩm thực địa phương tại Thành phố Hồ Chí Minh
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>45,000+ người dùng tin tưởng</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Khám phá</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/map" className="hover:text-foreground transition-colors">
                    Bản đồ nhà hàng
                  </Link>
                </li>
                <li>
                  <Link href="/livestream" className="hover:text-foreground transition-colors">
                    Livestream
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-foreground transition-colors">
                    Trang chủ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    Điều khoản dịch vụ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Chính sách bảo mật
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Sài Gòn Culinary Hub. Được phát triển cho Hackathon Chuyển đổi số Du lịch.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
