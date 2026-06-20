import type { NavbarLink } from '@explainer/ui'
import { LocaleSwitcher, MobileMenu, MobileNavLinks } from '@explainer/ui'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { useTranslations } from '../i18n/utils'

const APP_URL = 'https://app.mestier.fr'

function getClientLocale(): string {
  const match = document.cookie.match(/(?:^|; )locale=([^;]*)/)
  const cookie = match?.[1]
  if (cookie === 'en' || cookie === 'fr') return cookie
  const browser = (navigator.language || '').split('-')[0]
  if (browser === 'en' || browser === 'fr') return browser
  return 'fr'
}

interface WebsiteNavbarProps {
  appUrlOverrides?: Partial<Record<string, string>>
}

export function WebsiteNavbar({ appUrlOverrides }: WebsiteNavbarProps) {
  const [locale, setLocale] = useState('fr')
  const t = useTranslations(locale)
  const websiteUrl = appUrlOverrides?.website ?? '/'

  useEffect(() => {
    setLocale(getClientLocale())
  }, [])

  // Section anchors rendered as the grid of nav cells.
  const sectionLinks: NavbarLink[] = [
    { label: t('nav.features'), href: '#features' },
    { label: t('nav.usecases'), href: '#usecases' },
    { label: t('nav.pricing'), href: '#pricing' },
  ]

  const cellLink =
    'flex items-center whitespace-nowrap border-r border-border px-5 text-[15px] font-medium text-foreground transition-colors hover:bg-foreground/[0.04]'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="flex h-15 items-stretch">
        {/* Mobile menu trigger */}
        <div className="flex items-center border-r border-border px-3 lg:hidden">
          <MobileMenu
            breakpoint="lg"
            footer={
              <LocaleSwitcher
                locales={['fr', 'en']}
                currentLocale={locale}
                onLocaleChange={(l) => {
                  setLocale(l)
                  window.dispatchEvent(new CustomEvent('locale:change', { detail: { locale: l } }))
                }}
              />
            }
          >
            <MobileNavLinks links={sectionLinks} appLinks={[]} />
          </MobileMenu>
        </div>

        {/* Logo cell */}
        <a
          href={websiteUrl}
          className="flex items-center gap-2 border-r border-border px-4 sm:px-5"
          aria-label="Mestier"
        >
          <img src="/logo.svg" alt="" className="size-5" />
          <span className="text-[15px] font-semibold tracking-tight">Mestier</span>
        </a>

        {/* Desktop nav grid */}
        <nav className="hidden items-stretch lg:flex">
          {sectionLinks.map((link) => (
            <a key={link.href} href={link.href} className={cellLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Flexible gap */}
        <div className="flex-1" />

        {/* Locale switcher cell */}
        <div className="hidden items-center border-l border-border px-1.5 sm:flex">
          <LocaleSwitcher
            locales={['fr', 'en']}
            currentLocale={locale}
            onLocaleChange={(l) => {
              setLocale(l)
              window.dispatchEvent(new CustomEvent('locale:change', { detail: { locale: l } }))
            }}
          />
        </div>

        {/* Secondary action (like Mistral's "Start building") */}
        <a
          href="https://github.com/ferrislabs/mestier"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 border-l border-border px-5 text-[15px] font-medium text-foreground transition-colors hover:bg-foreground/[0.04] md:flex"
        >
          <Icon icon="mdi:github" className="size-4.5" />
          GitHub
        </a>

        {/* Primary action — opens the Mestier app */}
        <a
          href={APP_URL}
          rel="noopener noreferrer"
          className="flex items-center gap-2 whitespace-nowrap bg-primary px-5 text-[15px] font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:px-6"
        >
          {t('nav.getStarted')}
          <Icon icon="mdi:chevron-right" className="size-4.5" />
        </a>
      </div>
    </header>
  )
}
