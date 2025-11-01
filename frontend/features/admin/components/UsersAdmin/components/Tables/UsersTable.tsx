"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu"
import { Eye, Edit, XCircle, MoreVertical } from "lucide-react"
import { useAdminLanguage } from "@/features/admin/i18n"
import { User } from "../types"
import { getInitials, getStatusBadge, getRoleBadge } from "../utils"

interface UsersTableProps {
    users: User[]
    onViewDetails: (user: User) => void
}

export default function UsersTable({ users, onViewDetails }: UsersTableProps) {
    const { t } = useAdminLanguage()

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>{t("Người dùng")}</TableHead>
                    <TableHead>{t("Email")}</TableHead>
                    <TableHead>{t("Vai trò")}</TableHead>
                    <TableHead>{t("Ngày tham gia")}</TableHead>
                    <TableHead>{t("Trạng thái")}</TableHead>
                    <TableHead className="text-right">{t("Thao tác")}</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{user.name}</span>
                            </div>
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{getRoleBadge(user.role)}</TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell className="text-right">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => onViewDetails(user)}>
                                        <Eye className="h-4 w-4 mr-2" />
                                        {t("Xem hồ sơ")}
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Edit className="h-4 w-4 mr-2" />
                                        {t("Chỉnh sửa")}
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive">
                                        <XCircle className="h-4 w-4 mr-2" />
                                        {t("Tạm khóa")}
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

