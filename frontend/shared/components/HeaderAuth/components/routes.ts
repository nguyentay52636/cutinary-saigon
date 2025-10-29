import {
  Home,
  Compass,
  Camera,
  MapPin,
  Video,
  Cable as Cube,
  Calendar,
  Shield,
  Factory,
} from "lucide-react"

export const navItems = [
  { href: "/", label: "Trang chủ", icon: Home },
  { href: "/about", label: "Về chúng tôi", icon: Factory },
  { href: "/explore", label: "Khám phá", icon: Compass },
  // { href: "/food-recognition", label: "Nhận diện món", icon: Camera },
  { href: "/map", label: "Bản đồ", icon: MapPin },
  { href: "/livestream", label: "Livestream", icon: Video },
  { href: "/ar-preview", label: "AR Preview", icon: Cube },
  { href: "/events", label: "Sự kiện", icon: Calendar },
]

