import React from 'react'
import SiderBarAdmin from './components/SiderBarAdmin'

export default function AdminPages() {
    return (
        <>
            <div className="flex h-screen overflow-hidden bg-background">
                <SiderBarAdmin collapsed={false} onToggle={() => { }} />
                <main className="flex-1 overflow-auto">
                    <div className="container mx-auto p-4">
                        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                    </div>
                </main>
            </div>
        </>
    )
}
