import { describe, expect, it } from 'vitest'
import { portfolioContent } from '../app/data/portfolio'

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
})
