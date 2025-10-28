'use client'

import React, { createContext, useContext } from 'react'
import { useLanguageStore } from '@/stores/language-store'
import translations from '@/app/locales'

type TranslationKey = keyof typeof translations.vi

interface TranslationContextType {
    language: string
    t: (key: TranslationKey) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: React.ReactNode }) {
    const { language } = useLanguageStore()
    const t = (key: TranslationKey) => translations[language as keyof typeof translations][key] || key

    return (
        <TranslationContext.Provider value={{ language, t }}>
            {children}
        </TranslationContext.Provider>
    )
}

export function useTranslation() {
    const context = useContext(TranslationContext)
    if (!context) {
        throw new Error('useTranslation must be used within TranslationProvider')
    }
    return context
}

