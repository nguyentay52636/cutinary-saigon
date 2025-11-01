"use client"

import { useRef, useEffect } from "react"
import { Send } from "lucide-react"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"

interface ChatInputProps {
    value: string
    onChange: (value: string) => void
    onSend: () => void
    isOpen: boolean
}

export default function ChatInput({ value, onChange, onSend, isOpen }: ChatInputProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus()
        }
    }, [isOpen])

    return (
        <div className="p-4 border-t border-border bg-muted/30 flex-shrink-0">
            <div className="flex gap-2">
                <Input
                    ref={inputRef}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            onSend()
                        }
                    }}
                    placeholder="Nhập tin nhắn..."
                    className="flex-1"
                />
                <Button
                    onClick={onSend}
                    size="icon"
                    className="bg-primary hover:primary/90 cursor-pointer"
                >
                    <Send className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

