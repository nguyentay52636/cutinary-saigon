"use client"

import { useState, useEffect } from "react"
import { ChatButton, ChatWindow, type Message, getBotResponse } from "./components"

export default function Chat() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Xin chào! Tôi là trợ lý ảo của Sài Gòn Culinary Hub. Tôi có thể giúp gì cho bạn? 🍜",
            sender: "bot",
            timestamp: new Date(),
        },
    ])
    const [inputValue, setInputValue] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [unreadCount, setUnreadCount] = useState(0)

    useEffect(() => {
        if (isOpen) {
            setUnreadCount(0)
        }
    }, [isOpen])

    const handleSendMessage = () => {
        if (!inputValue.trim()) return

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInputValue("")
        setIsTyping(true)

        setTimeout(
            () => {
                setIsTyping(false)
                const botMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    text: getBotResponse(inputValue),
                    sender: "bot",
                    timestamp: new Date(),
                }
                setMessages((prev) => [...prev, botMessage])

                if (!isOpen) {
                    setUnreadCount((prev) => prev + 1)
                }
            },
            1000 + Math.random() * 1000,
        )
    }

    const handleContactAdmin = () => {
        const adminMessage: Message = {
            id: Date.now().toString(),
            text: "Đã chuyển bạn đến bộ phận hỗ trợ. Admin sẽ phản hồi trong vòng 24 giờ. Email: support@saigonculinary.com 📧",
            sender: "bot",
            timestamp: new Date(),
        }
        setMessages((prev) => [...prev, adminMessage])
    }

    const handleVoiceCall = () => {
        const callMessage: Message = {
            id: Date.now().toString(),
            text: "Đang kết nối cuộc gọi thoại với admin... ☎️ Hotline: +84 123 456 789",
            sender: "bot",
            timestamp: new Date(),
        }
        setMessages((prev) => [...prev, callMessage])
    }

    const handleVideoCall = () => {
        const callMessage: Message = {
            id: Date.now().toString(),
            text: "Đang kết nối cuộc gọi video với admin... 📹 Vui lòng chờ trong giây lát...",
            sender: "bot",
            timestamp: new Date(),
        }
        setMessages((prev) => [...prev, callMessage])
    }

    return (
        <>
            <ChatButton isOpen={isOpen} unreadCount={unreadCount} onOpen={() => setIsOpen(true)} />

            <ChatWindow
                isOpen={isOpen}
                messages={messages}
                isTyping={isTyping}
                inputValue={inputValue}
                onClose={() => setIsOpen(false)}
                onInputChange={setInputValue}
                onSendMessage={handleSendMessage}
                onContactAdmin={handleContactAdmin}
                onVoiceCall={handleVoiceCall}
                onVideoCall={handleVideoCall}
            />
        </>
    )
}
