export const useSiteMotion = () => {
  let stopInView: (() => void) | undefined

  onMounted(async () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const { animate, inView, stagger } = await import('motion')
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    for (const section of sections) {
      section.style.opacity = '0'
      section.style.transform = 'translateY(2rem)'
    }

    stopInView = inView(sections, (section) => {
      animate(section, { opacity: 1, transform: 'translateY(0)' }, { duration: 0.7, ease: [0.22, 1, 0.36, 1] })

      const items = section.querySelectorAll<HTMLElement>('[data-reveal-item]')
      if (items.length) {
        animate(items, { opacity: [0, 1], transform: ['translateY(1rem)', 'translateY(0)'] }, {
          duration: 0.55,
          delay: stagger(0.055),
          ease: [0.22, 1, 0.36, 1],
        })
      }
    }, { amount: 0.12, margin: '0px 0px -10% 0px' })
  })

  onBeforeUnmount(() => stopInView?.())
}
