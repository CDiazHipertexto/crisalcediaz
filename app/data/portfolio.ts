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
  branches: {
    eyebrow: string
    title: string
    description: string
    items: Array<{ id: string; title: string; role: string; description: string; capabilities: string[] }>
  }
  stack: {
    eyebrow: string
    title: string
    description: string
    groups: Array<{ category: string; label: string; items: string[] }>
  }
  projects: Array<{
    number: string
    type: string
    title: string
    description: string
    tags: string[]
    status: string
    category: 'frontend' | 'uxui' | 'graphic'
    href?: string
    image?: string
    imageAlt?: string
    imageWidth?: number
    imageHeight?: number
  }>
  system: { eyebrow: string; title: string; description: string; metrics: Array<{ value: string; label: string }> }
  framework: { eyebrow: string; title: string; description: string; items: Array<{ name: string; role: string; detail: string }> }
  ai: { eyebrow: string; title: string; description: string; cta: string }
  about: { eyebrow: string; title: string; paragraphs: string[] }
  experience: {
    eyebrow: string
    title: string
    description: string
    items: Array<{ period: string; role: string; company: string; description: string; tags: string[] }>
  }
  education: {
    eyebrow: string
    title: string
    description: string
    degrees: Array<{ year: string; title: string; institution: string }>
    learningLabel: string
    learning: string[]
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    cta: string
    assistantCta: string
    links: Array<{ label: string; href: string; detail: string }>
  }
  labels: {
    work: string
    workTitle: string
    workIntro: string
    projectTabs: Record<'all' | 'frontend' | 'uxui' | 'graphic', string>
    archiveCta: string
    archiveDescription: string
    systemCta: string
    resumeCta: string
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
      { label: 'Perfil', href: '#about' },
      { label: 'Stack', href: '#stack' },
      { label: 'Experiencia', href: '#experience' },
      { label: 'Proyectos', href: '#work' },
      { label: 'Sistema', href: '#system' },
      { label: 'Archivo', href: '/archive' },
      { label: 'CV', href: '/resume' },
      { label: 'Contacto', href: '#contact' },
    ],
    hero: {
      eyebrow: 'DESIGN ENGINEER · UX/UI · FRONTEND · GRAPHIC DESIGN',
      title: 'Diseño sistemas. Construyo experiencias. Orquesto flujos con IA.',
      lead: 'Conecto diseño de producto, sistemas visuales, frontend y contexto de negocio para convertir complejidad empresarial en productos claros y escalables.',
      primaryCta: 'Explorar trabajo',
      secondaryCta: 'Pregúntale a Cris',
      availability: 'Bogotá · Disponible para nuevos retos',
    },
    principles: [
      { index: '01', title: 'Pienso en sistemas', description: 'Conecto decisiones, reglas y estados antes de dibujar pantallas.' },
      { index: '02', title: 'Diseño con restricciones', description: 'Trabajo entre negocio, tecnología, accesibilidad y operación real.' },
      { index: '03', title: 'Construyo para aprender', description: 'Prototipo, implemento y mido para reducir incertidumbre.' },
    ],
    branches: {
      eyebrow: 'PERFIL · TRES RAMAS CONECTADAS',
      title: 'Una práctica híbrida, no tres perfiles aislados.',
      description: 'Mi valor está en conectar pensamiento visual, experiencia de usuario e implementación. Cada rama tiene profundidad propia y comparte el mismo objetivo: productos claros, útiles y construibles.',
      items: [
        {
          id: 'frontend',
          title: 'Frontend Engineering',
          role: 'De diseño a interfaz productiva',
          description: 'Maquetación semántica, componentes, responsive, accesibilidad, rendimiento e integración dentro de plataformas empresariales y editoriales.',
          capabilities: ['HTML5', 'CSS3 / SCSS', 'JavaScript ES6+', 'Angular', 'Vue.js', 'Liferay', 'Git'],
        },
        {
          id: 'uxui',
          title: 'UX/UI & Product Design',
          role: 'De complejidad a decisiones',
          description: 'Arquitectura de información, flujos, wireframes, prototipos, UX Writing y sistemas visuales alineados con restricciones técnicas y de negocio.',
          capabilities: ['Figma', 'Auto Layout', 'Design Systems', 'Prototyping', 'Responsive', 'Accessibility', 'IxD'],
        },
        {
          id: 'graphic',
          title: 'Diseño gráfico',
          role: 'De mensaje a sistema visual',
          description: 'Comunicación visual, diseño editorial, arte final, piezas digitales, email marketing y experiencias interactivas para distintos canales.',
          capabilities: ['Illustrator', 'Photoshop', 'InDesign', 'After Effects', 'Premiere', 'Editorial', 'ePub'],
        },
      ],
    },
    stack: {
      eyebrow: 'STACK · HERRAMIENTAS EN CONTEXTO',
      title: 'Tecnología y diseño aplicados a problemas reales.',
      description: 'No es una colección de logos. Cada herramienta está asociada a una parte verificable de mi práctica profesional.',
      groups: [
        { category: 'frontend', label: 'Frontend', items: ['HTML5', 'CSS3', 'Sass / SCSS', 'JavaScript', 'TypeScript', 'Angular', 'Vue.js', 'React · formación', 'Liferay', 'PHP / Symfony', 'REST APIs', 'Git'] },
        { category: 'uxui', label: 'UX/UI & Product', items: ['Figma', 'Adobe XD', 'Arquitectura de información', 'User flows', 'Wireframes', 'Prototipos', 'Design Systems', 'UX Writing', 'Accesibilidad', 'Responsive Design'] },
        { category: 'graphic', label: 'Diseño gráfico', items: ['Illustrator', 'Photoshop', 'InDesign', 'After Effects', 'Premiere Pro', 'Acrobat', 'Diseño editorial', 'Arte final', 'ePub', 'Email marketing'] },
        { category: 'workflow', label: 'Producto y colaboración', items: ['Jira', 'Azure DevOps', 'Salesforce Lightning', 'WordPress', 'WooCommerce', 'Magento', 'VTEX', 'SEO técnico', 'QA visual', 'IA aplicada'] },
      ],
    },
    projects: [
      {
        number: '01',
        type: 'Caso anonimizado · En documentación',
        title: 'Estructura comercial empresarial',
        description: 'Jerarquías, nodos, puntos de venta, usuarios, cargas masivas, aprobaciones y mensajes comprensibles bajo restricciones de Salesforce Lightning.',
        tags: ['Product Design', 'Enterprise UX', 'Design System'],
        status: 'Contenido sensible en proceso de anonimización',
        category: 'uxui',
      },
      {
        number: '02',
        type: 'Trabajo real · Selección web',
        title: 'Experiencias editoriales y hospitality',
        description: 'Una selección de interfaces implementadas desde diseño para marcas editoriales, hotelería y experiencias de destino.',
        tags: ['UX/UI', 'Frontend', 'Responsive'],
        status: 'Autoría y alcance detallado pendientes de validación',
        category: 'frontend',
        href: 'https://www.stockbridgeinn.com/',
        image: '/images/work/hospitality-ux.webp',
        imageAlt: 'Diseño de página principal para The Inn at Stockbridge con módulos editoriales y fotografía de hospitalidad.',
        imageWidth: 1200,
        imageHeight: 4024,
      },
      {
        number: '03',
        type: 'Producto propio · En construcción',
        title: 'CRIS/OS Design System',
        description: 'Foundations, tokens semánticos, componentes accesibles y contratos compartidos entre diseño y código.',
        tags: ['Tokens', 'Accessibility', 'Vue'],
        status: 'Prototipo funcional',
        category: 'uxui',
      },
      {
        number: '04',
        type: 'Trabajo real · Editorial digital',
        title: 'Publicaciones, ePub y campañas',
        description: 'Diseño y desarrollo de publicaciones electrónicas, piezas digitales, landing pages y email marketing para ecosistemas editoriales.',
        tags: ['ePub', 'Editorial', 'HTML Email'],
        status: 'Selección visual en preparación',
        category: 'graphic',
        image: '/images/work/editorial-platform.webp',
        imageAlt: 'Interfaz de PasaLaPágina con colecciones editoriales organizadas por categorías.',
        imageWidth: 1200,
        imageHeight: 1638,
      },
      {
        number: '05',
        type: 'Trabajo real · Frontend enterprise',
        title: 'Interfaces sobre Angular y Liferay',
        description: 'Implementación de componentes web con HTML5, SCSS y JavaScript, cuidando accesibilidad, rendimiento y colaboración mediante Git, Jira y Azure DevOps.',
        tags: ['Angular', 'Liferay', 'SCSS'],
        status: 'Evidencia pública limitada por confidencialidad',
        category: 'frontend',
      },
      {
        number: '06',
        type: 'Trabajo real · Producción gráfica',
        title: 'Diseño editorial y arte final',
        description: 'Piezas gráficas, revisión de pruebas de color y preparación de artes bajo estándares de producción impresa.',
        tags: ['Editorial', 'Prepress', 'Visual Design'],
        status: 'Muestras en proceso de selección',
        category: 'graphic',
        image: '/images/work/editorial-banner.webp',
        imageAlt: 'Banner editorial del catálogo Paz, conflictos y reconciliación.',
        imageWidth: 1200,
        imageHeight: 275,
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
    experience: {
      eyebrow: 'EXPERIENCIA · TRAYECTORIA 2015—2026',
      title: 'Diseño, implementación y evolución de productos digitales.',
      description: 'Una trayectoria que pasó de producción gráfica y ecosistemas editoriales a interfaces frontend y plataformas empresariales.',
      items: [
        { period: 'Oct 2023 — 24 Jul 2026', role: 'Tech Consultant · Frontend · UX/UI', company: 'Grupo VASS', description: 'Convertí requerimientos empresariales en flujos, wireframes, prototipos y componentes; acompañé implementación y QA con Angular, Liferay y Salesforce, aplicando accesibilidad, UX Writing y consistencia de Design System.', tags: ['Angular', 'Liferay', 'Salesforce', 'Figma'] },
        { period: 'Sep 2020 — 13 Jul 2026', role: 'Freelance Frontend Developer · Web Designer', company: 'Hipertexto Ltda.', description: 'Mantuve ecosistemas editoriales y de comercio electrónico con WordPress, Magento, Laravel y Vue.js; diseñé propuestas en Figma y documenté componentes, despliegues, riesgos e incidencias.', tags: ['Magento', 'Vue.js', 'WordPress', 'Figma'] },
        { period: 'Jun 2022 — Oct 2023', role: 'Frontend Web Developer', company: 'Tambourine · Marketing for Hotels', description: 'Implementé sitios y landing pages para hospitality desde archivos de diseño y sistemas visuales, cuidando responsive, compatibilidad cross-browser, QA visual y rendimiento con HTML5, SCSS, JavaScript y PHP/Symfony.', tags: ['HTML', 'SCSS', 'JavaScript', 'PHP'] },
        { period: 'Mar 2018 — Jun 2022', role: 'Frontend Web Developer · UX/UI · Email', company: 'PasaLaPágina', description: 'Diseñé y desarrollé una plataforma de lectura digital con Vue.js; optimicé navegación, componentes y responsive, y conecté campañas de Mailchimp y emBlue con objetivos editoriales y de producto.', tags: ['Vue.js', 'UX/UI', 'Mailchimp', 'emBlue'] },
        { period: 'Sep 2015 — Feb 2018', role: 'Diseñador web, gráfico y conversión digital', company: 'Hipertexto Ltda.', description: 'Desarrollé experiencias web, piezas digitales y publicaciones ePub2/ePub3 para contextos editoriales y e-commerce usando HTML, CSS, WordPress, Magento y VTEX.', tags: ['ePub', 'WordPress', 'Magento', 'VTEX'] },
        { period: 'Ene 2015 — Jul 2015', role: 'Diseñador gráfico · Arte finalista', company: 'Legis S.A.', description: 'Preparé piezas editoriales e impresas, artes finales, pruebas de color y controles de calidad bajo especificaciones de producción.', tags: ['Editorial', 'Prepress', 'Graphic Design'] },
      ],
    },
    education: {
      eyebrow: 'EDUCACIÓN · BASE VISUAL Y TÉCNICA',
      title: 'Comunicación visual con evolución continua hacia producto e IA.',
      description: 'Formación universitaria en diseño, complementada con desarrollo web y una especialización activa orientada a productos y procesos con inteligencia artificial.',
      degrees: [
        { year: '2026—Actual', title: 'Especialización en Inteligencia Artificial', institution: 'Corporación Universitaria Minuto de Dios · Inicio: agosto de 2026' },
        { year: '2019', title: 'Profesional en Comunicación Visual', institution: 'Corporación Universitaria Minuto de Dios' },
        { year: '2015', title: 'Tecnólogo en Comunicación Gráfica', institution: 'Corporación Universitaria Minuto de Dios' },
      ],
      learningLabel: 'Formación complementaria documentada',
      learning: ['React · 54 horas en fortalecimiento', 'Principios SOLID y Clean Code', 'JavaScript + Angular', 'Diseño y desarrollo de sitios web', 'Desarrollo web con PHP', 'Inglés A2 certificado'],
    },
    contact: {
      eyebrow: 'SIGUIENTE NODO',
      title: 'Una conversación, varias puertas de entrada.',
      description: 'Ask Cris puede orientarte por mi experiencia y proyectos. Si ya tienes un reto concreto, puedes continuar por WhatsApp, LinkedIn o correo.',
      cta: 'Escribir por correo',
      assistantCta: 'Consultar primero a Ask Cris',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/crisalcediaz/', detail: 'Perfil y conversación profesional' },
        { label: 'WhatsApp', href: 'https://wa.me/573208511297?text=Hola%20Cristian%2C%20vi%20tu%20portafolio%20y%20quiero%20conversar%20sobre%20un%20proyecto.', detail: '+57 320 851 1297 · Conversación directa' },
        { label: 'GitHub', href: 'https://github.com/CDiazHipertexto', detail: 'Código y experimentos' },
        { label: 'Behance', href: 'https://www.behance.net/crisalcediaaz', detail: 'Archivo visual' },
      ],
    },
    labels: {
      work: 'Trabajo seleccionado',
      workTitle: 'Casos que explican decisiones, no solo pantallas.',
      workIntro: 'La evidencia disponible se está organizando por contexto, restricciones, proceso, resultado y confidencialidad.',
      projectTabs: { all: 'Todos', frontend: 'Frontend', uxui: 'UX/UI', graphic: 'Diseño gráfico' },
      archiveCta: 'Explorar archivo visual',
      archiveDescription: 'Revisa mockups completos, 16 implementaciones web y piezas de motion publicadas.',
      systemCta: 'Explorar sistema y laboratorio',
      resumeCta: 'Ver currículum',
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
      { label: 'About', href: '#about' },
      { label: 'Stack', href: '#stack' },
      { label: 'Experience', href: '#experience' },
      { label: 'Work', href: '#work' },
      { label: 'System', href: '#system' },
      { label: 'Archive', href: '/en/archive' },
      { label: 'Resume', href: '/en/resume' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      eyebrow: 'DESIGN ENGINEER · UX/UI · FRONTEND · GRAPHIC DESIGN',
      title: 'I design systems. I engineer experiences. I orchestrate AI-assisted workflows.',
      lead: 'I connect product design, visual systems, frontend engineering and business context to turn enterprise complexity into clear, scalable products.',
      primaryCta: 'Explore work',
      secondaryCta: 'Ask Cris',
      availability: 'Bogotá · Open to new opportunities',
    },
    principles: [
      { index: '01', title: 'Systems first', description: 'I connect decisions, rules and states before drawing screens.' },
      { index: '02', title: 'Designed with constraints', description: 'I work across business, technology, accessibility and operations.' },
      { index: '03', title: 'Built to learn', description: 'I prototype, implement and measure to reduce uncertainty.' },
    ],
    branches: {
      eyebrow: 'PROFILE · THREE CONNECTED BRANCHES',
      title: 'One hybrid practice, not three isolated profiles.',
      description: 'My value comes from connecting visual thinking, user experience and implementation. Each branch has its own depth and shares one goal: clear, useful and buildable products.',
      items: [
        { id: 'frontend', title: 'Frontend Engineering', role: 'From design to production UI', description: 'Semantic markup, components, responsive behavior, accessibility, performance and integration across enterprise and editorial platforms.', capabilities: ['HTML5', 'CSS3 / SCSS', 'JavaScript ES6+', 'Angular', 'Vue.js', 'Liferay', 'Git'] },
        { id: 'uxui', title: 'UX/UI & Product Design', role: 'From complexity to decisions', description: 'Information architecture, flows, wireframes, prototypes, UX Writing and visual systems aligned with technical and business constraints.', capabilities: ['Figma', 'Auto Layout', 'Design Systems', 'Prototyping', 'Responsive', 'Accessibility', 'IxD'] },
        { id: 'graphic', title: 'Graphic Design', role: 'From message to visual system', description: 'Visual communication, editorial design, prepress, digital assets, email marketing and interactive experiences across channels.', capabilities: ['Illustrator', 'Photoshop', 'InDesign', 'After Effects', 'Premiere', 'Editorial', 'ePub'] },
      ],
    },
    stack: {
      eyebrow: 'STACK · TOOLS IN CONTEXT',
      title: 'Technology and design applied to real problems.',
      description: 'This is not a logo collection. Every tool is connected to a verifiable part of my professional practice.',
      groups: [
        { category: 'frontend', label: 'Frontend', items: ['HTML5', 'CSS3', 'Sass / SCSS', 'JavaScript', 'TypeScript', 'Angular', 'Vue.js', 'React · training', 'Liferay', 'PHP / Symfony', 'REST APIs', 'Git'] },
        { category: 'uxui', label: 'UX/UI & Product', items: ['Figma', 'Adobe XD', 'Information architecture', 'User flows', 'Wireframes', 'Prototypes', 'Design Systems', 'UX Writing', 'Accessibility', 'Responsive Design'] },
        { category: 'graphic', label: 'Graphic Design', items: ['Illustrator', 'Photoshop', 'InDesign', 'After Effects', 'Premiere Pro', 'Acrobat', 'Editorial design', 'Prepress', 'ePub', 'Email marketing'] },
        { category: 'workflow', label: 'Product & collaboration', items: ['Jira', 'Azure DevOps', 'Salesforce Lightning', 'WordPress', 'WooCommerce', 'Magento', 'VTEX', 'Technical SEO', 'Visual QA', 'Applied AI'] },
      ],
    },
    projects: [
      {
        number: '01',
        type: 'Anonymized case · In documentation',
        title: 'Enterprise sales structure',
        description: 'Hierarchies, nodes, points of sale, users, bulk uploads, approvals and understandable feedback under Salesforce Lightning constraints.',
        tags: ['Product Design', 'Enterprise UX', 'Design System'],
        status: 'Sensitive content is being anonymized',
        category: 'uxui',
      },
      {
        number: '02',
        type: 'Real work · Web selection',
        title: 'Editorial and hospitality experiences',
        description: 'A selection of interfaces implemented from design for publishing, hospitality and destination brands.',
        tags: ['UX/UI', 'Frontend', 'Responsive'],
        status: 'Detailed authorship and scope pending validation',
        category: 'frontend',
        href: 'https://www.stockbridgeinn.com/',
        image: '/images/work/hospitality-ux.webp',
        imageAlt: 'Homepage design for The Inn at Stockbridge featuring editorial modules and hospitality photography.',
        imageWidth: 1200,
        imageHeight: 4024,
      },
      {
        number: '03',
        type: 'Own product · In progress',
        title: 'CRIS/OS Design System',
        description: 'Foundations, semantic tokens, accessible components and shared contracts between design and code.',
        tags: ['Tokens', 'Accessibility', 'Vue'],
        status: 'Working prototype',
        category: 'uxui',
      },
      {
        number: '04',
        type: 'Real work · Digital publishing',
        title: 'Publishing, ePub and campaigns',
        description: 'Design and development of electronic publications, digital assets, landing pages and email marketing for editorial ecosystems.',
        tags: ['ePub', 'Editorial', 'HTML Email'],
        status: 'Visual selection in preparation',
        category: 'graphic',
        image: '/images/work/editorial-platform.webp',
        imageAlt: 'PasaLaPágina interface with editorial collections grouped by category.',
        imageWidth: 1200,
        imageHeight: 1638,
      },
      {
        number: '05',
        type: 'Real work · Enterprise frontend',
        title: 'Interfaces built with Angular and Liferay',
        description: 'Web components implemented with HTML5, SCSS and JavaScript, with attention to accessibility, performance and Git-based collaboration.',
        tags: ['Angular', 'Liferay', 'SCSS'],
        status: 'Public evidence limited by confidentiality',
        category: 'frontend',
      },
      {
        number: '06',
        type: 'Real work · Graphic production',
        title: 'Editorial design and prepress',
        description: 'Graphic assets, color proof review and final artwork prepared under professional print-production standards.',
        tags: ['Editorial', 'Prepress', 'Graphic Design'],
        status: 'Samples being selected',
        category: 'graphic',
        image: '/images/work/editorial-banner.webp',
        imageAlt: 'Editorial banner for the Peace, conflict and reconciliation catalog.',
        imageWidth: 1200,
        imageHeight: 275,
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
    experience: {
      eyebrow: 'EXPERIENCE · CAREER 2015—2026',
      title: 'Designing, implementing and evolving digital products.',
      description: 'A career that moved from graphic production and editorial ecosystems into frontend interfaces and enterprise platforms.',
      items: [
        { period: 'Oct 2023 — Jul 24, 2026', role: 'Tech Consultant · Frontend · UX/UI', company: 'Grupo VASS', description: 'Turned enterprise requirements into flows, wireframes, prototypes and components; supported implementation and QA with Angular, Liferay and Salesforce while applying accessibility, UX Writing and Design System consistency.', tags: ['Angular', 'Liferay', 'Salesforce', 'Figma'] },
        { period: 'Sep 2020 — Jul 13, 2026', role: 'Freelance Frontend Developer · Web Designer', company: 'Hipertexto Ltda.', description: 'Maintained publishing and e-commerce ecosystems with WordPress, Magento, Laravel and Vue.js; designed Figma proposals and documented components, deployments, risks and incidents.', tags: ['Magento', 'Vue.js', 'WordPress', 'Figma'] },
        { period: 'Jun 2022 — Oct 2023', role: 'Frontend Web Developer', company: 'Tambourine · Marketing for Hotels', description: 'Implemented hospitality websites and landing pages from design files and visual systems, covering responsive behavior, cross-browser compatibility, visual QA and performance with HTML5, SCSS, JavaScript and PHP/Symfony.', tags: ['HTML', 'SCSS', 'JavaScript', 'PHP'] },
        { period: 'Mar 2018 — Jun 2022', role: 'Frontend Web Developer · UX/UI · Email', company: 'PasaLaPágina', description: 'Designed and developed a digital reading platform with Vue.js; improved navigation, components and responsive behavior, connecting Mailchimp and emBlue campaigns with publishing and product goals.', tags: ['Vue.js', 'UX/UI', 'Mailchimp', 'emBlue'] },
        { period: 'Sep 2015 — Feb 2018', role: 'Web, graphic and digital conversion designer', company: 'Hipertexto Ltda.', description: 'Built web experiences, digital assets and ePub2/ePub3 publications for publishing and e-commerce contexts using HTML, CSS, WordPress, Magento and VTEX.', tags: ['ePub', 'WordPress', 'Magento', 'VTEX'] },
        { period: 'Jan 2015 — Jul 2015', role: 'Graphic Designer · Final Art', company: 'Legis S.A.', description: 'Prepared editorial and print assets, final artwork, color proofs and quality controls under production specifications.', tags: ['Editorial', 'Prepress', 'Graphic Design'] },
      ],
    },
    education: {
      eyebrow: 'EDUCATION · VISUAL AND TECHNICAL FOUNDATION',
      title: 'Visual communication evolving continuously into product and AI.',
      description: 'University education in design, complemented by web development and an active specialization focused on AI-enabled products and processes.',
      degrees: [
        { year: '2026—Present', title: 'Specialization in Artificial Intelligence', institution: 'Corporación Universitaria Minuto de Dios · Started August 2026' },
        { year: '2019', title: 'Bachelor-level degree in Visual Communication', institution: 'Corporación Universitaria Minuto de Dios' },
        { year: '2015', title: 'Technologist in Graphic Communication', institution: 'Corporación Universitaria Minuto de Dios' },
      ],
      learningLabel: 'Documented complementary training',
      learning: ['React · 54-hour upskilling track', 'SOLID principles and Clean Code', 'JavaScript + Angular', 'Website design and development', 'Web development with PHP', 'Certified A2 English'],
    },
    contact: {
      eyebrow: 'NEXT NODE',
      title: 'One conversation, several ways to begin.',
      description: 'Ask Cris can guide you through my experience and projects. If you already have a specific challenge, continue on WhatsApp, LinkedIn or email.',
      cta: 'Write by email',
      assistantCta: 'Ask Cris first',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/crisalcediaz/', detail: 'Profile and professional conversation' },
        { label: 'WhatsApp', href: 'https://wa.me/573208511297?text=Hi%20Cristian%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.', detail: '+57 320 851 1297 · Direct conversation' },
        { label: 'GitHub', href: 'https://github.com/CDiazHipertexto', detail: 'Code and experiments' },
        { label: 'Behance', href: 'https://www.behance.net/crisalcediaaz', detail: 'Visual archive' },
      ],
    },
    labels: {
      work: 'Selected work',
      workTitle: 'Cases that explain decisions, not just screens.',
      workIntro: 'Available evidence is being organized by context, constraints, process, outcome and confidentiality.',
      projectTabs: { all: 'All', frontend: 'Frontend', uxui: 'UX/UI', graphic: 'Graphic design' },
      archiveCta: 'Explore visual archive',
      archiveDescription: 'Browse full-page mockups, 16 web implementations and published motion work.',
      systemCta: 'Explore system and lab',
      resumeCta: 'View resume',
      openSite: 'Visit public site',
      caseSoon: 'Full case coming soon',
      menu: 'Open navigation',
      theme: 'Switch theme',
      assistant: 'Open Ask Cris',
      footer: 'Designed as a product. Built as a system.',
    },
  },
}
