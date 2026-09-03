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
})
