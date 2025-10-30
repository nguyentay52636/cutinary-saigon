import AdminPages from '@/features/admin/AdminPages'
import React from 'react'

export default function page() {
    return (
        <>
            <AdminPages     
            children={<div>
                <h1>Admin Dashboard</h1>
            </div>}
            />
        </>
    )
}
