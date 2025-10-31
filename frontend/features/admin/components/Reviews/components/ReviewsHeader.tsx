"use client"

import { motion } from "framer-motion"
import { useAdminLanguage } from "@/features/admin/i18n"

export default function ReviewsHeader() {
    const { t } = useAdminLanguage()

    return (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#D4145A] to-[#FBB03B] bg-clip-text text-transparent">
                {t("manageReviews")}
            </h1>
            <p className="text-muted-foreground">{t("allReviews")}</p>
        </motion.div>
    )
}

