"use client"

import { Button } from "@/shared/ui/button"
import { Plus } from "lucide-react"
import { useAdminLanguage } from "@/features/admin/i18n"
import AddLocationDialog from "./Dialog/AddLocationDialog"

interface LocationsAdminHeaderProps {
    isDialogOpen: boolean
    onDialogOpenChange: (open: boolean) => void
}

export default function LocationsAdminHeader({ isDialogOpen, onDialogOpenChange }: LocationsAdminHeaderProps) {
    const { t } = useAdminLanguage()

    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {t("Quản lý địa điểm")}
                </h1>
                <p className="text-muted-foreground">{t("Quản lý tất cả địa điểm")}</p>
            </div>
            <AddLocationDialog isOpen={isDialogOpen} onOpenChange={onDialogOpenChange}>
                <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                    <Plus className="h-4 w-4 mr-2" />
                    {t("Thêm địa điểm")}
                </Button>
            </AddLocationDialog>
        </div>
    )
}

