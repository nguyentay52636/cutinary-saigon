"use client"

import { useState } from "react"
import { useAdminLanguage } from "@/features/admin/i18n"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { Textarea } from "@/shared/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog"
import { Plus } from "lucide-react"

export default function Header() {
    const { t } = useAdminLanguage()
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#D4145A] to-[#FBB03B] bg-clip-text text-transparent">
                    {t("manageLivestreams")}
                </h1>
                <p className="text-muted-foreground mt-1">{t("allLivestreams")}</p>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-[#D4145A] to-[#FBB03B] hover:opacity-90">
                        <Plus className="mr-2 h-4 w-4" />
                        {t("addLivestream")}
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>{t("addLivestream")}</DialogTitle>
                        <DialogDescription>{t("livestreamDescription")}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>{t("livestreamTitle")}</Label>
                            <Input placeholder={t("livestreamTitle")} />
                        </div>
                        <div className="space-y-2">
                            <Label>{t("description")}</Label>
                            <Textarea placeholder={t("description")} rows={3} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>{t("chef")}</Label>
                                <Input placeholder={t("chef")} />
                            </div>
                            <div className="space-y-2">
                                <Label>{t("scheduledTime")}</Label>
                                <Input type="datetime-local" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>{t("duration")}</Label>
                                <Input placeholder="60 phút" />
                            </div>
                            <div className="space-y-2">
                                <Label>{t("streamUrl")}</Label>
                                <Input placeholder="https://..." />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>{t("thumbnail")}</Label>
                            <Input type="file" accept="image/*" />
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                                {t("cancel")}
                            </Button>
                            <Button className="bg-gradient-to-r from-[#D4145A] to-[#FBB03B]">{t("save")}</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}


