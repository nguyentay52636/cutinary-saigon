"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Navigation } from "@/components/navigation"
import {
  Video,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Gift,
  MoreVertical,
  ArrowLeft,
  Send,
  Smile,
  ThumbsUp,
  Users,
  Calendar,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function LivestreamPage() {
  const [message, setMessage] = useState("")
  const [likes, setLikes] = useState(1234)
  const [isLiked, setIsLiked] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: "Nguyễn Văn A", message: "Trông ngon quá!", time: "2 phút trước", avatar: "N" },
    { id: 2, user: "Trần Thị B", message: "Cho mình xin công thức được không ạ?", time: "3 phút trước", avatar: "T" },
    { id: 3, user: "Lê Văn C", message: "Nhà hàng ở đâu vậy ạ?", time: "5 phút trước", avatar: "L" },
    { id: 4, user: "Phạm Thị D", message: "Mình đã thử rồi, rất ngon!", time: "7 phút trước", avatar: "P" },
    { id: 5, user: "Hoàng Văn E", message: "Cảm ơn chef đã chia sẻ!", time: "10 phút trước", avatar: "H" },
  ])
  const [viewerCount, setViewerCount] = useState(2341)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessages = [
        "Tuyệt vời quá!",
        "Mình muốn học làm món này",
        "Quán ở đâu vậy ạ?",
        "Giá bao nhiêu vậy chef?",
        "Nhìn ngon quá!",
        "Cảm ơn chef!",
      ]
      const randomUsers = ["Mai", "Hùng", "Linh", "Tuấn", "Hương", "Đức", "Nga", "Bình"]

      const newMessage = {
        id: Date.now(),
        user: randomUsers[Math.floor(Math.random() * randomUsers.length)],
        message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
        time: "Vừa xong",
        avatar: randomUsers[Math.floor(Math.random() * randomUsers.length)][0],
      }

      setChatMessages((prev) => [...prev, newMessage])

      // Simulate viewer count changes
      setViewerCount((prev) => prev + Math.floor(Math.random() * 10) - 4)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }, [chatMessages])

  const liveStreams = [
    {
      id: 1,
      title: "Làm Phở Bò truyền thống",
      restaurant: "Phở Hòa Pasteur",
      host: "Chef Minh",
      viewers: 2341,
      thumbnail: "/pho-bowl.jpg",
      isLive: true,
    },
    {
      id: 2,
      title: "Bí quyết làm Cơm Tấm ngon",
      restaurant: "Cơm Tấm Mộc",
      host: "Chef Lan",
      viewers: 876,
      thumbnail: "/com-tam-rice.jpg",
      isLive: true,
    },
    {
      id: 3,
      title: "Hướng dẫn làm Bánh Mì",
      restaurant: "Bánh Mì Huỳnh Hoa",
      host: "Chef Hoa",
      viewers: 543,
      thumbnail: "/banh-mi-sandwich.jpg",
      isLive: false,
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Lớp học làm Bánh Xèo",
      date: "15/01/2025",
      time: "14:00",
      host: "Chef Lan",
    },
    {
      id: 2,
      title: "Workshop Bún Bò Huế",
      date: "18/01/2025",
      time: "10:00",
      host: "Chef Minh",
    },
  ]

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setIsLiked(!isLiked)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        user: "Bạn",
        message: message.trim(),
        time: "Vừa xong",
        avatar: "B",
      }
      setChatMessages((prev) => [...prev, newMessage])
      setMessage("")
    }
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      <Navigation />

      <header className="border-b bg-gradient-to-r from-destructive/5 via-background to-destructive/5 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button asChild variant="ghost" size="icon">
                <Link href="/dashboard">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-destructive" />
                <h1 className="text-lg font-bold">Livestream</h1>
              </div>
            </div>
            <Button size="sm">
              <Video className="h-4 w-4 mr-2" />
              Bắt đầu phát
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col">
          <div className="relative bg-black aspect-video shadow-2xl">
            <img src="/pho-bowl.jpg" alt="Livestream" className="w-full h-full object-cover" />

            <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
              LIVE
            </Badge>

            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span className="font-semibold">{viewerCount.toLocaleString()}</span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 backdrop-blur-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-white">
                    <AvatarFallback>CM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-white font-bold text-lg">Làm Phở Bò truyền thống</h2>
                    <p className="text-white/80 text-sm">Phở Hòa Pasteur • Chef Minh</p>
                  </div>
                </div>
                <Button variant="secondary" size="sm">
                  Theo dõi
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t bg-gradient-to-r from-card via-background to-card p-4">
            <div className="flex items-center justify-around max-w-2xl mx-auto">
              <Button
                variant="ghost"
                size="sm"
                className={cn("flex-col h-auto gap-1", isLiked && "text-destructive")}
                onClick={handleLike}
              >
                <Heart className={cn("h-5 w-5", isLiked && "fill-current")} />
                <span className="text-xs">{likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex-col h-auto gap-1">
                <MessageCircle className="h-5 w-5" />
                <span className="text-xs">Bình luận</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex-col h-auto gap-1">
                <Share2 className="h-5 w-5" />
                <span className="text-xs">Chia sẻ</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex-col h-auto gap-1">
                <Gift className="h-5 w-5" />
                <span className="text-xs">Tặng quà</span>
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="border-t bg-card/50 backdrop-blur-sm p-4">
            <h3 className="font-semibold mb-3 text-lg">Livestream khác</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {liveStreams.slice(1).map((stream) => (
                <Card
                  key={stream.id}
                  className="cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all border-2"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={stream.thumbnail || "/placeholder.svg"}
                        alt={stream.title}
                        className="w-full aspect-video object-cover rounded-t-lg"
                      />
                      {stream.isLive && (
                        <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs">
                          LIVE
                        </Badge>
                      )}
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-0.5 rounded text-xs flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {stream.viewers}
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-semibold text-sm truncate">{stream.title}</h4>
                      <p className="text-xs text-muted-foreground truncate">{stream.restaurant}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-96 border-l bg-card/50 backdrop-blur-sm flex flex-col">
          <div className="border-b p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Trò chuyện trực tiếp</h3>
              <Badge variant="secondary" className="gap-1">
                <Users className="h-3 w-3" />
                {viewerCount.toLocaleString()}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">Tin nhắn được cập nhật tự động</p>
          </div>

          <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
            <div className="space-y-4">
              {chatMessages.map((comment) => (
                <div key={comment.id} className="flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{comment.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">{comment.user}</span>
                      <span className="text-xs text-muted-foreground">{comment.time}</span>
                    </div>
                    <p className="text-sm">{comment.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t p-3">
            <div className="flex gap-2 mb-3">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                <ThumbsUp className="h-4 w-4 mr-1" />
                Tuyệt
              </Button>
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                <Heart className="h-4 w-4 mr-1" />
                Thích
              </Button>
            </div>
          </div>

          <div className="border-t p-4 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="h-4 w-4 text-primary" />
              <h4 className="font-semibold text-sm">Sự kiện sắp tới</h4>
            </div>
            <div className="space-y-2">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="border">
                  <CardContent className="p-3">
                    <h5 className="font-semibold text-sm mb-1">{event.title}</h5>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {event.date} • {event.time}
                      </span>
                      <span>{event.host}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="border-t p-4">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Button type="button" variant="ghost" size="icon">
                <Smile className="h-5 w-5" />
              </Button>
              <Input
                placeholder="Viết bình luận..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
