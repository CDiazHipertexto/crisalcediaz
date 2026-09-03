import { portfolioContent, type Locale } from '~/data/portfolio'

export const usePortfolioContent = () => ({
  getContent: (locale: Locale) => portfolioContent[locale],
})

