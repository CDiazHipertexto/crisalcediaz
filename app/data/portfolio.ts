export type Locale = 'es' | 'en'

export interface PortfolioContent {
  locale: Locale
  alternatePath: string
  languageLabel: string
  nav: Array<{ label: string; href: string }>
  hero: {
    eyebrow: string
    title: string
    lead: string
    primaryCta: string
    secondaryCta: string
    availability: string
  }
  principles: Array<{ index: string; title: string; description: string }>
  projects: Array<{
    number: string
    type: string
    title: string
    description: string
    tags: string[]
    status: string
    href?: string
  }>
  system: { eyebrow: string; title: string; description: string; metrics: Array<{ value: string; label: string }> }
  framework: { eyebrow: string; title: string; description: string; items: Array<{ name: string; role: string; detail: string }> }
  ai: { eyebrow: string; title: string; description: string; cta: string }
  about: { eyebrow: string; title: string; paragraphs: string[] }
  contact: { eyebrow: string; title: string; description: string; cta: string }
  labels: {
    work: string
    workTitle: string
    workIntro: string
    openSite: string
    caseSoon: string
    menu: string
    theme: string
    assistant: string
    footer: string
  }
}

export const portfolioContent: Record<Locale, PortfolioContent> = {
  es: {
    locale: 'es',
    alternatePath: '/en',
    languageLabel: 'EN',
    nav: [
      { label: 'Trabajo', href: '#work' },
      { label: 'Sistema', href: '#system' },
      { label: 'AI Lab', href: '#ai-lab' },
      { label: 'Perfil', href: '#about' },
    ],
    hero: {
      eyebrow: 'DESIGN ENGINEER · PRODUCT DESIGN · FRONTEND',
      title: 'Diseño sistemas. Construyo experiencias. Orquesto flujos con IA.',
      lead: 'Conecto diseño de producto, sistemas visuales, frontend y contexto de negocio para convertir complejidad empresarial en productos claros y escalables.',
      primaryCta: 'Explorar trabajo',
      secondaryCta: 'Pregúntale a Cris',
      availability: 'Bogotá · Disponible para retos de producto',
    },
    principles: [
      { index: '01', title: 'Pienso en sistemas', description: 'Conecto decisiones, reglas y estados antes de dibujar pantallas.' },
      { index: '02', title: 'Diseño con restricciones', description: 'Trabajo entre negocio, tecnología, accesibilidad y operación real.' },
      { index: '03', title: 'Construyo para aprender', description: 'Prototipo, implemento y mido para reducir incertidumbre.' },
    ],
    projects: [
      {
        number: '01',
        type: 'Caso anonimizado · En documentación',
        title: 'Estructura comercial empresarial',
        description: 'Jerarquías, nodos, puntos de venta, usuarios, cargas masivas, aprobaciones y mensajes comprensibles bajo restricciones de Salesforce Lightning.',
        tags: ['Product Design', 'Enterprise UX', 'Design System'],
        status: 'Contenido sensible en proceso de anonimización',
      },
      {
        number: '02',
        type: 'Trabajo real · Selección web',
        title: 'Experiencias editoriales y hospitality',
        description: 'Una selección de interfaces implementadas desde diseño para marcas editoriales, hotelería y experiencias de destino.',
        tags: ['UX/UI', 'Frontend', 'Responsive'],
        status: 'Autoría y alcance detallado pendientes de validación',
        href: 'https://www.hotelfrayenashville.com/',
      },
      {
        number: '03',
        type: 'Producto propio · En construcción',
        title: 'CRIS/OS Design System',
        description: 'Foundations, tokens semánticos, componentes accesibles y contratos compartidos entre diseño y código.',
        tags: ['Tokens', 'Accessibility', 'Vue'],
        status: 'Prototipo funcional',
      },
    ],
    system: {
      eyebrow: 'CRIS/OS · DESIGN SYSTEM',
      title: 'Un lenguaje común entre intención y ejecución.',
      description: 'La interfaz que estás viendo es el primer consumidor del sistema: color semántico, escalas fluidas, foco visible, temas y movimiento responsable.',
      metrics: [
        { value: '3', label: 'capas de tokens' },
        { value: 'AA', label: 'objetivo WCAG 2.2' },
        { value: '2', label: 'temas iniciales' },
        { value: '0', label: 'componentes sin propósito' },
      ],
    },
    framework: {
      eyebrow: 'FRAMEWORK LAB · ARQUITECTURA PROPUESTA',
      title: 'Tres tecnologías. Tres problemas adecuados.',
      description: 'El portafolio no cargará tres frameworks a la vez. Cada demo será un artefacto aislado, generado estáticamente y cargado bajo demanda.',
      items: [
        { name: 'Vue / Nuxt', role: 'Shell editorial', detail: 'Contenido, SEO, navegación y Design System del portafolio.' },
        { name: 'React', role: 'Experimento agentic', detail: 'Interfaz conversacional y visualización de trazas/evaluaciones.' },
        { name: 'Angular', role: 'Flujo enterprise', detail: 'Demo de reglas, tablas, estados y formularios complejos.' },
      ],
    },
    ai: {
      eyebrow: 'AI LAB · EXPERIENCIA ASISTIDA',
      title: 'Ask Cris no reemplaza la navegación. La vuelve conversable.',
      description: 'El primer prototipo responde desde un conjunto local de fuentes públicas. La integración con IA se activará después de aprobar proveedor, privacidad, límites y guardrails.',
      cta: 'Abrir asistente local',
    },
    about: {
      eyebrow: 'SOBRE MÍ · INTERSECCIÓN',
      title: 'Diseño donde producto, sistemas y código se encuentran.',
      paragraphs: [
        'Soy Cristian Rubén Salcedo Díaz. Mi experiencia combina UX/UI, arquitectura de información, sistemas de diseño, frontend y comunicación visual aplicada a productos reales.',
        'Estoy ampliando esa práctica hacia AI Product Design, agentes, RAG, automatización y evaluación responsable de soluciones asistidas por IA.',
      ],
    },
    contact: {
      eyebrow: 'SIGUIENTE NODO',
      title: 'Conversemos sobre el sistema que necesitas construir.',
      description: 'Producto, Design Systems, UX/UI, frontend o flujos asistidos por IA.',
      cta: 'Contacto público pendiente',
    },
    labels: {
      work: 'Trabajo seleccionado',
      workTitle: 'Casos que explican decisiones, no solo pantallas.',
      workIntro: 'La evidencia disponible se está organizando por contexto, restricciones, proceso, resultado y confidencialidad.',
      openSite: 'Ver sitio público',
      caseSoon: 'Caso completo próximamente',
      menu: 'Abrir navegación',
      theme: 'Cambiar tema',
      assistant: 'Abrir Ask Cris',
      footer: 'Diseñado como producto. Construido como sistema.',
    },
  },
  en: {
    locale: 'en',
    alternatePath: '/',
    languageLabel: 'ES',
    nav: [
      { label: 'Work', href: '#work' },
      { label: 'System', href: '#system' },
      { label: 'AI Lab', href: '#ai-lab' },
      { label: 'About', href: '#about' },
    ],
    hero: {
      eyebrow: 'DESIGN ENGINEER · PRODUCT DESIGN · FRONTEND',
      title: 'I design systems. I engineer experiences. I orchestrate AI-assisted workflows.',
      lead: 'I connect product design, visual systems, frontend engineering and business context to turn enterprise complexity into clear, scalable products.',
      primaryCta: 'Explore work',
      secondaryCta: 'Ask Cris',
      availability: 'Bogotá · Open to product challenges',
    },
    principles: [
      { index: '01', title: 'Systems first', description: 'I connect decisions, rules and states before drawing screens.' },
      { index: '02', title: 'Designed with constraints', description: 'I work across business, technology, accessibility and operations.' },
      { index: '03', title: 'Built to learn', description: 'I prototype, implement and measure to reduce uncertainty.' },
    ],
    projects: [
      {
        number: '01',
        type: 'Anonymized case · In documentation',
        title: 'Enterprise sales structure',
        description: 'Hierarchies, nodes, points of sale, users, bulk uploads, approvals and understandable feedback under Salesforce Lightning constraints.',
        tags: ['Product Design', 'Enterprise UX', 'Design System'],
        status: 'Sensitive content is being anonymized',
      },
      {
        number: '02',
        type: 'Real work · Web selection',
        title: 'Editorial and hospitality experiences',
        description: 'A selection of interfaces implemented from design for publishing, hospitality and destination brands.',
        tags: ['UX/UI', 'Frontend', 'Responsive'],
        status: 'Detailed authorship and scope pending validation',
        href: 'https://www.hotelfrayenashville.com/',
      },
      {
        number: '03',
        type: 'Own product · In progress',
        title: 'CRIS/OS Design System',
        description: 'Foundations, semantic tokens, accessible components and shared contracts between design and code.',
        tags: ['Tokens', 'Accessibility', 'Vue'],
        status: 'Working prototype',
      },
    ],
    system: {
      eyebrow: 'CRIS/OS · DESIGN SYSTEM',
      title: 'A shared language between intent and execution.',
      description: 'This interface is the system’s first consumer: semantic color, fluid scales, visible focus, themes and responsible motion.',
      metrics: [
        { value: '3', label: 'token layers' },
        { value: 'AA', label: 'WCAG 2.2 target' },
        { value: '2', label: 'initial themes' },
        { value: '0', label: 'components without purpose' },
      ],
    },
    framework: {
      eyebrow: 'FRAMEWORK LAB · PROPOSED ARCHITECTURE',
      title: 'Three technologies. Three suitable problems.',
      description: 'The portfolio will not ship three frameworks at once. Each demo will be isolated, statically generated and loaded on demand.',
      items: [
        { name: 'Vue / Nuxt', role: 'Editorial shell', detail: 'Content, SEO, navigation and the portfolio Design System.' },
        { name: 'React', role: 'Agentic experiment', detail: 'Conversational UI and trace/evaluation visualization.' },
        { name: 'Angular', role: 'Enterprise flow', detail: 'Rules, tables, states and complex forms demo.' },
      ],
    },
    ai: {
      eyebrow: 'AI LAB · ASSISTED EXPERIENCE',
      title: 'Ask Cris does not replace navigation. It makes it conversational.',
      description: 'The first prototype answers from a local set of public sources. AI integration will follow approval of provider, privacy, limits and guardrails.',
      cta: 'Open local assistant',
    },
    about: {
      eyebrow: 'ABOUT · INTERSECTION',
      title: 'I design where product, systems and code meet.',
      paragraphs: [
        'I am Cristian Rubén Salcedo Díaz. My experience combines UX/UI, information architecture, design systems, frontend development and visual communication applied to real products.',
        'I am expanding this practice into AI Product Design, agents, RAG, automation and responsible evaluation of AI-assisted solutions.',
      ],
    },
    contact: {
      eyebrow: 'NEXT NODE',
      title: 'Let’s talk about the system you need to build.',
      description: 'Product, Design Systems, UX/UI, frontend or AI-assisted workflows.',
      cta: 'Public contact pending',
    },
    labels: {
      work: 'Selected work',
      workTitle: 'Cases that explain decisions, not just screens.',
      workIntro: 'Available evidence is being organized by context, constraints, process, outcome and confidentiality.',
      openSite: 'Visit public site',
      caseSoon: 'Full case coming soon',
      menu: 'Open navigation',
      theme: 'Switch theme',
      assistant: 'Open Ask Cris',
      footer: 'Designed as a product. Built as a system.',
    },
  },
}

