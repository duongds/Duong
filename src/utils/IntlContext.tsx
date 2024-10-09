import { useState, createContext, useContext, ReactNode } from 'react'
import { IntlProvider } from 'react-intl'
import React from 'react'

import messagesEn from '@/locales/en.json'
import messagesVi from '@/locales/vi.json'
import { Storage, STORAGE_KEYS } from '@/utils/storage'

type Language = 'en' | 'vi'

interface LanguageContextType {
  locale: Language
  switchLanguage: (language: Language) => void
}

const menuMessages: Record<Language, Record<string, string>> = {
  en: messagesEn as Record<string, string>,
  vi: messagesVi as Record<string, string>,
}

const IntlContext = createContext<LanguageContextType | undefined>(undefined)

interface IntlProviderWrapperProps {
  children: ReactNode
}

const IntlProviderWrapper = ({ children }: IntlProviderWrapperProps) => {
  const initLang = (Storage.getItem(STORAGE_KEYS.language) || 'vi') as Language
  const [locale, setLocale] = useState<Language>(initLang)
  const [messages, setMessages] = useState<Record<string, string>>(menuMessages[locale])

  const switchLanguage = (language: Language) => {
    setLocale(language)
    setMessages(menuMessages[language])
    Storage.setItem(STORAGE_KEYS.language, language)
  }

  return (
    <IntlContext.Provider value={{ locale, switchLanguage }}>
      <IntlProvider key={locale} locale={locale} messages={messages} defaultLocale="vi">
        {children}
      </IntlProvider>
    </IntlContext.Provider>
  )
}

const useIntl = () => {
  const context = useContext(IntlContext)
  if (context === undefined) {
    throw new Error('useIntl must be used within an IntlProviderWrapper')
  }
  return context
}

export { IntlProviderWrapper, useIntl }
