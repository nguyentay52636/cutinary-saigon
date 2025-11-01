"use client"

import { useRef, useEffect } from "react"
import { ScrollArea } from "@/shared/ui/scroll-area"
import { Message } from "./types"
import MessageBubble from "./MessageBubble"
import TypingIndicator from "./TypingIndicator"

interface ChatMessagesProps {
    messages: Message[]
    isTyping: boolean
}

export default function ChatMessages({ messages, isTyping }: ChatMessagesProps) {
    const scrollAreaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollAreaRef.current) {
            const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
            if (scrollContainer) {
                scrollContainer.scrollTop = scrollContainer.scrollHeight
            }
        }
    }, [messages, isTyping])

    return (
        <div className="flex-1 overflow-hidden">
            <ScrollArea ref={scrollAreaRef} className="h-full">
                <div className="p-4 space-y-4">
                    {messages.map((message) => (
                        <MessageBubble key={message.id} message={message} />
                    ))}
                    {isTyping && <TypingIndicator />}
                </div>
            </ScrollArea>
        </div>
    )
}

