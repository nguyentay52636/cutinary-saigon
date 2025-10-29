import { Badge } from "@/shared/ui/badge"
import { Avatar, AvatarFallback } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"
import { Eye, Star, Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface LiveStreamPlayerProps {
    title: string
    restaurant: string
    host: string
    viewerCount: number
    floatingReactions: { id: number; emoji: string }[]
}

export default function LiveStreamPlayer({
    title,
    restaurant,
    host,
    viewerCount,
    floatingReactions,
}: LiveStreamPlayerProps) {
    return (
        <div className="relative bg-black aspect-video shadow-2xl overflow-hidden">
            <img src="/img/pho-bowl.jpg" alt="Livestream" className="w-full h-full object-cover" />

            {/* LIVE Badge */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute top-4 left-4"
            >
                <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white border-0 shadow-lg px-3 py-1.5">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                        className="w-2 h-2 bg-white rounded-full mr-2"
                    />
                    <span className="font-bold">LIVE</span>
                </Badge>
            </motion.div>

            {/* Viewer Count */}
            <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-white/10"
            >
                <Eye className="h-4 w-4 text-red-400" />
                <span className="font-bold">{viewerCount.toLocaleString()}</span>
            </motion.div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6 backdrop-blur-sm">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <motion.div whileHover={{ scale: 1.05 }} className="relative">
                            <Avatar className="h-14 w-14 border-2 border-white shadow-lg">
                                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
                                    CM
                                </AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-black">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                        </motion.div>
                        <div>
                            <h2 className="text-white font-bold text-xl mb-1">{title}</h2>
                            <p className="text-white/90 text-sm flex items-center gap-2">
                                <span>{restaurant}</span>
                                <span className="text-white/50">•</span>
                                <span>{host}</span>
                                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-1" />
                            </p>
                        </div>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg">
                            Theo dõi
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Floating Reactions */}
            <AnimatePresence>
                {floatingReactions.map((reaction) => (
                    <motion.div
                        key={reaction.id}
                        initial={{ y: 0, x: Math.random() * 100 - 50, opacity: 1, scale: 0 }}
                        animate={{ y: -200, opacity: 0, scale: 1.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        className="absolute bottom-32 left-1/2 text-4xl pointer-events-none"
                        style={{ left: `${Math.random() * 80 + 10}%` }}
                    >
                        {reaction.emoji}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

