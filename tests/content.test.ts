import { describe, expect, it } from 'vitest'
import { portfolioContent } from '../app/data/portfolio'
import { archiveContent } from '../app/data/archive'
import { labContent } from '../app/data/lab'

describe('portfolio content', () => {
  it('keeps Spanish and English navigation aligned', () => {
    expect(portfolioContent.es.nav).toHaveLength(portfolioContent.en.nav.length)
  })

  it('marks every project with a disclosure status', () => {
    for (const locale of Object.values(portfolioContent)) {
      expect(locale.projects.every(project => project.status.length > 0)).toBe(true)
    }
  })

  it('represents the three professional branches in both languages', () => {
    for (const locale of Object.values(portfolioContent)) {
      expect(locale.branches.items.map(branch => branch.id)).toEqual(['frontend', 'uxui', 'graphic'])
      expect(new Set(locale.projects.map(project => project.category))).toEqual(new Set(['frontend', 'uxui', 'graphic']))
    }
  })

  it('provides alternative text and dimensions for every project image', () => {
    for (const locale of ['es', 'en'] as const) {
      for (const project of portfolioContent[locale].projects.filter(item => item.image)) {
        expect(project.imageAlt).toBeTruthy()
        expect(project.imageWidth).toBeGreaterThan(0)
        expect(project.imageHeight).toBeGreaterThan(0)
      }
    }
  })

  it('keeps verified career and education dates in both languages', () => {
    expect(portfolioContent.es.experience.items[0]?.period).toBe('Oct 2023 — 24 Jul 2026')
    expect(portfolioContent.en.experience.items[0]?.period).toBe('Oct 2023 — Jul 24, 2026')
    expect(portfolioContent.es.education.degrees[0]?.title).toContain('Inteligencia Artificial')
    expect(portfolioContent.en.education.degrees[0]?.title).toContain('Artificial Intelligence')
  })

  it('publishes the requested WhatsApp channel safely', () => {
    for (const locale of Object.values(portfolioContent)) {
      const whatsapp = locale.contact.links.find(link => link.label === 'WhatsApp')
      expect(whatsapp?.href).toMatch(/^https:\/\/wa\.me\/573208511297\?text=/)
    }
  })

  it('lists sixteen unique website implementations in both languages', () => {
    for (const locale of Object.values(archiveContent)) {
      expect(locale.web.all).toHaveLength(16)
      expect(new Set(locale.web.all.map(item => item.url))).toHaveLength(16)
    }
  })

  it('provides optimized evidence and accessible text for every featured website', () => {
    for (const locale of Object.values(archiveContent)) {
      for (const item of locale.web.featured) {
        expect(item.image).toMatch(/\.webp$/)
        expect(item.alt).toBeTruthy()
        expect(item.width).toBeGreaterThan(0)
        expect(item.height).toBeGreaterThan(0)
      }
    }
  })

  it('exposes the three selected videos and the public channel', () => {
    for (const locale of Object.values(archiveContent)) {
      expect(locale.motion.videos.map(video => video.id)).toEqual(['wpKGBAqxByw', 'yXxhGUVNyqU', 'TPnonwRnPzc'])
      expect(locale.motion.channelUrl).toBe('https://www.youtube.com/@cristianrsalcedodiaz229')
    }
  })

  it('links the system, archive and resume from both home navigations', () => {
    for (const locale of Object.values(portfolioContent)) {
      expect(locale.nav.some(item => item.href === '#system')).toBe(true)
      expect(locale.nav.some(item => item.href.includes('archive'))).toBe(true)
      expect(locale.nav.some(item => item.href.includes('resume'))).toBe(true)
    }
  })

  it('labels AI specialization work honestly as exploration and roadmap', () => {
    expect(labContent.es.ai.items).toHaveLength(6)
    expect(labContent.en.ai.items).toHaveLength(6)
    expect(labContent.es.hero.note).toContain('no se presentan como experiencia profesional terminada')
    expect(labContent.en.hero.note).toContain('not completed professional experience')
  })
})
